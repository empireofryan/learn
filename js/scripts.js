$(document).ready( function() {

  $("h2").click( function() {
    alert("H2 clicked");
  });

  $("ul").click( function() {
    alert("ul clicked");
  });

  $("p").dblclick( function() {
    alert("p double clicked");
  });
  //
  // $(".show_img").click( function() {
  //   console.log("click");
  //   $("#kitten_img").show();
  //   $(".show_img").toggle();
  //   $(".hide_img").toggle();
  // });
  //
  // $(".hide_img").click( function() {
  //   console.log("click");
  //   $("#kitten_img").hide();
  //   $(".show_img").toggle();
  //   $(".hide_img").toggle();
  // });

  $(".click_handler").click( function() {
    $(".click_handler").toggle();
  })

  $(".click_handler2").click( function() {
    $(".click_handler2").toggle();
  })

  $(".hidden_text").click( function() {
    $(".hidden_text2").show();
  })
// $(".img_visible").click( function() {
//   $("#kitten_img").toggle();
//   $(".show_img").toggle();
//   $(".hide_img").toggle();
// });

  $("#column1").hover(
    function() {
      console.log("mouseover")
      $("p").css("visibility", "hidden")
      },
    function() {
      console.log("mouseleave")
      $("p").css("visibility", "visible")
    }
    );


    $(".list-styled").hover(
      function() {
        console.log("mouseover")
        $(".list-styled").slideUp(1000)
      },
      function() {
        console.log("mouseleave")
        $(".list-styled").slideDown(1000)
      }
    );
    // $("#column1").hover(
    //   function() {
    //     console.log("mouseover")
    //     $("#paragraph1").stop().fadeIn(100)
    //   },
    //   function() {
    //     console.log("mouseleave")
    //     $("#paragraph1").stop().fadeOut(100)
    //   }
    // );
  });
