import { Component, EventEmitter, Input, Output } from "@angular/core";
import { dropdownList } from "../models/dropdown-list";
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
  @Input() items!: dropdownList[];
  @Output() selectedItemChanged = new EventEmitter<string>();

  onSelect(value: string) {
    this.selectedItemChanged.emit(value);
  }
}
