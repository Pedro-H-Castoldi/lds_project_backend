const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { price, speed } = request.body

        const [id] = await connection('internet_plan').insert({
            price,
            speed,
        })

        return response.json({ id })
    },

    async update(request, response) {
        const { id } = request.params
        const {price, speed } = request.body

        await connection('internet_plan')
        .where('id', id)
        .update({
            price,
            speed,
        })

        return response.status(204).send()
    },

    async index(request, response) {
        const {page = 1} = request.body

        const [count] = await connection('internet_plan').count()

        const list_internetPlan = await connection('internet_plan')
        .limit(5)
        .offset((page - 1) * 5)
        .select('*')

        response.header('X-Total-Count', count['count(*)'])

        return response.json(list_internetPlan)
    },

    async delete(request, response) {
        const { id } = request.params

        await connection('internet_plan').where('id', id).delete()

        return response.status(204).send()
    }
}