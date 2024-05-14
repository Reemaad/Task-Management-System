import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { Column } from '../models/column-data';
import { CustomType } from '../../enums/custom-type';
import { TableData } from '../models/table-data';

@Component({
  selector: 'custom-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [TranslateModule]
})
export class TableComponent<T extends TableData> {
  @Input() tableData!: T[];
  @Input({ required: true }) columns: Column<T>[] = [];

  @Output() action = new EventEmitter<number[]>();

  String = String;
  CustomType = CustomType;

  handleIconClick(columnNo: number, dataId: number): void {
    this.action.emit([columnNo, dataId]);
  }
}