"use strict";
const buttonCalc = document.querySelector(".button-calc");
function calculateTip() {
    //Selectors
    const inputBill = document.querySelector(".input-bill").value;
    let inputPeople = document.querySelector(".input-people").value;
    const percents = document.querySelector(".percents").value;
    //Event listeners

    //validate input
    if (inputBill === "" || percents == 0) {
        alert("Please enter values");
        return;


    }



    //Check to see if this input is empty or less than or equal to 1
    if (inputPeople === "" || inputPeople <= 1) {
        inputPeople = 1;

        document.querySelector(".each").style.display = "none";

    } else {
        document.querySelector(".each").style.display = "block";
    }


    //Functions
    let total = (inputBill * percents) / inputPeople;
    console.log(total);
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip

    // Display alert i there is no TIP
    if (percents == 1) {
        alert(`There is no tip, you must pay only the bill $${total}`)
        return;
    }


    document.querySelector(".reset-button").style.display = "block";
    document.querySelector(".totalTip").style.display = "block";
    document.querySelector(".tip").innerHTML = total;

}


function changeStyle() {
    const inputBill = document.querySelector(".input-bill").value;
    let percents = document.querySelector(".percents").value;
    if (inputBill >= 1 || percents == 0) {
        event.preventDefault();
        document.querySelector(".reset-button").style.display = "block";
    }
}

function reset() {
    document.querySelector(".reset-button").style.display = "none";
    document.querySelector(".totalTip").style.display = "none";
    document.querySelector(".each").style.display = "none";
    document.querySelector(".input-bill").value = "";
    document.querySelector(".input-people").value = "";
    document.querySelector(".percents").value = "1";
}
//function toggleClass(el) {
//el.className = "class";
//}

//Hide the tip amount on load
document.querySelector(".reset-button").style.display = "none";
document.querySelector(".totalTip").style.display = "none";
document.querySelector(".each").style.display = "none";



