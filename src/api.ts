import { Router, Request, Response } from 'express'

const api: Router = Router()

api.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Hello World!' })
})

export default api
