import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() taskDesc: any;
  @Output() deleteElmt = new EventEmitter();

  constructor() {}

  delete(ev: String) {
    console.log('delete triggered from child');
    this.deleteElmt.emit(ev);
  }

  ngOnInit(): void {}
}
