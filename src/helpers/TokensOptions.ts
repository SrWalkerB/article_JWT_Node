import { Request } from "express"
import jwt from "jsonwebtoken"

export default new class TokenOptions{
    generatedToken(id: string){
        return jwt.sign({ id: id }, process.env.TOKEN_KEY!, { expiresIn: "5h" })
    }

    verifyToken(token: string): any{
        return jwt.verify(token, process.env.TOKEN_KEY!, (err, data) => {
            if(err){
                return { message: "invalid token" }
            }

            return { message: data }
        })
    }

    getToken(req: Request){
        return req.header("Authorization")?.replace("Bearer ", "")
    }
}