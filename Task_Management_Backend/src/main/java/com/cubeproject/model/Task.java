package com.cubeproject.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Task {
	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY)
	private int id;

    private String taskName;

	public Task() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Task(int id, String taskName) {
		super();
		this.id = id;
		this.taskName = taskName;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String gettaskName() {
		return taskName;
	}

	public void settaskName(String taskName) {
		this.taskName = taskName;
	}
    
    
}
