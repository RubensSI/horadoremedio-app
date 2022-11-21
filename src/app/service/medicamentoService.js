import ApiService from '../apiservice'

export default class MedicamentoService extends ApiService {

  constructor() {
    super('/api/medicamentos')
  }

  consultar(medicamentoFiltro) {
    //http://localhost:8080/api/medicamentos/?nome=mor&usuario=1

    let params = `?nome=${medicamentoFiltro.nome}`

    if (medicamentoFiltro.usuario) {
      params = `${params}&usuario=${medicamentoFiltro.usuario}`
    }

    return this.get(params)
  }
}
