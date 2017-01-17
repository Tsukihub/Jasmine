selectstartingbyA= function(array){}

var tab = new Array;
for{(i=0; i<array.length; i++){if(array[i][0]=="a")
	{tab.push(array[i]);}
}
return tab;

}

selectvowel=function(array){
var tab = new Array;
voy=["a","e","i","o","u","y"];
for{
	(i=0; i<array.length; i++){for (k=0; k<voy.length; k++){
	if(voy[k]==array[i][0]){
	tab.push(array[i]);}
}
}
return tab;

}


var tab = new Array;
for{(i=0; i<array.length; i++){if(array[i][0]=="a")
	{tab.push(array[i]);}
}



var removeNullAndFalseElelents = function(Array) {
    var tab = new array;
    for (i=0; i!="Null"; i++){
        if (parseInt(array[i]) == "0"){
            tab.push(array[i]);

        }
        if (array[i]!= null || array[i] != false) {
            tab.push(array[i]);
    }
}

var reverseWord= function(array){
var tab= new Array;
vafr word="";
for{
	(i=0; i<array.length; i++){
		for (x=array[i].length-1; x>=0; x--){
			word+=array[i][x]
	}
}
tab.push(word)

}

var everyPossiblePair = function(array){
	var tab=new Array;
	for(i=0; i<array.length;i++){
		for(j=array.length-1; j>=0; j--){
			if (array[i]>array[j]){
				tab.push([array[j], array[i]]);
			}
		}
	}
return tab;
}

