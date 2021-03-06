import { Middleware } from '@/presentation/protocols'
import { AuthMiddleware } from '@/presentation/middlewares/auth-middleware'
import { makeDbLoadAccountByToken } from '@/main/factories/use-cases/account/load-account-by-token/db-load-account-by-token-factory'

export const makeAuthMiddleare = (role?: string): Middleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken(), role)
}
