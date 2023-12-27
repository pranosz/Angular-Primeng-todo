import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogService } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { TodoAddNewTaskComponent } from './todo-add-new-task/todo-add-new-task.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoTaskComponent,
    TodoAddNewTaskComponent,
    TodoFooterComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    TableModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    InputTextModule
  ],
  providers: [ConfirmationService, MessageService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
