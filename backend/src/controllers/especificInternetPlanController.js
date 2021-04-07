const connection = require('../database/connection')

module.exports = {
    async show(request, response) {
        const id = request.headers.authorization
        console.log(id)

        const plan = await connection('internet_plan').where('id', id).first()

        return response.json(plan)
    },
}