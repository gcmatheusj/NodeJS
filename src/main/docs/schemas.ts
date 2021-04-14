import {
  accountSchema,
  loginParamsSchema,
  errorSchema,
  surveyAnswerSchema,
  surveySchema,
  surveysSchema,
  signupParamsSchema,
  addSurveySchema,
  saveSurveyParamsSchema,
  surveyResultSchema,
  surveyResultAnswerSchema
} from './schemas/'

export const schemas = {
  account: accountSchema,
  loginParams: loginParamsSchema,
  error: errorSchema,
  surveys: surveysSchema,
  survey: surveySchema,
  surveyAnswer: surveyAnswerSchema,
  saveSurveyParams: saveSurveyParamsSchema,
  surveyResult: surveyResultSchema,
  signupParams: signupParamsSchema,
  addSurveyParams: addSurveySchema,
  surveyResultAnswer: surveyResultAnswerSchema
}
