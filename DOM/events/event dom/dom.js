var $field = document.querySelector("button");
var $chat = document.querySelector("div");


$field.onclick = function () {
    var $input = document.querySelector("input");

    var $chatLine = document.createElement("p");
    $chatLine.textContent = $input.value;

    $chat.appendChild($chatLine);
    $input.value = "";
}





