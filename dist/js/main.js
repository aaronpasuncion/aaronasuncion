$(document).ready(function() {
  //full navigation menu
  var $menuBtn = $(".menu-btn");
  var $menuOverlay = $(".menu-overlay");

  $menuBtn.click(function() {
    $menuOverlay.fadeToggle(500);
    $menuOverlay.css({
      display: "flex"
    });
  });

  $menuOverlay.click(function() {
    $(this).fadeOut(500);
  });
  //back to top

  var toTop = document.getElementById("toTop");

  toTop.addEventListener("click", function() {
    window.scrollTo(0, 0);
  });
});
