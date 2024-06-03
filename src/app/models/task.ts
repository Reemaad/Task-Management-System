import { TableData } from "./table-data";

export interface Task extends TableData {
  status: string;
  description: string;
}
