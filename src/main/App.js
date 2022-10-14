import React from 'react';

import 'toastr/build/toastr.min'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'
import 'toastr/build/toastr.css'

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//import Login from '../views/login';
import CadastroUsario from '../views/cadastroUsuario';

class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <CadastroUsario />
      </div>
    )
  }
}

export default App
