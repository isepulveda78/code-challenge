function costs(){
	var total = 1745;

	var hundreds = total / 100;
	var trunc =  total % 100;
	var twenty = trunc / 20;
	var trunc2 = twenty % 2;
	var one = trunc2 * 20;

	alert("100: " + Math.trunc(hundreds) + " 20: " + Math.trunc(twenty) + " 1: " + one);
}

costs();
