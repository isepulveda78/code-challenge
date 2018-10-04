const array1 = ['a', 'b', 'c', 'd', 'c', 'b', 'b', 'c', 'a', 'e', 'b', 'e']; 
var most = 0;
var item = 0;
var least = 0;
var item2 = 1;


for(var i = 0; i < array1.length; i++){
	var tempItem = array1[i]; //counting through the array
	var tempCount = 0;

	for(var j = 0; j < array1.length; j++){
		if(array1[j] === tempItem){
			tempCount ++;
		}
		if(tempCount > item){
			most = tempItem;
			item = tempCount;
    }
    if(tempItem === tempCount){
      least = tempItem;
      item2 = tempCount;
    }
    
	}
}
alert("The most frequent item is: " + most + least);