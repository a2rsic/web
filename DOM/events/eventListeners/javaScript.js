var $field = document.querySelector("body");
var $player = document.querySelector("img");
var $stopButton = document.querySelector("button");

function handler(eventObj) {
    var positionTop = eventObj.clientY;
    var positionLeft = eventObj.clientX;
    $player.style.top = (positionTop - $player.height / 2) + "px";
    $player.style.left = (positionLeft - $player.width / 2) + "px";
}

$field.addEventListener("click", handler);

$stopButton.addEventListener("click", function () {
    $field.removeEventListener("click", handler);
});