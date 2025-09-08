import fastify from 'fastify'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'teste',
    email: 'gustavodnz035@gmail.com',
  },
})

export const app = fastify()
