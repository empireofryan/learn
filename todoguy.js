function revealList(l) {
  masterList.children('div').hide()
  l.show()
}
var newList = $('#newList-list').clone()
var masterList = $('#toDoLists')

masterList.append(newList)

revealList(newList)

newNameElt = $('<li>' + name + '</li>');
newNameElt.click = function() {
    revealList(newList)
}

var nameList = $('#newToDo')
nameList.append(newNameElt)
