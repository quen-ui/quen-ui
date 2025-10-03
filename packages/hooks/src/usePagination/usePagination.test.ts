import { renderHook, act } from "@testing-library/react";
import { usePagination } from "./";

describe("usePagination", () => {
  it("should return initialPage", () => {
    const { result } = renderHook(() =>
      usePagination({ initialPage: 2, total: 100 })
    );
    expect(result.current.currentPage).toBe(2);
  });

  it("should call onChange when the page changes", () => {
    const onChange = jest.fn();
    const { result } = renderHook(() =>
      usePagination({ initialPage: 1, total: 100, onChange })
    );

    act(() => {
      result.current.setPage(3);
    });

    expect(onChange).toHaveBeenCalledWith(3);
  });

  it("should limit setPage within the available pages", () => {
    const { result } = renderHook(() =>
      usePagination({ total: 25, pageSize: 10 })
    );

    act(() => {
      result.current.setPage(-5);
    });
    expect(result.current.currentPage).toBe(1);

    act(() => {
      result.current.setPage(999);
    });
    expect(result.current.currentPage).toBe(3);
  });

  it("should switch to the next and previous page", () => {
    const { result } = renderHook(() =>
      usePagination({ total: 50, initialPage: 2, pageSize: 10 })
    );

    act(() => {
      result.current.nextPage();
    });
    expect(result.current.currentPage).toBe(3);

    act(() => {
      result.current.previousPage();
    });
    expect(result.current.currentPage).toBe(2);
  });

  it("should go to the first and last pages", () => {
    const { result } = renderHook(() =>
      usePagination({ total: 100, pageSize: 10 })
    );

    act(() => {
      result.current.lastPage();
    });
    expect(result.current.currentPage).toBe(10);

    act(() => {
      result.current.firstPage();
    });
    expect(result.current.currentPage).toBe(1);
  });

  it("must take into account external page props", () => {
    const { result, rerender } = renderHook(
      (props: { page: number }) =>
        usePagination({ total: 100, pageSize: 10, ...props }),
      { initialProps: { page: 1 } }
    );

    expect(result.current.currentPage).toBe(1);

    rerender({ page: 5 });
    expect(result.current.currentPage).toBe(5);
  });

  it("should return the full range without dots if there are few pages", () => {
    const { result } = renderHook(() =>
      usePagination({ total: 25, pageSize: 10 })
    );

    expect(result.current.range).toEqual([1, 2, 3]);
  });

  it("should return a range with dots when there are a large number of pages", () => {
    const { result } = renderHook(() =>
      usePagination({ total: 200, pageSize: 10, initialPage: 5 })
    );

    expect(result.current.range).toContain("dots");
    expect(result.current.range[0]).toBe(1);
  });
});
