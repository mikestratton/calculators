$(document).ready(function() {
    debttoassets();

    $("#num1, #num2").on("keydown keyup", function() {
        debttoassets();
    });

});

function debttoassets() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = parseInt(num1) / parseInt(num2) * 100;
    var rfixed = result.toFixed(2);
    var rtext = '%';

    if (!isNaN(rfixed)) {
        document.getElementById('debtassets').value = rfixed + rtext;
    }
}
