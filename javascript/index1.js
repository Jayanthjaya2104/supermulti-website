// console.log("Hello world!!!")
// //strings
// const myvariables="mathematics";

// // the length property 
// console.log("jayanth YR from yelerampura".length) //disply length of the given string

// // string methods
// console.log(myvariables.charAt(3)); // disply h  (mathematics)
// // if statement

// let soup=("chiken noodle soup");
// let reply;
// if (soup){
//     reply=`here's your order is ${soup}`;
// }
// console.log(reply);



//@version=5
strategy("Moving Average Crossover", overlay=true)

// Define the length of the moving averages
var shortLength = input(10, "Short EMA Length")
var longLength = input(20, "Long EMA Length")

// Calculate the moving averages
var shortEMA = ta.ema(close, shortLength)
var longEMA = ta.ema(close, longLength)

// Generate buy and sell signals
var buySignal = ta.crossover(shortEMA, longEMA)
var sellSignal = ta.crossunder(shortEMA, longEMA)

// Plot the moving averages
plot(shortEMA, { color: color.blue, title: "Short EMA" })
plot(longEMA, { color: color.red, title: "Long EMA" })

// Plot buy and sell signals
plotshape(buySignal, { title: "Buy Signal", location: location.belowbar, color: color.green, style: shape.labelup, text: "BUY" })
plotshape(sellSignal, { title: "Sell Signal", location: location.abovebar, color: color.red, style: shape.labeldown, text: "SELL" })

// Execute trades based on the signals
if (buySignal)
    strategy.entry("Buy", strategy.long)
if (sellSignal)
    strategy.close("Buy")

// Set the plot window range
var scale = input(1, "Scale", options: ["Stock", "Currency", "Forex"])
study(title = "Window Scale", shorttitle = "Window Scale")
if (scale == "Stock")
    study("Stock")
if (scale == "Currency")
    study("Currency")
if (scale == "Forex")
    study("Forex")