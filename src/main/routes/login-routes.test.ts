import request from 'supertest'
import { Collection } from 'mongodb'
import { hash } from 'bcrypt'
import app from '../config/app'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'

describe('Login Routes', () => {
  let accountCollection: Collection

  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    it('should return 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Matheus',
          email: 'matheus@gmail.com',
          password: '123',
          passwordConfirmation: '123'
        })
        .expect(200)
    })
  })

  describe('POST /login', () => {
    it('should return 200 on login', async () => {
      const password = await hash('123', 12)

      await accountCollection.insertOne({
        name: 'Matheus',
        email: 'matheus@gmail.com',
        password
      })

      await request(app)
        .post('/api/login')
        .send({
          email: 'matheus@gmail.com',
          password: '123'
        })
        .expect(200)
    })

    it('should return 401 on login', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'matheus@gmail.com',
          password: '123'
        })
        .expect(401)
    })
  })
})
