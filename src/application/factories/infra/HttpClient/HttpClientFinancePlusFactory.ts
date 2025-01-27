import { HttpClientAxios } from "@/infra/HttpClient/HttpClientAxios"
import { ENV } from "@/utils/env/Env"

export const makeHttpClientFinancePlusFactory = () => {
  return new HttpClientAxios({
    baseUrl: ENV.FINANCE_PLUS_BASE_URL,
  })
}
