import { Component } from "@angular/core";
import { ButtonComponent } from "../../components/button/button.component";
import { TableComponent } from "../../components/table/table.component";
import { TranslateModule } from "@ngx-translate/core";
import { ButtonType } from "../../enums/button-type";
import { Tasks } from "../../models/tasks";
import { CustomType } from "../../enums/custom-type";
import { Column } from "../../models/column-data";

@Component({
  selector: "task-management-page",
  standalone: true,
  imports: [ButtonComponent, TableComponent, TranslateModule],
  templateUrl: "./task-management-page.component.html",
  styleUrl: "./task-management-page.component.css",
})
export class TaskManagementPageComponent {
  ButtonType = ButtonType;

  columns: Column<Tasks>[] = [
    { label: "TASK.ID", property: "id" },
    {
      label: "TASK.STATUS",
      property: "status",
      showCustom: true,
      customType: CustomType.IMAGE,
    },
    { label: "TASK.DESCRIPTION", property: "description" },
    {
      label: "",
      property: "id",
      showCustom: true,
      customType: CustomType.ICON,
      customContent: "bi bi-pencil-square",
      iconColor: "var(--primary-color)",
    },
    {
      label: "",
      property: "id",
      showCustom: true,
      customType: CustomType.ICON,
      customContent: "bi bi-trash",
      iconColor: "red",
    },
  ];

  tasks: Tasks[] = [
    {
      id: 1,
      status: "/assets/images/png/pending.png",
      description: "TASK.DESCRIPTION_DATA",
    },
    {
      id: 2,
      status: "/assets/images/png/inProgress.png",
      description: "TASK.DESCRIPTION_DATA",
    },
    {
      id: 3,
      status: "/assets/images/png/completed.png",
      description: "TASK.DESCRIPTION_DATA",
    },
    {
      id: 4,
      status: "/assets/images/png/inProgress.png",
      description: "TASK.DESCRIPTION_DATA",
    },
  ];
}
