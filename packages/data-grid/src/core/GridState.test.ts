import GridState from "./GridState";
import type { IColumnDef } from "./types";

describe('GridState', () => {
  const columns: IColumnDef<{ name: string }>[] = [
    { field: 'name', headerName: 'Name' },
  ];


  it('should initialize with rows and columns', () => {
    const grid = new GridState(columns, [{ name: 'Alice' }]);


    expect(grid.getRows()).toHaveLength(1);
    expect(grid.getAllColumns()).toHaveLength(1);
  });


  it('should select and deselect rows', () => {
    const grid = new GridState(columns, [{ name: 'Alice' }]);
    const row = grid.getRows()[0];


    grid.selectRow(row.id);
    expect(grid.getSelectedRows()).toContain(row);


    grid.deselectRow(row.id);
    expect(grid.getSelectedRows()).toHaveLength(0);
  });


  it('should update row data', () => {
    const grid = new GridState(columns, [{ name: 'Alice' }]);
    grid.setRowData([{ name: 'Bob' }]);


    expect(grid.getRows()[0].data.name).toBe('Bob');
  });


  it('should set columns', () => {
    const grid = new GridState(columns);
    grid.setColumnDefs([{ field: 'name', headerName: 'Full Name' }]);


    expect(grid.getAllColumns()[0].headerName).toBe('Full Name');
  });


  it('should emit events on refresh', () => {
    const grid = new GridState(columns, [{ name: 'Alice' }]);
    const handler = jest.fn();


    grid.on('gridRefresh', handler);
    grid.refresh();


    expect(handler).toHaveBeenCalled();
  });


  it('should emit selectionChanged events', () => {
    const grid = new GridState(columns, [{ name: 'Alice' }]);
    const handler = jest.fn();
    const row = grid.getRows()[0];


    grid.on('selectionChanged', handler);
    grid.selectRow(row.id);


    expect(handler).toHaveBeenCalledWith([row]);
  });
});
