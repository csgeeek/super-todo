package com.example.todoapp.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long taskId;
    private String chore;
    private String time;
    private boolean completed;

    public Long getTaskId() {
        return taskId;
    }

    public void setTaskId(Long taskId) {
        this.taskId = taskId;
    }

    public String getChore() {
        return chore;
    }

    public void setChore(String chore) {
        this.chore = chore;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public Task(Long taskId, String chore, String time, boolean completed) {
        this.taskId = taskId;
        this.chore = chore;
        this.time = time;
        this.completed = completed;
    }

    public Task() {
    }

    @Override
    public String toString() {
        return "Task{" +
                "taskId=" + taskId +
                ", chore='" + chore + '\'' +
                ", time='" + time + '\'' +
                ", completed=" + completed +
                '}';
    }
}
