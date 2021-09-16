import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  taskName = '';
  tasks: string[] = [];

  add() {
    if (this.taskName === '' || this.tasks.includes(this.taskName)) return;
    this.tasks.push(this.taskName);
    this.taskName = '';
  }

  deleteElement(el: string) {
    // console.log('delete triggered from parent');
    this.tasks = this.tasks.filter((el2) => el !== el2);
  }
}
