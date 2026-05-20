import { useEffect, useRef, type ComponentType } from "react";
import { DefaultFilterPopup } from "./DefaultFilterPopup";
import type {
  IFilterProps,
  IColumnDef,
  TFilterType,
  IFilterModelItem
} from "../../core";

interface FilterRendererProps<T> {
  isOpen: boolean;
  onClose: () => void;
  field: keyof T | string;
  filterType: TFilterType;
  currentFilter?: IFilterModelItem<T> | null;
  onFilterChange: IFilterProps<T>["onFilterChange"];
  filterComponent?: ComponentType<IFilterProps<T>>;
  filterParams?: IColumnDef<T>["filterParams"];
}

export function FilterRenderer<T>({
  isOpen,
  onClose,
  field,
  filterType,
  currentFilter,
  onFilterChange,
  filterComponent,
  filterParams
}: FilterRendererProps<T>) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const FilterUI = filterComponent || DefaultFilterPopup;
  const debounceMs = filterParams?.debounceMs ?? 0;

  const filterProps: IFilterProps<T> = {
    field,
    filterType,
    currentFilter,
    onFilterChange,
    close: onClose,
    debounceMs
  };

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        zIndex: 9999,
        marginTop: 4
      }}>
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
