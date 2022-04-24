
function tipCalculator(bill){
    // Tip is 10% if the amount is between 50 and 300
    if (50 <= bill && bill <= 300){
        var tip = bill * 0.1;
    }

    // Else tip is 15%
    else{
        var tip = bill * 0.15;
    }

    console.log(`The bill was Rs. ${bill}, the tip was Rs. ${tip}, and the total is Rs. ${bill + tip}`);
}

tipCalculator(200);
tipCalculator(275);
tipCalculator(40);
tipCalculator(430);
