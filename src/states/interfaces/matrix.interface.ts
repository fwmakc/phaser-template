export interface MatrixInterface {
  currentCol: number;
  currentRow: number;
  defaultCol: number;
  defaultRow: number;
  blocked: boolean;
  map: Array<Array<string>>;
}
