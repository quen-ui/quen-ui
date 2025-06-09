import React, { useMemo } from "react";
import { Text, Title } from "@quen-ui/components";
import { PropsTableStyled } from "./styles";
import propsComponent from "../../../../propsComponents.json";

interface IPropsTableProps {
  component: string;
}
const PropsTable = ({ component }: IPropsTableProps) => {
  const props = useMemo(() => {
    return propsComponent.find((p) => (p.displayName = component));
  }, [component]);


  if (!props) return null;

  const rows = Object.entries(props.props).map(([propName, prop]) => {
    return (
      <tr key={propName}>
        <td>{propName}</td>
        <td>{String(prop.required)}</td>
        <td>{prop.type.name}</td>
        <td>{prop.description}</td>
        <td>{prop.defaultValue?.value || "-"}</td>
      </tr>
    );
  });

  if (rows.length === 0) {
    return (
      <Text size="l" type="warning">
        Nothing found
      </Text>
    );
  }

  return (
    <PropsTableStyled>
      <thead>
        <tr>
          <Title size="xs" as="th">Name</Title>
          <Title size="xs" as="th">Required</Title>
          <Title size="xs" as="th">Type</Title>
          <Title size="xs" as="th">Description</Title>
          <Title size="xs" as="th">Default value</Title>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </PropsTableStyled>
  );
};

export default PropsTable;
