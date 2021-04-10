import { loginPath, surveyPath, signupPath } from './paths'
import { apiKeyAuthSchema, accountSchema, loginParamsSchema, errorSchema, surveyAnswerSchema, surveySchema, surveysSchema, signupParamsSchema, addSurveySchema } from './schemas'
import { badRequest, unauthorizedError, serverError, notFound, forbidden } from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'API do curso do Mango para realizer enquetes entre programadores.',
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GRL-3.0-or-later.html'
  },
  servers: [
    {
      url: '/api'
    }
  ],
  tags: [
    {
      name: 'Login'
    },
    {
      name: 'Enquete'
    }
  ],
  paths: {
    '/login': loginPath,
    '/signup': signupPath,
    '/surveys': surveyPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema,
    surveys: surveysSchema,
    survey: surveySchema,
    surveyAnswer: surveyAnswerSchema,
    signupParams: signupParamsSchema,
    addSurveyParams: addSurveySchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    unauthorizedError,
    serverError,
    notFound,
    forbidden
  }
}
