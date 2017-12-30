//this is frish
function printhi(){
	console.log("Hi");
}printhi();

//funtion are firt - class
function logGre(fn){ fn()} logGre(printhi);

//its expresstion 
var greeme= function(){
	console.log("Hi amar");
	
}
greeme();
//its frist
logGre(greeme);
//2nd type call on the fly
logGre(function (){
	console.log("Its direct");
});