$(document).ready(function() {
  $(".term, .definition").click(function() {
    $(this).toggle();
    $(this).siblings().toggle();
  });
});
