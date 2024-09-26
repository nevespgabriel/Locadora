import User from "../models/user_model.js";

const signup = async (req, res) => {
    try{
        const user = await User.create({
            email: req.body.email,
            password: req.body.password,
            nickname: req.body.nickname,
        });
        const token = jwtService.generateAccessToken(user);
        res.status(201).json(token);
    } catch(error){
        res.status(400).send(error.message);
    }
}

const login = async (req, res) => {
    try{
        const user = await User.findOne({
            email: req.body.email
        }).exec();

        if(!user || !(await user.isValidPassword(req.body.password))){
            res.status(404).json({
                error: "Email or password incorrect"
            })
        } else{
            const token = jwtService.generateAccessToken(user);
            res.json(token);
        }
    } catch(error){
        res.status(400).send(error.message)
    }
}

export default {
    signup,
    login
}