// $(window).scroll(function(){
//   cityScroll();
// });

function cityScroll(){
  // var wScroll = $(window).scrollTop();
  // console.log(wScroll);
  var elmnt = document.getElementById("Middle");
  var y = elmnt.scrollTop;
  console.log(y);
  $('.city_img').css('background-position', 'center '+ (y-1900) +'px');
  // if(y == 1580){
  //   $('.city_img').css('background-position', 'center '+ (y-1580) +'px');
  // }


}
