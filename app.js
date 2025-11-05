/*const age = 35;
const citizen = true;
// 2 equals evaulates and ignore type
// if 1 == "1"
// 3 equals evaluates and compares type
//if 1 == "1"

if (age === true && citizen === true) {
}

const age = 18;
if (age>=18) {
    console.log("vote");
} else {
    console.log("no vote")
}

const temp 32;
if (temp>=212) {
    console.log("boil");
} else if (temp<=32){
    console.log("frozen");
} else {
console.log("water");
}

function enterCastle(hasKey, hasMagic, isBanned){
    if((hasKey === true || hasMagic) || !isBanned) {
        console.log("can eneter castle"); 
    } else {
    console.log("cannot enter");
    }
}
enterCastle(true, true, true,);


function whichbowlmiddle(a, b, c) {
    if ((a > b && a < c) || (a < b && a > c)) return a;
    if ((b > a && b < c) || (b < a && b > c)) return b;
    else return c;
}
console.log(whichbowlmiddle(10, 5, 8))

function telemarketer(a,b,c,d) {
if(
     (a === 8 || a === 9)
     &&
     (b === c)
     &&
     (d === 8 || d === 9)
)
    { return "ignore";
 } else {
     return "answer";
 }
}
console.log(telemarketer(9,6,6,8))  

function engORfrench(num, ...sentences){
    let s = 0;
    let t = 0;
    for (let i = 0; i < num; i++) {
        for(let j =0; j < sentences[i].length; j++){
            

        if(sentences[i][j] === "S" || sentences[i][j] === "s") {
            s++;
        } if(sentences[i][j] === "T" || sentences[i][j] === "t") {
            t++;
        }
        }
            
        }
       

if (s > t) {
    console.log ("probably french")
} else if (t > s){
    console.log("probably english")
} else {
    console.log("probably french")
}
    
}
engORfrench(3, "The red cat sat on the mat.", "Why are you so sad cat?", "Don't ask that.");

function parkingspace(y,t){
    for (let i= 0; i < y.length; i++){
        console.log(y[i], t[i]);
        if (y[i] === "C" && t[i] === "C")
    }
}
parkingspace("CC..C.CC..")

function whohaswand (start, num, ...duels){
    for()
}
console.log

function total(cart) {
  let total = 0;
  cart.forEach((item) => {
    if (item.price < 5) {
      total += item.quanity * item.price * 0.095;
    } else {
      total += item.quanity * item.price;
    }
  });
  if (total > 100) {
    total = total * 0.9;
  }
  return total;
} */

const dnsrecords = [
  { address: "amazon.com", dns: "205.251.242.103" },
  { address: "apple.com", dns: "17.253.144.10" },
  { address: "bbc.com", dns: "151.101.64.81" },
  { address: "chat.openai.com", dns: "104.18.12.123" },
  { address: "cnn.com", dns: "151.101.1.67" },
  { address: "discord.com", dns: "162.159.137.232" },
  { address: "github.com", dns: "140.82.113.3" },
  { address: "google.com", dns: "142.250.72.14" },
  { address: "instagram.com", dns: "157.240.229.174" },
  { address: "microsoft.com", dns: "40.113.200.201" },
  { address: "netflix.com", dns: "52.41.250.12" },
  { address: "nasa.gov", dns: "198.49.245.141" },
  { address: "nytimes.com", dns: "151.101.1.164" },
  { address: "reddit.com", dns: "151.101.1.140" },
  { address: "roblox.com", dns: "128.116.114.3" },
  { address: "stanford.edu", dns: "171.67.215.200" },
  { address: "youtube.com", dns: "142.250.190.46" },
];

const min = dnsrecords[0];
const max = dnsrecords[dnsrecords.length - 1];
