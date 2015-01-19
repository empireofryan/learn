// function pigLatin ( words ) {
//   var constraints = [];
//   var parts = words.split(" ");
//   if (('words[-1]') = ['a', 'e', 'i', 'o', 'u']) {
//     return constraints[words].push("ay");
//   }
// }

// var toPigLatin = function(str){
//   return str.replace(/\b(\w)(\w+)\b/g, '$2$1ay');
// };

// function LatinWord(word) {
//   var index;
//   index = word.search(/[aeiouAEIOU]/);
//   if (index <= 0) { return word + "way"; }
//   else { return word.substring(index, word.length) + word.substring(0,index) + "ay"; }
//   }
//   function LatinPhrase(phrase){
//     var str = '';
//     var tarr = phrase.split(' ');
//     for (var i=0; i<tarr.length; ++i) {  str += LatinWord(tarr[i])+' '; }
//       return str;
//     }

function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(char) != -1;
}

function consonant(text) {
  i = 0;
  while (!isVowel(text.charAt(i)))
    i++;
    return text.substring(i) + text.substring(0, i) + "ay";
  }

  function vowel(text) {
    if (text.charAt(text.length - 1) == 's')
      return text.substring(0, text.length -1) + "ays";
      return text + "ay";
    }

    function wordProcessor(text) {
      if (isVowel(text.charAt(0)))
        return vowel(text);
        else
          return consonant(text);
        }
        function toPigLatin(phrase) {
          var endPhrase = "";
          for (var i = 0; phrase.length > 0; i++) {
            if (phrase[i] == null || phrase[i] == " ") {
              endPhrase += wordProcessor(phrase.substring(0, i));
              if (phrase[i] == " ")
                phrase =  phrase.substring(i + 1);
                else
                  phrase = phrase.substring(i);
                  i = -1;
                }
                if (phrase.length == 1) {
                  endPhrase += wordProcessor(phrase);
                  phrase = "";
                }
              }
              return endPhrase;
            }

    //     function toPigLatin(form) {
    //       form.output.value = "";
    //       phrase = form.phrase.value;
    //       endPhrase = "";
    //       for (var i = 0; phrase.length > 0; i++) {
    //         if (phrase[i] == null || phrase[i] == " ") {
    //           endPhrase += wordProcessor(phrase.substring(0, i)) + " ";
    //           if (phrase[i] == " ")
    //             phrase =  phrase.substring(i + 1);
    //             else
    //               phrase = phrase.substring(i);
    //               i = -1;
    //             }
    //             if (phrase.length == 1) {
    //               endPhrase += wordProcessor(phrase);
    //               phrase = "";
    //             }
    //           }
    //           form.output.value += endPhrase;
    //         }


            //
            //
            // function getWordsByCount ( words, countedWords ) {
            //   var orderedByCount = [];
            //   words.forEach( function ( word ) {
            //     count = countedWords[word];
            //     if (!(count in orderedByCount)) {
            //       orderedByCount[count] = [index];
            //     } else {
            //       orderedByCount[count].push(index);
            //     };
            //   });
            //   return orderedByCount;
            // }
            //
            // // function getWordsByCount ( words, countedWords ) {
            // //   return false;
            // // }
            //
            // function getWordsUsageCount ( words, str ) {
            //   var countedWords = {};
            //   for (var i=0; i < words.length; i++ ) {
            //     if (!(words[i] in countedWords) ) {
            //       countedWords[words[i]] = (str.match( new RegExp(words[i], "g"))).length;
            //     };
            //   };
            //   return countedWords;
            // }
            //
            //
            // function sortByTimesUsed ( str ) {
            //
            //
            //   // return blank string a blank string is passed
            //   if ( str === "" ) {
            //     return "";
            //   }
            //
            //   // return false if the value is a number
            //   if (!(isNaN(str))) {
            //     return false;
            //   }
            //
            //   // split the string into an array
            //   var words = str.split(" ");
            //   // create a variable to hold each word and its count
            //   var countedWords = getWordsUsageCount( words, str );
            //   var orderedByCount = getWordsByCount( words, countedWords );
            //
            //   var outputString = ""
            //   // loop thru the wordsByCount array and build the output string
            //   for (var x in orderedByCount) {
            //     outputString = orderedByCount[x].join(" ") + " " + outputString;
            //   }
            //   // trim the trailing space
            //   return outputString.trim();
            // }
