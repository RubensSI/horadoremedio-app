import ApiService from "../apiservice"

class UsuarioService extends ApiService {
  constructor() {
    super('/api/usuarios')
  }
  autenticar(credenciais) {
    return this.post('/autenticar', credenciais)
  }

  obterUsuarioPorId(id) {
    return this.get(`/${id}/usuario`)
  }
}

export default UsuarioService
