$(function () {
  $("section").accordion({
    collapsible: true,
    active: false,
    heightStyle: "content",
    activate: function (event, ui) {
      if (ui.newPanel.length) {
        $("html, body").animate(
          {
            scrollTop: ui.newPanel.offset().top - 100,
          },
          "slow"
        );
      }
    },
  });
});
