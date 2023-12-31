import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import { StorageService } from './storage.service';
import { TASKS } from '../tests-utils/mock-data';

fdescribe('TaskServiceService', () => {
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
    storageServiceSpy.getTasks.and.returnValue(TASKS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change the task name and completed staus when id exists', () => {
    console.log("service ", service.tasks());
    const task = {id: '1', name: 'New task name', completed: true};

    service.editTask(task);

    expect(TASKS[0].name).toBe(task.name);
    expect(TASKS[0].completed).toBe(task.completed);
  })
});
