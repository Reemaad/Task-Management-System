import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { Column } from '../models/column-data';
import { CustomType } from '../enums/custom-type';
import { TableData } from '../models/table-data';

@Component({
  selector: 'custom-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [TranslateModule]
})
export class TableComponent<T extends TableData> implements OnInit {
  @Input() tableData!: T[];
  @Input({ required: true }) columns: Column <T>[] = [];
  @Output() contact = new EventEmitter<any>();
  String= String;
  CustomType = CustomType;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
  }

  ngOnInit(): void {

  }

  handleIconClick(columnNo: number, data: TableData): void {
    this.contact.emit({ columnNo, data });
  }
}