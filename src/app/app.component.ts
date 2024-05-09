import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TableComponent } from "./components/table/table.component";
import { Column } from "./components/models/column-data";
import { TableData } from "./components/models/table-data";
import { CustomType } from "./components/enums/custom-type";


@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TableComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent<T> {
  title = "Task-Management-System";
  columns: Column<any>[] = [
    { label: "id", property: "id" },
    { label: "status", property: 'status', showCustom: true, customType: CustomType.IMAGE },
    { label: "description", property: 'description' },
    { label: "", property: "id", showCustom: true, customType: CustomType.ICON, customContent: "bi bi-pencil-square", iconColor: 'var(--primary-color)' },
    { label: "", property: "id", showCustom: true, customType: CustomType.ICON, customContent: "bi bi-trash", iconColor: 'red' }
  ];

  tableData: TableData[] = [
    {
      id: 1,
      status: "/assets/images/png/pending.png",
      description: 'مراجعة ملفات التصميم'
    },
    {
      id: 2,
      status: "/assets/images/png/inProgress.png",
      description: 'مراجعة ملفات التصميم',

    },
    {
      id: 3,
      status: "/assets/images/png/completed.png",
      description: 'مراجعة ملفات التصميم',

    }
  ];

  handleIconClick(IDs: number[]): void {
    const columnNo= IDs[0];
    const dataId = IDs[1];
    if (columnNo === 4) {
      this.deleteItem(dataId);
    } else if (columnNo === 3) {
      this.editItem(dataId);
    }
  }
  editItem(id: number): void {
    console.log('Edit item:', id);
  }
  deleteItem(id: number): void {
    const index = this.tableData.findIndex(item => item.id === id);

    if (index !== -1) {
      this.tableData.splice(index, 1);
    }
  }

  constructor() { }

}