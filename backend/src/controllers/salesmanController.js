const connection = require("../database/connection")
const crypto = require('crypto')

module.exports = {
    async create(request, response) {
        const { name, email, RG, CPF, sales_goal, sales_amount, city, uf, district, street, number, admin_id } = request.body
        
        const password = crypto.randomBytes(5).toString('HEX')

        await connection('salesman').insert({
            id,
            name,
            email,
            password,
            RG,
            CPF,
            sales_goal,
            sales_amount,
            city,
            uf,
            district,
            street,
            number,
            admin_id,
        })

        return response.json({ id })
    }
}