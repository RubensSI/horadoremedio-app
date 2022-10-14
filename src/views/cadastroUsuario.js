import React from "react"

import Card from "../components/card"
import FormGroup from "../components/form-group"

class CadastroUsario extends React.Component {

  state = {
    nome: "",
    email: "",
    senha: "",
    senhaRepeticao: ""
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
                  onChange={e => this.setState({ nome: e.target.value })} />
              </FormGroup>

              <FormGroup label="Email: *" htmlFor="inputEmail">
                <input type="email"
                  id="inputEmail"
                  className="form-control"
                  name="email"
                  onChange={e => this.setState({ email: e.target.value })} />
              </FormGroup>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}

export default CadastroUsario
