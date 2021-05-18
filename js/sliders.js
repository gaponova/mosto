$(document).ready(function ($) {
  $("#feature-slider").lightSlider({
    item: 3,
    speed: 1000,
    pause: 2500,
    auto: true,
    loop: true,
    keyPress: true,
    enableDrag: true,
    controls: false,
    freeMove: true,
    responsive : [
      {
          breakpoint:800,
          settings: {
              item:2,
              slideMove:1,
              slideMargin:6,
            }
      },
      {
          breakpoint:480,
          settings: {
              item:1,
              slideMove:1
            }
      }
  ]
  });

//   $("#testimon-slider").lightSlider({
//     item: 1,
//     slideMargin: 0,
//     speed: 2000,
//     pause: 3000,
//     mode: 'fade',
//     auto: true,
//     loop: true,
//     keyPress: true,
//     enableDrag: false,
//     controls: false,
//     freeMove: true
// });

});