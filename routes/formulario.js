const {conexao, conteudo} = require('../config/database')

module.exports = (app)=>{
    app.get('./formulario',(req,res)=>{
        res.render('formulario.ejs')
    })

    app.post('formulario',async(req,res)=>{
        const bode = req.body
        conexao()
        const documento = await new conteudo({
            estilo:bode.estilo,
            imagem:bode.imagem,
            titulo:bode.titulo,
            texto:bode.texto
        }).save()
        res.redirect('/formulario')
    })
}