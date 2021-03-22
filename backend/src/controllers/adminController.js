const connection = require("../database/connection")
const crypto = require('crypto')

module.exports = {
    async create(request, response) {
        const { name, email } = request.body
        
        const password = crypto.randomBytes(5).toString('HEX')

        const [id] = await connection('admin').insert({
            name,
            email,
            password,
        });

        return response.json({ id })
    },

    async index(request, response) {
        const admins = await connection('admin').select('*')

        return response.json(admins)
    }
}