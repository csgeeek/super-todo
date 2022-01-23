package com.example.todoapp.controller;

import com.example.todoapp.entity.Task;
import com.example.todoapp.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping("/")
    public String goToTasks() throws MalformedURLException {

        String str = "http://localhost:8080/tasks";
        URL url = new URL(str);
        System.out.println(url);
        return "Goto command line and click on the link";
    }

    @GetMapping("/tasks")
    public List<Task> getTasks(){
        return taskRepository.findAll();
    }

    @GetMapping("/tasks/name")
    public List<Task> getTasksByName(){
        return taskRepository.findAll();
    }

    @GetMapping("/tasks/{id}")
    public Task getTaskById(@PathVariable("id") Long id){
        return taskRepository.findById(id).get();
    }

/*
    @GetMapping("/tasks/name/{name}")
    public Task getTaskByChore(@PathVariable("name") String chore){
        return taskRepository.findByChore(chore);
    }
*/
    @GetMapping("/tasks/name/{name}")
    public List<Task> getTaskByChore(@PathVariable("name") String chore){
        return taskRepository.findByChore(chore);
    }

    @PostMapping("/tasks")
    public Task saveTask(@RequestBody Task task){
        System.out.println(task.toString());
        return taskRepository.save(task);
    }

    @DeleteMapping("/tasks/{id}")
    public void deleteTask(@PathVariable("id") Long id){
        taskRepository.deleteById(id);
    }

    @PutMapping("/tasks/{id}")
    public Task updateTask(@PathVariable("id") Long id){
        Task task = getTaskById(id);
        task.setCompleted(!task.isCompleted());
        return taskRepository.save(task);
    }
}
