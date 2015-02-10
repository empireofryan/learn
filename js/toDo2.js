// Create Lists
// - link to list
// - list display
// - clicking link shows or hides the list display

$(document).ready(function() {
  var listHide = function() { $(".listClass").hide();}
  $("#btnNewList").click(function() {
    event.preventDefault();
    var newListValue = $("#newList").val();
    // "<li><a href class='listShowLink'>Home</a></li>"
    $("#listLists").append("<li><a href class='listShowLink'>" + newListValue + "</a></li>");
    // "<div id='Home' class='listClass'><h2>Home</h2><ul id='homeList'><li>do this</li></ul></div>"
    // $('#taskList').data('name', newListValue);
    // var newList = $("<div  class='listClass active'><h2>" + newListValue + "</h2><ul class='taskList'></ul></div>");
    var newList = $('#templates .listClass').clone();
    // newList = $('#listTemplate').clone();
    newList.removeClass('hide');
    newList.prepend('<h2>' + newListValue + '</h2>');
    newList.attr('data-name', newListValue);
    listHide();
    $("#taskList").append(newList);
    newList.show();
    newList.addClass('active');
  })

  $("#listLists").on('click', 'a.listShowLink', function() {
    event.preventDefault();
    var target = $(this).text();
    listHide();
    $('.listClass').removeClass("active");
    // $("#" + target).show().addClass("active");
    $("[data-name='" + target + "']").show().addClass('active');
  })

  $("#btnNewTask").click(function() {
    event.preventDefault();
    var activeList = $(".active");
    var inputTask = $("#newTask").val();
    activeList.children("#taskList").append("<li>" + inputTask + "</li>");
  })
  //when we click button
  //find which list showing
  //find text entered
  //make new todo item with that text


  // $("form#newList-list").submit(function(event) {
  //   event.preventDefault();
  //
  //   var toDoVariable1 = $("input#newList").val();
  //   var newToDo1 = [toDoVariable1];
  //
  //   $("input#newList-list").val("");
  //   $("ul#toDoLists").append("<ul><span class='list'>" + newToDo1  + "</span></ul>");
  // });
  //
  // $("ul#toDoLists").on('click', function() {
  //   $(event.target).show();
  // });
  //
  //
  // $("form#new-todo-list").submit(function(event) {
  //   event.preventDefault();
  //
  //   var toDoVariable2 = $("input#newToDo").val();
  //   var newToDo2 = [toDoVariable2];
  //
  //   $("input#new-todo-list").val("");
  //   $("ul#todo").append("<li><span class='todo'>" + newToDo2 + "&nbsp;&nbsp;&nbsp;[   ]" + "</span></li>");
  // });
  //
  // $("ul#todo").on('click', function(event) {
  //   $(event.target).parent().remove();
  // });
});
