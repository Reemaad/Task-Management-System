import { Component } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LoginComponent]
})
export class AppComponent {
  title = "Task-Management-System";

  constructor(private router: Router) { }

  get showHeader(): boolean {
    return !this.router.url.includes('login');
  }

}