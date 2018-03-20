$(document).ready(function() {
  $(".def").click(function(){
    $(".hid", this).toggle();
    $(".showing", this).toggle();
  });
});
