const band = ['kiss', 'Aerosmith', 'ACDC', 'Led Zeppelin', 'Nickelback'];

var counts = {};

for (var i = 0; i < band.length; i++) {
  var num = band[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

if(counts['Nickelback'] === 1){
	var nickelback = 'Nickelback';
}


alert("I DON'T love " + nickelback + '!');