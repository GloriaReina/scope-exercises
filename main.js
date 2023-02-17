//scope issues: fix code to stop all the errors from being thrown.

/* original:  y < cookies.length & let x= 1: problems, y variable is out of scope & x should = 0
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let x = 0; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    //console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}*/

// original: console.log(conjoinedWord).....problem is it's inside the function so have no access

const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
    //console.log(conjoinedWord)
}

conjunction("Master", "Card")

// modSquad exercise 

   /* const modSquad = {
        members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"]
        series: {
            start: "1968",
            end: "1973"
        }
    }

    const HTMLRepresentation = `<h1>The Mod Squad</h1>`

    modSquad.members.forEach(member => {
        const HTMLRepresentation = `<div>${member}</div>`
        //console.log(HTMLRepresentation)
    })
}*/

// simon says exercise
/*const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]



for (const location of locations) {
    const invalidLocation = false

    if (location[0] > 2) {
       invalidLocation = true
    }
        
    } if (invalidLocation) {
        console.log("This location is invalid")
}
*/

//lambda llama advanced challenge: function returns a function

const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

    const namer = function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]
    }

    return name + suffix
}

nameMaker = llamaNamer()
console.log(nameMaker())
