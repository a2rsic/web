
$(function () {

    var glob = true;

    var links = [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/250",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/350",
        "https://via.placeholder.com/200"
    ];


    var div = $('<div>');
    // var li = $('<li>').text("some text");
    for (var i = 0; i < links.length; i++) {
        var src = links[i];
        var img = $('<img>').attr("src", src).width(Math.random() * 350 + 50);

        div.append(img);


        if (img.width() < 200 && glob) {
            img.addClass("border");

        } else if (img.width() > 200) {
            glob = false;
        }
    }







    console.log(div);


    $('body').append(div);


});