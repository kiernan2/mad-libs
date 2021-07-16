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
      console.log(element);
      $(element).append(input[element]);
    });

    $(".person1").append(input[0]);
    $(".person2").append(input[1]);
    $(".animal").append(input[2]);
    $(".exclamation").append(input[3]);
    $(".verb").append(input[4]);
    $(".noun").append(input[5]);

    $("#story").show();
  });
});