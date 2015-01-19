//CA start with $5 fee
//AZ/NV start with $4 fee
//OR start with $3 fee
//TO USA add $5
//TO GERMANY add $15
//TO THAILAND/ARGENTINA add $20
//IF 1lb NO ADD CHARGE
//IF 2lb +$5
//IF 3lb +$10
//IF 4lb +$15
//IF 5lb +$20


$(document).ready( function() {
  $("#submit").click( function() {
//get input value of each select box
var state = $("#stateFrom").val();
var toShip = $("#toShip").val();
var weight = $("#weight").val();
//calculate value
var total = 0;
//state
if (state === 'CA') {
  total += 5;
} else if (state === 'AZ' || state === 'NV') {
  total += 4;
} else if (state === 'OR') {
  total += 3;
}
//toShip
if (toShip === 'USA') {
  total += 5;
} else if (toShip === 'Germany') {
  total += 15;
} else if (toShip === 'Thailand' || toShip === 'Argentina') {
  total += 20;
}
//Weight
if (weight === '1lb') {
  total += 0;
} else if (weight === '2lbs') {
  total += 5;
} else if (weight === '3lbs') {
  total += 10;
} else if (weight === '4lbs') {
  total += 15;
} else if (weight === '5lbs') {
  total += 20;
} else if (weight === 'over5lbs') {
  total += 30;
}
//display value
$('.totalCharge').text(total)
  })
})

  // $("#submit").submit( function() {
  //   if ( sex == "male" ) {
  //     if( age < 30 ) {
  //       $("#result-head").slideDown(100);
  //       $(".taylors").slideDown(400);
  //     } else {
  //       $("#result-head").slideDown(100);
  //       $(".hallieb").slideDown(400);
  //     }
