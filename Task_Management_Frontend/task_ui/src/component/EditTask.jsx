import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import taskService from "../service/task.service";


const EditTask = () => {
  const [task, setTask] = useState({
    id:"",
    taskName: "", 
  });

  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);


  const [msg, setMsg] = useState("");

  useEffect(() => {
    taskService
        .getTaskById(id)
        .then((res) => {
            setTask(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
  },[]);


  const handleChange = (e) => {
      const value = e.target.value;
      setTask({ ...task, [e.target.name]: value });
  };

  const TaskUpdate=(e) => {
    e.preventDefault();

    taskService
      .editTask(task)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
  <>
      <div className="container mt-3">
          <div className="row">
              <div className="col-md-6 offset-md-3">
                  <div className="card">
                      <div className="card-header fs-3 text-center">
                          Edit Task
                      </div>
                      { msg && <p className="fs-4 text-center text-success">{msg}</p>                         
                      }
                      <div className="card-body">
                          <form onSubmit={(e)=> TaskUpdate(e)}>
                              <div className="mb-3">
                                  <label>Enter Task Name</label>
                                  <input 
                                      type="text"
                                      name="taskName"
                                      className="form-control"
                                      onChange={(e)=>handleChange(e)}
                                      value={task.taskName}
                                  />
                              </div>
                              <button className="btn btn-primary col-md-12">Update</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </>
  );
};

export default EditTask;
