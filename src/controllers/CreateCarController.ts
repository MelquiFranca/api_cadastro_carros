import { Request, Response } from 'express'
import { CreateCarService } from '../services/CreateCarService'

class CreateCarController {
    async handle(request: Request, response: Response) {
        const { 
            marca,
            modelo,
            versao,
            ano,
            quilometragem,
            tipoCambio,
            preco,
        } = request.body

        const createCarService = new CreateCarService()
        const car = await createCarService.execute({ 
            marca,
            modelo,
            versao,
            ano,
            quilometragem,
            tipoCambio,
            preco,
        })

        return response.json(car)
    }
}

export {
    CreateCarController
}