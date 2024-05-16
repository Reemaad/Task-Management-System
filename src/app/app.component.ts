import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { DropdownItem } from "./components/models/dropdown-item";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent<T> {
  title = "Task-Management-System";
  items: DropdownItem[] = [
    { value: "DROPDOWNـOPTIONS.OPTION1_VALUE", label: "DROPDOWNـOPTIONS.OPTION1_LABEL" },
    { value: "DROPDOWNـOPTIONS.OPTION2_VALUE", label: "DROPDOWNـOPTIONS.OPTION2_LABEL" },
    { value: "DROPDOWNـOPTIONS.OPTION3_VALUE", label: "DROPDOWNـOPTIONS.OPTION3_LABEL" },
  ];

  onSelectedItemChanged(value: string) {
    console.log("Selected value:", value);
  }
}
