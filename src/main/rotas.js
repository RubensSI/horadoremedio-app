import React from "react"

import Login from "../views/login"
import CadastroUsuario from "../views/cadastroUsuario"
import Home from "../views/home"
import ConsultarMedicamentos from "../views/Medicamentos/consultar-medicamentos"

import { Route, Switch, HashRouter } from 'react-router-dom'

function Rotas() {
  return (
    <HashRouter>
      <Switch>
        <Home path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro-usuario" component={CadastroUsuario} />
        <Route path="/consultar-medicamentos" component={ConsultarMedicamentos} />
      </Switch>
    </HashRouter>
  )
}

export default Rotas
