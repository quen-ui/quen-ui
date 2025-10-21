import { IAccordionProps, IAccordionDefaultItem } from "./types";
import { withDefaultGetters } from "./helpers";
import AccordionItem from "./AccordionItem";
import { AccordionContainer } from "./styles";
import { useAccordionState } from "./useAccordionState";
import { useAccordionGroup } from "./AccordionGroup";

const Accordion = <Item extends IAccordionDefaultItem>(
  props: IAccordionProps<Item>
) => {
  const {
    items,
    getItemKey,
    defaultActiveKeys,
    activeKeys,
    getItemLabel,
    getItemClassName,
    getItemStyle,
    getItemChildren,
    getItemDisabled,
    getItemLeftContent,
    getItemRightContent,
    getItemShowArrow,
    onChange,
    onClickItem,
    destroyOnHidden = true,
    variant,
    size = "m",
    style,
    className,
    multiple = true,
    renderItemHeader,
    chevronIcon
  } = withDefaultGetters<Item>(props);

  const group = (() => {
    try {
      return useAccordionGroup();
    } catch {
      return null;
    }
  })();

  const { openedKeys, toggleKey } = group ?? useAccordionState({
    activeKeys,
    defaultActiveKeys,
    multiple,
    onChange
  });

  const handleClickItem = (item: Item) => {
    const key = getItemKey(item);
    toggleKey(key);
    onClickItem?.(item);
  };

  return (
    <AccordionContainer
      direction="column"
      style={style}
      className={className}
      variant={variant}>
      {items.map((item, index) => (
        <AccordionItem
          id={getItemKey(item)}
          key={getItemKey(item)}
          label={getItemLabel(item)}
          className={getItemClassName(item)}
          style={getItemStyle(item)}
          showArrow={getItemShowArrow(item)}
          disabled={getItemDisabled(item)}
          leftContent={getItemLeftContent(item)}
          rightContent={getItemRightContent(item)}
          destroyOnHidden={destroyOnHidden}
          open={openedKeys.includes(getItemKey(item))}
          onClick={() => handleClickItem(item)}
          size={size}
          lastItem={items.length - 1 === index}
          variant={variant}
          chevronIcon={chevronIcon}
          renderHeader={
            renderItemHeader &&
            (() =>
              renderItemHeader(
                item,
                openedKeys.includes(getItemKey(item)),
                () => !getItemDisabled(item) && handleClickItem(item)
              ))
          }>
          {getItemChildren(item)}
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;
