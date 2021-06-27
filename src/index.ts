import { app } from "./server"

app.listen(process.env.PORT, () => {
    console.log("Servidor iniciado na porta 3000")
})
