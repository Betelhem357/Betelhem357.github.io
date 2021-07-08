$(document).ready(function(){
    //$("#boundary1").mouseover(turnRed).mouseleave(removeRed);
    let win = true; 
    let start = false;
    $("div.boundary").mouseover(turnRed);//turn red when the user hover over 
    $("div#end").mouseover(winMessage);
    $("div#start").click(reset);
    $("#maze").mouseleave (handlemouseout);
    function turnRed(){
        $("div.boundary").addClass("youlose");
        win = false;
    }
    function winMessage(){
        if(start){
            if(win){
                //alert("You win!");
                $("#status").text("You win! :]");
            }
            else{
               // alert("Sorry, you lost. :[");
               $("#status").text("Sorry, you lost. :[");
            }
            start = false;
        }
        
    }
    function reset(){
        win = true;
        $("div.boundary").removeClass("youlose");
        $("#status").text("Click the \"S\" to begin. ");
        start = true;
        
    }
    function handlemouseout(){
            if(start){
                $("div.boundary").addClass("youlose");
                $("#status").text("Sorry, you lost. :[");
                win = false;
            }
    }
});