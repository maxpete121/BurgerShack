import { response } from "express";
import { burgerService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";
import { Burger } from "../models/Burger.js";





export class BurgerController extends BaseController{
    constructor(){
        super('api/burgers')
        this.router
        .get('',this.getBurger)
        .post('', this.makeBurg)
        .put('/:burgId', this.editBurg)
        .delete('/:burgId', this.deleteBurg)
    }

    getBurger(request, response, next){
        try {
            const burger = burgerService.getBurger()
            response.send(burger)
        } catch (error) {
            next(error)
        }
    }

    makeBurg(request, response, next){
        try {
            const payload = request.body 
            const burg = burgerService.makeBurg(payload)
            response.send(burg)
        } catch (error) {
            next(error)
        }
        }

        deleteBurg(request, response, next){
            try {
                const burgId = request.params.burgId
                const message = burgerService.deleteBurg(burgId)
                response.send(message)
            } catch (error) {
                next(error)
            }
        }

        editBurg(request, response, next){
            try {
                const burgId = request.params.burgId
                const payload = request.body
                const message = burgerService.editBurg(burgId, payload)
                response.send(message)         
            } catch (error) {
                next(error)
            }
        }
    }
