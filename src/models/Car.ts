import mongoose from 'mongoose'
import { CarsSchema } from '../schemas/CarsSchema'

const Car = mongoose.model('Car', CarsSchema)

export { 
    Car
}