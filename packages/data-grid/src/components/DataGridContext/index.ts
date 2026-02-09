import {createContext, useContext } from "react";
import type {IDataGridContext} from "./types";

export const DataGridContext = createContext<IDataGridContext | null>(null);

export function useDataGridContext<TData = any>() {
  const ctx = useContext<IDataGridContext<TData> | null>(DataGridContext);

  if (!ctx) {
    throw new Error("useDataGridContext must be used inside <DataGrid>");
  }
  return ctx;
}
