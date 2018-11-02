function createDropdown(options, parentElement) {
    var element = "<select>";
    for (var i = 0; i < options.length; i++) {
        element += "<option>" + options[i] + "</option>";
    }
    element += "</select>";

    parentElement.innerHTML = element;
}

var divSpecial = document.querySelector(".special");
var options = ["first", "second", "third"];
createDropdown(options, divSpecial);
createDropdown([1, 2, 3], document.querySelector("div:last-of-type"));


// drugi nacin

function createElement(options, parentElement) {
    var select = document.createElement("select");
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.textContent = options[i];
        select.appendChild(option);
    }
    parentElement.appendChild(select);
}
var parent = document.querySelector(".special");
var input = [1, 2, 3];
createElement(input, parent);