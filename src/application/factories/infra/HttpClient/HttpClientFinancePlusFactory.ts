import { HttpClientAxios } from "@/infra/HttpClient/HttpClientAxios"
import { ENV } from "@/application/utils/env/Env"

export const makeHttpClientBluefinFactory = () => {
  return new HttpClientAxios({
    baseUrl: ENV.BLUEFIN_BASE_URL,
  })
}
