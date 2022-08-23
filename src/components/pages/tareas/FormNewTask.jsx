import { useState } from "react";
import Container from "../../layouts/Container";
import { Link } from "react-router-dom";

const FormNewTask = () => {
  const [tareas, setTareas] = useState("");

  const newData = [...task];

  console.log(newData);

  const nuevaTarea = () => {};

  return (
    <Container>
      <div>
        <form>
          <h1 className="text-center">Agregar Tarea</h1>
          <div className="mb-3">
            <label htmlFor="tarea" className="form-label">
              Ingrese una Tarea
            </label>
            <input
              type="text"
              onChange={(e) => setTareas(e.target.value)}
              className="form-control mb-2"
              id="tarea"
            ></input>

            <Link to="/">
              <span type="submit" className="btn btn-primary form-control">
                Guardar
              </span>
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default FormNewTask;
