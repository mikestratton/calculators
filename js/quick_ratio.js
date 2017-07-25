$(document).ready(function() {
    quickratio();

    $("#num1, #num2, #num3").on("keydown keyup", function() {
        quickratio();
    });

});

function quickratio() {

    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    var result = ((num1 - num2) / num3);

    var rfixed = result.toFixed(2);
    var rtext = ':1';

    if (!isNaN(rfixed) && isFinite(rfixed)) {
        document.getElementById('quickratio').value = rfixed + rtext;
    }
}
