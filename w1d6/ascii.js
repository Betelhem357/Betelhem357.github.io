
var keys = ["blank","Custom","Exercise","Juggler","Bike","Dive"];
var i=0;
var timer;
var textArea;
var startButton;
var endButton;
var select;
var fontSelect;
var selectTurbo;
var initialText;
var frame;
var delay = 250;
function functionsAfterLoad(){
    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");
    textArea  = document.getElementById("text-area");
    startButton = document.getElementById("start");
    endButton = document.getElementById("stop");
    select = document.getElementById("animation");
    fontSelect = document.getElementById("fontsize");
    selectTurbo = document.getElementById("turbo");
    startButton.onclick = startFunction;
    stopButton.onclick = stopFunction;
    select.onchange = changeFrame;
    fontSelect.onchange = changeFont;
    selectTurbo.onclick = changeTurbo;
    frame = ANIMATIONS["Blank"].split("=====\n");
}

function displayBlank(){
    textArea.value = "";
}

function displayAnimation(){
        //textArea.value = ANIMATIONS[keys[i]];
        textArea.value = frame[i];
        //setTimeout(250);
        if(i==frame.length-1){
            i=0;
        }else{
            i++;
        }   
}

function startFunction(){
    i=0;
    initialText = textArea.value;
    startButton.disabled = true;
    endButton.disabled = false;
    timer = setInterval(displayAnimation,delay);
   
}

function stopFunction(){
    startButton.disabled = false;
    endButton.disabled = true;
    clearInterval(timer);
    textArea.value = initialText;
}

function changeFrame(){
    i=0;
    frame = ANIMATIONS[select.value].split("=====\n");
    if(timer!=null&&timer!=undefined&&startButton.disabled){
    clearInterval(timer);
    timer = setInterval(displayAnimation,delay);
    }else{
        textArea.value = ANIMATIONS[select.value];
    }
}

function changeFont(){
    textArea.style.fontSize = fontSelect.value;
}

function changeTurbo(){
    if(selectTurbo.checked==true){
        delay = 50;
    }else{
        delay = 250;
    }
    if(!endButton.disabled){
        clearInterval(timer);
        timer = setInterval(displayAnimation,delay);
    }
}

window.onload = functionsAfterLoad;
