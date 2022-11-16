import axios from "axios"

// configurando o axios, passando a URL base por onde vão passadas as requisições
const httpClient = axios.create({
  baseURL: 'http://localhost:8080'
})

class ApiService {
  constructor(apiurl) {
    this.apiurl = apiurl
  }

  // criar método post que vai recaber uma url e um objeto contendo o corpo
  // da requisição a partir do método da axios "post" vai concatenrar baseurl com os
  // parâmetro a passadoa para o metopo post da classe
  post(url, objeto) {
    const requestUrl = `${this.apiurl}${url}`
    return httpClient.post(requestUrl, objeto)
  }

  // modofica os dados em uma usuario específico com base na url e objeto passados como
  // parâmnetro para o méto put do axios
  put(url, objeto) {
    const requestUrl = `${this.apiurl}${url}`
    return httpClient.put(requestUrl, objeto)
  }

  // deletar um item na base de dados, passando somente a url, não utuliza corpo
  // para deletar um usuário
  delete(url) {
    const requestUrl = `${this.apiurl}${url}`
    return httpClient.delete(requestUrl)
  }

  // obitendo dados da api por meio de uma requisição
  get(url) {
    const requestUrl = `${this.apiurl}${url}`
    return httpClient.get(requestUrl)
  }

}

export default ApiService
