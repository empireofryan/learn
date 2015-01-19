$(document).ready(function() {
  $("#hidden").click(function(){
    $(this).parent().remove();
  });

  $("button#round1").click(function() {
    $("ul#cat").prepend("<li>Meeeeeeooooowwww</li>");
    $("ul#dog").prepend("<li>Woooooooooffffff!</li>");
    $('ul#cat').children('li').first().click(function() {
      $(this).remove();
    });
    $('ul#dog').children('li').first().click(function() {
      $(this).remove();
});
});

$("button#round2").click(function() {
  $("ul#cat").prepend("<li>RRRRRarrrrr</li>");
  $("ul#dog").prepend("<li>Ruuuffffff!</li>");
  $('ul#cat').children('li').first().click(function() {
    $(this).remove();
  });
  $('ul#dog').children('li').first().click(function() {
    $(this).remove();
  });
});

$("button#round3").click(function() {
  $("ul#cat").prepend("<li>Hiiiissssssss</li>");
  $("ul#dog").prepend("<li>Barrrrkkkkk!</li>");
  $('ul#cat').children('li').first().click(function() {
    $(this).remove();
  });
  $('ul#dog').children('li').first().click(function() {
    $(this).remove();
  });
});

});
