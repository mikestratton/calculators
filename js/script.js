/** Quick Ratio Calculator **/
$('#assets').keyup(calculateRatio);
$('#inventory').keyup(calculateRatio);
$('#liability').keyup(calculateRatio);

function calculateRatio() {
	
  var a = parseInt($('#assets').val());
  var b = parseInt($('#inventory').val());
  var c = parseInt($('#liability').val());  

  var d = ((a - b) / c);
  var e = d.toFixed(2);
  $('span#quickratio').text(e);
}