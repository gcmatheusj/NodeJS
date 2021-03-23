import { DbAddSurvey } from './db-add-survey'
import { AddSurveyModel, AddSurveyRepository } from './db-add-account-protocols'

const makeAddSurveyRepository = (): AddSurveyRepository => {
  class AddSurveyRepositoryStub implements AddSurveyRepository {
    async add (surveyData: AddSurveyModel): Promise<void> {}
  }

  return new AddSurveyRepositoryStub()
}

const makeFakeSurveyData = (): AddSurveyModel => ({
  question: 'any_question',
  answers: [{
    image: 'any_image',
    answer: 'any_answer'
  }]
})

describe('DbAddSurvey Usecase', () => {
  it('should call AddSurveyRepository with correct values', async () => {
    const addSurveyRepositoryStub = makeAddSurveyRepository()

    const sut = new DbAddSurvey(addSurveyRepositoryStub)

    const addSpy = jest.spyOn(addSurveyRepositoryStub, 'add')

    const surveyData = makeFakeSurveyData()

    await sut.add(surveyData)

    expect(addSpy).toHaveBeenCalledWith(surveyData)
  })
})
