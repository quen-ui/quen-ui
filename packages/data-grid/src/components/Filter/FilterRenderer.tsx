import { useMemo, type ComponentType } from "react";
import { DefaultFilterPopup } from "./DefaultFilterPopup";
import type {
  IFilterProps,
  IColumnDef,
  TFilterType,
  IFilterModelItem
} from "../../core";

interface FilterContentProps<T> {
  field: keyof T | string;
  filterType: TFilterType;
  currentFilter?: IFilterModelItem<T> | null;
  onFilterChange: IFilterProps<T>["onFilterChange"];
  close: () => void;
  filterComponent?: ComponentType<IFilterProps<T>>;
  filterParams?: IColumnDef<T>["filterParams"];
}

export function FilterRenderer<T>({
  field,
  filterType,
  currentFilter,
  onFilterChange,
  close,
  filterComponent,
  filterParams
}: FilterContentProps<T>) {
  const FilterUI = filterComponent || DefaultFilterPopup;
  const debounceMs = filterParams?.debounceMs ?? 0;

  const filterProps: IFilterProps<T> = useMemo(
    () => ({
      field,
      filterType,
      currentFilter,
      onFilterChange,
      close,
      debounceMs
    }),
    [field, filterType, currentFilter, onFilterChange, close, debounceMs]
  );

  return (
    <div style={{ padding: 8, minWidth: 220 }}>
      <div
        style={{
          background: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: 6,
          padding: 10,
          minWidth: 200,
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
        }}>
        <FilterUI {...filterProps} />
      </div>
    </div>
  );
}
