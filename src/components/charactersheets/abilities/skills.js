let warrior = {
    job: "Warrior",
    skills: {
        main: 'Strike',
        secondary: 'Block',
        special: "Taunt"
    }
}


let thief = {
    job: "Thief",
    skills: {
        main: 'Strike',
        secondary: 'Throw',
        special: "Hide"
    }
}


let mage = {
    job: "Mage",
    skills: {
        main: 'Strike',
        secondary: 'Cast',
        special: "Magic Armor"
    }
}

/* let priest = {
    job: "Healer",
    skills: {
        main: 'Strike',
        secondary: 'Heal',
        special: "Revive"
    }
}
*/
console.log(warrior, thief, mage)

let hero = {
    heroOne: warrior,
    heroTwo: thief,
    heroThree: mage,
    // heroFour = healer //
};

for (var key in hero) {
    console.log(key + " is " + hero[elements])
}

console.log(hero)