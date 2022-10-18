import React from "react"
import axios from "axios"



class Home extends React.Component {

  state = {
    nomeUsuario: ""
  }

  componentDidMount() {
    // recuparar usuario logado no localStorage
    const usuarioLogadoString = localStorage.getItem('-usuario_logado')
    // transformar objeto recebido do localHistorage em json
    const usuarioLogado = JSON.parse(usuarioLogadoString)

    // fazer uma requisição para obter o nome do usuario loga para exiber na navbar
    // obter usuario por ai
    axios.get(`http://localhost:8080/api/usuarios/${usuarioLogado}/usuario`)
      .then(response => {
        this.setState({nomeUsuario: response.data})
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
