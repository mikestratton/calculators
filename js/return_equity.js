$(document).ready(function() {
    returnequity();

    $("#num1, #num2, #num3, #num4").on("keydown keyup", function() {
        returnequity();
    });

});

function returnequity() {

    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;
    var result = (num1 - num2 - num3) / num4 * 100; //(NET INCOME FOR THE YEAR - TAXES - INTEREST) / SHAREHOLDERS’ EQUITY

    var rfixed = result.toFixed(2);
    var rtext = '%';

    if (!isNaN(rfixed) && isFinite(rfixed)) {
        document.getElementById('returnequity').value = rfixed + rtext;
    }
}
