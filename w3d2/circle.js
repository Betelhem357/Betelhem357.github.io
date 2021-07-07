let timer;
let elem;
let interval;
let growth_size;
let width;
//width, growth size and interval
$(function(){
    $("#start_button").click(function(){
        if(timer!=undefined){// if timer is already created it must be stoped before we continue to start other timer
            clearInterval(timer);
        }
        let margin = parseInt( $( ".circle" ).css("margin-left"));//set margin left for all circles which will be created
        let numCircle = parseInt($("#num").val());
        $(".circle").show();
        interval = $("#interval").val();
        width = $("#width").val();
        $(".circle").css("width", width+"px");
        $(".circle").css("height", width+"px");
        growth_size = $("#growth").val();
        let count=1;
        $( ".circle").not(':first').remove();//when start click remove all circles and add circles again
        //console.log(numCircle);
        if(numCircle!=1){
            for(let i=0;i<numCircle-1;i++){
                // clone only the first element. 
                //if we don't say first it will clone all. It took me some time to figure it out. :) 
                //I use clone because the circles has the same property
                $( ".circle:first" ).clone().css("margin-left",(count*100+parseInt(margin))+"px")
                .addClass("circle")//attach all classes to the circle
                .css("background-color",'#' + (Math.random().toString(16) + "000000").substring(2,8))//generate background color randomly
                .appendTo( ".container" );// add created circle to container that is the div element holding all circles
                count++;//counter is for positioning circle. each circles must positioned in different place
            }
        }
        //console.log($( ".circles" ));
        $(".circle").click(function(){
            $(this).hide();// hide circle on click
        });

        $( ".circle" ).hover(
            function() {
               $( this ).addClass( "hover" );
            }, function() {
                $( this ).removeClass( "hover" );
            }
          );


        
        //console.log($(".circle"));
        timer = setInterval(growCircle,interval);//circle will grow every interval
        
    });


});



function growCircle(){
    const size1 = parseInt($(".circle").css("width"));
    $(".circle").css("width", size1 + parseInt(growth_size) + "px" );//.css is not recommended but no option in this situation
    const size2 = parseInt($(".circle").css("height"));
    $(".circle").css("height", size2 + parseInt(growth_size) + "px" );
}