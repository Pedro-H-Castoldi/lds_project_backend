const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
    async create(request, response) {
        const requestImages = request.files
        const images = requestImages.map(image => {
            return { path: image.filename } 
        })

        const { name, email, RG, CPF, city, uf, district, street, number, box_number, internet_plan_id } = request.body

        const salesman_id = request.headers.authorization
        const password = crypto.randomBytes(5).toString('HEX')
        const trx = await connection.transaction() 

        const id = await trx('client').insert({ 
            name,
            email,
            password,
            RG,
            CPF,
            city,
            uf,
            district,
            street,
            number,
            box_number,
            salesman_id,
            internet_plan_id,
            images: 'sdd'
        })

        for (var i = 0; i < images.length; i++) {
            await trx('attachments').insert({
                client_id: id[0],
                url: images[i].path,
            })
        }

        await trx('contract').insert({
            salesman_id,
            client_id: id,
            internet_plan_id,
            salesmanConfirmation: true,
            clientConfirmation: false
        })

        await trx.commit()

        return response.json({ password })  
    },

    async update(request, response) {
        const { name, email, RG, CPF, city, uf, district, street, number, box_number, internet_plan_id } = request.body
        const salesman_id = request.headers.authorization
        const { id } = request.params
        
        const client = await connection('client')
        .where('id', id)
        .select('salesman_id')
        .first()

        if(client.salesman_id != salesman_id) {
            return response.status(401).json({ error: "Operation not permitted." })
        }

        await connection('client').where('id', id).update({
            name,
            email,
            RG,
            CPF,
            city,
            uf,
            district,
            street,
            number,
            box_number,
            salesman_id,
            internet_plan_id,
            
        })

        return response.json({ id })
    },
    async index(request, response) {
        const { page = 1} = request.body

        const [count] = await connection('client').count() 

        const list_client = await connection('client')
        .limit(5)
        .select('*')
        .offset((page - 1) * 5)
        .select('*')

        response.header('X-Total-Count', count['count(*)']) 
        console.log(list_client[0].images.path)

        return response.json(list_client)
    },

    async delete(request, response) {
        const { id } = request.params
        const salesman_id = request.headers.authorization

        const client = await connection('client')
        .where('id', id)
        .select('salesman_id')
        .first()

        if(client.salesman_id != salesman_id) {
            return response.status(401).json({ error: "Operation not permitted." })
        }

        await connection('client').where('id', id).delete()

        return response.status(204).send()
    }
}