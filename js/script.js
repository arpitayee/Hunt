$(".banner_main_slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  nextArrow:"<i class='fa-solid fa-circle-arrow-right right'></i>",
  prevArrow:"<i class='fa-solid fa-circle-arrow-left left'></i>"
});
// $(document).ready(function(){
//   $('.venobox').venobox();
//   $('.my-video-links').venobox();
//   $('.my-video-gallery').venobox();
// });
$(".service-main").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  vertical:true,
  verticalSwiping:true,
  centerMode:true,
  centerPadding:"0px",
  prevArrow:"<i class='fa-solid fa-chevron-up up'></i>",
  nextArrow:"<i class='fa-solid fa-chevron-down down'></i>",

});
$(".review-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical:true,
  verticalSwiping:true,
  centerMode:true,
  centerPadding:"0px",
  prevArrow:"<i class='fa-solid fa-chevron-up up'></i>",
  nextArrow:"<i class='fa-solid fa-chevron-down down'></i>",
  asNavFor:".review-right-slider"

});
$(".review-right-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical:true,
  verticalSwiping:true,
  // centerMode:true,
  // centerPadding:"0px",
 arrows:false,
 asNavFor:".review-slider"


});
$('.counterup').counterUp({
  delay: 20,
  time: 1500
});