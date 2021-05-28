import { Request, Response, NextFunction } from "express"
import TokensOptions from "../helpers/TokensOptions"

const autentication = (req: Request, resp: Response, next: NextFunction) => {
    const token = req.header("Authorization")

    if(!token){
        return resp.status(401).json({ message: "Unauthorized" })
    }

    const verifyToken = TokensOptions.verifyToken(token.replace("Bearer ", ""))

    if(verifyToken.message == "invalid token"){
        return resp.status(401).json({ message: "Unauthorized" })
    }
    
    next()
}

export  {
    autentication
}