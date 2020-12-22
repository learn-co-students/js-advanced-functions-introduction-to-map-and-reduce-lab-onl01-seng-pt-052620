const scores = [10, 30, 15, 25, 50, 40, 5]; 
const filteredScores = scores.filter((score)=> {
    return score > 20 
})
console.log(filteredScores)

const users = [
    {name: "Shaun", premium: true},
    {name: "Yoshi", premium: false},
    {name: "Mario", premium: false},
    {name: "Chun-Li", premium: true}
]

const premiumUsers = users.filter(user=> user.premium)
console.log(premiumUsers)

const prices = [20, 10, 30, 25, 15, 40, 80, 5]
const salePrices = prices.map((price)=>{
    return price / 2; 
})
console.log(salePrices)


const products = [
    {name: "Shaun", price: 20},
    {name: "Yoshi", price: 40},
    {name: "Mario", price: 30},
    {name: "Chun-Li", price: 10},
    {name: "Chun-Li", price: 50}
]

const saleProducts = products.map((product) => {
    if (product.price > 30){
       return {name: product.name, price: product.price / 2} 
    } else {
        return product
    }
})
console.log(saleProducts)


const newScores = [10, 20, 60, 40, 70, 90, 30]; 
const newResults = newScores.reduce((accumulator, current) => {
    if(current > 50){
        accumulator++
    }
    return accumulator
}, 0)


const gameScores = [
    {player: "Mario", score: 50},
    {player: "Yoshi", score: 30},
    {player: "Mario", score: 70},
    {player: "Crystal", score: 60}
]

const marioTotal = gameScores.reduce((accumulator, current)=> {
    if(current.player === "Mario"){
        accumulator += current.score 
    }
    return accumulator
}, 0)

console.log(marioTotal)




const findScores = [10, 5, 0, 40, 30, 10, 90, 70]
const firstHighScore = scores.find((score)=> {
    return score > 50
})

console.log(firstHighScore)

















