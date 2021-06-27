import { Router } from 'express'
import { CreateCarController } from './controllers/CreateCarController'
import { DeleteCarController } from './controllers/DeleteCarController'
import { FindCarController } from './controllers/FindCarController'
import { ListCarController } from './controllers/ListCarController'
import { UpdateCarController } from './controllers/UpdateCarController'

const routes = Router()

const createCarController = new CreateCarController()
const listCarController = new ListCarController()
const findCarController = new FindCarController()
const updateCarController = new UpdateCarController()
const deleteCarController = new DeleteCarController()

routes.get('/cars', listCarController.handle)
routes.get('/cars/:id', findCarController.handle)
routes.post('/cars', createCarController.handle)
routes.put('/cars/:id', updateCarController.handle)
routes.delete('/cars/:id', deleteCarController.handle)

export {
    routes
}