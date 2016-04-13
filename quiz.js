//variables
var correct = 0;

//prompt
var answer1 = prompt("What is Alex Graham's Age...")
var answer2 = prompt("What is Alex Grahams  Gender...")
var answer3 = prompt("When does Alex Graham graduate...")
var answer4 = prompt("What sport does Alex Graham enjoy...")
var answer5 = prompt("Who does Alex Graham hate...")


// if statement
if ( answer1.toUpperCase() === 'MAGIC' ) {
 correct += 1;
}
// if statement
if ( answer2.toUpperCase() === 'MAGIC' ) {
 correct += 1;
}
// if statement
if ( answer3.toUpperCase() === 'MAGIC' ) {
 correct += 1;
}
// if statement
if ( answer4.toUpperCase() === 'MAGIC' ) {
 correct += 1;
}
// if statement
if ( answer5.toUpperCase() === 'MAGIC' ) {
 correct += 1;
}

if (correct == 5){
	var award = "gold"
}

if (correct == 4){
	var award = "silver"
}

if (correct == 3){
	var award = "bronze"
}

if (correct == 2){
	var award = "fourth"
}

if (correct == 1){
	var award = "fifth"
}

document.write("<p>Your score is: "+correct+"You earned: "+award+"</p>")
