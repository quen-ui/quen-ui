import { Text } from "@quen-ui/components";
import type { IDataGridProps } from "../DataGrid/types";
import { DataGridStateWrapper } from "./styles";

export function DataGridEmpty({
  emptyComponent,
  noDataMessage,
  size = "m"
}: Pick<IDataGridProps, "emptyComponent" | "noDataMessage" | "size">) {
  if (emptyComponent) return <>{emptyComponent}</>;

  return (
    <DataGridStateWrapper
      direction="column"
      align="center"
      justify="center"
      gap="xs"
    >
      <Text size={size} color="tertiary">
        {noDataMessage || "No data available"}
      </Text>
    </DataGridStateWrapper>
  );
}
