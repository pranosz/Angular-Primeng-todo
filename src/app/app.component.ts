import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'angular-primeng-todo';

  private taskService = inject(TaskService);
  service = this.taskService;

  addTask() {
    this.taskService.addNewTask();
  }

  deleteTask(id: string): void {
    this.taskService.deleteTask(id);
  }

}
