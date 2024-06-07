import { TClientHTTP } from "../clients/createClientHTTP";

export const createAPISmart = ({
  clientHTTP,
}:{
  clientHTTP: TClientHTTP,
}) => {
   const login = async ({
    email, 
    password
   }: {
    email: string,
    password: string
   }) => {
    try {
      const response = await clientHTTP.post('/login', {
        email, 
        password
      })

      return response.data
    } catch (error) {
      throw error
    }
   }

   const getPlants = async ({
    companyId
   }: {
    companyId: number 
   }) => {
    try {
      const response = await  clientHTTP.get('/plants?companyId=' + companyId)

      return response.data
    } catch (error) {
      throw error
    }
   }

   return {
    login, 
    getPlants
  }
} 