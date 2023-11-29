import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-primeng-todo';
  /*
  todos = [
    {
      id: 1,
      task: 'first-task',
      completed: true
    },
    {
      id: 2,
      task: 'secound-task',
      completed: false
    }
  ];*/

  todoForm = this.fb.group({
    tasks: this.fb.array([
      this.fb.group({ id: 0, task: '', completed: false})
    ])
  });

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    console.log("todoForm ", this.todoForm);
  }

  debugConsole(item: any) {
    console.log("item ", item);
  }

  get tasks(): FormArray {
    return this.todoForm.get('tasks') as FormArray;
  }

  addTask() {
    const arr = this.todoForm.get('tasks') as FormArray;
    arr.push(
      this.fb.group({id: 3, task: '', completed: true})
    );

    console.log("todoForm 2", this.todoForm);
  }

  onSubmit(): void {
    console.log("todoForm ", this.todoForm.getRawValue());
  }

}
