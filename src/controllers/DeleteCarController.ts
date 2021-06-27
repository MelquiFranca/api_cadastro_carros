import { Request, Response } from 'express'
import { DeleteCarService } from '../services/DeleteCarService'

class DeleteCarController {
    async handle(request: Request, response: Response) {
        const { id } = request.params
        const deleteCarService = new DeleteCarService()
        const car = await deleteCarService.execute({ id })
        return response.json(car)
    }
}

export {
    DeleteCarController
}