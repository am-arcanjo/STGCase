import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiTrash2, FiEdit } from "react-icons/fi";

import "./style.css";
const mockData = [
  {
    areaName: "Recursos Humanos",
    areaDescription: "Área responsável por gerenciamento humano",
  },
  {
    areaName: "Infraestrutura",
    areaDescription: "Responsável pela infraestrutura das operações",
  },
  {
    areaName: "Limpeza",
    areaDescription:
      "Consiste das pessoas envolvidas na limpeza e higienização do escritório como um todo",
  },
  {
    areaName: "Alguma outra área",
    areaDescription:
      "Consiste em ser alguma outra área pra finalidade de teste",
  },
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
          <Link to="/" className="Register-button">
            Cadastrar Área
          </Link>
        </header>
      </div>
      Áreas Cadastradas
      <ul className="Card">
        {mockData.map((area) => {
          return (
            <li>
              <div>
                <h3>{area.areaName}</h3>
                <div>
                  <button
                    className="Delete-button"
                    /*onClick={() => handleDeleteArea(area.id)}*/ type="button"
                  >
                    <FiTrash2 size="25" />
                  </button>
                  <button
                    className="Edit-button"
                    /*onClick={() => handleUpdateArea(area.id)}*/ type="button"
                  >
                    <FiEdit size="25" />
                  </button>
                </div>
              </div>
              <p>{area.areaDescription}</p>
            </li>
          );
        })}
      </ul>
      <a className="pagination"></a>
    </div>
  );
}

export default Lobby;
