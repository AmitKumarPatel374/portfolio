var body = document.querySelector("body")
var crsr = document.querySelector("#cursor")

body.addEventListener('mousemove', function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
})


var mode = document.querySelector("#mode"); // Mode button

var hero = document.querySelector("#hero");
var iam = document.querySelector(".hero-content h1");
var web = document.querySelector(".hero-content h2");
var span = document.querySelector(".greet-text");
var profilePhoto = document.querySelector(".my-img img");

var project = document.querySelectorAll("#Project");

var skills= document.querySelector("#skills");
var skills_h2= document.querySelector("#skills-div h2");
var card_skill= document.querySelectorAll("#card-skill");

var colors = document.querySelectorAll("#colors")

var contact = document.querySelector("#Contact");
var contact_h2 = document.querySelector("#Contact h2");

var medium = document.querySelectorAll(".medium");

var footer = document.querySelector("footer");

var header = document.querySelector("header");
// Variable to track if mode has been activated

var modeValue = 0;
mode.addEventListener("click", function () {
    if (modeValue == 0) {
        // mode button changes
        mode.style.backgroundColor = "white";
        mode.style.color = "black";
        mode.innerHTML = "Dark Mode";
        console.log("Light mode activated");

        //header section changes
        header.style.backgroundColor = "#8F8F8F";

        //hero section changes
        hero.style.backgroundColor = "#EEEDF0";
        iam.style.color = "black";
        web.style.color = "black";
        span.style.color = "#fff700";
        profilePhoto.style.border = '2px solid black';

        //project section changes
        project.forEach(function(elem){
            elem.style.backgroundColor = "#DEDEDE";
            
        })
        colors.forEach(function(elem){
            elem.style.backgroundImage = "url('https://c8.alamy.com/comp/KA2402/golden-morning-sun-rays-on-green-grass-in-autumn-beautiful-nature-KA2402.jpg')";

        })

        //skills
        skills.style.borderTop = "2px solid black";
        skills.style.backgroundColor = "rgb(211, 210, 210)";
        skills.style.color = "black";
        card_skill.forEach(function(elem){
            elem.style.backgroundColor = "rgb(183, 183, 183)";
        })
        
        
        //contact section changes
        contact.style.backgroundColor = "#C1BEC1";
        contact.style.borderTop = "5px solid #003d62";
        contact.style.color = "black";
        medium.forEach(function(elem){
            elem.style.color = "black";
            
        })

        //footer section changes
        footer.style.backgroundColor = "#8F8F8F";
        modeValue = 1;
    }
    else {
        // mode button changes
        mode.style.backgroundColor = "rgb(100, 98, 98)";
        mode.style.color = "white";
        mode.innerHTML = "Light Mode";
        console.log("dark mode activated");


        //header section changes
        header.style.backgroundColor = "#0089b7";

        //hero section changes
        hero.style.backgroundColor = "";
        iam.style.color = "white";
        web.style.color = "white";
        span.style.color = "#fff700";

        //project section changes
        project.forEach(function(elem){
            elem.style.backgroundColor = "";
        })
        colors.forEach(function(elem){
            elem.style.backgroundImage = "url('https://img.freepik.com/free-photo/top-view-background-beautiful-white-grey-brown-cream-blue-background_140725-72219.jpg')";
            
        })

        //skills
        skills.style.borderTop = "2px solid white";
        skills.style.backgroundColor = "";
        skills.style.color = "";
        card_skill.forEach(function(elem){
            elem.style.backgroundColor = "";
        })
        
        //contact section changes
        contact.style.backgroundColor = "";
        contact.style.borderTop = "5px solid white";
        contact.style.color = "white";
        medium.forEach(function(elem){
            elem.style.color = "white";
            
        })

        //footer section changes
        footer.style.backgroundColor = "";
        modeValue = 0;
    }



});

//card-content section changes
var card = document.querySelector(".card");
var card_content = document.querySelectorAll(".card-content");

card_content.forEach(Element => {
    card.addEventListener('mouseover', function () {
        if (modeValue == 1) {
            Element.style.color = 'white';
            Element.style.backgroundColor = '#8F8F8F';
        }
        else{
            Element.style.color = '#003d62';
            Element.style.backgroundColor = 'white';

        }
    })
});






