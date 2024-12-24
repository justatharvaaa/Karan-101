import User from '../model/model.js'
export const create = async (req,res) => {
    
    const { name, email, message } = req.body
    await User.create({
        name,email,message
    })
    res.send("Success")
}