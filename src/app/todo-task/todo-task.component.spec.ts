import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTaskComponent } from './todo-task.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { Task } from '../models/task.interface';
import { FormsModule } from '@angular/forms';

fdescribe('TodoTaskComponent', () => {
  let component: TodoTaskComponent;
  let fixture: ComponentFixture<TodoTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoTaskComponent],
      imports: [
        CheckboxModule,
        ButtonModule,
        FormsModule
      ],
      providers: [
        ConfirmationService,
        MessageService
      ]
    });

    const task: Task = {
      id: "1",
      name: "test task",
      completed: false
    };

    fixture = TestBed.createComponent(TodoTaskComponent);
    component = fixture.componentInstance;
    component.task = task;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
