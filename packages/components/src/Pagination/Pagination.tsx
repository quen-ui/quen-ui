import { cloneElement } from "react";
import { usePagination } from "@quen-ui/hooks";
import type { IPaginationProps } from "./types";
import { Flex } from "../Flex";
import { PaginationControlStyled } from "./styles";
import IconArrowButton from "../assets/icon-arrow-bottom.svg";
import { cnMerge, deepMerge } from "@quen-ui/helpers";

const Pagination = ({
  className,
  style,
  onPreviousPage,
  prevIcon,
  size = "m",
  onNextPage,
  defaultValue = 1,
  total,
  nextIcon,
  pageSize,
  onChange,
  withPages = true,
  withControls = true,
  boundaries,
  siblings,
  disabled,
  itemRender,
  align = "center",
  classNames,
  styles,
  ...props
}: IPaginationProps) => {
  const { previousPage, setPage, currentPage, nextPage, range, allPages } =
    usePagination({
      initialPage: defaultValue,
      onChange,
      total,
      pageSize,
      boundaries,
      siblings
    });

  const handlePreviousPage = () => {
    previousPage();
    onPreviousPage?.();
  };

  const handleNextPage = () => {
    onNextPage?.();
    nextPage();
  };

  if (total <= 0) {
    return null;
  }

  return (
    <Flex
      data-semantic="root"
      className={cnMerge(className, classNames?.root)}
      style={deepMerge(style ?? {}, styles?.root ?? {})}
      align="center"
      justify={align}
      gap={size}
      {...props}>
      {withControls &&
        (itemRender ? (
          cloneElement(
            <span
              data-semantic="item"
              className={classNames?.item}
              style={styles?.item}>
              {itemRender(currentPage - 1, "prev")}
            </span>,
            {
              onClick: handlePreviousPage,
              disabled: currentPage === 1 || disabled
            }
          )
        ) : (
          <PaginationControlStyled
            className={classNames?.item}
            style={styles?.item}
            data-semantic="item"
            aria-label="Prev"
            data-testid="pagination-prev-page"
            size={size}
            onClick={handlePreviousPage}
            disabled={currentPage === 1 || disabled}>
            {prevIcon || (
              <IconArrowButton className="quen-ui__pagination-prev-icon" />
            )}
          </PaginationControlStyled>
        ))}
      {withPages &&
        range.map((item, index) =>
          itemRender ? (
            cloneElement(
              <span
                data-semantic="item"
                className={classNames?.item}
                style={styles?.item}>
                {itemRender(
                  item !== "dots" ? item : 0,
                  item !== "dots" ? "page" : "dots"
                )}
              </span>,
              {
                onClick: () => item !== "dots" && setPage(item),
                disabled: disabled,
                key: `${item}` + index
              }
            )
          ) : (
            <PaginationControlStyled
              className={classNames?.item}
              style={styles?.item}
              data-semantic="item"
              dotsView={item === "dots"}
              onClick={() => item !== "dots" && setPage(item)}
              size={size}
              disabled={disabled}
              key={`${item}` + index}
              active={item === currentPage}>
              {item === "dots" ? "..." : item}
            </PaginationControlStyled>
          )
        )}
      {withControls &&
        (itemRender ? (
          cloneElement(
            <span
              data-semantic="item"
              className={classNames?.item}
              style={styles?.item}>
              {itemRender(currentPage - 1, "next")}
            </span>,
            {
              onClick: handleNextPage,
              disabled: allPages === currentPage || disabled
            }
          )
        ) : (
          <PaginationControlStyled
            className={classNames?.item}
            style={styles?.item}
            data-semantic="item"
            aria-label="Next"
            data-testid="pagination-next-page"
            size={size}
            onClick={handleNextPage}
            disabled={allPages === currentPage || disabled}>
            {nextIcon || (
              <IconArrowButton className="quen-ui__pagination-next-icon" />
            )}
          </PaginationControlStyled>
        ))}
    </Flex>
  );
};

export default Pagination;
