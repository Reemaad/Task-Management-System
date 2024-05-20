import { Component } from "@angular/core";
import { ButtonComponent } from "../../button/button.component";
import { TableComponent } from "../../table/table.component";
import { TranslateModule } from "@ngx-translate/core";
import { ButtonType } from "../../../enums/button-type";
import { TableData } from "../../../models/table-data";
import { CustomType } from "../../../enums/custom-type";
import { Column } from "../../../models/column-data";

@Component({
  selector: "task-management-page",
  standalone: true,
  imports: [ButtonComponent, TableComponent, TranslateModule],
  templateUrl: "./task-management-page.component.html",
  styleUrl: "./task-management-page.component.css",
})
export class TaskManagementPageComponent<T> {
  ButtonType = ButtonType;

  columns: Column<TableData>[] = [
    { label: "TABLE.ID", property: "id" },
    {
      label: "TABLE.STATUS",
      property: "status",
      showCustom: true,
      customType: CustomType.IMAGE,
    },
    { label: "TABLE.DESCRIPTION", property: "description" },
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

  tableData: TableData[] = [
    {
      id: 1,
      status: "/assets/images/png/pending.png",
      description: "TABLE.DESCRIPTION_DATA",
    },
    {
      id: 2,
      status: "/assets/images/png/inProgress.png",
      description: "TABLE.DESCRIPTION_DATA",
    },
    {
      id: 3,
      status: "/assets/images/png/completed.png",
      description: "TABLE.DESCRIPTION_DATA",
    },
    {
      id: 4,
      status: "/assets/images/png/inProgress.png",
      description: "TABLE.DESCRIPTION_DATA",
    },
  ];
}
