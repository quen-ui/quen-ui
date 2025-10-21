import { useEffect, useState } from "react";

interface IUseAccordionStateParams {
  activeKeys?: (string | number)[];
  defaultActiveKeys?: (string | number)[];
  multiple?: boolean;
  onChange?: (keys: (string | number)[]) => void;
}

export const useAccordionState = ({
  activeKeys,
  defaultActiveKeys,
  multiple = true,
  onChange
}: IUseAccordionStateParams) => {
  const [openedKeys, setOpenedKeys] = useState<(string | number)[]>(
    defaultActiveKeys ?? []
  );

  const isControlled = activeKeys !== undefined;

  const currentKeys = isControlled ? activeKeys! : openedKeys;

  const toggleKey = (key: string | number) => {
    let nextKeys: (string | number)[];

    if (multiple) {
      nextKeys = currentKeys.includes(key)
        ? currentKeys.filter((k) => k !== key)
        : [...currentKeys, key];
    } else {
      nextKeys = currentKeys.includes(key) ? [] : [key];
    }

    if (!isControlled) {
      setOpenedKeys(nextKeys);
    }
    onChange?.(nextKeys);
  };

  useEffect(() => {
    if (isControlled) {
      setOpenedKeys(activeKeys!);
    }
  }, [activeKeys]);

  return { openedKeys: currentKeys, toggleKey, setOpenedKeys };
};
