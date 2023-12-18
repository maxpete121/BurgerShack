import { Burger } from "../models/Burger.js"

const fakeDB = {
    Burgers: [
        new Burger({
            id: 1,
            name: 'The Menace',
            price: 7.99,
            sauce: 'Mayo',
            temp: 'Medium',
            cheese: 'Swiss',
            bun: 'Wheat'
        }),
        new Burger({
            id: 2,
            name: 'Big Paul',
            price: 8.99,
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

    deleteBurg(burgId){
        const burgR = fakeDB.Burgers.findIndex(burg => burg.id == burgId)
        if(!fakeDB.Burgers[burgR]) throw new Error(`No Burger found at id ${burgId}`)
        fakeDB.Burgers.splice(burgR, 1)
    return`Burger Eaten`
    }

    editBurg(burgId, payload){
        const burgP = fakeDB.Burgers.findIndex(burg => burg.id == burgId)
        const changeBurg = payload
        fakeDB[burgP] = changeBurg
        return`Burger Modded`
    }
}


export const burgerService = new BurgerService()