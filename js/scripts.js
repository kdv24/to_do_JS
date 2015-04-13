//start writing jQuery for form and creating variables

$(document).ready(function(){
  $("form#new-list").submit(function(event){
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();
    var newTask = {task: inputtedTask};

    $("ul#returned-tasks").append("<li><span class='returned-task'>" + newTask.task + "</span></li>");

    $("input#new-task").val("");

    // $(".returned-task").last().click(function() {
      $(".returned-task").text(newTask.task);
    // });

  });
});
