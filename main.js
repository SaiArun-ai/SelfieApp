var SpeechRecognition = window.webkitSpeechRecognition;
var Type = null;
var Width = null;
var Height = null;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) {
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    if(Content == "hello"){
        Speak();
    }
}
    
    
function Speak(){
    var synthesize = window.speechSynthesis;
    sd = "Taking Snapshot in 10 secs. Please give your pose now.";
    var Ut = new SpeechSynthesisUtterance(sd);
    synthesize.speak(Ut);
    
    Webcam.attach(camera);
    setTimeout(function() {
        SnapShot();
        Save();
    }, 10000);
}
Webcam.set({
    width:Width,
    height:Height,
    image_format:Type,
    png_quality:100
});
camera = document.getElementById("camera");
function SnapShot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img src = '"+ data_uri + "' class = 'Imgs' id = 'CapturedImage'>";
    });
}
function Save(){
    link = document.getElementById("link");
    IUrl = document.getElementById("CapturedImage").src;
    link.href = IUrl;
    link.click();
}