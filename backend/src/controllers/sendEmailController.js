const nodemailer = require('nodemailer')
    const user ="classroomfk49@gmail.com"
    const pass = "googlecr666"

module.exports = {
    async create(request, response) {
        const {password, email} = request.body

        const transporte = nodemailer.createTransport({
            host:"smtp.gmail.com",
            port: 587,
            auth: {user, pass},
            tls: {
                rejectUnauthorized: false
            }
        })

        try {

            transporte.sendMail({
                from: user,
                to: email,
                subject: "Senha de Acesso",
                text: `Aqui está sua senha para acessar o sistema do Eclipse Net: ${password}`
            })

            return response.json({success: true})

        }catch(err){
            return response.json(err)
        }
        

    }
}