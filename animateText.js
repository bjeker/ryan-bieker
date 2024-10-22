$(document).ready(function() {
    $('.introduction').fadeIn(1000);
    $('.top-nav').fadeIn(1000);
    $('.hr').fadeIn(1000);
    $('.project-text').fadeIn(1000);
    $('.languages').delay(1 * 250).fadeIn(1000);
    $('.project-text h1, .projects span, .project-img').fadeIn(1000);
});

var i = 0;
var text = "Hi, I'm Ryan Bieker";
var speed = 50;
var deleteMode = false;
var deleteDelay = 3000;

function typing() {
    if (!deleteMode) {
        if (i < text.length) {
            document.getElementById("typingName").innerHTML += text.charAt(i);
            
            i++;
            setTimeout(typing, speed);
        }
        else {
            deleteMode = true;
            setTimeout(typing, deleteDelay);
        }
    }
    else {
        if (i > 0) {
            document.getElementById("typingName").innerHTML = document.getElementById("typingName").innerHTML.slice(0, -1);
            i--;
            setTimeout(typing, speed);
        }
        else {
            deleteMode = false;
            i = 0;
            setTimeout(typing, speed)
        }
    }
}