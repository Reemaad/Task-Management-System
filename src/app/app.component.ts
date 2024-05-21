import { Component, OnInit } from "@angular/core";
import { RouterOutlet, NavigationEnd, Router } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LoginComponent]
})
  title = "Task-Management-System";

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateLayout(event.urlAfterRedirects);
      }
    });
  }

  updateLayout(url: string) {
    if (url === '/login') {
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
  }
  
}