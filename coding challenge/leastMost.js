const arr = ['a', 'b', 'c', 'd', 'c', 'b', 'b', 'c', 'a', 'e', 'b', 'e'];
var counts = {};

for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}
if(counts['b'] === Math.max(counts['b'])){
  var most = 'b';
}

if(counts['d'] === Math.min(counts['d'])){
  var least = 'd';
}
alert("The most frequent item is: " + most + ". The least frequent item is: " + least + ".");