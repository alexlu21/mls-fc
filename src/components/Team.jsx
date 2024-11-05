import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import lamine from '../assets/lamine.jpg';
import URL_BACK from "../../config";

const Team = () => {
  const [person, setPerson] = useState([]);
  
  const url_back = URL_BACK

  useEffect(() => {
    loadPersons();
  }, []); // Asegúrate de que solo se ejecute una vez al montar el componente.

  const loadPersons = async () => {
    try {
      const response = await axios.get(`${url_back}/persona`, {
        validateStatus: () => true, // Permite manejar todos los códigos de estado.
      });

      // Almacena los datos en el estado
      setPerson(response.data);
    } catch (error) {
      console.error("Error al cargar las personas:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Equipo</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {person.map((p) => (
          <div className="col" key={p.id_persona}>
            <div className="card h-100 border border-dark rounded-2 shadow" style={{ height: '300px' }}>
              <img src={lamine} className="card-img-top" alt={`${p.nombre} ${p.apellido}`} />
              <div className="card-body">
                <h5 className="card-title">{p.nombre} {p.apellido}</h5>
                <p className="card-text"><strong>Fecha de Nacimiento:</strong> {p.fecha_nacimiento}</p>
                <p className="card-text"><strong>Nacionalidad:</strong> {p.nacionalidad}</p>
                <p className="card-text"><strong>Activo:</strong> {p.activo ? "Sí" : "No"}</p>
              </div>
              <div className="card-footer d-flex text-center gap-4">
                <Link to={`/update/${p.id_persona}`} className="btn btn-danger flex-grow-1">
                  Editar  
                </Link>
                <Link to={`/info/${p.id_persona}`} className="btn btn-info flex-grow-1">
                  Info
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
