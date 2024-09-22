import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  data: string = '';

  constructor(private taskService: TaskService) {

  }

  ngOnInit() {
    this.taskService.currentData.subscribe((data) => {
      this.data = data;
    });
    // this.taskService.getAllTasks();        
  }

}
