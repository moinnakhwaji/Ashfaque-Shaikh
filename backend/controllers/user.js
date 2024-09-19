import User from "../models/user.js";

export const CreateUser = async (req,res)=>{
    try {
        const { name, email, message } = req.body;
        const newUser = new User({ name, email, message });
        await newUser.save();
        res.status(201).json({ success: true, user: newUser });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
    };




