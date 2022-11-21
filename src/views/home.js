import React from "react"
import UsuarioService from "../app/service/usuarioService"

import LocalStorageService from "../app/service/localStorageService"

class Home extends React.Component {

  state = {
    nomeUsuario: ""
  }

  constructor() {
    super()
    this.usuarioService = new UsuarioService()
  }

  componentDidMount() {
    // recuparar os dados de usuario logado em localStorage
    // por meio da atributo _usuario_logado no formato String
    const usuarioLogado = LocalStorageService.obterItem('_usuario_logado')

    // transformar os dados de usuarioLoagadoString recebido do localHistorage em JSON =

    console.log("Usuario Logado do  localStorage > ", usuarioLogado)

    // fazer uma requisição para obter o nome do usuario loga para exiber na navbar
    // obter usuario por id
    this.usuarioService
      .obterUsuarioPorId(usuarioLogado.id)
      .then(response => {
        this.setState({ nomeUsuario: response.data })
      }).catch(error => {
        console.log(error.response)
      })
  }

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Bem vindo! <span>{this.setState.nomeUsuario}</span></h1>

        <p className="lead">Esse é seu sistema de Gerenciamneto de medicações.</p>
        <hr className="my-4" />
        <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg"
            href="https://bootswatch.com/flatly/#"
            role="button"><i className="fa fa-users"></i>
            Cadastrar Usuário
          </a>
          <a className="btn btn-danger btn-lg"
            href="https://bootswatch.com/flatly/#"
            role="button"><i className="fa fa-users"></i>
            Cadastrar Lançamento
          </a>
        </p>
      </div>
    )
  }
}

export default Home
