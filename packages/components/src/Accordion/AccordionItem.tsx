import { type KeyboardEvent } from "react";
import { type IAccordionItemProps } from "./types";
import { Title } from "../typography/Title";
import {
  AccordionItemHeader,
  AccordionItemStyled,
  AccordionItemRightContentStyled,
  AccordionItemContent
} from "./styles";
import IconArrowBottom from "../assets/icon-arrow-bottom.svg";
const AccordionItem = ({
  label,
  size,
  style,
  className,
  children,
  leftContent,
  rightContent,
  disabled,
  showArrow = true,
  onClick,
  open,
  destroyOnHidden,
  lastItem,
  id,
  renderHeader,
  chevronIcon,
  variant
}: IAccordionItemProps) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      onClick?.();
    }
  };

  return (
    <AccordionItemStyled
      aria-disabled={disabled}
      aria-expanded={open}
      aria-controls={`accordion-panel-${id}`}
      id={`accordion-panel-${id}`}
      aria-labelledby={`accordion-header-${id}`}
      role="region"
      style={style}
      className={className}
      open={open}
      lastItem={lastItem}>
      {renderHeader ? (
        <span onClick={!disabled ? onClick : undefined}>{renderHeader()}</span>
      ) : (
        <AccordionItemHeader
          variant={variant}
          id={`accordion-header-${id}`}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyDown}
          open={open}
          lastItem={lastItem}
          size={size || "m"}
          onClick={!disabled ? onClick : undefined}
          disabled={disabled}>
          {leftContent}
          <Title size="s">{label}</Title>
          <AccordionItemRightContentStyled>
            {rightContent}
            {showArrow && (
              <>
                {chevronIcon ? (
                  <span className="quen-ui__accordion--arrow-icon">
                    {chevronIcon}
                  </span>
                ) : (
                  <IconArrowBottom className="quen-ui__accordion--arrow-icon" />
                )}
              </>
            )}
          </AccordionItemRightContentStyled>
        </AccordionItemHeader>
      )}
      {destroyOnHidden ? (
        <>
          {open && (
            <AccordionItemContent open={open} size={size || "m"}>
              {children}
            </AccordionItemContent>
          )}
        </>
      ) : (
        <AccordionItemContent open={open} hidden={!open} size={size || "m"}>
          {children}
        </AccordionItemContent>
      )}
    </AccordionItemStyled>
  );
};

export default AccordionItem;
