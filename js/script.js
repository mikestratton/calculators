/** Inputs for Multiple Calculator **/
$('#assets').keyup(calculateRatio);
$('#inventory').keyup(calculateRatio);
$('#liability').keyup(calculateRatio);
$('#interest').keyup(calculateRatio);

function calculateRatio() {
	
  var a = parseInt($('#assets').val());
  var b = parseInt($('#inventory').val());
  var c = parseInt($('#liability').val()); 
  var x = parseInt($('#interest').val()); 

   /** Quick Ratio **/
  var d = ((a - b) / c);
  var e = d.toFixed(2);
  $('span#quickratio').text(e);
  
  /** Current Ratio **/
  var f = a / c;
  var g = f.toFixed(2);
  $('span#currentratio').text(g);
  
  /** Debt to Assets **/
  var h = (a / c) * 100;
  var i = h.toFixed(2);
  $('span#debtassets').text(i);
  
  /** Gross Profit Margin **/
  var j = (a - c) / a;
  var k = j.toFixed(2);
  $('span#grossprofit').text(k);
  
    /** Debt to Equity Ratio **/
   var l = a / c;
   var m = l.toFixed(2);
   $('span#debtequity').text(m);
   
    /** Net Profit Margin **/
  var n = (a / c) * 100;
  var o = n.toFixed(2);
  $('span#netmargin').text(o);
  
    /** Return on Equity **/
  var p = (a - b - x) / c * 100; //(NET INCOME FOR THE YEAR - TAXES - INTEREST) / SHAREHOLDERS’ EQUITY
  var q = p.toFixed(2);
  $('span#returnequity').text(q);
}

/** Loan Payment Calculator **/
// Reference: http://www.smetoolkit.org/smetoolkit/en/content/en/407/Loan-Payment-Calculator
$('#principal').keyup(loanPayment);
$('#months').keyup(loanPayment);
$('#rate').keyup(loanPayment);


function loanPayment() {
	var l = parseInt($('#principal').val());
	var m = parseInt($('#months').val());
	var n = parseInt($('#rate').val());
	var intr = n / 1200;
	var o = (l * intr) / (1 - (Math.pow(1/(1 + intr), m)));
	var p = o.toFixed(2);
	 $('span#payment').text(p);
}

 /**
 var princ = document.calc.loan.value;
 var term  = document.calc.months.value;
 var intr   = document.calc.rate.value / 1200;
 document.calc.pay.value = princ * intr / (1 - (Math.pow(1/(1 + intr), term)));
 }
**/
// payment = principle * monthly interest/(1 - (1/(1+MonthlyInterest)*Months))



