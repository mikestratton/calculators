$(document).ready(function() {

    returnassets();

    $("#num1, #num2").on("keydown keyup", function() {
        returnassets();
    });

});

function returnassets() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = parseInt(num1) / parseInt(num2);
    var rfixed = result.toFixed(2);
    var percent = rfixed * 100;
    var rtext = '%';

    if (!isNaN(rfixed)) {
        document.getElementById('returnassets').value = percent + rtext;
    }
}
