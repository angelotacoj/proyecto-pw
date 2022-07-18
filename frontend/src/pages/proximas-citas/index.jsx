import React from 'react'
import './index.css'
import Header from './components/Header'

const ProximasCitas = (props) => {
  return (
    <>
      <Header />
      <div className="container mt-2">
        <div className="container card mt-2" id="fondo">
          <div className="card-body row" id="letra">
            <div className="col-md-3">
              <label className="form-label h4">Buscar:</label>
              <input type="text" className="form-control mt-2" />
            </div>
            <div className="col-md-8"></div>
            <div className="col-md-1">
              <label className="form-label">Mostrar</label>
              <div className="dropdown">
                <a
                  className="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  5
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a className="dropdown-item" href="#">
                      10
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      20
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      30
                    </a>
                  </li>
                </ul>
              </div>
              <label className="form-label mt-2" id="letra">
                Filas
              </label>
            </div>
            <div className="table-responsive">
              <table className="table text-center">
                <tr>
                  <th>Paciente</th>
                  <th>Fecha de Atención</th>
                </tr>
                <tr>
                  <td>APELLIDOS, NOMBRES</td>
                  <td>DD MM YY | Hora</td>
                  <td>
                    <div>
                      <a
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                        href=""
                      >
                        Enviar Mensaje
                      </a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal3"
                        href=""
                      >
                        Enviar Recordatorio
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>APELLIDOS, NOMBRES</td>
                  <td>DD MM YY | Hora</td>
                  <td>
                    <div>
                      <a
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                        href=""
                      >
                        Enviar Mensaje
                      </a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal3"
                        href=""
                      >
                        Enviar Recordatorio
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>APELLIDOS, NOMBRES</td>
                  <td>DD MM YY | Hora</td>
                  <td>
                    <div>
                      <a
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                        href=""
                      >
                        Enviar Mensaje
                      </a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal3"
                        href=""
                      >
                        Enviar Recordatorio
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>APELLIDOS, NOMBRES</td>
                  <td>DD MM YY | Hora</td>
                  <td>
                    <div>
                      <a
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                        href=""
                      >
                        Enviar Mensaje
                      </a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal3"
                        href=""
                      >
                        Enviar Recordatorio
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>APELLIDOS, NOMBRES</td>
                  <td>DD MM YY | Hora</td>
                  <td>
                    <div>
                      <a
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                        href=""
                      >
                        Enviar Mensaje
                      </a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal3"
                        href=""
                      >
                        Enviar Recordatorio
                      </a>
                    </div>
                  </td>
                </tr>
              </table>
              <div className="container">
                <nav>
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" id="letra">
                        Antes
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" id="letra">
                        Siguiente
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Enviar Mensaje:
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="text-center mt-4 mb-4">
                <textarea
                  placeholder="Añadir mensaje"
                  id="comentario"
                  cols="50"
                  rows="5"
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  className="btn btn-info btnResponder"
                  data-bs-dismiss="modal"
                >
                  Guardar mensaje{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal3"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Recordatorio enviado
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h1>¡Su recordatorio fue enviado con éxito!</h1>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProximasCitas
