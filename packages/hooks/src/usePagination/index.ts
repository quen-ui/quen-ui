import { useMemo, useState, useEffect } from "react";

export interface IUsePaginationOptions {
  /** The initial page number */
  initialPage?: number;
  /** Allows setting an external page value */
  page?: number;
  /** Total number of items */
  total?: number;
  /** Number of sibling pages shown around the current page */
  siblings?: number;
  /** Callback when the page changes */
  onChange?: (page: number) => void;
  /** Number of boundary pages shown at the start and end */
  boundaries?: number;
  /** Number of items per page */
  pageSize?: number;
}

export interface IUsePaginationReturnValue {
  /** Array of page numbers and dots */
  range: (number | "dots")[];
  /** Current page */
  currentPage: number;
  /** Set the current page manually */
  setPage: (page: number) => void;
  /** Move to the next page */
  nextPage: () => void;
  /** Move to the previous page */
  previousPage: () => void;
  /** Jump to the first page */
  firstPage: () => void;
  /** Jump to the last page */
  lastPage: () => void;
}

const DOTS = "dots";

function range(start: number, end: number) {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
}

export const usePagination = ({
  total = 0,
  initialPage = 1,
  onChange,
  boundaries = 1,
  siblings = 1,
  pageSize = 10,
  page
}: IUsePaginationOptions): IUsePaginationReturnValue => {
  const allPages = Math.ceil(total / pageSize);

  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    onChange?.(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (page !== undefined) {
      setPage(page);
    }
  }, [page]);


  const setPage = (pageNumber: number) => {
    if (pageNumber <= 0) {
      setCurrentPage(1);
    } else if (pageNumber > allPages) {
      setCurrentPage(allPages);
    } else {
      setCurrentPage(pageNumber);
    }
  };

  const nextPage = () => setPage(currentPage + 1);
  const previousPage = () => setPage(currentPage - 1);
  const firstPage = () => setPage(1);
  const lastPage = () => setPage(allPages);

  const paginationRange = useMemo((): (number | "dots")[] => {
    const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;
    if (totalPageNumbers >= allPages) {
      return range(1, allPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblings, boundaries);
    const rightSiblingIndex = Math.min(
      currentPage + siblings,
      currentPage - boundaries
    );

    const shouldShowLeftDots = leftSiblingIndex > boundaries + 2;
    const shouldShowRightDots =
      rightSiblingIndex < currentPage - (boundaries + 1);

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = siblings * 2 + boundaries + 2;
      return [
        ...range(1, leftItemCount),
        DOTS,
        ...range(allPages - (boundaries - 1), allPages)
      ];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = boundaries + 1 + 2 * siblings;
      return [
        ...range(1, boundaries),
        DOTS,
        ...range(allPages - rightItemCount, allPages)
      ];
    }

    return [
      ...range(1, boundaries),
      DOTS,
      ...range(leftSiblingIndex, rightSiblingIndex),
      DOTS,
      ...range(allPages - boundaries + 1, allPages)
    ];
  }, [allPages, siblings, currentPage, boundaries]);

  return {
    range: paginationRange,
    currentPage,
    setPage,
    nextPage,
    previousPage,
    lastPage,
    firstPage
  }
};
