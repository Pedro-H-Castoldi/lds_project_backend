const connection = require("../database/connection")
const crypto = require('crypto')

module.exports = {
    async create(request, response) {
        const { name, email, RG, CPF, sales_goal, sales_amount, city, uf, district, street, number } = request.body
        const admin_id = request.headers.authorization
        
        const password = crypto.randomBytes(5).toString('HEX')

        const [id] = await connection('salesman').insert({
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
        });

        return response.json({ id })
    },

    async index(request, response) {
        const list_saleman = await connection('salesman').select('*')

        return response.json(list_saleman)
    },

    async delete(request, response) {
        const { id } = request.params
        const admin_id = request.headers.authorization

        const salesman = await connection('salesman')
        .where('id', id)
        .select('admin_id')
        .first()

        if(salesman.admin_id != admin_id) {
            return response.status(401).json({ error: "Operation not permitted." })
        }

        await connection('salesman').where('id', id).delete()

        return response.status(204).send()
    }
}