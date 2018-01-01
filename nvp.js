var person={
	fname:'amar',
	lname:'gosavi',
	greet: function (){
		console.log('Hello,' + this.fname+' '+this.lname);
	}
};
person.greet();
console.log(person['fname']);