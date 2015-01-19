$(document).ready(function() {
  function countWords(str) {
    return str.split(' ').length;
  }


  function btnClicked(event) {
    var actions = {
      'count-words': countWords,
      'count-chars': function(str) {
        return str.length;
      },
      'upcase-chars': function(str) {
        return str.toUpperCase();
      },
      'lowercase-chars': function(str) {
        return str.toLowerCase();
      }
    }
    var n = $(this).attr('name');
    var action = actions[n];
    var theText = $('#string-source').val()
    if (action) {
      var result = action(theText);
    }
    $('#results').text(result);
    event.preventDefault();
  }



  $('button').click(btnClicked)
})

//
// practice
// function getValue(s) {
//   if (s === 'a') {
//     return 1;
//   } else if (s === 'b') {
//     return 2;
//   } else {
//     return undefined;
//   }
// }
//
// getValue = {
//   a: 1,
//   b: 2
// }
