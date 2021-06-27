import { Request, Response } from 'express'
import { UpdateCarService } from '../services/UpdateCarService'

class UpdateCarController {
    async handle(request: Request, response: Response) {
        const { id } = request.params
        const { 
            marca,
            modelo,
            versao,
            ano,
            quilometragem,
            tipoCambio,
            preco,
        } = request.body

        const updateCarService = new UpdateCarService()
        const car = await updateCarService.execute({
            id,
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
    UpdateCarController
}