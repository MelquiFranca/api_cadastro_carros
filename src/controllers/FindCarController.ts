import { Request, Response } from 'express'
import { FindCarsService } from '../services/FindCarsService'

class FindCarController {
    async handle(request: Request, response: Response) {
        const { id } = request.params

        const findCarService = new FindCarsService()
        const car = await findCarService.execute({ id })

        return response.json(car)
    }
}

export {
    FindCarController
}