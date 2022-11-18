import React from "react"
import { withRouter } from 'react-router-dom'
import Card from '../components/card'
import FormGroup from "../components/form-group"
import SelectMenu from "../components/selectMenu"
import selectMenu from "../components/selectMenu"

class ConsultarMadicamentos extends React.Component {

  render() {

    const lista = [
      { label: 'Selecione', value: '' },
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

    return (
      <Card title="Consulta Medicamentos">
        <div className="row">
          <div className="col-md-12">
            <div className="bs-componet">
              <FormGroup>
                <input type="text"
                        className="form-control"
                        id="inputAno"
                        aria-describedby="emailHelp"
                        placeholder="Digite o Ano"/>
              </FormGroup>
              <FormGroup htmlFor="inputMes" label="Mês" >
                <SelectMenu lista={lista} />
              </FormGroup>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}

export default withRouter(ConsultarMadicamentos);
