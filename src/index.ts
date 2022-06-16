import express, { Application } from 'express'

import api from './api'

const PORT: number = 8080

const app: Application = express()

app.use('/api/v1', api)

app
  .listen(PORT)
  .on('listening', () => console.log(`Listening on port ${PORT}.`))
