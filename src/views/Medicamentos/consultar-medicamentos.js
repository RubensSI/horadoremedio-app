import React from "react"
import { withRouter } from 'react-router-dom'
import Card from '../../components/card'
import FormGroup from "../../components/form-group"
import MedicamentosTable from "./medicamentosTable"

import MedicamentoService from "../../app/service/medicamentoService"
import LocalStorageService from "../../app/service/localStorageService"
class ConsultarMadicamentos extends React.Component {

  state = {
    nome: '',
    medicamentos: []
  }

  constructor() {
    super();
    this.service = new MedicamentoService()
  }

  buscar = () => {

    const usuarioLogado = LocalStorageService.obterItem('_usuario_logado')


    console.log("Usuario logado: ", usuarioLogado)

    const medicamentoFiltro = {
      nome: this.state.nome,
      usuario: usuarioLogado.id
    }

    this.service
      .consultar(medicamentoFiltro)
      .then(response => {
        this.setState({ medicamentos: response.data })
      }).catch(error => {
        console.log("Erro: ", error)
      })
  }

  render() {

    return (
      <Card title="Consulta Medicamentos">
        <div className="row">
          <div className="col-md-6">
            <div className="bs-componet">
              <FormGroup htmlFor="inputAno" label="Nome:*">
                <input type="text"
                  className="form-control"
                  id="inputAno"
                  value={this.state.nome}
                  onChange={e => this.setState({ nome: e.target.value })}
                  placeholder="Digite medicação" />
              </FormGroup>

              <button onClick={this.buscar} type="button" className="btn btn-success">Busca</button>
              <button type="button" className="btn btn-danger">Cadastrar</button>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <MedicamentosTable medicamentos={this.state.medicamentos} />
          </div>
        </div>
      </Card>
    )
  }
}

export default withRouter(ConsultarMadicamentos);
