var listNumbers = [];

var playPingPong = function(input) {
  var output = "";
    for (var i = 0; i <= input; i++) {
      listNumbers.push(i);



  }
  // alert(listNumbers);
  return(listNumbers);
}




$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userinput").val());
    var output = playPingPong(userInput);
    // $("#output").text(output)
    $("#output").append("<li>" + output + "<li>");
  });
});
