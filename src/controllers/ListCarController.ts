import { Request, Response } from 'express'
import { ListCarsService } from '../services/ListCarsService'

class ListCarController {
    async handle(request: Request, response: Response) {
        const { 
            marca,
            modelo,
            versao,
            ano,
            quilometragem,
            tipoCambio,
            preco,
        } = request.query

        const listCarService = new ListCarsService()
        const car = await listCarService.execute({ 
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
    ListCarController
}