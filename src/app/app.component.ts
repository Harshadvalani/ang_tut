import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit , OnDestroy {
  title = 'todo-list-ui';

  ngOnInit() {
      this.title = "todo-list-ui is loaded";
  }

  ngOnDestroy(): void {
    console.log("todo-list-ui is destroyed"); 
  }

}
