import React from "react"

import Card from "../components/card"
import FormGroup from "../components/form-group"
import TelefoneBrasileiroInput from "react-telefone-brasileiro";
import { withRouter } from "react-router-dom";

class CadastroUsario extends React.Component {

  state = {
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    senhaRepeticao: ""
  }

  cadastrar = () => {
    console.log(this.state)
  }

  cancelar = () => {
    this.props.history.push('/login')
  }

  render() {
    return (
      <Card title="Cardastro de Usuario">
        <div className="row">
          <div className="col-lg-12">
            <div className="bs-component">
              <FormGroup label="Nome: *" htmlFor="inputNome">
                <input type="text"
                  id="inputNome"
                  className="form-control"
                  name="nome"
                  value={this.state.nome}
                  onChange={e => this.setState({ nome: e.target.value })} />
              </FormGroup>

              <FormGroup label="Email: *" htmlFor="inputEmail">
                <input type="email"
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })} />
              </FormGroup>

              <FormGroup label="Telefone: *" htmlFor="inputTelefone">
                <TelefoneBrasileiroInput type="text"
                  id="inputTelefone"
                  className="form-control"
                  value={this.state.telefone}
                  onChange={e => this.setState({ telefone: e.target.value })}
                  separaNono
                  temDDD
                  separaDDD
                />
              </FormGroup>

              <FormGroup label="Senha: *" htmlFor="inputSenha">
                <input type="password"
                  id="inputSenha"
                  className="form-control"
                  name="senha"
                  value={this.state.senha}
                  onChange={e => this.setState({ senha: e.target.value })} />
              </FormGroup>

              <FormGroup label="Repita a Senha: *" htmlFor="inputSenhaRepeticao">
                <input type="password"
                  id="inputSenhaRepeticao"
                  className="form-control"
                  name="SenhaRepeticao"
                  value={this.state.senhaRepeticao}
                  onChange={e => this.setState({ senhaRepeticao: e.target.value })} />
              </FormGroup>

              <button onClick={this.cadastrar} className="btn btn-success" type="button">Salvar</button>
              <button onClick={this.cancelar} className="btn btn-danger" type="button">Cancelar</button>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}

export default withRouter(CadastroUsario)
