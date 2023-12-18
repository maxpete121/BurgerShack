import BaseController from "../utils/BaseController.js";





export class BurgerController extends BaseController{
    constructor(){
        super('api/burgers')
        this.router
        .get('',this.getBurger)
        .get('/:name', )
    }

    getBurger(){
        try {
            
        } catch (error) {
            
        }
    }

    getName(){

    }
}
