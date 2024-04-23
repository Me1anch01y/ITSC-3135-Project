$(document).ready(function () {
  $(".image-link").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
    },
  });
});
