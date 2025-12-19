import React, {
  createContext,
  useContext,
  useMemo,
  useImperativeHandle,
  forwardRef,
  useState,
  useEffect,
  isValidElement
} from "react";
import type {
  IAccordionGroupProps,
  IAccordionGroupApi,
  IAccordionProps
} from "./types";
import { useAccordionState } from "./useAccordionState";
import { Flex } from "../Flex";

interface AccordionGroupContextValue {
  openedKeys: (string | number)[];
  toggleKey: (key: string | number) => void;
  openAll: () => void;
  closeAll: () => void;
  multiple: boolean;
}

const AccordionGroupContext = createContext<AccordionGroupContextValue | null>(
  null
);

export const useAccordionGroup = () => {
  const ctx = useContext(AccordionGroupContext);
  if (!ctx) {
    throw new Error(
      "useAccordionGroup must be used within an <AccordionGroup>"
    );
  }
  return ctx;
};

export const AccordionGroup = forwardRef<
  IAccordionGroupApi,
  IAccordionGroupProps
>(
  (
    {
      children,
      activeKeys,
      defaultActiveKeys,
      onChange,
      multiple = true,
      style,
      className
    }: IAccordionGroupProps,
    ref
  ) => {
    const { openedKeys, toggleKey, setOpenedKeys } = useAccordionState({
      activeKeys,
      defaultActiveKeys,
      multiple,
      onChange
    });

    const [allKeys, setAllKeys] = useState<(string | number)[]>([]);

    useEffect(() => {
      const keys: (string | number)[] = [];

      React.Children.forEach(children, (child) => {
        if (isValidElement(child)) {
          const props = child.props as IAccordionProps;
          if (Array.isArray(props.items)) {
            for (const item of props.items) {
              if (item?.key !== undefined)
                keys.push(props.getItemKey ? props.getItemKey(item) : item.key);
            }
          }
        }
      });

      setAllKeys(keys);
    }, [children]);


    const openAll = () => {
      if (multiple) {
        setOpenedKeys(allKeys);
      }
    };
    const closeAll = () => setOpenedKeys([]);

    useImperativeHandle(ref, () => ({
      openAll,
      closeAll,
      getOpenedKeys: () => openedKeys,
      setOpenedKeys
    }));

    const value = useMemo<AccordionGroupContextValue>(
      () => ({
        openedKeys,
        toggleKey,
        multiple,
        openAll: () => {
          if (multiple) {
            setOpenedKeys((prev) => Array.from(new Set([...prev])));
          }
        },
        closeAll: () => setOpenedKeys([])
      }),
      [openedKeys, toggleKey, multiple, setOpenedKeys]
    );

    return (
      <AccordionGroupContext.Provider value={value}>
        <Flex direction="column" gap="m" style={style} className={className}>
          {children}
        </Flex>
      </AccordionGroupContext.Provider>
    );
  }
);

AccordionGroup.displayName = "AccordionGroup";
