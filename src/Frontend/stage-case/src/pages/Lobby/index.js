import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiTrash2, FiEdit } from "react-icons/fi";

import "./style.css";

const [areas, setAreas] = useState([]);

useEffect(() => {
  fetch("https://api/getarea")
    .then((response) => response.json())
    .then((data) => setAreas(data))
    .catch((error) => console.error("Error fetching data: ", error));
}, []);

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
    <>
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
          {areas.map((area, index) => {
            return (
              <li>
                <div key={index}>
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
        <div className="Pagination">
          <a>1 2 3 4</a>
        </div>
      </div>
    </>
  );
}

export default Lobby;
