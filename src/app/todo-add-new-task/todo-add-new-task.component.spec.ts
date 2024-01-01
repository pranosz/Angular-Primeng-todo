import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddNewTaskComponent } from './todo-add-new-task.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

describe('TodoAddNewTaskComponent', () => {
  let component: TodoAddNewTaskComponent;
  let fixture: ComponentFixture<TodoAddNewTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DialogModule, 
        ButtonModule,
        FormsModule
      ],
      declarations: [TodoAddNewTaskComponent]
    });
    fixture = TestBed.createComponent(TodoAddNewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
