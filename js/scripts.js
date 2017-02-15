var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    $("#output").text(add(number1, number2));
  });
});
$(function() {
  $("form#sub").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    $("#output2").text(subtract(number1, number2));
  });
});
$(function() {
  $("form#mult").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#mult1").val());
    var number2 = parseInt($("#mult2").val());
    $("#output3").text(multiply(number1, number2));
  });
});
$(function() {
  $("form#div").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#div1").val());
    var number2 = parseInt($("#div2").val());
    $("#output4").text(divide(number1, number2));
  });
});
