$(document).ready(function () {
  $("#accordion").accordion({
    collapsible: true, // Allow all sections to be collapsed
    active: false, // Initially, no section is active
    heightStyle: "content", // Set height style to adjust according to content
    activate: function (event, ui) {
      if (ui.newPanel.length) {
        $("html, body").animate(
          {
            scrollTop: ui.newPanel.offset().top - 150,
          },
          "normal"
        );
      }
    },
    animate: {
      duration: 950, // Set animation duration in milliseconds
      easing: "easeInOutCubic", // Set easing function
    },
    // create: function (event, ui) {
    //   $(".founders").slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     dots: true,
    //   });
    // },
    // beforeActivate: function (event, ui) {
    //   // Show the slick-carousel before it's activated
    //   if (ui.newPanel.hasClass("founders")) {
    //     $(".founders-wrapper").show();
    //   }
    // },
  });
  $("#founders").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
  });
});
