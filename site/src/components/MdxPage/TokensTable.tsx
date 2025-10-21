import React, { useMemo } from "react";
import { math } from "polished";
import { Text, Title, Flex } from "@quen-ui/components";
import { useTheme, type IQuenUITheme } from "@quen-ui/theme";
import { getValueObject, type TKeyObjectType } from "@quen-ui/helpers";
import { PropsTableStyled } from "./styles";
import themeComponentTokens from "../../../../themeComponentTokens.json";

interface IPropsTableProps {
  component: string;
}

interface IPropItem {
  description?: string;
  value?: string;
}

const TableHeader = () => (
  <thead>
    <tr>
      <Title size="xs" as="th">
        Token Name
      </Title>
      <Title size="xs" as="th">
        Description
      </Title>
      <Title size="xs" as="th">
        Default Value
      </Title>
    </tr>
  </thead>
);

const Value = ({ value }: { value: string }) => {
  const theme = useTheme();
  let _value = "";
  if (value.includes("primaryColor")) {
    _value = getValueObject(
      theme,
      value.replace(
        "primaryColor",
        theme.primaryColor
      ) as TKeyObjectType<IQuenUITheme>
    );
  } else {
    _value = getValueObject(theme, value as TKeyObjectType<IQuenUITheme>);
  }
  if (value?.startsWith("math(") && value.endsWith(")")) {
    const innerExpression = value.slice(5, -1).trim();

    const replacedExpression = innerExpression.replace(
      /\$\{([^}]+)\}/g,
      (_, key) => {
        return getValueObject(theme, key as TKeyObjectType<IQuenUITheme>);
      }
    );

    return math(replacedExpression.replaceAll("`", ""));
  } else {
    if (typeof _value === "object") {
      return Object.keys(_value).map((key) => (
        <span key={key}>{`${key}: ${_value[key]}`}</span>
      ));
    }
    if (_value?.includes("#")) {
      return (
        <>
          <span style={{ width: 16, height: 16, background: _value }} />{" "}
          {_value}
        </>
      );
    }
    return _value;
  }
};

const TableBody = ({ tokens }: { tokens: Record<string, IPropItem> }) => {
  const getValue = (value: string) => {
    if (value[0] === "[") {
      const _value = value
        .replaceAll("\r\n", "")
        .replaceAll(" ", "")
        .slice(1)
        .slice(0, -1)
        .split(",");
      return _value.map((v) => (
        <>
          <Value key={v} value={v} /> - ({`${v}`}){" "}
        </>
      ));
    }
    return (
      <>
        <Value value={value} /> - ({`${value}`})
      </>
    );
  };
  const rows = Object.entries(tokens).map(([name, token]) => (
    <tr key={name}>
      <td>{name}</td>
      <td>{token.description || "-"}</td>
      <td>
        <Flex gap="xs" align="center">
          {token.value ? getValue(token.value.replaceAll("theme.", "")) : "-"}
        </Flex>
      </td>
    </tr>
  ));

  return <tbody>{rows}</tbody>;
};

const PropsTable = ({ component }: IPropsTableProps) => {
  const styleTokens = useMemo(() => {
    return (
      ((themeComponentTokens as Record<string, any>)[
        component.toLowerCase()
      ] as Record<string, any>) ?? {}
    );
  }, [component]);

  const hasProps = Object.keys(styleTokens).length > 0;
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
      <TableBody tokens={styleTokens} />
    </PropsTableStyled>
  );
};

export default PropsTable;
