/* ok so a random phrase generator*/

//reqs: meach msg made of 3 bits of data

function r(){return Math.floor(Math.random()*7)}
//thats the random number function

// lets make an object, array & switch statement

const myObj = {name: "TommyFatFingers",
                    health_status: "Fat Bastard",
                    crypto_portfolio: "massive",
                    age: 100,
                    faveFood: "marmite"}

const keys = Object.keys(myObj)
const prop = keys[Math.floor(Math.random()* keys.length)]

//return this as a string
//console.log(prop + " is " + myObj[prop] )

const myArr = ['England', 'Algeria', 'France', 'Brazil', 'Germany', 'Scotland', 'Wales']



let final = ''
switch (r()){
case 0: 
    final = 'The weather will be ok today'
    break;
case 1:
    final = 'The weather will be lovely and rainy'
    break;
case 2: 
    final = 'The ground will open up and swallow you'
    break;
case 3:
    final = 'Aliens have been scheming with the dolphins and now they are taking over the world'
    break;
case 4:
    final = 'you will be allergic to peanuts today'
    break;
case 5:
    final = 'the ozone will finally give up and teh sun will bake you alive'
    break;
case 6:
    final = "yippity doo dah it'll be a wonderful day"
    break;
default:
    final = "something went wrong"
}

//console.log(final)

console.log(`In todays random message, I am convinced that my ${prop} is ${myObj[prop]}`)
//could of pushed each bit into an array to break it up if just returning one bit of data from
//the whole script 
console.log(`I also predict that ${myArr[r()]} will win the world cup this year`)
console.log(`And finally, i hope that ${final}`)