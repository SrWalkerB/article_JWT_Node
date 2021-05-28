import jwt from "jsonwebtoken"

export default new class TokenOptions{
    generatedToken(payload: string){
        return jwt.sign({ payload }, process.env.TOKEN_KEY!, { expiresIn: "5h" })
    }

    verifyToken(token: string): any{
        return jwt.verify(token, process.env.TOKEN_KEY!, (err) => {
            if(err){
                return { message: "invalid token" }
            }
            return { message: "success" }
        })
    }
}