import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'backend', timestamp: new Date().toISOString() })
})

app.get('/api/v1/hello', (_req, res) => {
  res.json({ message: 'Hello from DevOps Backend 👋' })
})

const port = process.env.PORT || 3000
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on http://localhost:${port}`))
}

export default app