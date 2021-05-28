import { Request, Response, NextFunction } from "express"
import TokensOptions from "../helpers/TokensOptions"

const autentication = (req: Request, resp: Response, next: NextFunction) => {
    const token = req.header("Authorization")!.replace("Bearer ", "")
    const verifyToken = TokensOptions.verifyToken(token)

    if(verifyToken.message != "success"){
        return resp.status(401).json({ message: "Unauthorized" })
    }
    
    next()
}

export  {
    autentication
}