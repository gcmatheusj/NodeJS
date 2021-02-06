import { HtttpRequest, HttpResponse } from './http'

export interface Controller {
  handle: (httpRequest: HtttpRequest) => HttpResponse
}
