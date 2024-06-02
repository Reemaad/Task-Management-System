import { Component, ViewChild } from "@angular/core";
import { ButtonComponent } from "../../components/button/button.component";
import { TableComponent } from "../../components/table/table.component";
import { TranslateModule } from "@ngx-translate/core";
import { ButtonType } from "../../enums/button-type";
import { Tasks } from "../../models/tasks";
import { CustomType } from "../../enums/custom-type";
import { Column } from "../../models/column-data";
import { PopUpComponent } from "../../components/pop-up/pop-up.component";
import { DropdownItem } from "../../models/dropdown-item";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ErrorMessage } from "../../models/error-message";
import { InputValidator } from "../../enums/input-validator";
import { DropdownComponent } from "../../components/dropdown/dropdown.component";
import { InputType } from "../../enums/input-type";
import { InputComponent } from "../../components/input/input.component";
import { ButtonRole } from "../../enums/button-role";

@Component({
  selector: "task-management-page",
  standalone: true,
  templateUrl: "./task-management-page.component.html",
  styleUrl: "./task-management-page.component.css",
  imports: [ButtonComponent, TableComponent, TranslateModule, PopUpComponent, DropdownComponent, InputComponent, ReactiveFormsModule]
})
export class TaskManagementPageComponent {
  taskForm!: FormGroup;
  InputType = InputType;
  ButtonType = ButtonType;
  ButtonRole = ButtonRole;
  taskIdToDelete!: number | null;

  @ViewChild('deleteTaskPopup') deleteTaskPopup!: PopUpComponent;
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
      status: "/assets/images/png/notStarted.png",
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

  statusList: DropdownItem[] = [
    { value: "/assets/images/png/completed.png", label: "TASK.STATUSES.COMPLETED" },
    { value: "/assets/images/png/inProgress.png", label: "TASK.STATUSES.IN_PROGRESS" },
    { value: "/assets/images/png/notStarted.png", label: "TASK.STATUSES.NOT_STARTED" },
  ];

  errorMessages: { [type: string]: ErrorMessage[] } = {
    status: [{ validator: InputValidator.required, message: "ERROR_MESSAGE.REQUIRED" }],
    description: [{ validator: InputValidator.required, message: "ERROR_MESSAGE.REQUIRED" }]
  };

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

  closeDelete() {
    this.deleteTaskPopup.close();
  }

  openPopup() {
    this.dropdownComponent.resetDropdown();
    this.addEditPopup.open();
  }

  closePopup() {
    this.resetForm(this.taskForm);
  }

  onSelectedItemChanged(value: string) {
    this.taskForm.get('status')?.setValue(value);
  }

  addTask() {
    if (this.taskForm.valid) {
      const newTask: Tasks = {
        id: this.tasks.length + 1,
        status: this.taskForm.get('status')?.value,
        description: this.taskForm.get('description')?.value
      };
      this.tasks.push(newTask);
      this.addEditPopup.close();
      this.closePopup();
    }
  }

  resetForm(form: FormGroup) {
    form.reset();
    form.markAsUntouched;
    form.get('status')?.setErrors(null);
    form.get('description')?.setErrors(null);
  }

}