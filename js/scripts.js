$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();
    const input = [];
    const output = [".person1", ".person2", ".animal" ,".exclamation" ,".verb" ,".noun"];
    input.push($("input#person1").val());
    input.push($("input#person2").val());
    input.push($("input#animal").val());
    input.push ($("input#exclamation").val());
    input.push ($("input#verb").val());
    input.push ($("input#noun").val());

    output.forEach(function(element) {
      console.log(output.indexOf(element));
      $(element).append(input[output.indexOf(element)]);
    });
    $("#story").show();
  });
});