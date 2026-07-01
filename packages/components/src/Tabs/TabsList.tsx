import { useLayoutEffect, useRef, type ReactElement } from "react";
import { cnMerge, deepMerge, findBackgroundElement } from "@quen-ui/helpers";
import { ITabsListProps } from "./types";
import { TabsListStyled } from "./styles";
import { useTabsContext } from "./Tabs";

const TabsList = ({
  children,
  className,
  justify = "flex-start",
  grow,
  style
}: ITabsListProps): ReactElement => {
  const context = useTabsContext();
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = ref.current;
    if (container) {
      const background = findBackgroundElement(container);
      if (background?.color) {
        container.style.setProperty("--tab-background", background.color);
      }
    }
  }, [context?.value]);

  return (
    <TabsListStyled
      data-semantic="list"
      ref={ref}
      className={cnMerge(className, context?.classNames?.list)}
      style={deepMerge(style ?? {}, context?.styles?.list ?? {})}
      justify={justify}
      isGrow={grow}
      outline={context?.outline}>
      {children}
    </TabsListStyled>
  );
};

export default TabsList;
