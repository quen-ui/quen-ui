import {
  type FocusEventHandler,
  useState,
  useRef,
  useEffect,
  type MouseEventHandler,
  type ReactElement,
  type ChangeEvent,
  type MouseEvent,
  type RefObject
} from "react";
import { cnMerge } from "@quen-ui/helpers";
import { useOnClickOutside } from "@quen-ui/hooks";
import { TInputDateProps } from "./types";
import { InputDateStyled, InputBaseStyled } from "./styles";
import { Calendar, type TCalendarRangeProps } from "../Calendar";
import { Button } from "../Button";
import IconClose from "../assets/icon-close.svg";
import { Flex } from "../Flex";
import { Dropdown } from "../Dropdown";
import {
  formatDate,
  parseDate,
  autoFormatInput,
  getDate,
  checkRangeDate
} from "./helpers";
import { isBefore, isAfter } from "../Calendar/helpers";

const InputDate = ({
  label,
  size = "m",
  required,
  disabled,
  error,
  minDate,
  maxDate,
  className,
  classNameInput,
  onBlur,
  onFocus,
  defaultValue,
  id,
  name,
  placeholder,
  rightContent,
  value,
  onChange,
  leftContent,
  isAutoFocus,
  clearable,
  onClear,
  style,
  range,
  renderDay,
  getDayProps,
  dateFormat = "yyyy-mm-dd",
  valueFormatter,
  defaultLevel,
  showButtonToday,
  level,
  locale,
  ...props
}: TInputDateProps): ReactElement => {
  const [openDropdownCalendar, setOpenDropdownCalendar] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const [singleDate, setSingleDate] = useState<Date | null>(
    !range && value ? new Date(value) : null
  );
  const [rangeDate, setRangeDate] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>(
    range && value
      ? {
          startDate: value.startDate ? new Date(value.startDate) : null,
          endDate: value.endDate ? new Date(value.endDate) : null
        }
      : { startDate: null, endDate: null }
  );

  const [inputValue, setInputValue] = useState<string>(
    !range && singleDate ? formatDate(singleDate, dateFormat) : ""
  );
  const [startInput, setStartInput] = useState<string>(
    rangeDate.startDate ? formatDate(rangeDate.startDate, dateFormat) : ""
  );
  const [endInput, setEndInput] = useState<string>(
    rangeDate.endDate ? formatDate(rangeDate.endDate, dateFormat) : ""
  );

  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const startInputRef = useRef<HTMLInputElement>(null);
  const endInputRef = useRef<HTMLInputElement>(null);
  const inputWrapperRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(
    calendarRef,
    () => {
      setOpenDropdownCalendar(false);
    },
    { excludeRef: inputRef }
  );

  useEffect(() => {
    if (!valueFormatter) {
      if (range) {
        setStartInput(
          rangeDate.startDate ? formatDate(rangeDate.startDate, dateFormat) : ""
        );
        setEndInput(
          rangeDate.endDate ? formatDate(rangeDate.endDate, dateFormat) : ""
        );
      } else {
        setInputValue(singleDate ? formatDate(singleDate, dateFormat) : "");
      }
    }
  }, [dateFormat]);

  const handleClick = (): void => {
    setFocus(true);
    inputRef.current?.focus();
    startInputRef.current?.focus();
  };

  const handleBlur: FocusEventHandler = (event): void => {
    setFocus(false);
    onBlur?.(event);
  };

  const handleFocus: FocusEventHandler = (event): void => {
    setFocus(true);
    onFocus?.(event);
  };

  const handleClearClick:
    | MouseEventHandler<HTMLAnchorElement>
    | MouseEventHandler<HTMLButtonElement> = (
    event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    onChange?.(null);
    onClear?.(event);
    setRangeDate({ endDate: null, startDate: null });
    setSingleDate(null);
    setInputValue("");
    setStartInput("");
    setEndInput("");
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: "single" | "start" | "end"
  ) => {
    const raw = e.target.value;
    const formatted = autoFormatInput(raw, dateFormat, valueFormatter);

    const updateInput = (
      setInput: (v: string) => void,
      setDate: (d: Date | null) => void,
      value: string
    ): Date | null => {
      setInput(value);
      const clean = value.replace(/\D/g, "");
      if (clean.length === 8) {
        const parsed = parseDate(value, dateFormat);
        if (parsed && !isNaN(parsed.getTime())) {
          setDate(parsed);
          return parsed;
        }
      }
      setDate(null);
      return null;
    };

    if (type === "single" && !range) {
      const parsed = updateInput(setInputValue, setSingleDate, formatted);
      if (!parsed) {
        onChange?.(null);
      } else if (checkRangeDate(parsed, minDate, maxDate)) {
        onChange?.(parsed ? getDate(parsed) : null);
      }
      return;
    }

    if (range) {
      if (type === "start") {
        const newStart = updateInput(setStartInput, () => {}, formatted);

        setRangeDate((prev) => {
          const updated = { ...prev, startDate: newStart };
          const bothFilled = updated.startDate && updated.endDate;
          const bothEmpty =
            !updated.startDate && !updated.endDate && !formatted;

          if (
            bothFilled &&
            checkRangeDate(updated.startDate, minDate, maxDate) &&
            checkRangeDate(updated.endDate, minDate, maxDate)
          ) {
            onChange?.({
              startDate: getDate(updated.startDate),
              endDate: getDate(updated.endDate)
            });
          } else if (bothEmpty) {
            onChange?.(null);
          }

          return updated;
        });

        if (newStart) {
          endInputRef.current?.focus();
        }
      }

      if (type === "end") {
        const newEnd = updateInput(setEndInput, () => {}, formatted);

        setRangeDate((prev) => {
          const updated = { ...prev, endDate: newEnd };
          const bothFilled = updated.startDate && updated.endDate;
          const bothEmpty =
            !updated.startDate && !updated.endDate && !formatted;

          if (
            bothFilled &&
            checkRangeDate(updated.startDate, minDate, maxDate) &&
            checkRangeDate(updated.endDate, minDate, maxDate)
          ) {
            onChange?.({
              startDate: getDate(updated.startDate),
              endDate: getDate(updated.endDate)
            });
          } else if (bothEmpty) {
            onChange?.(null);
          }

          return updated;
        });

        if (!formatted) {
          startInputRef.current?.focus();
        }
      }
    }
  };

  const handleChangeCalendar = (
    value: TCalendarRangeProps["value"] | string
  ) => {
    if (range && typeof value === "object" && value) {
      setRangeDate({
        startDate: new Date(value.startDate),
        endDate: value.endDate ? new Date(value.endDate) : null
      });
      if (value.startDate) {
        setStartInput(
          formatDate(new Date(value.startDate), dateFormat, valueFormatter)
        );
      }
      if (value.endDate) {
        setEndInput(
          formatDate(new Date(value.endDate), dateFormat, valueFormatter)
        );
      }
      if (value.startDate && value.endDate) {
        onChange?.({
          startDate: value.startDate,
          endDate: value.endDate
        });
      }
    } else if (!range && typeof value === "string") {
      const formatted = formatDate(new Date(value), dateFormat, valueFormatter);
      setSingleDate(new Date(value));
      setInputValue(formatted);
      onChange?.(value);
    }
  };

  return (
    <>
      <InputBaseStyled
        onClick={() => setOpenDropdownCalendar((prev) => !prev)}
        ref={inputWrapperRef}
        className={cnMerge(className, {
          "quen-ui__input-base--focus-input": focus
        })}
        id={id}
        data-testid="input"
        size={size}
        disabled={disabled}
        error={error}
        label={label}
        style={style}
        leftContent={leftContent}
        required={required}
        rightContent={rightContent}
        {...props}>
        <Flex align="center" justify="space-between">
          {range ? (
            <>
              <InputDateStyled
                ref={startInputRef}
                data-testid="input-start-date"
                onChange={(e) => handleInputChange(e, "start")}
                autoFocus={isAutoFocus}
                placeholder={
                  Array.isArray(placeholder) ? placeholder[0] : placeholder
                }
                name={name}
                id={id}
                value={startInput}
                disabled={disabled}
                className={classNameInput}
                onClick={handleClick}
                onBlur={handleBlur}
                onFocus={handleFocus}
                required={required}
                data-date-format="yyyy-MM-dd"
              />
              <span>-</span>
              <InputDateStyled
                ref={endInputRef}
                data-testid="input-end-date"
                autoFocus={isAutoFocus}
                placeholder={
                  Array.isArray(placeholder) ? placeholder[1] : placeholder
                }
                name={name}
                id={id}
                value={endInput}
                disabled={disabled}
                className={classNameInput}
                onClick={handleClick}
                onBlur={handleBlur}
                onFocus={handleFocus}
                required={required}
                onChange={(e) => handleInputChange(e, "end")}
                data-date-format="yyyy-MM-dd"
              />
            </>
          ) : (
            <InputDateStyled
              ref={inputRef}
              data-testid="input-single-date"
              autoFocus={isAutoFocus}
              placeholder={
                Array.isArray(placeholder) ? placeholder[0] : placeholder
              }
              name={name}
              id={id}
              value={inputValue}
              disabled={disabled}
              className={classNameInput}
              onClick={handleClick}
              onBlur={handleBlur}
              onFocus={handleFocus}
              required={required}
              onChange={(e) => handleInputChange(e, "single")}
            />
          )}
          {clearable && (
            <Button
              data-testid="clearable-button"
              view="icon"
              size="xs"
              onClick={handleClearClick}
              disabled={disabled}>
              <IconClose width={16} height={16} />
            </Button>
          )}
        </Flex>
      </InputBaseStyled>
      <Dropdown
        anchorRef={inputWrapperRef}
        open={openDropdownCalendar}
        content={
          <Calendar
            ref={calendarRef as RefObject<HTMLDivElement>}
            value={
              (range
                ? {
                    startDate: rangeDate.startDate?.toISOString() || "",
                    endDate: rangeDate.endDate?.toISOString() || ""
                  }
                : (singleDate?.toISOString() ?? "")) as any
            }
            range={range as any}
            renderDay={renderDay}
            getDayProps={getDayProps}
            maxDate={maxDate}
            minDate={minDate}
            onChange={handleChangeCalendar}
            level={level}
            locale={locale}
            defaultValue={defaultValue as any}
            defaultLevel={defaultLevel}
            showButtonToday={showButtonToday}
          />
        }
      />
    </>
  );
};

export default InputDate;
