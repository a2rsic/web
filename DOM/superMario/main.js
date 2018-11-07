var $body = document.querySelector("body");
var $marioImage = document.querySelector(".mario");
var $marioRun = document.querySelector(".marioRun");



var position = 0;
var intervalX;

function moveBackground() {

    $body.style.backgroundPositionX = position + "px";
    position += 30;
}

$document.addEventListener("keydown", function (event) {

    if (event.keyCode == 39) {
        if(!intervalX) {
            $marioRun.style.display = "block";
            $marioImage.style.display = "none";

            intervalX = setInterval(moveBackground, 100);
        }
    }

})

document.addEventListener("keyup", function(){
    if(intervalX) {
        $marioRun.style.display = "none";
        $marioImage.style.display = "block";
        clearInterval(intervalX);
        intervalX = null
    }
})