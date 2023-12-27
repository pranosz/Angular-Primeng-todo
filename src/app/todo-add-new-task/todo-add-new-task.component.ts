import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-todo-add-new-task',
  templateUrl: './todo-add-new-task.component.html',
  styleUrls: ['./todo-add-new-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoAddNewTaskComponent {

  visible = false;
  newTaskName = '';

  taskService = inject(TaskService);

  get isAddNewTaskDisabled(): boolean {
    return this.newTaskName === '';
  }

  addTask(): void {
    this.taskService.addNewTask(this.newTaskName);
    this.visible = false;
  }

  showNewTaskPopup(): void {
    this.newTaskName = '';
    this.visible = true;
  }

}
