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

let num = -1

function add(){
 if(planeList[num++] != undefined){
  num++
  passengernum()
 }
}

function subtract(){
 num--
 passengernum()
}

function passengernum(){
 document.getElementById("namef").value = planeList[num].firstName
 document.getElementById("namel").value = planeList[num].lastName
 document.getElementById("DoT2").value = planeList[num].DoB
 document.getElementById("dateLeave").value = planeList[num].DoTLeaving
 document.getElementById("dateReturn").value = planeList[num].DoTReturning
 document.getElementById("bagNum").value = planeList[num].numBags
 document.getElementById("typeMeal2").value = planeList[num].mealType
 document.getElementById("legRoom2").checked = planeList[num].morelegRoom
 document.getElementById("windowSeat2").checked = planeList[num].windowSeat
 document.getElementById("extraMeal2").checked = planeList[num].extraMeal
 document.getElementById("headphones2").checked = planeList[num].headphones
 document.getElementById("pillowBlanket2").checked = planeList[num].pillowBlanket
 document.getElementById("puzzleBook2").checked = planeList[num].puzzleBook
 document.getElementById("seatWScreen2").checked = planeList[num].seatWScreen
 let costnum = 300
 if(planeList[num].windowSeat == true){
  costnum + 10
 }

 if(planeList[num].morelegRoom == true){
  costnum + 10
 }
  if(planeList[num].extraMeal == true){
  costnum + 10
 }
  if(planeList[num].headphones == true){
  costnum + 10
 }
  if(planeList[num].pillowBlanket == true){
  costnum + 10
 }
 if(planeList[num].puzzleBook == true){
  costnum + 10
 }
 if(planeList[num].seatWScreen == true){
  costnum + 10
 }

 costnum + planeList[num].numBags * 20
 document.getElementById("cost").innerHTML = costnum
}

function edit(){
 planeList[num].firstName = document.getElementById("namef").value
 planeList[num].DoTLeaving = document.getElementById("dateLeave").value
 planeList[num].DoTReturning = document.getElementById("dateReturn").value
 planeList[num].numBags = document.getElementById("bagNum").value
 planeList[num].mealType = document.getElementById("typeMeal2").value
 planeList[num].morelegRoom = document.getElementById("legRoom2").checked
 planeList[num].windowSeat = document.getElementById("windowSeat2").checked
 planeList[num].extraMeal = document.getElementById("extraMeal2").checked
 planeList[num].headphones = document.getElementById("headphones2").checked
 planeList[num].pillowBlanket = document.getElementById("pillowBlanket2").checked 
 planeList[num].puzzleBook = document.getElementById("puzzleBook2").checked
 planeList[num].seatWScreen = document.getElementById("seatWScreen2").checked
}