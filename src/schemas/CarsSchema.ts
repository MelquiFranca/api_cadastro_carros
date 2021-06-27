import { Schema, SchemaTypes } from 'mongoose'

const CarsSchema = new Schema({
    marca: SchemaTypes.String,
    modelo: SchemaTypes.String,
    versao: SchemaTypes.String,
    ano: SchemaTypes.Number,
    quilometragem: SchemaTypes.Number,
    tipoCambio: SchemaTypes.String,
    preco: SchemaTypes.Number,
})

export {
    CarsSchema
}