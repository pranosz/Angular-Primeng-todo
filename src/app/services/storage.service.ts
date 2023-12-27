import { Injectable } from '@angular/core';
import { Task } from '../models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  setTasks(name: string, data: Task[]): void {
    localStorage.setItem(name, JSON.stringify(data));
  }

  getTasks(name: string): Task[] {
    const data = localStorage.getItem(name);

    return data ? JSON.parse(data) : [];
  }

  removeTask(name: string): void {
    localStorage.removeItem(name);
  }

}
