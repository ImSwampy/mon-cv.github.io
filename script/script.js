/*

const aboutBtn = document.querySelector(".about");
const fp_up_l = document.querySelector("#fp-up-l");
const element = document.querySelector(".column");
/!*const resumeText = document.querySelector("#resume");*!/

console.log("Il n'y a pas de JavaScript ou très peu mais il n'est pas utilisable car le CV est encore en cours de construction, merci de votre compréhension :)")
console.log("C'est mon premier site web (je n'ai pas de nom de domaine donc je ne peux pas l'héberger) c'est aussi mon premier CV. Des conseils sur celui ci sont la bienvenu !")

aboutBtn.addEventListener("click", () => {
    window.location.href="../resume/index.html";
})
*/

let clicked = false;

$(document).ready(function () {
    $(".lightMode").click(function () {
        if (clicked == false) {
            clicked = true
            $("body").addClass("darkmode-body");
            $(".column").addClass("darkmode-element");
            $("#fp-up-l").css({"background-color":"rgba(0,0,0,0)", "box-shadow":"none"});
            $(".button").addClass("darkmode-button");
	    $(".lightMode").text("LightMode");
	    $(".title").css("color","#1B4998");
        } else {
            clicked = false;
            $("body").removeClass("darkmode-body");
            $(".column").removeClass("darkmode-element");
            $("#fp-up-l").css({"background-color":"rgba(255,255,255,0.10)", "box-shadow":"2em 0px 20px rgba(255,255,255,0.10);"});
            $(".button").removeClass("darkmode-button");
	    $(".lightMode").text("DarkMode");
  	    $(".title").css("color","var(--deep-blue)");
        }
    })

    $(".github").click(function () {
        window.open('https://www.github.com');
    })
})