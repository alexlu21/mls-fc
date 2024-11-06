import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import URL_BACK from "../../config";

const UpdatePerson = () => {

  const url_back = URL_BACK

  const navigate = useNavigate();
  const { id_persona } = useParams();

  const [person, setPerson] = useState({
    nombre: "",
    apellido: "",
    fecha_nacimiento: "",
    nacionalidad: "",
    activo: "",  // Mantén esto como una cadena inicialmente
  });

  const { nombre, apellido, fecha_nacimiento, nacionalidad, activo } = person;

  useEffect(() => {
    const loadPerson = async () => {
      const res = await axios.get(`${url_back}/persona/${id_persona}`);
      setPerson(res.data);
    };
    loadPerson();
  }, [url_back, id_persona]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  // Maneja la conversión del valor de "activo" en el envío del formulario
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Convierte "sí" y "no" a booleano
    const updatedPerson = {
      ...person,
      activo: activo.toLowerCase() === 'sí' ? true : activo.toLowerCase() === 'no' ? false : null,
    };

    // Realiza la actualización
    updatePerson(updatedPerson);
  };

  const updatePerson = async (updatedPerson) => {
    await axios.put(`${url_back}/persona/update/${id_persona}`, updatedPerson);
    navigate("/team");
  };

  return (
    <div className="container mt-5">
      <div className="card p-4" style={{ backgroundColor: '#fad7a0' }}>
        <h2 className="text-center mb-4">Actualizar Persona</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold" htmlFor="nombre">
              Nombre
            </label>
            <input
              className="form-control border-1 border-black"
              style={{ background: '#DDD' }}
              type="text"
              name="nombre"
              required
              value={nombre}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold" htmlFor="apellido">
              Apellido
            </label>
            <input
              className="form-control border-1 border-black"
              style={{ background: '#DDD' }}
              type="text"
              name="apellido"
              required
              value={apellido}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold" htmlFor="fecha_nacimiento">
              Fecha de Nacimiento
            </label>
            <input
              className="form-control border-1 border-black"
              style={{ background: '#DDD' }}
              type="text"
              name="fecha_nacimiento"
              required
              value={fecha_nacimiento}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold" htmlFor="nacionalidad">
              Nacionalidad
            </label>
            <input
              className="form-control border-1 border-black"
              style={{ background: '#DDD' }}
              type="text"
              name="nacionalidad"
              required
              value={nacionalidad}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold" htmlFor="activo">
              Activo (Sí o No)
            </label>
            <select
              className="form-control border-1 border-black"
              style={{ background: '#DDD' }}
              name="activo"
              required
              value={activo} // Mantenemos este valor
              onChange={handleInputChange} // Maneja el cambio
            >
              <option value="">Selecciona una opción</option>
              <option value="sí">Sí</option>
              <option value="no">No</option>
            </select>
          </div>
          <button type="submit" className="btn btn-outline-success btn-lg w-100">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePerson;
