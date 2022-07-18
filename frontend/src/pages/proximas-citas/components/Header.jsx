import React from 'react'
import NavigationTo from '../../../componets/NavigationTo'

const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" id="nav-color">
        <div>
          <div className="container">
            <NavigationTo href="/inicio">Médico</NavigationTo>
              /
            <NavigationTo href="#" id="link-header">
              Próximas citas
            </NavigationTo>
          </div>
          <div className="container">
            <h2 className="header_titles" id="letra">
              PROXIMAS CITAS
            </h2>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
