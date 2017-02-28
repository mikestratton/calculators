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
  
  /** Current Ratio Calculator **/
  var f = a / c;
  var g = f.toFixed(2);
  $('span#currentratio').text(g);
  
  /** Current Ratio Calculator **/
  var h = (a / c) * 100;
  var i = h.toFixed(2);
  $('span#debtassets').text(i);
}

