import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        TaskComponent,
        TasksComponent,
        NewTaskComponent
    ],
    exports: [TasksComponent],
    imports: [CommonModule, FormsModule, SharedModule]
})
export class TasksModule { }