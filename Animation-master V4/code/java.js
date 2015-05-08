

var divNames = ["Name", "Background", "Character", "Movement", "Fall", "Fall2", "Extras", "UserName"];
var Name;
var Background;
var Character;
var Fall;
var Fall2;
var Extras;
var UserName;
var move1;
var move2;
var counter = 0 ;
var direction;
var Fall3;
var Fallpos;
var test = 123545;
var vid = document.getElementById("video1");
var vido;
var text;
var link;
var back;
var clossion;
var yes;
var no;

function yes() {
    
    yes = "yes";
}

function no() {
    
    no = "no";
}

function left() {
    back = "left";
    
}

function right() {
    back = "right";
    
}

function down() {
    back = "down";
    
}

function up() {
    back = "up";
    
}


function playVid() {
    link =  document.getElementById('extras').value;
    var res = link.split("watch?v=");    
    document.getElementById('video1').src=res[0]+"embed/"+res[1]+"?html5=1?rel=0&autoplay=1";
} 

function setup() {     
    for (i = 0; i <divNames.length; i++) {   
    document.getElementById(divNames[i]).style.display = "none";  
    document.getElementById("Name").style.display = "block";
    document.getElementById("Submit").style.display = "none";   
    document.getElementById("stage").style.display = "none";  
    }
}

function yes() {
    document.getElementById("Next").style.display = "block";
    document.getElementById("NO").style.display = "none";
    Fall = "yes";    
}

function no() {
    
    document.getElementById("Next").style.display = "block";
    document.getElementById("YES").style.display = "none";
    Fall = "no";    
    counter = 5;
}

function ud() {
    document.getElementById("du").style.display = "none";
    document.getElementById("lr").style.display = "none";
    document.getElementById("rl").style.display = "none";
    document.getElementById("fallbox").style.display = "block";
    direction = "ud";
    document.getElementById("Next").style.display = "block";
}

function du() {
    document.getElementById("ud").style.display = "none";
    document.getElementById("lr").style.display = "none";
    document.getElementById("rl").style.display = "none";
    document.getElementById("fallbox").style.display = "block";
    direction = "du";
    document.getElementById("Next").style.display = "block";
}

function lr() {
    document.getElementById("du").style.display = "none";
    document.getElementById("ud").style.display = "none";
    document.getElementById("rl").style.display = "none";
    document.getElementById("fallbox").style.display = "block";
    direction = "lr";
    document.getElementById("Next").style.display = "block";
}

function rl() {
    document.getElementById("du").style.display = "none";
    document.getElementById("lr").style.display = "none";
    document.getElementById("ud").style.display = "none";
    document.getElementById("fallbox").style.display = "block"; 
    document.getElementById("Next").style.display = "block"; 
    direction = "rl";
}

function Next() {
    if (Fall == "no")  {
        document.getElementById("Fall").style.display = "none";
    }
    
    if (counter == 6 ) { 
         document.getElementById("Submit").style.display = "block";
         document.getElementById("Next").style.display = "none";
     }
    
    document.getElementById(divNames[counter]).style.display = "none";
    counter = counter + 1;
    document.getElementById(divNames[counter]).style.display = "block";
    
    if (counter == 4)  {
        document.getElementById("Next").style.display = "none";
    }
    
    if (counter == 5)  {
        document.getElementById("Next").style.display = "none";
        document.getElementById("fallbox").style.display = "none";     
    }    
}

function submit() {
    document.getElementById("stage").style.display = "block";
    vido = document.getElementById("extras").value;
    text = document.getElementById("text").value;
    Name =  document.getElementById("name").value;
    Background = "../assets/Backgrounds/" + document.getElementById("background").value; 
    Character = "../assets/Character/" + document.getElementById("character").value; 
    move1 = document.getElementById("movement").value; 
    move2 = document.getElementById("movement2").value;
    Fall2 = document.getElementById("fall2").value;
    Extras = document.getElementById("extras").value; 
    UserName = document.getElementById("username").value; 
    document.getElementById("form").style.display = "none";
    document.getElementById("garden").src = Background +".jpg";
    
    playVid();
    for ( i = 0; i<=7; i++) {
        document.getElementById("character"+i).src = Character + i +".png";    
    }
    document.getElementById("drop").src= "../assets/Backgrounds/"+Fall2 + ".png";
}