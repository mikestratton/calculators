$(document).ready(function() {
    //this calculates values automatically
    sum();
    $("#num1, #num2").on("keydown keyup", function() {
        sum();
    });
});

function sum() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = parseInt(num1) / parseInt(num2);
    var re_two = result.toFixed(2);

    if (!isNaN(re_two)) {
        document.getElementById('sum').value = result;

    }
}
