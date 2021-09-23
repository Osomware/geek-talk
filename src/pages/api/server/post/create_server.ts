import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/Prisma'

interface Server {
  name: String
  date: Date
  userId: String
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Server>) {
  const server_name = req.body.server_name
  const user_id = req.body.user_id
  const date = new Date()
  const create_server = await prisma.server.create({
    data: {
      name: server_name,
      date: date,
      userId: user_id
    }
  })
  res.status(200).json(create_server)
}