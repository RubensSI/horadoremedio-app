import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'

class Login extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="bs-docs-section">
            <Card title="Login">
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">
                    <fieldset>
                      <FormGroup label="Email: *" htmlFor="exampleInputEmail">
                        <input type="email"
                          className="form-control"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Digite o Email" />
                      </FormGroup>

                      <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                        <input type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password" />
                      </FormGroup>

                      <button className="btn btn-success">Entrar</button>
                      <button className="btn btn-danger">Cadastrar</button>
                    </fieldset>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
