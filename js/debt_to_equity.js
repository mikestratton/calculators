$(document).ready(function() {
    debttoequity();

    $("#num1, #num2").on("keydown keyup", function() {
        debttoequity();
    });

});

function debttoequity() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = parseInt(num1) / parseInt(num2);
    var rfixed = result.toFixed(2);
    var rtext = ':1';

    if (!isNaN(rfixed)) {
        document.getElementById('debtequity').value = rfixed + rtext;
    }
}
