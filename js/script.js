$(".watch__link").on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var imgUrl = $(this).children().attr('src');
    $(this).parents().parents().parents('.watch').find('.watch__image').attr('src', imgUrl);
    console.log(this);
});
$('.watch__swatch').slick({
    speed: 300,
    slidesToShow: 4,
    infinite: false,
    prevArrow:'<button class="slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true"><i class="fa fa-angle-left"></i></button> ',
    nextArrow: '<button class="slick-arrow" aria-label="Next" type="button" aria-disabled="false"><i class="fa fa-angle-right"></i></button>'
});

$('.refinement-link').on('click', function(){
    $(this).toggleClass('active');
    if ($(this).hasClass('men')) {
        $('.watch').show().filter(':not(.men)').hide();
    } else if ( $(this).hasClass('women') ) {
        $('.watch').show().filter(':not(.women)').hide();
    } else if ( $(this).hasClass('priceUnder100') ) {
        $('.watch').show().filter(':not(.priceUnder100)').hide();
    } else if ( $(this).hasClass('price100200') ) {
        $('.watch').show().filter(':not(.price100200)').hide();
    } else if ( $(this).hasClass('price200300') ) {
        $('.watch').show().filter(':not(.price200300)').hide();
    } else if ( $(this).hasClass('priceover300') ) {
        $('.watch').show().filter(':not(.priceover300)').hide();
    } else if ( $(this).hasClass('clear') ) {
        $('.refinement-link').removeClass('active');
        $('.watch').show();
    }
});
