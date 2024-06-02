import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { TaskManagementPageComponent } from "./pages/task-management-page/task-management-page.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: "Task",
        component: TaskManagementPageComponent
    }
];
