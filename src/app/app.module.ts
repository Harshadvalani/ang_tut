import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TaskListModule } from './task-list/task-list.module';

@NgModule({
  declarations: [
    AppComponent,
    // TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskListModule,
    // FormsModule
  ],
  providers: [
    // TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
