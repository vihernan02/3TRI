const mongoose = require('mongoose')

const conexão = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://Victor:020506@cluster0.xtl46.mongodb.net/html5up')
}

const modelo = mongoose.Schema({
    estilo:String,
    imagem:String,
    titulo:String,
    texto:String,
    publicado:{type:Date, default:Date.now}
})

const conteudo = mongoose.model('conteudo',modelo)

module.exports = {conexao, conteudo}