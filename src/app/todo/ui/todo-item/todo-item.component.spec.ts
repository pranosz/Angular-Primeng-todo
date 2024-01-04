import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DebugElement} from '@angular/core';
import { By } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { TodoItemComponent } from './todo-item.component';
import { Task } from 'src/app/models/task.interface';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TodoItemComponent],
      imports: [
        CheckboxModule,
        ButtonModule,
        FormsModule,
        InputTextModule
      ],
      providers: [
        ConfirmationService,
        MessageService
      ]
    })
      const task: Task = {
        id: "1",
        name: "test task",
        completed: false
      };
  
      fixture = TestBed.createComponent(TodoItemComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      component.task = task;
      fixture.detectChanges();

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain name', () => {
    const tdElement = el.query(By.css('[data-testid="nameField"]'));
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

  it('should show input field and button when task have edit mode set to true', () => {
    component.task = {
      id: "1",
      name: "test task",
      completed: false,
      isEditMode: true
    };

    fixture.detectChanges();
    
    const primeInput = el.query(By.css('[data-testid="editInput"]'));

    const tdNameElement = el.query(By.css('[data-testid="nameField"]'));
    const editElement = el.query(By.css('[data-testid="editNameField"]'));
    const buttonConfirm = el.query(By.css('[data-testid="comfirm-edit-task-button"]'));

    expect(tdNameElement).toBeNull();
    expect(editElement).toBeTruthy();
    expect(buttonConfirm).toBeTruthy();
  
    expect(primeInput.nativeElement).toBeTruthy();
    expect(primeInput.nativeElement.className).toContain('p-inputtext');
    expect(primeInput.nativeElement.className).toContain('p-component');
  });

});
