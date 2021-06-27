import { Car } from '../models/Car'

class ListCarsService {
    async execute({ 
        marca, 
        modelo, 
        versao, 
        ano, 
        quilometragem, 
        tipoCambio,
        preco,

    }) {
        const cars = await Car.find()
            // .where({marca})

        return cars
    }
}

export {
    ListCarsService
}