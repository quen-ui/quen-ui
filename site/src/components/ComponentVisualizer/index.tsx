import React, { useMemo, useState } from "react";
import * as Components from "@quen-ui/components";
import { ComponentVisualizerStyled } from "./styles";
import propsComponent from "../../../../propsComponents.json";

interface IComponentVisualizerProps {
  component: string;
  defaultProps?: Record<string, any>;
  excludeDemoProps?: string[];
}

const excludeProps = [
  "className",
  "style",
  "icon",
  "onChange",
  "onClose",
  "action",
  "id",
  "name",
  "onBlur",
  "onFocus",
  "leftContent",
  "rightContent",
  "onClear",
  "defaultValue"
] as const;

const ComponentVisualizer = ({
  defaultProps = {},
  component,
  excludeDemoProps
}: IComponentVisualizerProps): React.ReactNode => {
  const [props, setProps] = useState(defaultProps);

  const propDefinitions = useMemo(() => {
    return propsComponent.find((p) => p.displayName === component);
  }, [component]);

  const Component = useMemo(() => {
    return (Components as any)[component] as React.ReactNode;
  }, [component]);

  const handlePropChange = (propName: string, value: any) => {
    setProps((prev) => ({
      ...prev,
      [propName]: value
    }));
  };

  const renderControls = () => {
    return Object.entries(propDefinitions?.props ?? {})
      .filter(
        ([propName]) =>
          ![...excludeProps, ...(excludeDemoProps ?? [])].includes(propName)
      )
      .map(([propName, def]) => {
        const value = props[propName];
        let propType = def.type.name as string;

        if (propType.includes("|")) {
          propType = "select";
        }

        switch (propType) {
          case "boolean":
            return (
              <Components.Flex gap="xs" align="center" key={propName}>
                <Components.Text size="s">{propName}</Components.Text>
                <Components.Checkbox
                  size="s"
                  isChecked={!!value}
                  onChange={(isChecked) =>
                    handlePropChange(propName, isChecked)
                  }
                />
              </Components.Flex>
            );

          case "select":
            return (
              <Components.Flex
                key={propName}
                direction="column"
                gap="xs"
                justify="space-between">
                <Components.Text size="s">{propName}</Components.Text>
                <Components.Select
                  size="s"
                  onChangeReturnValue="value"
                  items={def.type.name
                    .split("|")
                    .filter(
                      (t: string) =>
                        !["string", "number", "boolean"].includes(
                          t.replaceAll(" ", "")
                        )
                    )
                    .map((option: string) => ({
                      label: option.replaceAll('"', ""),
                      value: option.replaceAll('"', "").replaceAll(" ", "")
                    }))}
                  value={def.defaultValue}
                  onChange={(value) => handlePropChange(propName, value)}
                />
              </Components.Flex>
            );

          case "number":
            return (
              <Components.Flex
                key={propName}
                direction="column"
                gap="xs"
                justify="space-between">
                <Components.Text size="s">{propName}</Components.Text>
                <Components.InputNumber
                  size="s"
                  value={value || null}
                  onChange={(_value) =>
                    handlePropChange(propName, Number(_value))
                  }
                />
              </Components.Flex>
            );

          default:
            return (
              <Components.Flex
                key={propName}
                direction="column"
                gap="xs"
                justify="space-between">
                <Components.Text size="s">{propName}</Components.Text>
                <Components.TextField
                  size="s"
                  value={value || ""}
                  onChange={(_value) => handlePropChange(propName, _value)}
                />
              </Components.Flex>
            );
        }
      });
  };

  if (!Component) {
    return null;
  }

  return (
    <ComponentVisualizerStyled>
      <div className="preview-area">
        <Components.Title size="l">Preview</Components.Title>
        <div className="component-wrapper">
          <Component {...props} />
        </div>
      </div>

      <div className="controls-panel">
        <Components.Title size="l">Settings</Components.Title>
        <div className="controls-grid">{renderControls()}</div>
      </div>
    </ComponentVisualizerStyled>
  );
};

export default ComponentVisualizer;
