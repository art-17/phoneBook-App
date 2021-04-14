import { Component, OnInit } from '@angular/core';
import { Todo } from './../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  inputTodo: string = "";
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'first todo',
        complited: false,
      },
      {
        content: 'second todo',
        complited: true,
      }
    ]
  }


  deleteToDo(id:number){
    this.todos = this.todos.filter((v, i) => i !==id)
  }
  
  addToDo(){
    this.todos.push({
      content:this.inputTodo,
      complited: false,
    })
    this.inputTodo = "";
  }
}
