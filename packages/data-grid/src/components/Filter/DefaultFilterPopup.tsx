import { useState, useMemo } from "react";
import {
  Button,
  TextField,
  Select,
  Flex,
  InputDate
} from "@quen-ui/components";
import type {
  IFilterProps,
  IFilterModelItem,
  TFilterOperator
} from "../../core";

const TEXT_OPS = [
  { label: "Contains", value: "contains" },
  { label: "Equals", value: "equals" },
  { label: "Starts With", value: "startsWith" },
  { label: "Ends With", value: "endsWith" }
];

const NUM_OPS = [
  { label: "Equals", value: "equals" },
  { label: "Greater Than", value: "greaterThan" },
  { label: "Less Than", value: "lessThan" },
  { label: "In Range", value: "inRange" }
];

const DATE_OPS = [
  { label: "Equals", value: "equals" },
  { label: "After", value: "greaterThan" },
  { label: "Before", value: "lessThan" },
  { label: "Between", value: "inRange" }
];

export function DefaultFilterPopup<T>({
  field,
  filterType,
  currentFilter,
  onFilterChange,
  close,
  debounceMs = 0
}: IFilterProps<T>) {
  const [op, setOp] = useState<TFilterOperator>(
    currentFilter?.type ||
      (filterType === "number"
        ? "equals"
        : filterType === "date"
          ? "equals"
          : "contains")
  );

  const [v1, setV1] = useState<string | null>(
    typeof currentFilter?.filter === "string"
      ? currentFilter.filter
      : typeof currentFilter?.filter === "object" &&
          currentFilter.filter &&
          "startDate" in currentFilter.filter
        ? (currentFilter.filter as any).startDate
        : null
  );

  const [v2, setV2] = useState<string | null>(
    typeof currentFilter?.filterTo === "string"
      ? currentFilter.filterTo
      : typeof currentFilter?.filterTo === "object" &&
          currentFilter.filterTo &&
          "startDate" in currentFilter.filterTo
        ? (currentFilter.filterTo as any).startDate
        : null
  );

  const isAuto = debounceMs > 0;
  const isRange = op === "inRange";
  const isDate = filterType === "date";

  const operators = isDate
    ? DATE_OPS
    : filterType === "number"
      ? NUM_OPS
      : TEXT_OPS;

  const buildFilter = (): IFilterModelItem<T> => {
    const f: IFilterModelItem<T> = { field, filterType, type: op };
    if (op === "empty" || op === "notBlank") return f;

    if (isDate) {
      f.filter = v1 ?? undefined;
      f.filterTo = isRange ? (v2 ?? undefined) : undefined;
    } else if (isRange) {
      f.filter = filterType === "number" ? Number(v1) : v1;
      f.filterTo = filterType === "number" ? Number(v2) : v2;
    } else {
      f.filter = filterType === "number" ? Number(v1) : v1;
    }
    return f;
  };

  const handleApply = () => onFilterChange(buildFilter());
  const handleClear = () => {
    setV1(null);
    setV2(null);
    onFilterChange(null);
    close();
  };

  // Debounce
  const debouncedApply = useMemo(() => {
    if (!isAuto) return null;
    let timer: NodeJS.Timeout;
    return () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(handleApply, debounceMs);
    };
  }, [isAuto, debounceMs, handleApply]);

  const triggerAutoApply = () => {
    if (isAuto && debouncedApply) debouncedApply();
  };

  const datePlaceholder = useMemo(() => {
    if (isRange) return ["From", "To"] as [string, string];
    return "Select date";
  }, [isRange]);

  return (
    <Flex direction="column" gap="xs">
      <Select
        zIndex={10000}
        size="s"
        value={op}
        items={operators.map((o) => ({ label: o.label, value: o.value }))}
        onChange={(val: any) => {
          setOp(val);
          triggerAutoApply();
        }}
      />

      {!["empty", "notBlank"].includes(op) && (
        <>
          {isDate ? (
            <>
              <InputDate
                size="s"
                placeholder={isRange ? datePlaceholder : "Select date"}
                value={v1 ?? undefined}
                onChange={(val: string) => {
                  setV1(val);
                  triggerAutoApply();
                }}
                range={isRange}
                {...(isRange && {
                  onChange: (val: { startDate: string; endDate: string }) => {
                    setV1(val.startDate);
                    setV2(val.endDate);
                    triggerAutoApply();
                  }
                })}
              />
            </>
          ) : (
            <>
              <TextField
                size="s"
                placeholder="Value"
                value={v1 ?? ""}
                onChange={(value) => {
                  setV1(value);
                  triggerAutoApply();
                }}
                type={filterType === "number" ? "number" : "text"}
              />
              {isRange && !isDate && (
                <TextField
                  size="s"
                  placeholder="To value"
                  value={v2 ?? ""}
                  onChange={(value) => {
                    setV2(value);
                    triggerAutoApply();
                  }}
                  type={filterType === "number" ? "number" : "text"}
                />
              )}
            </>
          )}
        </>
      )}

      {!isAuto && (
        <Flex gap="xs" justify="flex-end" style={{ marginTop: 8 }}>
          <Button size="s" view="secondary" onClick={handleClear}>
            Clear
          </Button>
          <Button size="s" view="primary" onClick={handleApply}>
            Apply
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
