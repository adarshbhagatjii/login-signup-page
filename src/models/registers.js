const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    
    email:{
        type: String,
        required: true
    },
    
    password:{
        type: String,
    }, 
})

// employeeSchema.methods.generateAuthToken = async function(){
//     try{
//         console.log(this._id);
//         const token = jwt.sign({id: this._id.toString()}, "mynameiskunalkumarsharmaiamdeveloper");
//         this.tokens = this.tokens.concat({token:token});
//         await this.save();
//         return token;
//     }catch(error){
//         res.send("the error part " + error);
//         console.log(error);
//     };
// }

// employeeSchema.pre("save", async function(next){
//     if (this.isModified("password")){
//         //const passwordHash = await bcrypt.hash(password, 10);
//         console.log(`the current password hash is ${this.password}`)
//         this.password = await bcrypt.hash(this.password, 10);
//         console.log(`the current password hash is ${this.password}`);
//     }
//     next();
// })

const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;