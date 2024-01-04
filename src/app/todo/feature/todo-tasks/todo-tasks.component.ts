import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TaskService } from 'src/app/todo/services/task.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Task } from 'src/app/models/task.interface';
import { DeleteTask } from 'src/app/models/delete-task.interface';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoTasksComponent {

  taskService = inject(TaskService);
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);

  deleteTask(deleteItem: DeleteTask): void {
    this.confirmationService.confirm({
      target: deleteItem.event.target as EventTarget,
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

        this.taskService.deleteTask(deleteItem.id);
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

  changeTaskStatus(task: Task): void {
    this.taskService.editTask(task);  
  }

  addTask(name: string): void {
    this.taskService.addNewTask(name);
  }
}
