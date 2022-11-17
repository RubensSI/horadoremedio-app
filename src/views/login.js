import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import { withRouter } from 'react-router-dom'

import { mensagemErro } from '../components/toastr'

import UsuarioService from '../app/service/usuarioService'
import LocalStorageService from '../app/service/localStorageService'

class Login extends React.Component {

  // toda vez que colocamos o cobstrutor em um componete que
  // extende um componente do react seremos obrigados a chamar
  // super classe
  constructor() {
    super()
    this.service = new UsuarioService();
  }

  state = {
    email: "",
    senha: "",
  }

  entrar = () => {
    this.service.autenticar({
      email: this.state.email,
      senha: this.state.senha
    }).then(response => {
      // criar um atributo chamado "_usuario_logado" dentro de LocalHistorage no browser
      // e passa pra ela uma string contendo dados de usuario
      LocalStorageService.adicionarItem('_usuario_logado', JSON.stringify(response.data))

      // chama a próxima tela a ser execuctada
      this.props.history.push('/home')
    }).catch(erro => {
      mensagemErro(erro.response.data)
    })
  }

  prepareCadastrar = () => {
    this.props.history.push('/cadastro-usuario')
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="bs-docs-section">
            <Card title="Login">
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">
                    <fieldset>
                      <FormGroup label="Email: *" htmlFor="exampleInputEmail">
                        <input type="email"
                          value={this.state.email}
                          // modifica o estado da variavel
                          onChange={e => this.setState({ email: e.target.value })}
                          className="form-control"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Digite o Email" />
                      </FormGroup>

                      <FormGroup label="Senha: *"
                        htmlFor="exampleInputPassword1">
                        <input type="password"
                          value={this.state.senha}
                          onChange={e => this.setState({ senha: e.target.value })}
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password" />
                      </FormGroup>

                      <button onClick={this.entrar} className="btn btn-success">Entrar</button>
                      <button onClick={this.prepareCadastrar} className="btn btn-danger">Cadastrar</button>
                    </fieldset>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

// decorator: recebe um componente como paâmetro
// e rotorna esse componente recebido com funcionalidades
// adiconais, nesse caso a navegação entre os componentes
export default withRouter(Login)
