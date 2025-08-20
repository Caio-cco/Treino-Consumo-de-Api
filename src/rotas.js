import testeController from './controller/testeController.js'


export function adicionarRotas(api){
   api.use(testeController);
}