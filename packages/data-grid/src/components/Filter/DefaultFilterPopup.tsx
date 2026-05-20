import { useState, type Dispatch, type SetStateAction } from "react";
import { Button, TextField, Select, Flex } from "@quen-ui/components";
import { IFilterProps, IFilterModelItem, TFilterOperator } from "../../core";

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

export function DefaultFilterPopup<T>({
  field,
  filterType,
  currentFilter,
  onFilterChange,
  close,
  debounceMs = 0
}: IFilterProps<T>) {
  const [op, setOp] = useState<TFilterOperator>(
    currentFilter?.type || (filterType === "number" ? "equals" : "contains")
  );
  const [v1, setV1] = useState(currentFilter?.filter ?? "");
  const [v2, setV2] = useState(currentFilter?.filterTo ?? "");

  const isAuto = debounceMs > 0;
  const isRange = op === "inRange";
  const operators = filterType === "number" ? NUM_OPS : TEXT_OPS;

  const buildFilter = (): IFilterModelItem<T> => {
    const f: IFilterModelItem<T> = { field, filterType, type: op };
    if (op === "empty" || op === "notBlank") return f;

    if (isRange) {
      f.filter = filterType === "number" ? Number(v1) : v1;
      f.filterTo = filterType === "number" ? Number(v2) : v2;
    } else {
      f.filter = filterType === "number" ? Number(v1) : v1;
    }
    return f;
  };

  const handleApply = () => onFilterChange(buildFilter());
  const handleClear = () => {
    onFilterChange(null);
    close();
  };

  const debouncedApply = (() => {
    let timer: NodeJS.Timeout;
    return () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(handleApply, debounceMs);
    };
  })();

  if (isAuto) {
    const trigger = () => debouncedApply();
  }

  const handleChange = (
    setter: Dispatch<SetStateAction<string | number | Date>>,
    val: string
  ) => {
    setter(val);
    if (isAuto) debouncedApply();
  };

  const handleOpChange = (newOp: TFilterOperator) => {
    setOp(newOp);
    if (isAuto) debouncedApply();
  };

  return (
    <Flex direction="column" gap="xs">
      <Select
        zIndex={1000}
        size="s"
        value={op}
        items={operators.map((o) => ({ label: o.label, value: o.value }))}
        onChange={(val: any) => handleOpChange(val)}
      />

      {!["empty", "notBlank"].includes(op) && (
        <>
          <TextField
            size="s"
            placeholder="Filter value"
            value={String(v1)}
            onChange={(value) => handleChange(setV1, value)}
            type={filterType === "number" ? "number" : "text"}
          />
          {isRange && (
            <TextField
              size="s"
              placeholder="To value"
              value={String(v2)}
              onChange={(value) => handleChange(setV2, value)}
              type={filterType === "number" ? "number" : "text"}
            />
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
