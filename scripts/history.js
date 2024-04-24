$(function () {
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
          "slow"
        );
      }
    },
    animate: {
      duration: 950, // Set animation duration in milliseconds
      easing: "easeInOutCubic", // Set easing function
    },
  });
});
