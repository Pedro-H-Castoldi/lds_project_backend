const connection = require("../database/connection")

module.exports = {
    async index(request, response) {
        const admin_id = request.headers.authorization

        const salesman = await connection('salesman')
        .where('admin_id', admin_id)
        .select('*')

        return response.json(salesman)
    }
}