import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
        
    }
    ,
    message: {
        type: String,
        require:true
    }
})
export default mongoose.model("User", userSchema);