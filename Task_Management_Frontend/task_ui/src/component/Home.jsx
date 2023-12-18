import React, { useEffect, useState } from "react";
import taskService from "../service/task.service";
import { Link } from "react-router-dom";

const Home = () => {

  const [taskList,setTaskList] = useState([]);
  const [msg, setMsg] = useState("");


  useEffect(() => {
   init(); 
  },[]);

  const init=()=> {
    taskService
      .getAllTask()
      .then((res) => {
        // console.log(res.data);
        setTaskList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTask = (id) => {
    taskService
      .deleteTask(id)
      .then((res) => {
        setMsg("Deleted Successfully..!");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">

              <div className="card-header fs-3 text-center">
                  ALL TASK LIST
                  { msg && <p className="fs-4 text-center text-success">{msg}</p>}
              </div>

              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">S.no</th>
                      <th scope="col">Task Name</th>
                      {/* <th scope="col">Last</th> */}
                      {/* <th scope="col">Handle</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {taskList.map((p,num) => (

                      <tr>
                        <td>{num+1}</td>
                        <td>{p.taskName}</td>
                        <td>
                          <Link to={'editTask/'+p.id} className="btn btn-primary">Edit</Link>
                          <button onClick={()=> deleteTask(p.id)} className="btn btn-danger ms-1">Delete</button>
                        </td>
                      </tr>

                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
