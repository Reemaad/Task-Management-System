import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DropdownItem } from "../../models/dropdown-item";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "custom-dropdown",
  standalone: true,
  imports: [TranslateModule],
  templateUrl: "./dropdown.component.html",
  styleUrl: "./dropdown.component.css",
})
export class DropdownComponent {
  @Input() label = "";
  @Input() placeholder = "";
  @Input() items!: DropdownItem[];
  @Output() selectedItemChanged = new EventEmitter<string>();

  onSelect(value: string) {
    this.selectedItemChanged.emit(value);
  }
}
