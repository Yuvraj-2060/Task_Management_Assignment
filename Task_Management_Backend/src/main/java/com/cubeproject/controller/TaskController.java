package com.cubeproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.cubeproject.model.Task;
import com.cubeproject.service.TaskService;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class TaskController {
	
	@Autowired
	private TaskService taskService;

	@PostMapping("/saveTask")
	public ResponseEntity<?> saveTask(@RequestBody Task task){
		return new ResponseEntity<> (taskService.saveTask(task),HttpStatus.CREATED);
	}
	
	@GetMapping("/")
	public ResponseEntity<?> getAllTask(){
		return new ResponseEntity<>(taskService.getAllTask(), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getTaskById(@PathVariable int id){
		return new ResponseEntity<> (taskService.getTaskById(id), HttpStatus.OK);
	}
	
	@GetMapping("/deleteTask/{id}")
	public ResponseEntity<?> deleteTask(@PathVariable int id){
	
		return new ResponseEntity<>(taskService.deleteTask(id),HttpStatus.OK);
	}
	
	@PostMapping("/editTask/{id}")
	public ResponseEntity<?> editTask(@RequestBody Task task,@PathVariable int id){
		return new ResponseEntity<> (taskService.editTask(task,id), HttpStatus.CREATED);
	}
}
	

