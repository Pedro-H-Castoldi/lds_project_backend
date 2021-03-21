const connection = require("../database/connection")
const crypto = require('crypto')

module.exports = {
    async create(request, response) {
        const { name, email } = request.body
        
        const password = crypto.randomBytes(5).toString('HEX')

        await connection('admin').insert({
            id,
            name,
            email,
            password,
        })

        return response.json({ id })
    }
}