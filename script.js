function validate() {
    let flatmates = Number(document.getElementById('flatmates').value);
    let rent = Number(document.getElementById('rent').value);
    let electricity = Number(document.getElementById('electricity').value);
    let water = Number(document.getElementById('water').value);
    let internet = Number(document.getElementById('internet').value);
    let cleaning = Number(document.getElementById('cleaning').value);
    let food = Number(document.getElementById('food').value);
    let supplies = Number(document.getElementById('supplies').value);
    let other = Number(document.getElementById('other').value);

    let validEntries = true;

    if (flatmates < 1 || isNaN(flatmates)) {
        alert("Please enter a valid number of flatmates - minimum 1");
        validEntries = false
    }

    if (rent < 0 || electricity < 0 || water < 0 || internet < 0 ||
        cleaning < 0 || food < 0 || supplies < 0 || other < 0) {
        alert("Fields must only contain positive number");
        validEntries = false
    }

    if (rent > 1000000 || electricity > 1000000 || water > 1000000 || internet > 1000000 ||
        cleaning > 1000000 || food > 1000000 || supplies > 1000000 || other > 1000000) {
        alert("Fields have a maximum value of 1 000 000");
        validEntries = false
    }

    if (isNaN(rent) || isNaN(electricity) || isNaN(water) || isNaN(internet) ||
        isNaN(cleaning) || isNaN(food) || isNaN(supplies) || isNaN(other)) {
        alert("Fields can only contain numbers, please ensure no letters or special characters have been entered");
        validEntries = false
    }

    if (validEntries) {
        calculate();
    }
}

function calculate() {
    let flatmates = Number(document.getElementById('flatmates').value);
    let rent = Number(document.getElementById('rent').value);
    let electricity = Number(document.getElementById('electricity').value);
    let water = Number(document.getElementById('water').value);
    let internet = Number(document.getElementById('internet').value);
    let cleaning = Number(document.getElementById('cleaning').value);
    let food = Number(document.getElementById('food').value);
    let supplies = Number(document.getElementById('supplies').value);
    let other = Number(document.getElementById('other').value);

    let costs = rent + electricity + water + internet + cleaning + food + supplies + other;
    console.log("Total Costs = $" + costs);

    let costshare = costs / flatmates;
    console.log("Costshare = $" + costshare);

    document.getElementById("msg").innerHTML = "Each person pays:";
    document.getElementById("result").innerHTML = "$" + costshare.toFixed(2);
}

function showInstructions() {
    document.getElementById("overlay").style.display = "block";
}

function hideInstructions() {
    document.getElementById("overlay").style.display = "none";
}

function clearTextBoxes() {
    document.getElementById("myform").reset();
    document.getElementById("msg").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}
