$(document).ready(function() {
  var counter = 0;
  $("#hidden").click(function(){
    $(this).parent().remove();
  });

  $("button#hello").click(function() {
    var new_element = $("<li>Hello!</li>");
    var hidden_element = $("#hidden").clone(true); //true copies event handlers too
    hidden_element.removeAttr("id"); // id is hiding the original
    new_element.prepend(hidden_element);
    $("ul#user").prepend(new_element);
    $("ul#webpage").prepend("<li>Why hello there!</li>");
  });

  $("button#goodbye").click(function() {
    // $('.unstyled').prepend(hidden_element);
    $("ul#user").prepend("<li><img id='remove-" + counter + "' src='img/x.png'>Goodbye!</li>");
    // $("ul#user").children().first().children().first().click(function() {
    $("#remove-" + counter).click(function() {
      $(this).remove();
      $("ul#webpage").prepend("<li><img src='img/x.png'>Goodbye dear user!</li>");
      $("ul#webpage").children().first().children().first().click(function() {
        $(this).remove();
      });
      // $('ul#webpage').children('li').first().click(function() {
      //   $(this).remove();
      // });

      $("button#stop").click(function() {
        $("ul#user").prepend("<li>Stop copying me!</li>");
        $("ul#webpage").prepend("<li>Pardon me, I meant no offense!</li>");
        $('ul#user').children('li').first().click(function() {
          $(this).remove();
        });
        $('ul#webpage').children('li').first().click(function() {
          $(this).remove();
        });
      });
    });
    counter += 1;
  });
});
