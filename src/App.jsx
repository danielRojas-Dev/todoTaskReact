import { useEffect, useState } from "react";
import taskk from "./data/task";
import { Link } from "react-router-dom";

function App() {
  const [task, setTask] = useState([]);
  const [reloadTask, setReload] = useState(false);

  useEffect(() => {
    setTask(taskk);
    setReload(false);
  }, [reloadTask]);

  const isCompleteed = (parmaIsComp) => {
    !task[parmaIsComp].isCompleted
      ? (task[parmaIsComp].isCompleted = true)
      : (task[parmaIsComp].isCompleted = false);

    setTask(task);
    console.log(task);
  };

  return (
    <div div className="container">
      <div className="row">
        <div className="col-md-12 ">
          <div className="form-control">
            <h1 className="text-center">Mis Tareas</h1>
            {task.map((tareita, key) => (
              <div key={key} className="row g-2">
                <div
                  key={key}
                  className="col-6 mb-1 text-center border border-dark rounded-pill"
                >
                  {tareita.title}
                </div>
                <div className="col-6 mb-1">
                  {!task[key].isCompleted ? (
                    <button
                      key={key}
                      className="form-control btn btn-danger  rounded-pill"
                      onClick={() => {
                        setTask(task);
                        setReload(true);
                        isCompleteed(key);
                      }}
                    >
                      Completar
                    </button>
                  ) : (
                    <button
                      key={key}
                      className="form-control btn btn-success  rounded-pill"
                      onClick={() => {
                        setTask(task);
                        setReload(true);
                        isCompleteed(key);
                      }}
                    >
                      Realizado
                    </button>
                  )}
                </div>
              </div>
            ))}

            <Link data={task} to="/FormNewTask">
              <span className=" btn btn-primary mt-2 form-control  rounded-pill">
                Nueva Tarea
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  );
}


import { Link, useNavigate } from 'react-router-dom';

function ComponentA(props) {
  
  const navigate = useNavigate();
  
  const toComponentB = () => {
    navigate('/componentB', { state: { id: 1, name: 'sabaoon' } });
  
  } return (
    <> <div> <a onClick={() => { toComponentB() }}>Component B<a /></div>
    </>);
} 


import { useLocation } from 'react-router-dom';

function ComponentB() {
  const location = useLocation();

  return (
    <>
      <div>{location.state.name}</div>
    </>)
}



export default App;
