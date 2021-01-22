$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        dots:true,
        autoplay : true,
        speed : 670,
        autoplaySpeed : 3700
    });
    $(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
})