var listNumbers = [];

var playPingPong = function(input) {
  var output = "";
    for (var i = 0; i <= input; i++) {
      listNumbers.push(i);
      var number = listNumbers[i]
      if (number % 3 == 0 && number % 15 != 0 && number != 0) {
        number = "ping"
      } if (number % 5 == 0 && number % 15 != 0 && number != 0) {
        number = "pong"
      } if (number % 15 == 0 && number != 0) {
        number = "pingpong"
      }
      output = output + number + ","






    };
  return output
};




$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userinput").val());
    var output = playPingPong(userInput);
    $("ul#output").append("<li>" + output + "</li>");
    //  $("#btn2").show();
    //  $("#pingPong").hide();
  });
});



//failed bullet attempt
// var bullet = function(outputArrays) {
//   outputArrays = []
//   console.log(outputArrays);
//   $("ul#output").empty();
//   outputArrays.forEach(function(outputArray) {
//     $("ul#output").append('<li>' + outputArray + '</li>');
//   });
//   return;
// };
