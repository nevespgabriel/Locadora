import User from "../models/user_model.js";

const signup = async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.status(201).json(user);
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
            res.json(user);
        }
    } catch(error){
        res.status(400).send(error.message)
    }
}

export default {
    signup,
    login
}