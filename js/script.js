

$(".watch__link").on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var imgUrl = $(this).children().attr('src');
    $(this).parents().parents().parents('.watch').find('.watch__image').attr('src', imgUrl);
    console.log(this);
});

if ( $('.watch__swatch > li') > 4 ) {
    $(this).append('<p>testinggfsf</p>');
}