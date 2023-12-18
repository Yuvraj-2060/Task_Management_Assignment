package com.cubeproject.service;

import java.util.List;

import com.cubeproject.model.Task;

public interface TaskService {
	
	 public Task saveTask(Task task);
	 
	 public List<Task> getAllTask(); 
	 
	 public Task getTaskById(int id);
	 
	 public String deleteTask(int id);
	 
	 public Task editTask(Task task, int id);

}
