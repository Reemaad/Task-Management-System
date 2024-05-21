import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TaskManagementPageComponent } from "./task-management-page.component";

describe("TaskManagementPageComponent", () => {
  let component: TaskManagementPageComponent<any>;
  let fixture: ComponentFixture<TaskManagementPageComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskManagementPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
