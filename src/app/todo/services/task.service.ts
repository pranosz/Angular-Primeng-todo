import { Injectable, signal, effect, computed, inject, Signal } from '@angular/core';
import { Task } from '../../models/task.interface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private storage = inject(StorageService);

  tasks = signal<Task[]>(this.getAllTasks());

  private logSignalsEvents = effect(() => {
    this.storage.setTasks('tasks', this.tasks());
  });

  private getAllTasks(): Task[] {
    return this.storage.getTasks('tasks');
  }

  addNewTask(name: string): void {
    const newTask: Task = {
      id: crypto.randomUUID(),
      name,
      completed: false
    }

    this.tasks.update( data => [...data, newTask]);
  }

  editTask(newTask: Task): void {
    this.tasks.update(data => data.map(task => {
      if(task.id === newTask.id) {
        return {
          id: task.id,
          name: newTask.name,
          completed: newTask.completed
        }
      } else {
        return task;
      }
    }));
  }

  deleteTask(id: string): void {
    this.tasks.update(data => data.filter(task => task.id !== id));
  }

  getTask(id: string): Task | undefined {
    return this.tasks().find(task => task.id === id);
  }

  countAllTasks(): number {
    return this.tasks().length;
  }

  countCompletedTasks = computed(() => this.tasks().filter(item => item.completed).length);

  countActiveTasks = computed(() => this.tasks().filter(item => !item.completed).length);

}
