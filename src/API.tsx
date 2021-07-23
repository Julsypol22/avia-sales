import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://front-test.beta.aviasales.ru/',
})

export const ticketsAPI =  {
  getSearchId() {
    return instance.get(`search`).then((response) => {
      return response.data
    })
  },
  
  getTickets(searchId: string){
    return instance.get(`tickets?searchId=${searchId}`).then((response) => {
      return response.data
    })
  }
}