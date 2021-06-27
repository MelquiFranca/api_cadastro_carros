import { Car } from '../models/Car'
import { ICarService } from '../interfaces/CarInterface'

class UpdateCarService {
    async execute({
        id, 
        marca, 
        modelo, 
        versao, 
        ano, 
        quilometragem, 
        tipoCambio,
        preco,

    }: ICarService) {

        if(!id) throw new Error('Id incorreto.')
        if(!marca) throw new Error('Marca incorreta.')
        if(!modelo) throw new Error('Modelo incorreto.')
        if(!versao) throw new Error('Versão incorreta.')
        if(!ano) throw new Error('Ano incorreto.')
        if(!quilometragem) throw new Error('Quilometragem incorreta.')
        if(!tipoCambio) throw new Error('Tipo de Câmbio incorreto.')
        if(!preco) throw new Error('Preço incorreto.')

        const car = await Car.findOneAndUpdate({_id: id}, {
            marca, 
            modelo, 
            versao, 
            ano, 
            quilometragem, 
            tipoCambio,
            preco
        })

        return car
    }
}

export {
    UpdateCarService
}