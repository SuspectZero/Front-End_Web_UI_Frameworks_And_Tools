// Write JavaScript here
$(document).ready(function() {
  $("#myCarousel").carousel({interval: 2000});

  $("#carousel-pause").click(function() {
    $("#myCarousel").carousel('pause');
  });

  $("#carousel-play").click(function() {
    $("#myCarousel").carousel('cycle');
  });

  $("#loginModalPopup").click(function () {
    $("#loginModal").modal('toggle');
  });

  $("#loginModalDismiss, #loginModalClose").click(function () {
    $("#loginModal").modal("hide");
  });

  $("#reserveModalPopup").click(function () {
    $("#reserveModal").modal("toggle");
  });

  $("#reserveModalDismiss, #reserveModalClose").click(function () {
    $("#reserveModal").modal("hide");
  });
});