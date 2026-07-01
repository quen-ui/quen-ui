import {
  useRef,
  useCallback,
  type KeyboardEvent,
  useState,
  useEffect
} from "react";
import { ISegmentedControlProps } from "./types";
import {
  ControlContainer,
  SegmentButtonStyled,
  SegmentedIndicatorStyled
} from "./styles";

const SegmentedControl = ({
  options,
  value,
  onChange,
  size = "m",
  disabled = false,
  classNames,
  styles
}: ISegmentedControlProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ width: 0, left: 0 });

  const enabledOptions = options.filter((opt) => !opt.disabled && !disabled);
  const activeIndex = enabledOptions.findIndex((opt) => opt.value === value);

  const updateIndicator = useCallback(() => {
    const activeBtn = buttonRefs.current.find(
      (btn) => btn?.getAttribute("aria-checked") === "true"
    );

    if (activeBtn && !disabled) {
      setIndicator({
        width: activeBtn.offsetWidth,
        left: activeBtn.offsetLeft
      });
    } else {
      setIndicator({ width: 0, left: 0 });
    }
  }, [disabled, value]);

  useEffect(() => {
    updateIndicator();

    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updateIndicator);
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [updateIndicator]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (disabled || enabledOptions.length === 0) return;

      let nextIndex = activeIndex;

      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
          e.preventDefault();
          nextIndex = (activeIndex + 1) % enabledOptions.length;
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          nextIndex =
            (activeIndex - 1 + enabledOptions.length) % enabledOptions.length;
          break;
        case "Home":
          e.preventDefault();
          nextIndex = 0;
          break;
        case "End":
          e.preventDefault();
          nextIndex = enabledOptions.length - 1;
          break;
        default:
          return;
      }

      const nextOption = enabledOptions[nextIndex];
      onChange(nextOption.value);

      setTimeout(() => {
        buttonRefs.current[nextIndex]?.focus();
      }, 0);
    },
    [activeIndex, disabled, enabledOptions, onChange]
  );

  const setRef = useCallback(
    (index: number) => (el: HTMLButtonElement | null) => {
      buttonRefs.current[index] = el;
    },
    []
  );

  return (
    <ControlContainer
      data-semantic="root"
      className={classNames?.root}
      style={styles?.root}
      role="radiogroup"
      onKeyDown={handleKeyDown}
      size={size}
      aria-label="Segmented control">
      <SegmentedIndicatorStyled
        data-semantic="indicator"
        width={indicator.width}
        left={indicator.left}
        className={classNames?.indicator}
        style={styles?.indicator}
      />
      {options.map((option, index) => {
        const isActive = value === option.value;
        const isDisabled = disabled || option.disabled;

        return (
          <SegmentButtonStyled
            className={classNames?.item}
            style={styles?.item}
            data-semantic="item"
            key={option.value}
            ref={setRef(index)}
            role="radio"
            aria-checked={isActive}
            aria-disabled={isDisabled}
            tabIndex={isActive && !isDisabled ? 0 : -1}
            isActive={isActive}
            isDisabled={isDisabled}
            size={size}
            disabled={isDisabled}
            onClick={() => !isDisabled && onChange(option.value)}
            data-testid={option["data-testid"]}>
            {option.icon && (
              <span
                aria-hidden="true"
                data-semantic="icon"
                className={classNames?.icon}
                style={styles?.icon}>
                {option.icon}
              </span>
            )}
            <span
              data-semantic="label"
              className={classNames?.label}
              style={styles?.label}>
              {option.label}
            </span>
          </SegmentButtonStyled>
        );
      })}
    </ControlContainer>
  );
};

export default SegmentedControl;
