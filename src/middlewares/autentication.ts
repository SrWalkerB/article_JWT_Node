import { Request, Response, NextFunction } from "express"
import TokensOptions from "../helpers/TokensOptions"

const autentication = (req: Request, resp: Response, next: NextFunction) => {
    const token = TokensOptions.getToken(req)
    const verifyToken = TokensOptions.verifyToken(token!)

    if(!token || verifyToken.message == "invalid token"){
        return resp.status(401).json({ message: "Unauthorized" })
    }
    
    next()
}

export  {
    autentication
}