import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add-task',
  templateUrl: './todo-add-task.component.html',
  styleUrls: ['./todo-add-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoAddTaskComponent {
  @Output() addNewTask = new EventEmitter<string>();

  visible = false;
  newTaskName = '';

  get isAddNewTaskDisabled(): boolean {
    return this.newTaskName === '';
  }

  addTask(): void {
    this.addNewTask.emit(this.newTaskName);
    this.visible = false;
  }

  showNewTaskPopup(): void {
    this.newTaskName = '';
    this.visible = true;
  }
}
