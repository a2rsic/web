var $marioImage = document.querySelector(".mario");
var $gifDiv = document.querySelector(".gifDiv");
$marioImage.addEventListener("keypress", function (event) {
    var rightArrow = false;
    if(event.keyCode == 39) {
        rightArrow = true;
        var $gifElement = document.createElement("img").setAttribute("src", "./images/mario_running.gif");
        $gifDiv.appendChild($gifElement);
        
    }
    console.log($gifDiv);
  
})