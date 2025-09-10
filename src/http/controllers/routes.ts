import { FastifyInstance } from 'fastify'
import { register } from './register.controller'
import { authenticate } from './authenticate.controller'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)

  app.post('/sessions', authenticate)
}
