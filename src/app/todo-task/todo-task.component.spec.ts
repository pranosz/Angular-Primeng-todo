import { ComponentFixture, TestBed, fakeAsync, flush, waitForAsync } from '@angular/core/testing';
import { TodoTaskComponent } from './todo-task.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { Task } from '../models/task.interface';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

describe('TodoTaskComponent', () => {
  let component: TodoTaskComponent;
  let fixture: ComponentFixture<TodoTaskComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TodoTaskComponent],
      imports: [
        CheckboxModule,
        TableModule,
        ButtonModule,
        FormsModule,
        InputTextModule
      ],
      providers: [
        ConfirmationService,
        MessageService
      ]
    }).compileComponents()
    .then(() => {
      const task: Task = {
        id: "1",
        name: "test task",
        completed: false
      };
  
      fixture = TestBed.createComponent(TodoTaskComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      component.task = task;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain name', () => {
    const tdElement = el.query(By.css("#nameField-1"));
    const text = tdElement.nativeElement.innerText;

    expect(text).toContain("test task");
  });

  it('should have initial value false for completed', () => {
    const primeElement = el.query(By.css("p-checkbox"));
    const checkbox = primeElement.nativeElement.querySelector('input');

    expect(checkbox.checked).toBe(false);
  });

  it('should change value of completed chckbox to true', () => {
    const primeElement = el.query(By.css("p-checkbox"));
    const checkbox = primeElement.nativeElement.querySelector('input');

    primeElement.nativeElement.querySelector('.p-checkbox-box').click();

    fixture.detectChanges();
  
    expect(checkbox.checked).toBe(true);

  });

  it('should show input field after selecting edit button', () => {
    component.task = {
      id: "1",
      name: "test task",
      completed: false,
      isEditMode: true
    };

    fixture.detectChanges();
    
    const primeInput = el.query(By.css("#editInput-1"));
  
    expect(primeInput.nativeElement).toBeTruthy();
    expect(primeInput.nativeElement.className).toContain('p-inputtext');
    expect(primeInput.nativeElement.className).toContain('p-component');
  });

  it('should display input field and button in edit mode', fakeAsync(() => {
    component.task = {
      id: "1",
      name: "test task",
      completed: false,
      isEditMode: true
    };
    
    fixture.detectChanges();
    flush();
    
    const tdNameElement = el.query(By.css("#nameField-1"));
    const editElement = el.query(By.css("#editNameField-1"));
    const buttonConfirm = el.query(By.css("#confirmButton-1"));

    expect(tdNameElement).toBeNull();
    expect(editElement).toBeTruthy();
    expect(buttonConfirm).toBeTruthy();

  }));


});
