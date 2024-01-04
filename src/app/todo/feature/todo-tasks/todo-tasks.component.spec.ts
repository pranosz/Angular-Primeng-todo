import { ComponentFixture, TestBed, fakeAsync, flush, waitForAsync } from '@angular/core/testing';
import { TodoTasksComponent } from './todo-tasks.component';
import { By } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TaskService } from 'src/app/todo/services/task.service';
import { TASKS } from 'src/app/tests-utils/mock-data';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TodoFooterComponent } from '../../ui/todo-footer/todo-footer.component';
import { TodoItemComponent } from '../../ui/todo-item/todo-item.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { TodoAddTaskComponent } from '../../ui/todo-add-task/todo-add-task.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TodoTasksComponent', () => {
  let todoTasksComponent: TodoTasksComponent;
  let fixture: ComponentFixture<TodoTasksComponent>;
  let el: DebugElement;

  beforeEach(() => {
    const taskServiceSpy = jasmine.createSpyObj<TaskService>('TaskService', 
    ['tasks','countAllTasks','countActiveTasks','countCompletedTasks']);

    TASKS[0] = {
      id: '1',
      name: 'task 1',
      completed: false,
      isEditMode: true
    }

    taskServiceSpy.tasks.and.returnValues(TASKS);

    TestBed.configureTestingModule({
      declarations: [
        TodoTasksComponent, 
        TodoItemComponent, 
        TodoAddTaskComponent, 
        TodoFooterComponent
      ],
      imports: [
        TableModule,
        CardModule,
        ConfirmDialogModule,
        ButtonModule,
        CheckboxModule,
        FormsModule,
        DialogModule,
        NoopAnimationsModule
      ],
      providers: [
        ConfirmationService,
        MessageService,
        {provide: TaskService, useValue: taskServiceSpy}
      ]
    })

    fixture = TestBed.createComponent(TodoTasksComponent);
    todoTasksComponent = fixture.componentInstance;
    el = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(todoTasksComponent).toBeTruthy();
  });

  it('should call editTask after emit task id from TodoItemComponent', () => {
    spyOn(todoTasksComponent, 'editTask');
    const toDoItem = el.query(By.directive(TodoItemComponent));
    const editTaskButton = toDoItem.query(By.css('[data-testid="edit-task-button"]'));
    editTaskButton.nativeElement.click();

    expect(todoTasksComponent.editTask).toHaveBeenCalledWith(TASKS[0].id);
  })

  it('should call deleteTask after emit DeleteTask object from TodoItemComponent', () => {
    spyOn(todoTasksComponent, 'deleteTask');
    const toDoItem = el.query(By.directive(TodoItemComponent));
    const deleteTaskButton = toDoItem.query(By.css('[data-testid="delete-task-button"]'));
    deleteTaskButton.nativeElement.click();

    expect(todoTasksComponent.deleteTask).toHaveBeenCalledWith({event: new PointerEvent('click'), id: TASKS[0].id});
  })

  it('should call comfirmEditedName after emit Task object from TodoItemComponent', () => {
    spyOn(todoTasksComponent, 'comfirmEditedName');
    const toDoItem = el.query(By.directive(TodoItemComponent));
    const comfirmTaskButton = toDoItem.query(By.css('[data-testid="comfirm-edit-task-button"]'));
    comfirmTaskButton.nativeElement.click();

    expect(todoTasksComponent.comfirmEditedName).toHaveBeenCalledWith(TASKS[0]);
  })

  it('should call changeTaskStatus after emit Task object from TodoItemComponent', () => {
    spyOn(todoTasksComponent, 'changeTaskStatus');
    const toDoItem = el.query(By.directive(TodoItemComponent));

    const boxEl = toDoItem.nativeElement.querySelector('.p-checkbox-box');
    boxEl.click();
    fixture.detectChanges();

    expect(todoTasksComponent.changeTaskStatus).toHaveBeenCalledWith(TASKS[0]);
  })

  it('should call addTask after emit task name from TodoAddTaskComponent', () => {
    spyOn(todoTasksComponent, 'addTask');
  
    const addTaskComponent = el.query(By.directive(TodoAddTaskComponent));
    const addTaskComponentInstance = addTaskComponent.componentInstance;
    addTaskComponentInstance.addNewTask.emit('New name');
  
    expect(todoTasksComponent.addTask).toHaveBeenCalledWith('New name');
  })

});
