import { MatrixInterface } from './interfaces/matrix.interface';
import { StateTemplate } from './templates/state.template';

export class MatrixState extends StateTemplate<MatrixInterface> {
  get col(): number {
    return this.state.currentCol;
  }

  set col(userValue: number) {
    if (userValue < 0) {
      this.state.currentCol = 0;
      return;
    }
    if (userValue >= this.state.map[this.state.currentRow].length - 1) {
      this.state.currentCol = this.state.map[this.state.currentRow].length - 1;
      return;
    }
    this.state.currentCol = userValue;
  }

  get row(): number {
    return this.state.currentRow;
  }

  set row(userValue: number) {
    if (userValue < 0) {
      this.state.currentRow = 0;
      return;
    }
    if (userValue >= this.state.map.length - 1) {
      this.state.currentRow = this.state.map.length - 1;
      return;
    }
    this.state.currentRow = userValue;
  }

  get value(): string {
    return this.state.map[this.state.currentRow][this.state.currentCol];
  }

  set value(userValue: string) {
    if (this.isBlocked()) {
      return;
    }
    this.state.map[this.state.currentRow][this.state.currentCol] = userValue;
  }

  isBlocked(): boolean {
    return this.state.blocked;
  }

  maxRow(): number {
    return this.state.map.length - 1;
  }

  maxCol(): number {
    return this.state.map[this.state.currentRow].length - 1;
  }

  findValueByCoords(col: number, row: number): string {
    return this.state.map[row][col];
  }

  findCoordsByValue(userValue: string): {
    col: number | null;
    row: number | null;
  } {
    for (const rowIndex in this.state.map) {
      const row = this.state.map[rowIndex];
      for (const colIndex in row) {
        const col = row[colIndex];
        if (col === userValue) {
          return { col: +colIndex, row: +rowIndex };
        }
      }
    }
    return { col: null, row: null };
  }

  reset(): void {
    this.state.currentCol = this.state.defaultCol;
    this.state.currentRow = this.state.defaultRow;
  }

  load(): boolean {
    const parameters = ['currentCol', 'currentRow'];
    if (!this.isBlocked()) {
      parameters.push('map');
    }
    return this.storage.load({
      parameters,
      state: this.state,
    });
  }

  save(): boolean {
    const parameters = ['currentCol', 'currentRow'];
    if (!this.isBlocked()) {
      parameters.push('map');
    }
    return this.storage.save({
      parameters,
      state: this.state,
    });
  }
}
