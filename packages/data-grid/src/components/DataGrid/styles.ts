import { Flex } from "@quen-ui/components";
import styled from "styled-components";

export const DataGridWrapper = styled(Flex)`
  th:last-child,
  td:last-child {
    border-right: none;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }
`;
