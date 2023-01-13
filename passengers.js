class passegers{
 constructor(firstName, lastName, DoB, DoTLeaving, DoTReturning, numBags, mealType, legRoom, window, extra, headphones, pillowBlanket, puzzle, screen ){
  this.firstName = firstName
  this.lastName = lastName
  this.DoB = DoB
  this.DoTLeaving = DoTLeaving
  this.DoTReturning = DoTReturning
  this.numBags = numBags
  this.mealType = mealType
  this.moreLegRoom = legRoom 
  this.windowSeat = window 
  this.extraMeal = extra 
  this.headphones = headphones 
  this.pillowBlanket =  pillowBlanket 
  this.puzzleBook =  puzzle 
  this.seatWScreen =  screen

 }

}

let planeList = [];

function submit(){
 let fname = document.getElementById("fname").value
 let lname = document.getElementById("lname").value
 let DoB = document.getElementById("DoB").value
 let dateL = document.getElementById("dateL").value
 let dateR = document.getElementById("dateR").value
 let numBags = document.getElementById("numBags").value
 let typeMeal = document.getElementById("typeMeal").value
 let legRoom = document.getElementById("legRoom").checked
 let windowSeat = document.getElementById("windowSeat").checked
 let extraMeal = document.getElementById("extraMeal").checked
 let headphones = document.getElementById("headphones").checked
 let pillowBlanket = document.getElementById("pillowBlanket").checked
 let puzzleBook = document.getElementById("puzzleBook").checked
 let seatWScreen = document.getElementById("seatWScreen").checked

 let nextPassenger = new passegers(fname, lname, DoB, dateL, dateR, numBags, typeMeal, legRoom, windowSeat, extraMeal, headphones, pillowBlanket, puzzleBook, seatWScreen);
 planeList.push(nextPassenger);
 console.log(planeList);
}