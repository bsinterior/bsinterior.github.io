!(function ($) {
  "use strict";

  var $hamburger = $(".hamburger");
  $('.collapse').on('show.bs.collapse', function () {
	  $hamburger.addClass("is-active");
  }).on('hide.bs.collapse', function () {
	  $hamburger.removeClass("is-active");
  })
  
  //button
  Waves.init();
  Waves.attach(".flat-button", ["waves-button"]);
  Waves.attach(".flat-button-light", ["waves-button", "waves-light"]);
  Waves.attach(".float-button", ["waves-button", "waves-float"]);
  Waves.attach(".float-button-light", [
  "waves-button",
  "waves-float",
  "waves-light"
  ]);
  
  // flat
  Waves.attach(".flat-icon", ["waves-circle"]);
  Waves.attach(".flat-icon-light", ["waves-circle", "waves-light"]);
  Waves.attach(".float-icon", ["waves-circle", "waves-float"]);
  Waves.attach(".float-icon-light", [
  "waves-circle",
  "waves-float",
  "waves-light"
  ]);
  
  //
  Waves.attach(".flat-box", ["waves-block"]);
  Waves.attach(".flat-box-light", ["waves-block", "waves-light"]);
  Waves.attach(".float-box", ["waves-block", "waves-float"]);
  Waves.attach(".float-box-light", [
  "waves-block",
  "waves-float",
  "waves-light"
  ]);
  Waves.attach(".waves-image");
  
})(jQuery);