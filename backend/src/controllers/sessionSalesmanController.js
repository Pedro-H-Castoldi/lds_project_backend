const connection = require("../database/connection")

module.exports = {
    async create(request, response) {

        const { email, password } = request.body

        const salesman = await connection('salesman')
        .select('*')
        .where('email', email)
        .first()

        if(!salesman) {
            return response.status(400).json({error: "No salesman found with this email"})
        }
        if(salesman.password != password) {
            return response.status(400).json({error: "Invalid password"})
        }
        return response.json(salesman.id)
    }
}