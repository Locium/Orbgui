import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input () todo: Todo;
  // @Output () deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // set classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    };
    return classes;
  }

  onToggle(todo) {
    // toggle in UI
    todo.completed = !todo.completed;
    // toggle on server
    // this.todoService.toggleCompleted(todo).subscribe(todo =>
      // console.log(todo));
    console.log('toggle');
  }

  onDelete(todo) {
    // this.deleteTodo.emit(todo);

    console.log('delete');
  }

}
