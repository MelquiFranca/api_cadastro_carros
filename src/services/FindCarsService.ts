import { Car } from '../models/Car'

class FindCarsService {
    async execute({ id }) {
        const car = await Car.findOne({_id: id})

        return car
    }
}

export {
    FindCarsService
}