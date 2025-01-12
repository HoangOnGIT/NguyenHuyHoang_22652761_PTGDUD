//b1


console.warn("coding challenge 1");
var mark_height = 1.69
var mark_mass = 78

var john_height = 1.95
var john_mass = 92

function BMI(height, mass) {
    return (mass / (height * height))
}

let markBMI = BMI(mark_height, mark_mass)
let johnBMI = BMI(john_height, john_mass)


let markHigherBMI = markBMI > johnBMI

console.log("Mark BMI : ", markBMI);
console.log("John BMI : ", johnBMI);



console.log("Mark higher BMI : ", markHigherBMI)

console.warn("coding challenge 2 ")

console.log(markHigherBMI ? "Mark's BMI is higher" : "John's BMI is higher");


console.log(markHigherBMI ? `Mark's BMI (${markBMI}) is higher ` : `John's BMI (${johnBMI}) is higher`)

console.warn("coding challenge 3 ")

function avg(arr) {
    return arr.reduce((curr, prev) => curr + prev) / arr.length
}

{
    dolphins = [96, 108, 89]
    koalas = [88, 91, 110]

    trophy = 0;
    if (avg(dolphins) > avg(koalas)) trophy = 1;
    else if (avg(dolphins) < avg(koalas)) trophy = 2;

    if (trophy === 1) console.log("Trophy belongs to dolphins");

    if (trophy === 0) console.log("Its a draw");

    if (trophy === 2) console.log("Trophy belongs to koalas");
}

{
    dolphins = [97, 112, 101]
    koalas = [109, 95, 123]

    trophy = 0;
    if (avg(dolphins) > avg(koalas)) trophy = 1;
    else if (avg(dolphins) < avg(koalas)) trophy = 2;

    if (trophy === 1) console.log("Trophy belongs to dolphins");

    if (trophy === 0) console.log("Its a draw");

    if (trophy === 2) console.log("Trophy belongs to koalas");
}

{
    dolphins = [97, 112, 101]
    koalas = [109, 95, 106]

    trophy = 0;
    if (avg(dolphins) > avg(koalas)) trophy = 1;
    else if (avg(dolphins) < avg(koalas)) trophy = 2;

    if (trophy === 1) console.log("Trophy belongs to dolphins");

    if (trophy === 0) console.log("Its a draw");

    if (trophy === 2) console.log("Trophy belongs to koalas");
}


console.warn("coding challenge 4");


{
    function tip(total_bill) {
        if (total_bill >= 50 && total_bill <= 300) return 0.15 * total_bill;
        else return total_bill * 0.2;
    }

    var total_bill = 275;
    console.log(`The bill was ${total_bill}, the tip was ${tip(total_bill)}, the total value was ${total_bill + tip(total_bill)}`);
    var total_bill = 40;
    console.log(`The bill was ${total_bill}, the tip was ${tip(total_bill)}, the total value was ${total_bill + tip(total_bill)}`);
    var total_bill = 430;
    console.log(`The bill was ${total_bill}, the tip was ${tip(total_bill)}, the total value was ${total_bill + tip(total_bill)}`);
}

console.warn("Part 2");
console.warn("Coding challenge 1");

var calcAverage = (arr) => { return arr.reduce((curr, prev) => curr + prev) / arr.length }
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > 2 * avgKoalas) console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    else if (avgKoalas > 2 * avgDolphins) console.log(`Dolphins win (${avgKoalas} vs ${avgDolphins})`);
    else console.log("No  team wins!");
}

{
    dolphins = [44, 23, 71]
    koalas = [65, 54, 49]
    console.log("Data 1: ");
    console.log("Avg Dolphins: ", calcAverage(dolphins), "Avg Koalas: ", calcAverage(koalas));
    checkWinner(calcAverage(dolphins), calcAverage(koalas))
}


{
    dolphins = [85, 54, 41]
    koalas = [23, 34, 27]
    console.log("Data 2: ");
    console.log("Avg Dolphins: ", calcAverage(dolphins), "Avg Koalas: ", calcAverage(koalas));
    checkWinner(calcAverage(dolphins), calcAverage(koalas))
}

console.warn("coding challenge 2");

function tip(total_bill) {
    if (total_bill >= 50 && total_bill <= 300) return 0.15 * total_bill;
    else return total_bill * 0.2;
}

{
    bills = [125, 555, 44]
    tips = [];

    bills.map((bill, index) => tips[index] = tip(bill))

    console.log(tips);
}


console.warn("coding challenge 3");

const Mark = {
    name: "Mark Miller",
    height: 1.69,
    mass: 78
}

const John = {
    name: "John Smith",
    height: 1.95,
    mass: 92
}


function calcBMI(obj) {
    let BMI = obj.mass / (obj.height * obj.height)
    obj.BMI = BMI;
    return BMI;
}

{
    calcBMI(Mark)
    calcBMI(John)

    if (calcBMI(Mark) > calcBMI(John)) console.log(Mark);
    else if (calcBMI(John) > calcBMI(Mark)) console.log(John);
    else console.log("Even");

    const higher = Mark.BMI >= John.BMI ? Mark : John
    console.log(`${higher.name}'s BMI ${higher.BMI} is higher`);
}

console.warn("coding challenge 4");

{
    bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
    tips = []
    totals = []

    bills.map((bill, index) => {
        tips[index] = tip(bill)
        totals[index] = tips[index] + bill
    })
    console.log(tips);
    console.log(totals);
}
console.log("Developer Skills & Editor Setup");

{
    arrForecast = [17,21,23]
    function printForecase(arr) {
        arr.map((temp, index) =>console.log(`${temp}oC in ${index +1 } days`))
    }
    printForecase(arrForecast)

}


