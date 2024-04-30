import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'custom-table',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input() headArray = [
    {
      "Task_Number": "رقم المهمة",
      "Task_Status": "حالة المهمة",
      "Task_Description": "وصف المهمة"
    }];
  @Input() items: any[] = [
    { id: '1', status: 'لم تبدأ بعد', des: 'مراجعة ملفات التصميم' },
    { id: '2', status: 'اكتملت', des: 'مراجعة ملفات التصميم' },
    { id: '3', status: 'قيد الإجراء', des: 'مراجعة ملفات التصميم' }
  ];
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  constructor() {
  }


  getStatusClass(status: string) {
    switch (status) {
      case 'لم تبدأ بعد':
        return 'status-back status-grey';
      case 'اكتملت':
        return 'status-back status-green';
      case 'قيد الإجراء':
        return 'status-back status-yellow';
      default:
        return '';
    }
  }

  editItem(itemId: string) {
    const index = this.items.findIndex(item => item.id === itemId);
    if (index !== -1) {
      // Will do the Pop Up and complete this to update the properties of the item
    }
  }

  deleteItem(items: string) {
    this.items = this.items.filter(item => item.id !== items);
  }
}
