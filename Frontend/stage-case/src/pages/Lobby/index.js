import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';

import './style.css';
const mockData = [
  {
    areaName: 'Recursos Humanos',
    areaDescription: 'Área responsável por gerenciamento humano'
  },
  {
    areaName: 'Infraestrutura',
    areaDescription: 'Responsável pela infraestrutura das operações'
  },
  {
    areaName: 'Limpeza',
    areaDescription: 'Consiste das pessoas envolvidas na limpeza e higienização do escritório como um todo'
  }
];

function Lobby() {

  // async function handleDeleteArea(id) {
//   try {
//       await api.delete(`area/${id}`, {
//       });

//       setArea(area.filter(area => area.id !== id));

//   } catch (err) {
//       alert('Erro ao deletar Área, tente novamente.');
//   }
// }

// const [areas, setAreas] = useState([]);

// const navigate = useNavigate();

// const areaId = localStorage.getItem('areaId');
// const areaName = localStorage.getItem('areaName');

// useEffect(() => {
//     api.get('profile', {
//         headers: {
//             Authorization: areaId,
//         }
//     }).then(response => {
//         setAreas(response.data);
//     })
// }, [areaId]);

  return (
    <div className="Background-layer">
    <div>
      <header className="Header">
        Organizer/

        <Link to="/" className="Register-button">Cadastrar Área</Link>

      </header>
    </div>
      Áreas Cadastradas
      <ul className="Card">
        {mockData.map(area => {
          return <li>
            <p>
              {area.areaName}
            </p>
            <p>
              {area.areaDescription}
            </p>
            <button /*onClick={() => handleDeleteArea(area.id)}*/ type="button">
                        <FiTrash2 size={25} color="#a8a8b3"/>
            </button>
          </li>
        })}
      </ul>
    </div>
  );
}

export default Lobby;
