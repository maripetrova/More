let salat = {
    Ceasar: 400,
    Olivie: 250,
}
let hotDishes = {
    Soup: 300,
    Meat: 500,
}
let garnish = {
    Cabbage: 220,
    Buchwheat: 180,
}
let drinkables = {
    Juice: 230,
    Water: 130,
}
function getNumber(max = 24, min = 9) {
  return Math.floor(Math.random() * (max - min) + min);
}
let time = getNumber();
let check = getNumber(2, 0);
if (check === 1) {
    if (time >= 12 && time <= 15) {
        let buinessLunch = {
            Soup: 150,
            Juice: 80,
            Ceasar: 150,
        }
        let check2 = getNumber(4, 1) 
    if (check2 === 1) {
        let price1 = buinessLunch.Soup + buinessLunch.Ceasar;
        console.log (`Стоимость вашего биснес ланча ${price1}`)
    } else if (check2 === 2) {
        let price2 = buinessLunch.Ceasar + buinessLunch.Juice;
        console.log (`Стоимость вашего биснес ланча ${price2}`)
    } else {
        let price3 = buinessLunch.Ceasar + buinessLunch.Soup + buinessLunch.Juice;
        console.log (`Стоимость вашего биснес ланча ${price3}`)
    }
  }
}
console.log()







