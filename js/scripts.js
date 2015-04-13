$(document).ready(function() {

  $("form#user-input").submit(function(event) {
    event.preventDefault();
    var inputtedLocation = $("input#new-location").val();
    var inputtedDate = $("input#new-date").val();
    var inputtedReview = $("input#new-review").val();
    var newPlace = {locations: inputtedLocation, date: inputtedDate, review: inputtedReview};

  $("ul#places").append("<li><span class='place'>" + newPlace.locations + "</span></li>");

    //grab the input values from the form
    //stores the inputs in the .val("");
    $("input#new-location").val("");
    $("input#new-date").val("");
    $("input#new-review").val("");

    //will show the properties for every last click made on 
    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.locations);
      $(".new-location").text(newPlace.locations);
      $(".new-date").text(newPlace.date);
      $(".new-review").text(newPlace.review);
    });

  });

});
