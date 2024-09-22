import { Component } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  
  public data: any;

  constructor(private taskService: TaskService) {}

  sendData() {
    this.taskService.changeData(this.data);
  }
}
