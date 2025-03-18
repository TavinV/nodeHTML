import express from "express";
const app = express();

// Rotas para servir as páginas

app.use(express.static('public'))
app.listen(3000, () =>{
    console.log(`Servidor ativo em: http://localhost:3000`)
})

