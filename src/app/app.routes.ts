import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    }
import { TaskManagementPageComponent } from "./pages/task-management-page/task-management-page.component";

  { path: "tasks", component: TaskManagementPageComponent },
];
