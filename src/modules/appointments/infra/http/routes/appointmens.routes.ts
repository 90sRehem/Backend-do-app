import { Router } from 'express'

import EnsureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'
import AppointmentsController from '../controllers/AppointmentsControllers'

const appointmentsRouter = Router()
const appointmentsController = new AppointmentsController()

appointmentsRouter.use(EnsureAuthenticated)

appointmentsRouter.post('/', appointmentsController.create)

export default appointmentsRouter
