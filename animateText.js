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

function typing() {
    if (i < text.length) {
        document.getElementById("typingName").innerHTML += text.charAt(i);
        
        i++;
        setTimeout(typing, speed);
    }
}