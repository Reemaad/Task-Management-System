import { TableData } from "./table-data";

export interface Tasks extends TableData {
  status: string;
  description: string;
}
