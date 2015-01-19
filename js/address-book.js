$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAddress = $("input#new-address").val();
    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, address: inputtedAddress };

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-address").val("");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address").text(newContact.address);
    });
  });

  $("form#new-todo-list").submit(function(event) {
    event.preventDefault();

    var toDoVariable = $("input#newToDo").val();
    var newToDo = [toDoVariable];

    $("input#new-todo-list").val("");
    $("ul#todo").append("<li><span class='todo'>" + newToDo + "          [   ]" + "</span></li>");
  });

  // $("li#todo").click(function() {
    $("li.todo").on('click', function() {
      $(this).parent().remove();
    // });
  });
});
