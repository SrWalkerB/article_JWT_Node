import { Request, Response } from "express"
import TokensOptions from "../helpers/TokensOptions"

const fakeDatabase = {
    id: "1sdfaafcaasdsd-daxcasdasd-dasdasd",
    email: "any_email@gmail.com",
    password: "any_password",
}

export default new class UserControllers{
    auth(req: Request, resp: Response){
        try {
            const { email, password } = req.body

            if(email != fakeDatabase.email || password != fakeDatabase.password){
                return resp.status(404).json({  message: "user not found" })
            }

            const token = TokensOptions.generatedToken(fakeDatabase.id)
            return resp.status(200).json({ message: token })
        } catch (error) {
            console.log(error)
            return resp.status(500).json({ message: "error not expect" })
        }
    }

    profile(req: Request, resp: Response){
        try {
            const token = req.header("Authorization")
            const { id } = TokensOptions.verifyToken(token!?.replace("Bearer ", "")).message

            return resp.status(200).json({ message: `my profile: ${id}` })
        } catch (error) {
            console.log(error)
            return resp.status(500).json({ message: "error not expect" })
        }
    }
}