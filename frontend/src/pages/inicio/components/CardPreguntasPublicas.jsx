import React from 'react'
import NavigationTo from '../../../componets/NavigationTo'

const CardPreguntasPublicas = (props) => {
  return (
    <div className="container card mt-4" id="card-color">
      <div id="columnas" className="container mt-2">
        <div>
          <h5 className="mt-3" id="letra">
            Preguntas públicas:
          </h5>
        </div>
        <div className="row">
          <div className="card mt-3">
            <div className="card-body scroll">
              <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
            </div>
          </div>
          <div className="container">
            <div>
              <div className="col text-center">
                <button type="button" className="btn mb-3">
                  <NavigationTo href="/preguntas-publicas">Ver más</NavigationTo>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPreguntasPublicas
