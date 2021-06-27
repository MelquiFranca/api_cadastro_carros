import { Car } from '../models/Car'
import { ICarService } from '../interfaces/CarInterface'

class CreateCarService {
    async execute({ 
        marca, 
        modelo, 
        versao, 
        ano, 
        quilometragem, 
        tipoCambio,
        preco,

    }: ICarService) {

        if(!marca) throw new Error('Marca incorreta.')
        if(!modelo) throw new Error('Modelo incorreto.')
        if(!versao) throw new Error('Versão incorreta.')
        if(!ano) throw new Error('Ano incorreto.')
        if(!quilometragem) throw new Error('Quilometragem incorreta.')
        if(!tipoCambio) throw new Error('Tipo de Câmbio incorreto.')
        if(!preco) throw new Error('Preço incorreto.')

        const car = new Car({
            marca, 
            modelo, 
            versao, 
            ano, 
            quilometragem, 
            tipoCambio,
            preco
        })

        await car.save()

        return car
    }
}

export {
    CreateCarService
}