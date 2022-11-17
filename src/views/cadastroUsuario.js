import React from "react"

import Card from "../components/card"
import FormGroup from "../components/form-group"
import TelefoneBrasileiroInput from "react-telefone-brasileiro";
import { withRouter } from "react-router-dom";
import UsuarioService from "../app/service/usuarioService";
import { mensagemSucesso, mensagemErro } from '../components/toastr'

class CadastroUsario extends React.Component {

  state = {
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    senhaRepeticao: ""
  }

  constructor() {
    super();
    this.service = new UsuarioService()
  }

  validar() {

    const mensagens = []

    // verificar se o campo nome não está vazio!
    // caso esteja adiciona a mensaegem na lista
    if (!this.state.nome) {
      mensagens.push("O campo nome é obrigatório.")
    }

    // varificar se o campo email está vazio se sim, adiciona a mensagem
    // na lista, caso não esteja vazio mais o email não corrsponde a especificação
    // adicionar outra mensagem a lista informando que o email não é válido.
    if (!this.state.email) {
      mensagens.push("O campo email é obrigatório.")
    } else if (!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
      mensagens.push("Informe um email válido.")
    }

    // vericar se campo telefone foi informado caso não tenha sido
    // pedir para o usuario informa o telefone
    if (!this.state.telefone) {
      mensagens.push("Informe um telefone.")
    }

    // verificar se os campos senha e senhaRepetição foram informados
    // e se as campos são iguais, caso não atenda as especifacações informar
    // para o usuario que informa os campos de forma correta
    if (!this.state.senha || !this.state.senhaRepeticao) {
      mensagens.push("Informe a senha 2x .")
    } else if (this.state.senha !== this.state.senhaRepeticao) {
      mensagens.push("A senhas não conferem.")
    }


    return mensagens
  }

  cadastrar = () => {

    // receber a lista com as mesegans devalicação caso elas exitam
    const mensagens = this.validar()

    // verificar se alista de mensagens não está vazia
    if (mensagens && mensagens.length > 0) {
      mensagens.forEach((item, index) => {
        mensagemErro(item)
      })

      return false
    }


    const usuario = {
      nome: this.state.nome,
      email: this.state.email,
      telefone: this.state.telefone,
      senha: this.state.senha,
      senhaRepeticao: this.state.senhaRepeticao,
    }

    this.service.salvar(usuario)
      .then(response => {
        mensagemSucesso('Usuario cadastrado com sucesso! Faça o login para acessar o sistema')
        this.props.history.push('/login')
      }).catch(erro => {
        mensagemErro(erro.response.data)
      })
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
