import type { AxiosError } from 'axios'
import axios from 'axios'

export type TClientHTTP = ReturnType<typeof axios.create> & {
  isHTTPClientError: typeof axios.isAxiosError,
}
export type TClientHTTPError = AxiosError

export const createClientHTTP = () => {
  const axiosInstance = axios.create({})

  ;(axiosInstance as TClientHTTP).isHTTPClientError = axios.isAxiosError

  return axiosInstance as TClientHTTP
}
