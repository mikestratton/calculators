$(document).ready(function() {
    loanpayment();

    $("#num1, #num2, #num3").on("keydown keyup", function() {
        loanpayment();
    });

});

function loanpayment() {
    // var l = $('#principal').val();
    // var m = $('#months').val();
    // var n = $('#rate').val();
    // var intr = n / 1200;
    // var o = (l * intr) / (1 - (Math.pow(1/(1 + intr), m)));
    // var p = o.toFixed(2);


    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    var intr = num3 / 1200;
    var result = (num1 * intr) / (1 - (Math.pow(1/(1 + intr), num2)));

    var rfixed = result.toFixed(2);

    if (!isNaN(rfixed)) {
        document.getElementById('loanpayment').value = rfixed;
    }
}
