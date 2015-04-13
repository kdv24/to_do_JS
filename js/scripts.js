//start writing jQuery for form and creating variables

$(document).ready(function(){
  $("form#new-list").submit(function(event){
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();
    var newTask = {task: inputtedTask};

    $("ul#returned-tasks").append("<li><span class='returned-task'>" + newTask.task + "</span></li>");

    $("input#new-task").val("");
    //left out .click();, otherwise it would click on the list and change them
    $(".returned-task").last().click(function() {
      $(".returned-task").text(newTask.task);
      $("ul#returned-tasks").children("li").first().click(function(){
        $(this).remove();
      });
    });
  });
});
