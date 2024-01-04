import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import { StorageService } from './storage.service';
import { TASKS } from '../../tests-utils/mock-data';
import { Task } from '../../models/task.interface';
import { signal } from '@angular/core';

describe('TaskServiceService', () => {
  let service: TaskService;
  let storageServiceSpy: any;

  beforeEach(() => {

    storageServiceSpy = jasmine.createSpyObj('StorageService', ['setTasks', 'getTasks']);

    TestBed.configureTestingModule({
      providers: [
        TaskService,
        {provide: StorageService, useValue: storageServiceSpy}
      ]
    });
    service = TestBed.inject(TaskService);
    service.tasks = signal<Task[]>(TASKS);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change the task name and completed staus when id exists', () => {
    const task = {id: '1', name: 'New task name', completed: true};

    service.editTask(task);

    expect(service.tasks()[0].name).toBe(task.name);
    expect(service.tasks()[0].completed).toBe(task.completed);
  })

  it('should not modify tasks when id NOT exists', () => {
    const task = {id: '-1', name: 'New task name', completed: true};

    service.editTask(task);

    expect(service.tasks()).toEqual(TASKS);
  })

  it('should add new task', () => {
    service.addNewTask('Task 4');

    expect(service.tasks()[3].name).toBe('Task 4');
  })

  it('should delete task', () => {
    service.deleteTask('3');

    expect(service.tasks().length).toEqual(2);
  })

  it('should count all tasks', () => {
    const result = service.countAllTasks();

    expect(result).toEqual(3);
  })

  it('should count completed tasks', () => {
    const completed = service.countCompletedTasks();

    expect(completed).toEqual(1);
  })

  it('should count active tasks', () => {
    const active = service.countActiveTasks();

    expect(active).toEqual(2);
  })
  
});
