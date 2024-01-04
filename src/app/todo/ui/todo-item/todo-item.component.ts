import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DeleteTask } from 'src/app/models/delete-task.interface';
import { Task } from 'src/app/models/task.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  @Input({required: true}) task!: Task;
  @Output() confirmNameChange = new EventEmitter<Task>();
  @Output() statusCompletedChange = new EventEmitter<Task>();
  @Output() editTask = new EventEmitter<string>();
  @Output() deleteTask = new EventEmitter<DeleteTask>();

  onComfirmEditedName(task: Task): void {
    this.confirmNameChange.emit(task);
  }

  onChangeTaskStatus(task: Task): void {
    this.statusCompletedChange.emit(task);
  }

  onEditTask(taskId: string): void {
    this.editTask.emit(taskId);
  }

  onDeleteTask(event: Event, id: string): void {
    this.deleteTask.emit({event, id});
  }
}
