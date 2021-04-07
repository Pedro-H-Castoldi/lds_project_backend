const connection = require('../database/connection')

module.exports = {
    async show(request, response) {
        const id = request.headers.authorization
        console.log(id)

        const client = await connection('client').where('id', id).first()

        return response.json(client)
    },
}