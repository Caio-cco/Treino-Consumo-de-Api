import { Router } from "express";


const api = Router()

api.get('/calculadora/somar/:n1/:n2', (req, resp) =>{
   
let num1 = Number(req.params.n1);
let num2 = Number(req.params.n2);
 
let total = num1 + num2 

resp.send({total})

})

export default api;