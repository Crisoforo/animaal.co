import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import logo from './logo.png';
import './style.css';
import mgnt from './images/aaa_mgnt.png';
import aaa from './images/aaa.png';


function App() {
  return (
    <div>
      <Navbar brand={ <a href='index.html' className="brand-logo"> <img src={ logo } alt='logo' width='150'/></a>} centerLogo alignLinks="right">
        <NavItem href="https://www.instagram.com/animaal.tv/?hl=es">
          Instagram
</NavItem>
        <NavItem href="#contact">
          Contact
</NavItem>
      </Navbar>
    <div className="card">
      <h3>Agencia consultora para el desarrollo musical</h3>
      <img src={aaa} alt='animaal logo'/>
    </div>
    <div className="card">
      <h3>MANAGEMENT BOOKING/ TOURING TALENT BUYERS</h3>
      <img src={aaa} alt='animaal logo'/>
    </div>
    <div className="card">
      <h3>Administración y representación del talento.</h3>
      <img src={aaa} alt='animaal logo'/>
    </div>
    <div className="card">
      <h3>Venta y comercialización del talento.</h3>
      <img src={aaa} alt='animaal logo'/>
    </div>
    <div className="card">
      <h3>Venta y comercialización del talento fuera de su ciudad.</h3>
      <img src={aaa} alt='animaal logo'/>
    </div>
    <div className="cardee">
      <h3>Nos encargamos de comprar y programar artistas y/o conciertos para un foro, marca o festival.</h3>
      <img src={aaa} alt='animaal logo'/>
    </div>
    <div className="cardee">
    <h2>Roster</h2>
      <ul>
        <li>BOB DAZZLA (US)</li>
        <li>COLLAPSING SCENERY (US)</li>
        <li>JACQUES RENAULT (US)</li>
        <li>JUAN SOTO (MX)</li>
        <li>JERRY L (MX)</li>
        <li>ROY JARA (MX)</li>
        <li>SELF SABOTAGE (MX)</li>
        <li>PAURRO (MX)</li>
        <li>OM BEACH (MX)</li>
        <li>VIDEOCENTRO (MX)</li>
      </ul>
      <img src={aaa} alt='animaal logo'/>
    </div>
    <div className="card" id='contact'>
    <div className='brnd'>
    <img src={mgnt} width='90%' alt='management'/>
    </div>
      <h3>Gerardo A. Lopez Avila</h3>
      <p>+52 1 (55) 55 09 49 36<br></br>Amsterdam 255,<br></br>Colonia Condesa, <br></br>CDMX</p>
    </div>
    </div>
  );
}

export default App;
