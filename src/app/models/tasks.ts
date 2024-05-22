import { TableData } from "./table-data";

export class Tasks implements TableData {
  id: number;
  status: string;
  description: string;
  constructor(id: number, status: string, description: string) {
    this.id = id;
    this.status = status;
    this.description = description;
  }
}
