import React, { useState } from 'react'
import taskService from '../service/task.service';

const AddTask = () => {

    const [task, setTask] = useState({
        taskName: "",
    });

    const [msg, setMsg] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setTask({ ...task, [e.target.name]: value });
    };

    const TaskRegister=(e) => {
        e.preventDefault();

        taskService 
            .saveTask(task)
            .then((res) => {
                console.log("Task has been added sucessfully ..!");
                setMsg("Task has been added sucessfully ..!");
                setTask({
                    taskName: "",
                });
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
                            Add Your Task
                        </div>
                        { msg && <p className="fs-4 text-center text-success">{msg}</p>                         
                        }
                        <div className="card-body">
                            <form onSubmit={(e)=> TaskRegister(e)}>
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
                                <button className="btn btn-primary col-md-12">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default AddTask