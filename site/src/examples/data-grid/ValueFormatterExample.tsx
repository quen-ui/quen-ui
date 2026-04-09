import { DataGrid, type IColumnDef } from "@quen-ui/data-grid";

interface ICarsData {
  brand: string;
  id: string;
  model: string;
  range_km: number;
}

const columns: IColumnDef<ICarsData>[] = [
  {
    field: "brand",
    headerName: "Brand",
  },
  {
    field: "model",
    headerName: "Model",
  },
  {
    field: "range_km",
    headerName: "Range km",
    valueFormatter: (params) => `${params.value} km`
  }
];

const rowsData: ICarsData[] = [
  {
    brand: "Tesla",
    model: "Model 3",
    range_km: 568,
    id: "1"
  },
  {
    brand: "Tesla",
    model: "Model S",
    range_km: 652,
    id: "2"
  },
  {
    brand: "Nissan",
    model: "Leaf",
    range_km: 270,
    id: "3"
  },
  {
    brand: "Ford",
    model: "Mustang Mach-E",
    range_km: 483,
    id: "4"
  },
  {
    brand: "Kia",
    model: "EV 6",
    range_km: 499,
    id: "5"
  }
]

export const ValueFormatterExample = () => {
  return (
    <DataGrid columns={columns} rowData={rowsData} />
  )
}
