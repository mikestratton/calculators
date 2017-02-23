$('#assets').keyup(calculateRatio);
$('#inventory').keyup(calculateRatio);
$('#liability').keyup(calculateRatio);

function calculateRatio() {
  
  var a = parseInt($('#assets').val());
  var b = parseInt($('#inventory').val());
  var c = parseInt($('#liability').val());  

  var d = (a / c) + ":";
  var e = (b / c) + ":";
  var f = 1;

  $('p#ratio').text(d+e+f);

}