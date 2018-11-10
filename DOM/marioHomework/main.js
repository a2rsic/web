var $body = document.querySelector("body");
// var $div = document.querySelector("div");
var $marioImage = document.querySelector("img");

var interval;
var global = false;

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 39) {
        if (!global) {
            var position = 0;
            interval = setInterval(function () {
                position -= 50;
                $body.style.backgroundPosition = position + "px";
            }, 100);
            $marioImage.setAttribute("src", "./images/mario_running.gif");
            global = true;

        }
    }
})

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 39) {
        clearInterval(interval);
        $marioImage.setAttribute("src", "./images/mario.png");
        global = false;
    }

})