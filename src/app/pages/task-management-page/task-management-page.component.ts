import { Component, ViewChild } from "@angular/core";
import { ButtonComponent } from "../../components/button/button.component";
import { TableComponent } from "../../components/table/table.component";
import { TranslateModule } from "@ngx-translate/core";
import { ButtonType } from "../../enums/button-type";
import { Tasks } from "../../models/tasks";
import { CustomType } from "../../enums/custom-type";
import { Column } from "../../models/column-data";
import { PopUpComponent } from "../../components/pop-up/pop-up.component";

@Component({
  selector: "task-management-page",
  standalone: true,
  imports: [ButtonComponent, TableComponent, TranslateModule, PopUpComponent],
  templateUrl: "./task-management-page.component.html",
  styleUrl: "./task-management-page.component.css",
})
export class TaskManagementPageComponent {
  taskForm!: FormGroup;
  InputType = InputType;
  ButtonType = ButtonType;
  @ViewChild(PopUpComponent) deleteTaskPopup!: PopUpComponent;
  taskIdToDelete!: number | null;

  @ViewChild('addEditPopup') addEditPopup!: PopUpComponent;
  @ViewChild(DropdownComponent) dropdownComponent!: DropdownComponent;

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

  handleTaskAction(columnNo: number, dataId: number): void {
    const DELETION_COLUMN_NUMBER = 4;
    if (columnNo === DELETION_COLUMN_NUMBER) {
      this.taskIdToDelete = dataId;
      this.deleteTaskPopup.open();
    }
  }

  confirmDelete(): void {
    if (this.taskIdToDelete !== null) {
      this.deleteItem(this.taskIdToDelete);
      this.taskIdToDelete = null;
      this.deleteTaskPopup.close();
    }
  }

  deleteItem(id: number): void {
    const index = this.tasks.findIndex((item) => item.id === id);

    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  closePopup() {
    this.deleteTaskPopup.close();
  }
  statusList: DropdownItem[] = [
    { value: "/assets/images/png/completed.png", label: "TASK.STATUSES.OPTION1_LABEL" },
    { value: "/assets/images/png/inProgress.png", label: "TASK.STATUSES.OPTION2_LABEL" },
    { value: "/assets/images/png/pending.png", label: "TASK.STATUSES.OPTION3_LABEL" },
  ];
  constructor() {
    this.taskForm = new FormGroup({
      status: new FormControl("", [
        Validators.required,
      ]),
      description: new FormControl("", [
        Validators.required,
      ]),
    });
  }

  errorMessages: { [type: string]: ErrorMessage[] } = {
    status: [{ validator: InputValidator.required, message: "ERROR_MESSAGE.REQUIRED" }],
    description: [{ validator: InputValidator.required, message: "ERROR_MESSAGE.REQUIRED" }]
  };
  openPopup() {
    this.addEditPopup.open();
  }
  closePopup() {
    this.taskForm.reset();
    this.addEditPopup.close();
    this.dropdownComponent.resetDropdown();
  }
  onSelectedItemChanged(value: string) {
    this.taskForm.get('status')?.setValue(value);
  }
  addTask() {
    if (this.taskForm.valid) {
      const newTask: Tasks = {
        id: this.tasks.length + 1,
        status: this.taskForm.get('status')?.value,
        description: this.taskForm.value.description
      };
      this.tasks.push(newTask);
      this.closePopup();
      this.taskForm.reset();
      this.dropdownComponent.resetDropdown();
    } else {
      this.taskForm.markAllAsTouched();
    }
  }

}
