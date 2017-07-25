$(document).ready(function() {

    currentratio();

    $("#num1, #num2").on("keydown keyup", function() {
        currentratio();
    });

});

function currentratio() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = parseInt(num1) / parseInt(num2);
    var rfixed = result.toFixed(2);

    if (!isNaN(rfixed)) {
        document.getElementById('currentratio').value = rfixed;
    }
}
