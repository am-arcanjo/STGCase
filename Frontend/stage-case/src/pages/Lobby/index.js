import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import './style.css';
const mockData = [
  {
    areaName: 'lalala',
    areaDescription: 'algo'
  },
  {
    areaName: 'lalala2',
    areaDescription: 'algo2'
  },
  {
    areaName: 'lalala3',
    areaDescription: 'algo3'
  }
];


function Lobby() {
  return (
    <div className="Background-layer">
    <div>
      <header className="Header">
        Organizer/

        <Link to="/" className="Register-button">Cadastrar Área</Link>

      </header>
    </div>
      Áreas Cadastradas
      <div>
        {mockData.map(area => {
          return <div className="Card">
            <span>
              {area.areaName}
            </span>
            <span>
              {area.areaDescription}
            </span>
          </div>
        })}
      </div>
    </div>
  );
}

export default Lobby;
