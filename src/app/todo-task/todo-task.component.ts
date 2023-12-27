import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Task } from '../models/task.interface';
import { TaskService } from '../services/task.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoTaskComponent {

  taskService = inject(TaskService);
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);

  @Input({required: true}) task!: Task;

  deleteTask(event: Event, id: string): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',
      
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Record deleted',
        });

        this.taskService.deleteTask(id);
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
        });
      },
  });
    
  }

  editTask(id: string): void {
    const task = this.taskService.getTask(id);

    if (task) {
      task.isEditMode = !task.isEditMode;
    }
  }

  comfirmEditedName(task: Task): void {
    this.taskService.editTask(task);   
  }

  onChangeTaskStatus(task: Task): void {
    this.taskService.editTask(task);  
  }

}
