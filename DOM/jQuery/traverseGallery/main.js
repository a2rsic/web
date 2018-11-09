const $selected = $('.selected');

$selected.removeClass('selected');
const images = $selected.parent().next().children();
const middleIndex = (images.length - 1) / 2;
$selected.parent().next().children().eq(middleIndex).addClass('selected');