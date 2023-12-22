import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = signal<Task[]>([
    {
      id: '111',
      name: 'Default',
      completed: false
    }
  ]);

  addNewTask(): void {
    const newTask: Task = {
      id: crypto.randomUUID(),
      name: '...',
      completed: false
    }

    this.tasks.update( data => [...data, newTask]);
  }

  deleteTask(id: string): void {
    this.tasks.update(data => data.filter(task => task.id !== id));
    console.log(this.tasks);
  }

}
