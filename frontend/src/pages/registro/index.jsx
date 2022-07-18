import React from 'react'
import NavigationTo from '../../componets/NavigationTo'
import './index.css'

const Registro = (props) => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light" id="nav-color">
          <div>
            <div className="container">
              <NavigationTo  href="/inicio" id="link-header">
                Medico
              </NavigationTo>
              /
              <NavigationTo href="#" id="link-header">
                Editable
              </NavigationTo>
            </div>
            <div className="container">
              <h2 className="header_titles" id="letra">
                DATOS DE CONTACTO Y PRECIOS
              </h2>
            </div>
          </div>
        </nav>
      </div>
      <div className="container mt-3">
        <img
          src="https://images.vexels.com/media/users/3/151709/isolated/lists/098c4aad185294e67a3f695b3e64a2ec-icono-de-avatar-de-doctor.png"
          className="img-circle"
          alt="..."
          width="150px;"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card mt-3" id="card-color">
              <div className="card-body">
                <div className="form-label">
                  <label className="form-label h4 mt-2" id="letra">
                    Datos de contacto
                  </label>
                </div>
                <div>
                  <label className="form-label mt-2 h5" id="letra">
                    Email:
                  </label>
                  <input type="text" className="form-control mt-2 mb-2" />
                  <label className="form-label mt-2 h5" id="letra">
                    Telefono:
                  </label>
                  <input type="text" className="form-control mt-2 mb-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mt-3" id="card-color">
              <div className="card-body">
                <div className="form-label">
                  <label className="form-label h4 mt-2" id="letra">
                    Precios de consulta
                  </label>
                </div>
                <label className="form-label mt-2 h5" id="letra">
                  Virtual:
                </label>
                <input type="text" className="form-control mt-2 mb-2" />
                <label className="form-label mt-2 h5" id="letra">
                  Presencial:
                </label>
                <input type="text" className="form-control mt-2 mb-2" />
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-2">
            <NavigationTo className="btn btn-primary" href="/inicio" role="button">
              Guardar
            </NavigationTo>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registro
