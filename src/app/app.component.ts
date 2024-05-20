import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TaskManagementPageComponent } from "./pages/task-management-page/task-management-page.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LoginComponent, RouterOutlet, RouterLink, RouterLinkActive]
})
export class AppComponent {
  title = "Task-Management-System";
}