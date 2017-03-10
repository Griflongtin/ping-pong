function numberOutput(input){
  var numberOutput = [];
  for (var i = 1; i <= input; i++) {
    if(i % 15 === 0) {
      numberOutput.push(" pingpong");
    }
    else if(i % 5 === 0) {
      numberOutput.push(" pong");
    }
    else if(i % 3 === 0) {
      numberOutput.push(" ping");
    }
    else {
      numberOutput.push(i);
    }
  }
  return numberOutput;
}

$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    var input = parseInt($("#numberInput").val());
    var outputNumber = numberOutput(input);
    $("#output").text(outputNumber);
  });
});
