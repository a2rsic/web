$(function () {
    console.log("Hello World")
});

$("li:first").css("border-bottom", "1px solid black");

// $("li").css("text-transform", "uppercase");

$("li").addClass("transform");

$("li:active");

var $listItems = $("li");
var middle = ($listItems.length - 1) / 2;

$($listItems.get(middle)).css("background-color", "blue");

