//alert("Hello, world!");
var butn;
var txtArea;
var turbo;
var checkBox;
function startFunction(){
    butn = document.getElementById("but1");
    txtArea = document.getElementById("textArea");
    checkBox = document.getElementById("turbo");
    butn.onclick = decorate;
    checkBox.onclick = popupAlert;
}

function decorate(){
   var fs = parseInt(txtArea.style.fontSize) + 2;
   txtArea.style.fontSize = fs.toString();
}

function popupAlert(){
        if(checkBox.checked==true){
            alert("Hello, world!");
            txtArea.style.fontWeight = "bold";
            txtArea.style.color = "green";
            txtArea.style.textDecoration = "underline";
        } else{
            txtArea.style.fontWeight = "normal";
            txtArea.style.color = "black";
        }
}


window.onload = startFunction;
