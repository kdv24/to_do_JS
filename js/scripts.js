//start writing jQuery for form and creating variables

$(document).ready(function(){
  $("form#new-list").submit(function(event){
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();
    var newTask = {task: inputtedTask};

    $("ul#returned-tasks").append("<li><span class='returned-task'>" + newTask.task + "</span></li>");

    $("input#new-task").val("");
    //what does .last() do here?
     //$(".returned-task").last().click(function() {
      //$(this).text(newTask.task);
      //for every "li" in returned -tasks, will remove when clicked on
      //what does .first() do here?
      //for every 'li' in returned-tasks, will remove 'this' task
      $("#returned-tasks").children("li").click(function(){
        // $(this).remove();
        $(this).css("font-weight", "bold");
        $(this).css("text-decoration", "line-through");
      //});
    });
  });
});
