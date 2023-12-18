package com.cubeproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cubeproject.model.Task;

public interface TaskRepository extends JpaRepository<Task, Integer>{

}
