import { ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';
import { TodoAddTaskComponent } from './todo-add-task.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TodoAddTaskComponent', () => {
  let component: TodoAddTaskComponent;
  let fixture: ComponentFixture<TodoAddTaskComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoAddTaskComponent],
      imports: [
        DialogModule,
        ButtonModule,
        FormsModule,
        NoopAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(TodoAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide dialog on start', () => {
    const dialog = el.query(By.css('[data-testid="dialog"]'));

    expect(dialog).toBeNull();
    expect(component.visible).toBe(false);
  });

  it('should show dialog after selecting add button', () => {
    const addButton = el.query(By.css('[data-testid="add-button"]'));
    let dialog = el.query(By.css('[data-testid="dialog"]'));

    addButton.nativeElement.click();
    fixture.detectChanges();
    dialog = el.query(By.css('[data-testid="dialog"]'));

    expect(dialog.nativeElement).toBeTruthy();
    expect(component.visible).toBe(true);
  })

  it('should hide dialog after selecting confirm button in the dialog', fakeAsync(() => {
    const addButton = el.query(By.css('[data-testid="add-button"]'));

    addButton.nativeElement.click();
    fixture.detectChanges();
    flush();

    expect(component.visible).toBe(true);

    const comfirmButton = el.query(By.css('[data-testid="add-task-button"]'));
    comfirmButton.nativeElement.click();
    fixture.detectChanges();
    flush();

    const dialog = el.query(By.css('[data-testid="dialog"]'));
    expect(dialog).toBeNull();
    expect(component.visible).toBe(false);

  }));

  it('should set visible to false after selecting addTask', () => {
    component.addTask();

    expect(component.visible).toBe(false);
  });
});
