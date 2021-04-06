const sgMail = require('@sendgrid/mail')

const API_KEY = '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'

module.exports = {
    async create(request, response) {
        const {password, email} = request.body

        sgMail.setApiKey(API_KEY)

        const message = {
            to: email,
            from: 'pedrohenriquecastoldi.b@hotmail.com',
            subject: 'Senha de acesso',
            text: `Aqui está sua senha para acessar o sistema do Eclipse NET: ${password}`,
            html: `<p>Aqui está sua senha para acessar o sistema do Eclipse NET: ${password}</p>`
        }


        try {
            sgMail.send(message)
            return response.json({ success: true})

        } catch (error) {
            return response.json(message.error)
        }

        

    }
}