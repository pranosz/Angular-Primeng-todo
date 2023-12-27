import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddNewTaskComponent } from './todo-add-new-task.component';

describe('TodoAddNewTaskComponent', () => {
  let component: TodoAddNewTaskComponent;
  let fixture: ComponentFixture<TodoAddNewTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
