var SpeechRecognition = window.webkitSpeechRecognition;
var Type;
var Width;
var Height;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) {
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    Speak();
    Width = document.getElementById("Width").value;
    console.log(Width);
    if(Width == null){
        Width = 350;
    }
    Height = document.getElementById("Height").value;
    console.log(Height);
    if(Height == null){
        Height = 200;
    }
    GetType = document.getElementById("Type").value;
    Type = GetType.toLowerCase();
    if(Type == "yes"){
        Type = "jpeg";
    }else if(Type == "no"){
        Type = "png";
    }else{
        Type = "png";
    }
}
function Speak(){
    var synthesize = window.speechSynthesis;
    sd = document.getElementById("textbox").value;
    var Ut = new SpeechSynthesisUtterance(sd);
    synthesize.speak(Ut);
    Webcam.attach(camera);
}

Webcam.set({
    width:"350",
    height:"240",
    image_format:"png",
    png_quality:90
});
camera = document.getElementById("camera");
