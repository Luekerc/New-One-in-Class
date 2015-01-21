/* jshint devel:true */
//#1 Create a function that takes an object and //
//console.logs each property int he object. //
var person={
	firstName: "Bob",
	lastName: "Smith",
	age: 32,
};
 for (var i in person){
 	console.log(i, person[i]);
 }

//#2 Create a function that takes an object and //
//console.logs that object. Then delete the rollno 
//property of the object and console.log the object 
//again. //
var person={
	firstName: "Bob",
	lastName: "Smith",
	age: 32,
	rollno: 12,
};

 for (var i in person){
 	console.log(i, person[i]);
 }

delete person.rollno;

 for (var i in person){
 	console.log(i, person[i]);
 }

 //#3 Create a function that takes an object and 
 //returns the number of properties on that object 
 //that start with the letter "a" or "A"
function myCount(myObj){
	var count=0;

	for (var key in myObj){
		if (key.charAt(0)=== "a" || key.charAt(0)==="A"){
			count++;
		}
	}
	return count;
}


 //#4 Create a function that takes a cylinder object 
 //and returns the volume of that cylinder. The 
 //cylinder object will have radius and height properties.

function volume(radius, height){
	var object={
		radius: 0,
		height: 0
	};

	return Math.PI*(radius*radius)*height;
}



//#5 Create a function that takes a firstName, lastName 
//and age and returns an object with firstName, 
//lastName and age properties as well as a friends 
//property that contains a list of friend names. Add at 
//least 3 friends to the friends list.
function people(firstName, lastName, age){

	var person = {
		firstName: firstName,
		lastName: lastName,
		age: age,
		friends: ['Andy','Joe','Bill']
		};

	return person;
}



 //Create a function that takes the result of the last problem 
 //and a friend name and adds that friend to the friends property 
 //of the object.
function addFriend(result, name){
	return result.friends.push(name);
}






