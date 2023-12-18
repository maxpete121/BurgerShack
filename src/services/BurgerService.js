import { Burger } from "../models/Burger.js"

const fakeDB = {
    Burgers: [
        new Burger({
            id: 1,
            name: 'The Menace',
            sauce: 'Mayo',
            temp: 'Medium',
            cheese: 'Swiss',
            bun: 'Wheat'
        }),
        new Burger({
            id: 2,
            name: 'Big Paul',
            sauce: 'Mustard',
            temp: 'Rare',
            cheese: 'Cheddar',
            bun: 'Pretzel'
        })
    ]
}

class BurgerService{

    getBurger(){
        const burgers = fakeDB.Burgers
        return burgers
    }

    makeBurg(payload){
       const newBurger = payload
    newBurger.id = fakeDB.Burgers[fakeDB.Burgers.length -1].id + 1 
    fakeDB.Burgers.push(newBurger)
    }
}


export const burgerService = new BurgerService()