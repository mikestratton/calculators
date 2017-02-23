$('#assets').keyup(calculateRatio);
$('#inventory').keyup(calculateRatio);
$('#liability').keyup(calculateRatio);

function calculateRatio() {
  
  var a = parseInt($('#assets').val());
  var b = parseInt($('#inventory').val());
  var c = parseInt($('#liability').val());  

  var e = 1;
   
  // Wikipedia Formula
  var d = ((a + b) / c) + ":"; 
  $('span#form2').text(d+e);
  
  // Wikipedia Formula (3 values)
  var g = (a / c) + ":"; 
  var h = (b / c) + ":"; 
  $('span#wiki').text(g+h+e);
  
  // Bankrate Formula
  var f = ((a - b) / c) + ":";
  $('span#form1').text(f+e);

}