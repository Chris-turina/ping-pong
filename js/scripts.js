var listNumbers = [];

var playPingPong = function(input) {
  var output = "";
    for (var i = 0; i <= input; i++) {
      listNumbers.push(i);
      var number = listNumbers[i]
      console.log(number);
      if (number % 15 == 0){
        console.log("ping-pong");
      } if (number % 3 == 0) {
        console.log("ping");
      } if (number % 5 == 0) {
        console.log("pong");
      }






    };
  // alert(listNumbers);
return output;
};




$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userinput").val());
    var output = playPingPong(userInput);
    // $("#output").text(output)
    $("#output").append("<li>" + output + "<li>");
  });
});
