import React from "react"

export default props => {

  const rows = props.medicamentos.map(medicamento => {
    return (
      <tr key={medicamento.id}>
        <td>{medicamento.nome}</td>
        <td>{medicamento.descricao}</td>
        <td>{medicamento.status}</td>
        <td>{medicamento.tipo}</td>
        <td>{medicamento.data}</td>
        <td>

        </td>
      </tr>
    )
  })

  return (
    <table className="table table-condensed table-hover border">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Descrição</th>
          <th scope="col">Status</th>
          <th scope="col">Tipo</th>
          <th scope="col">Data</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}
