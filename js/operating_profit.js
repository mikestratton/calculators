$(document).ready(function() {
    operatingprofit();

    $("#num1, #num2").on("keydown keyup", function() {
        operatingprofit();
    });

});

function operatingprofit() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    var result = (num1 / num2) * 100;
    var rfixed = result.toFixed(2);

    var rtext = '%';

    if (!isNaN(rfixed) && isFinite(rfixed)) {
        document.getElementById('operatingprofit').value = rfixed + rtext;
    }
}
