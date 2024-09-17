import express from "express";

const app = express();
app.use(express.json())

app.get("/login", (req, res) => {
  const nome = "Fernado"
  res.json({
    Mensagem: `Olá, ${nome}`
  })
})

app.post("/cadastro", (req, res) => {
  const nome = req.body.nome
  const senha = req.body.senha

  res.json({
    User: `${nome}`,
    Password: senha
  })
})

app.post("/soma", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  const total = n1 + n2;

  res.json(total)
})

app.listen(3333, () => console.log("Servidor rodando..."))


