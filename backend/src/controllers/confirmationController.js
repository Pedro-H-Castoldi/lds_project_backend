const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const id = request.headers.authorization

        const contract = await connection('contract').where('client_id', id).first()

        if(contract.clientConfirmation === 0) {
            return response.json(true)

        }else {
            return response.json(false)
        }
    },

    async update(request, response) {
        const {id} = request.params
        console.log(id)

        await connection('contract').where('client_id', id).update({
            clientConfirmation: 1,
        })

        return response.json({ success: true})
    },
}