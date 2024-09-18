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

    let costshare = costs/flatmates;
    console.log("Costshare = $" + costshare);

    document.getElementById("msg").innerHTML = "Each person pays:";
    document.getElementById("result").innerHTML = "$" + costshare.toFixed(2);
}