import { Request, Response} from "express";
import { validationResult } from "express-validator";


export const validarCampos= (req:Request, res:Response, next:any)=>{

    const errores= validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }

    next();

}