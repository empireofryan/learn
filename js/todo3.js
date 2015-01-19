$(document).ready(function() {
  $('.create').click(function() {
    var listName = $('#list_name').val();
    var newList = $('#template').clone();
    newList.attr("id",listName);
    newList.removeClass('hide');
    console.log(newList);
    $('#list_display').append(newList);
    //"<a class='list_link' data-target='Home'>Home</a>"
    $('#lists').append("<a class='list_link' data-target='" + listName + "'>" + listName + "</a>");

    event.preventDefault();
  });
});
