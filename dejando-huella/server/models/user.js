import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    contrasena: String,
    celular: String,
    genero: String
})

const model = mongoose.model("userCreate", userSchema);

export default model;