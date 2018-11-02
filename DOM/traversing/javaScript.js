function removeClass() {
    var li = document.querySelector(".active");
    li.className = " ";

    li.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.className = "active";
    return li;
}
removeClass();


