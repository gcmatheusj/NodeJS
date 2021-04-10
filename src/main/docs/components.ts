import { apiKeyAuthSchema } from './schemas/'
import {
  badRequest,
  unauthorizedError,
  serverError,
  notFound,
  forbidden
} from './components/'

export const components = {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest,
  unauthorizedError,
  serverError,
  notFound,
  forbidden
}
