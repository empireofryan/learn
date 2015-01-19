//checks if a triangle
  //if one side > other two combined then not a triangle
//type of triangle
  //if all sides equal then equilateral
  //if 2 sides equal then isosceles
  //if no sides equal then scalene

function triangle (x, y, z) {
  if ((x + y <= z) || (x + z <= y) || (z + y <= x)) {
    // return "not a triangle";
    return 'not'
  // } else if (Math.pow(x, 2) + Math.pow(y, 2) != Math.pow(z, 2)) {
  //   return "not a triangle";
} else if (x === y && y === z) {
    // return "equilateral triangle";
    return 'equilateral'
  } else if ((x === y) || (x === z) || (y === z)) {
    return "isosceles";
  } else {
    return "scalene";
  }
}

//compare 3 sides to triangle function
//if 3 sides return equilateral list under equil
//if 3 sides return isosceles list under isos
//if 3 sides return scalene list under scal

$(document).ready(function() {
  $('#btnAddTriangle').click(function() {
    event.preventDefault();
    var flds = $('#side1' + ', ' + '#side2' + ', ' + '#side3');
    var vals = flds.map(function(a, x) {
      return parseFloat($(x).val());
    });
    var ttype = triangle(vals[0], vals[1],vals[2]);
    $('#' + ttype + '-results').append('<li>' + vals.toArray().join(', ') + '</li>')
    // triangle(newTriangleValue);
  })
})
