const age = 35;
const citizen = true;
// 2 equals evaulates and ignore type
// if 1 == "1"
// 3 equals evaluates and compares type
//if 1 == "1"

if (age === true && citizen === true) {

}

/*const age = 18;
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
console.log(telemarketer(9,6,6,8)) */

function engORfrench(num, ...lines)