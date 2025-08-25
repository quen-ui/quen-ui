import React, { useMemo } from "react";
import { Text, Title } from "@quen-ui/components";
import { PropsTableStyled } from "./styles";
import propsComponent from "../../../../propsComponents.json";

interface IPropsTableProps {
  component: string;
  props?: string[];
}

interface IPropItem {
  required: boolean;
  type: { name: string };
  description?: string;
  defaultValue?: { value: string };
}

const TableHeader = () => (
  <thead>
    <tr>
      <Title size="xs" as="th">
        Name
      </Title>
      <Title size="xs" as="th">
        Required
      </Title>
      <Title size="xs" as="th">
        Type
      </Title>
      <Title size="xs" as="th">
        Description
      </Title>
      <Title size="xs" as="th">
        Default value
      </Title>
    </tr>
  </thead>
);

const TableBody = ({ props }: { props: Record<string, IPropItem> }) => {
  const rows = Object.entries(props).map(([propName, prop]) => (
    <tr key={propName}>
      <td>{propName}</td>
      <td>{String(prop.required)}</td>
      <td>{prop.type.name}</td>
      <td>{prop.description || "-"}</td>
      <td>{prop.defaultValue?.value || "-"}</td>
    </tr>
  ));

  return <tbody>{rows}</tbody>;
};

const PropsTable = ({ component, props: propsNames }: IPropsTableProps) => {
  const selected = useMemo(() => {
    if (propsNames?.length) {
      return propsComponent.filter((p) => propsNames.includes(p.displayName));
    }
    return propsComponent.find((p) => p.displayName === component);
  }, [component, propsNames]);

  if (!selected) return null;

  if (Array.isArray(selected)) {
    return (
      <>
        {selected.map((p, index: number) => (
          <div key={p.displayName}>
            <Title size="m">{propsNames?.[index]}</Title>
            <PropsTableStyled style={{ marginBottom: 32 }}>
              <TableHeader />
              <TableBody props={p.props as unknown as Record<string, IPropItem>} />
            </PropsTableStyled>
          </div>
        ))}
      </>
    );
  }

  const hasProps = Object.keys(selected.props).length > 0;
  if (!hasProps) {
    return (
      <Text size="l" type="warning">
        Nothing found
      </Text>
    );
  }

  return (
    <PropsTableStyled>
      <TableHeader />
      <TableBody props={selected.props as unknown as Record<string, IPropItem>} />
    </PropsTableStyled>
  );
};

export default PropsTable;
