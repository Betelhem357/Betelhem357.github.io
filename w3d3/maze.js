$(document).ready(function(){
    //$("#boundary1").mouseover(turnRed).mouseleave(removeRed);
    let pass_through_flag = false; 
    let start = false;
    $("div.boundary").mouseover(turnRed);//turn red when the user hover over 
    $("div#end").mouseover(winMessage);
    $("div#start").click(reset).mouseleave();
    // $("#maze").mouseleave (handlemouseout);
    function turnRed(){
        $("div.boundary").addClass("youlose");
        pass_through_flag=true;
    }
    function winMessage(){
        if(!pass_through_flag){
                //alert("You win!");
                $("#status").text("You win! :]");
            }
            else{
               // alert("Sorry, you lost. :[");
               $("#status").text("Sorry, you lost. :[");
            }
        
    }
    function reset(){
        pass_through_flag=false;
        $("div.boundary").removeClass("youlose");
        $("#status").text("Click the \"S\" to begin. ");
        
    }
    // function handlemouseout(){
    //     $("#maze").mouseleave (function(){
    //         $("div.boundary").addClass("youlose");
    //         $("#status").text("Sorry, you lost. :[");
    //         pass_through_flag=true;
    //     });
    // }
});