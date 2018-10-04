const firstArray = ['a', 'b', 'c', 'a', 'a', 'b', 'd',];
const secondArray = ['a', 'b', 'b', 'a', 'e', 'c', 'c', 'g'];
var counts = {};
var counts2 = {};

for(var i = 0; i < firstArray.length; i ++){
	var num1 = firstArray[i];
	counts[num1] = counts[num1] ? counts[num1] + 1 : 1;
}

for(var j = 0; j < secondArray.length; j ++){
	var num2 = secondArray[j];
	counts2[num2] = counts2[num2] ? counts2[num2] + 1 : 1;
}
function repeatString(str,num){
	if(num > 0){
	 return str.repeat(num);
	}

}

var counterA = counts['a'] + counts2['a'];
var counterB = counts['b'] + counts2['b'];
var counterC = counts['c'] + counts2['c'];
var counterD = counts['d'] + counts2['d'];
var counterE = counts['e'] + counts2['e'];
var counterG = counts['g'] + counts2['g'];

if(counterA >= 2){
	var a = counterA / 2;
	var aa = repeatString(" 'a',", a);
}else{
	var a = "";
}
if(counterB >= 2){
	var b = counterB / 2;
	var bb = repeatString(", 'b' ", b);
}else{
	var b = "";
}
if(counterC >= 2){
	var c = counterC / 2;
	var cc = repeatString(" 'c' ", c);
}else{
	var c = "";
}
if(counterD >= 2){
	var d = counterD / 2;
	var dd = repeatString("'d',", d); 
}else{
	var dd = "";
}
if(counterE >= 2){
	var e = counterE / 2;
	var ee = repeatString(" 'e' ,", e)
}else{
	var ee = "";
}
if(counterG >= 2){
	var g = counterG / 2;
	var gg = repeatString(" 'g' ,", g);
}else{
	var gg = "";
}


alert("["+aa+cc+bb+dd+ee+gg+"]");