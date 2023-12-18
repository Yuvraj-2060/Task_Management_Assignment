package com.cubeproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cubeproject.model.Task;
import com.cubeproject.repository.TaskRepository;

@Service
public class TaskServiceImpl implements TaskService{
	
	private final TaskRepository taskRepository;
	
	@Autowired
    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

	@Override
	public Task saveTask(Task task) {
		return taskRepository.save(task);
	}

	@Override
	public List<Task> getAllTask() {
		return taskRepository.findAll();
	}

	@Override
	public Task getTaskById(int id) {
		return taskRepository.findById(id).get();
	}

	@Override
	public String deleteTask(int id) {

		Task task = taskRepository.findById(id).get();
		
		if(task!= null) {
			taskRepository.delete(task);
			return "Product Deleted Successfully..!";
		}
		return "Something went wrong in server...!";
	}

	@Override
	public Task editTask(Task task, int id) {
		Task oldTask = taskRepository.findById(id).get();
		
		oldTask.settaskName(task.gettaskName());
		return taskRepository.save(oldTask);
	}

}
