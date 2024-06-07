import { createAPISmart } from "./apis/createAPISmart";
import { createClientHTTP } from "./clients/createClientHTTP";

export const createApplication = async () => {
  const clientHTTP = createClientHTTP()  

  const apiSmart = createAPISmart({
    clientHTTP
  })

  return {
    apiSmart
  }
}