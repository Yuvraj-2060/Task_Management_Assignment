import axios from "axios";
const API_URL = "http://localhost:8080";

class TaskService{

    saveTask(task) {
        return axios.post(API_URL+"/saveTask",task);
    }

    getAllTask() {
        return axios.get(API_URL + "/");
    }

    getTaskById(id) {
        return axios.get(API_URL + "/" +id);
    }

    deleteTask(id){
        return axios.get(API_URL + "/deleteTask/" +id);
    }

    editTask(task){
        return axios.post(API_URL +"/editTask/" + task.id, task);
    }

}
export default new TaskService;