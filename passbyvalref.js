//pass by valuess
function change(a){
	a=1;
}
var b=2;
change(b);
console.log(b);
//pass by refrance
function changeibje(d){
	d.prop1=function() {};
	console.log('d'+d);
	d.prop2={};
	console.log("=1+"+d);
}
var c={};
c.prop1={};
console.log(c);
changeibje(c);
console.log(c);