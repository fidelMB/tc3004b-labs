import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    matricula: "",
    nombre: "",
    apellidos: "",
    edad: "",
    universidad: "",
    carrera: ""
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    };


  const closeModal = () => setShowModal(false);

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "#f8f9fa" }}
    >
    <div
      className="p-4 border rounded shadow bg-light"
      style={{ maxWidth: "400px", width: "100%" }}
    >
      <h2 className="mb-3 text-center">Formulario estudiante</h2>
      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="matricula" className="form-label">
            Matrícula          
          </label>
          <input
            type="text"
            className="form-control"
            id="matricula"
            name="matricula"
            value={formData.matricula}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre          
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="apellidos" className="form-label">
            Apellidos
          </label>
          <input
            type="text"
            className="form-control"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="edad" className="form-label">
            Edad
          </label>
          <input
            type="text"
            className="form-control"
            id="edad"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="universidad" className="form-label">
            Universidad
          </label>
          <input
            type="text"
            className="form-control"
            id="universidad"
            name="universidad"
            value={formData.universidad}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="carrera" className="form-label">
            Carrera
          </label>
          <input
            type="text"
            className="form-control"
            id="carrera"
            name="carrera"
            value={formData.carrera}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
            Ingresar        
        </button>
      </form>
    </div>

    {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Datos del alumno</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <p><strong>Matrícula:</strong> {formData.matricula}</p>
                <p><strong>Nombre:</strong> {formData.nombre}</p>
                <p><strong>Apellidos:</strong> {formData.apellidos}</p>
                <p><strong>Edad:</strong> {formData.edad}</p>
                <p><strong>Universidad:</strong> {formData.universidad}</p>
                <p><strong>Carrera:</strong> {formData.carrera}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
