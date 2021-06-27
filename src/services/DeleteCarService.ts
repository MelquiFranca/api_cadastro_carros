import { Car } from '../models/Car'

class DeleteCarService {
    async execute({ id }) {
        
        const car = await Car.findOneAndDelete({_id: id})
        return car
    }
}

export {
    DeleteCarService
}