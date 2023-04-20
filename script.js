$(document).ready(function () {
  let hiddenrow = $(".expandable");
  $(".more").click(function () {
    hiddenrow.toggleClass("hidden");
    if (hiddenrow.is(":visible")) {
      $(".more").html("Close");
    } else {
      $(".more").html("Find more");
    }
  });
});
