import { useEffect, useState } from "react";
import taskk from "./data/task";

function App() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(taskk);
  });

  const isCompleteed = (parmaIsComp) => {
    !task[parmaIsComp].isCompleted
      ? (task[parmaIsComp].isCompleted = true)
      : (task[parmaIsComp].isCompleted = false);

    setTask(task);
    console.log(task);
  };

  return (
    <div className="container">
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
                        isCompleteed(key);
                      }}
                    >
                      Realizado
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
