$(document).ready(function() {
    netprofit();

    $("#num1, #num2").on("keydown keyup", function() {
        netprofit();
    });

});

function netprofit() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    var result = (num1 / num2) * 100;
    var rfixed = result.toFixed(2);

    var rtext = '%';

    if (!isNaN(rfixed) && isFinite(rfixed)) {
        document.getElementById('netprofit').value = rfixed + rtext;
    }
}
