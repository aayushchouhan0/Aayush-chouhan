let audion = new Audio("./sound.mp3");
var body = document.getElementsByTagName("body");
if(body){
    audion.play();
    audion.loop =true;
} 