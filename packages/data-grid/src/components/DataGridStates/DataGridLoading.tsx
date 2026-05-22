import { Loader, Text } from "@quen-ui/components";
import type { IDataGridProps } from "../DataGrid/types";
import { DataGridStateWrapper } from "./styles";

export const DataGridLoading = ({
  loadingComponent,
  size = "m"
}: Pick<IDataGridProps, "loadingComponent" | "size">) => {
  if (loadingComponent) return <>{loadingComponent}</>;

  return (
    <DataGridStateWrapper
      direction="column"
      align="center"
      justify="center"
      gap="xs"
      >
      <Loader size={size}  />
      <Text size={size} color="secondary">
        Loading data...
      </Text>
    </DataGridStateWrapper>
  );
};
