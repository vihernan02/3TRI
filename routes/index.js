module.exports = (app)=>{
    //definir a resposta para a req '/'
    app.get('/',(req,res)=>{
        res.render('index.ejs')
    })
} 