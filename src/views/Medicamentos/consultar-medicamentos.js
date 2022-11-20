import React from "react"
import { withRouter } from 'react-router-dom'
import Card from '../../components/card'
import FormGroup from "../../components/form-group"
import SelectMenu from "../../components/selectMenu"
import MedicamentosTable from "./medicamentosTable"

class ConsultarMadicamentos extends React.Component {

  render() {

    const lista = [
      { label: 'Selecione...', value: '' },
      { label: 'Janeiro', value: '1' },
      { label: 'Fevereiro', value: '2' },
      { label: 'Março', value: '3' },
      { label: 'Abril', value: '4' },
      { label: 'Maio', value: '5' },
      { label: 'Juinior', value: '6' },
      { label: 'Julho', value: '7' },
      { label: 'Agosto', value: '8' },
      { label: 'Setembro', value: '9' },
      { label: 'Outobro', value: '10' },
      { label: 'Novenbro', value: '11' },
      { label: 'Desembro', value: '12' }
    ]

    const tipos = [
      { label: 'Selecione...', value: '' },
      { label: 'Despesa', value: 'DESPESA' },
      { label: 'Receita', value: 'RECEITA' }
    ]

    const medicamentos = [
      { id: 1, nome: "Dipirona", descricao: "Tomar de 3 em 3 horas", status: "pendente", tipo: "uso horal", data: "01/02/2022" }
    ]


    return (
      <Card title="Consulta Medicamentos">
        <div className="row">
          <div className="col-md-6">
            <div className="bs-componet">
              <FormGroup htmlFor="inputAno" label="Ano:*">
                <input type="text"
                  className="form-control"
                  id="inputAno"
                  aria-describedby="emailHelp"
                  placeholder="Digite o Ano" />
              </FormGroup>
              <FormGroup htmlFor="inputMes" label="Mês" >
                <SelectMenu className="form-control" lista={lista} />
              </FormGroup>

              <FormGroup htmlFor="inputTipo" label="Tipo: ">
                <SelectMenu id="inputTiupo" className="form-control" lista={tipos} />
              </FormGroup>

              <button type="button" className="btn btn-success">Busca</button>
              <button type="button" className="btn btn-danger">Cadastrar</button>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <MedicamentosTable medicamentos={medicamentos} />
          </div>
        </div>
      </Card>
    )
  }
}

export default withRouter(ConsultarMadicamentos);
