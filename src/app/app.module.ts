import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TodoTasksComponent } from './todo/feature/todo-tasks/todo-tasks.component';
import { TodoItemComponent } from './todo/ui/todo-item/todo-item.component';
import { TodoAddTaskComponent } from './todo/ui/todo-add-task/todo-add-task.component';
import { TodoFooterComponent } from './todo/ui/todo-footer/todo-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoTasksComponent,
    TodoAddTaskComponent,
    TodoFooterComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    TableModule,
    CheckboxModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    InputTextModule
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
