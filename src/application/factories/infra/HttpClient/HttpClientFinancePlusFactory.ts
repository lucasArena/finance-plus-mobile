import { HttpClientAxios } from "@/infra/HttpClient/HttpClientAxios"
import { ENV } from "@/application/utils/env/Env"

export const makeHttpClientFinancePlusFactory = () => {
  return new HttpClientAxios({
    baseUrl: ENV.FINANCE_PLUS_BASE_URL,
  })
}
