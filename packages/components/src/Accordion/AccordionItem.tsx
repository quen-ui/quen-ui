import { cnMerge, deepMerge } from "@quen-ui/helpers";
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
  variant,
  classNames,
  styles
}: IAccordionItemProps) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      onClick?.();
    }
  };

  return (
    <AccordionItemStyled
      data-semantic="item"
      aria-disabled={disabled}
      aria-expanded={open}
      aria-controls={`accordion-panel-${id}`}
      id={`accordion-panel-${id}`}
      aria-labelledby={`accordion-header-${id}`}
      role="region"
      style={deepMerge(style ?? {}, styles?.item ?? {})}
      className={cnMerge(className, classNames?.item)}
      open={open}
      lastItem={lastItem}>
      {renderHeader ? (
        <span
          onClick={!disabled ? onClick : undefined}
          style={styles?.itemHeader}
          className={classNames?.itemHeader}>
          {renderHeader()}
        </span>
      ) : (
        <AccordionItemHeader
          className={classNames?.itemHeader}
          style={styles?.itemHeader}
          data-semantic="itemHeader"
          variant={variant}
          id={`accordion-header-${id}`}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyDown}
          open={open}
          lastItem={lastItem}
          size={size || "m"}
          onClick={!disabled ? onClick : undefined}
          disabled={disabled}>
          <span
            data-semantic="itemLeftContent"
            className={classNames?.itemLeftContent}
            style={styles?.itemLeftContent}>
            {leftContent}
          </span>
          <Title size="s">{label}</Title>
          <AccordionItemRightContentStyled
            data-semantic="itemRightContent"
            className={classNames?.itemRightContent}
            style={styles?.itemRightContent}>
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
            <AccordionItemContent
              className={classNames?.itemContent}
              style={styles?.itemContent}
              open={open}
              size={size || "m"}
              data-semantic="itemContent">
              {children}
            </AccordionItemContent>
          )}
        </>
      ) : (
        <AccordionItemContent
          className={classNames?.itemContent}
          style={styles?.itemContent}
          open={open}
          hidden={!open}
          size={size || "m"}
          data-semantic="itemContent">
          {children}
        </AccordionItemContent>
      )}
    </AccordionItemStyled>
  );
};

export default AccordionItem;
