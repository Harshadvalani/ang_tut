import { NgModule } from "@angular/core";
import { TaskListComponent } from "./task-list.component";
import { TaskService } from "../service/task.service";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "../navigation/navigation.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    TaskListComponent,
    NavigationComponent
  ],
  exports: [
    TaskListComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [TaskService]
})
export class TaskListModule { }
