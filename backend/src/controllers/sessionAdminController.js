const connection = require("../database/connection")

module.exports = {
    async create(request, response) {
        const { email, password } = request.body

        const admin = await connection('admin')
        .select('*')
        .where('email', email)
        .first()

        if(!admin) {
            return response.status(400).json({ error: 'No admin found with this email.' })
        }
        if(admin.password != password) {
            return response.status(400).json({ error: 'Invalid password.'})
        }

        return response.json(admin.id)
    }
}