import { loginPath, surveyPath, signupPath, surveyResultPath } from './paths/'

export const paths = {
  '/login': loginPath,
  '/signup': signupPath,
  '/surveys': surveyPath,
  '/surveys/{surveyId}/results': surveyResultPath
}
