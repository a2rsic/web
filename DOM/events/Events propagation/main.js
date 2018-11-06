var images = document.querySelectorAll("img");

function giveBorder(event) {
    this.style.border = "1px solid red";
    if (this.width !== 300) {
        event.stopPropagation();
    }
}

document.addEventListener("click", function (event) {
    console.log(event.target);

});

for (var i = 0; i < images.length; i++) {
    var $currentNode = images[i];

    $currentNode.addEventListener("click", giveBorder);
}




