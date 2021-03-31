const sgMail = require('@sendgrid/mail')

const API_KEY = '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'

module.exports = {
    async create(request, response) {
        const {password, email} = request.body

        sgMail.setApiKey(API_KEY)

        const message = {
            to: email,
            from: 'kaio.andersonr@gmail.com',
            subject: 'Senha de acesso',
            text: `Aqui está sua senha para acessar o sistema do Eclipse NET: ${password}`,
            html: `<p>Aqui está sua senha para acessar o sistema do Eclipse NET: ${password}</p>`
        }

        

        try {
            sgMail.send(message)
            return response.json({ success: true})

        } catch (error) {
            return response.json(message)
        }

        

    }
}