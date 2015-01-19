$(document).ready(function() {

  $("button#hello").click(function() {
    $("ul#user").prepend("<li><img class='remove-img' src='img/x.png'>Hello!</li>");
    $("ul#webpage").prepend("<li><img class='remove-img' src='img/x.png'>Why hello there!</li>");
  });
  $("ul#user").on('click', '.remove-img', function() {
    $(this).parent().remove();
  });
  $("ul#webpage").on('click', '.remove-img', function() {
    $(this).parent().remove();
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li><img class='remove-img' src='img/x.png'>Goodbye!</li>");
    $("ul#webpage").prepend("<li><img class='remove-img' src='img/x.png'>Goodbye dear user!</li>");
  });
  $("ul#user").on('click', '.remove-img', function() {
    $(this).parent().remove();
  });
  $("ul#webpage").on('click', '.remove-img', function() {
    $(this).parent().remove();
  });


  $("button#stop").click(function() {
    $("ul#user").prepend("<li><img class='remove-img' src='img/x.png'>Stop!</li>");
    $("ul#webpage").prepend("<li><img class='remove-img' src='img/x.png'>I meant no offense!</li>");
  });
  $("ul#user").on('click', '.remove-img', function() {
    $(this).parent().remove();
  });
  $("ul#webpage").on('click', '.remove-img', function() {
    $(this).parent().remove();
  });
});
