import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import Highlight from "./Highlight";
import type { IHighlightProps } from "./types";

describe("Highlight", () => {
  const baseProps: IHighlightProps = {
    children: "Hello world, this is a highlight component."
  };

  test("renders raw text when no query and no ranges provided", () => {
    render(<Highlight {...baseProps} />);
    expect(screen.getByText(baseProps.children as string)).toBeInTheDocument();
  });

  test("highlights all occurrences of a single-word query", () => {
    render(<Highlight {...baseProps} query="world" />);

    const marks = screen.getAllByTestId("highlight-mark");
    expect(marks).toHaveLength(1);
    expect(marks[0]).toHaveTextContent("world");
  });

  test("highlights multiple occurrences of a substring", () => {
    const props: IHighlightProps = {
      children: "test test testing test",
      query: "test"
    };

    render(<Highlight {...props} />);

    const marks = screen.getAllByTestId("highlight-mark");
    expect(marks).toHaveLength(4);
  });

  test("supports multiple queries", () => {
    render(<Highlight query={["cats", "dogs"]}>cats and dogs</Highlight>);

    const marks = screen.getAllByTestId("highlight-mark");
    expect(marks).toHaveLength(2);

    expect(marks[0]).toHaveTextContent("cats");
    expect(marks[1]).toHaveTextContent("dogs");
  });

  test("is case-insensitive by default", () => {
    render(<Highlight query="hello">Hello HELLO HeLlO</Highlight>);

    const marks = screen.getAllByTestId("highlight-mark");
    expect(marks).toHaveLength(3);
  });

  test("respects caseSensitive flag", () => {
    render(
      <Highlight query="hello" caseSensitive>
        Hello HELLO HeLlO
      </Highlight>
    );

    expect(screen.queryByTestId("highlight-mark")).toBeNull();
  });

  test("highlights a range", () => {
    render(<Highlight ranges={[{ start: 2, end: 5 }]}>abcdefg</Highlight>);

    const mark = screen.getByTestId("highlight-mark");
    expect(mark).toHaveTextContent("cde");
  });

  test("supports multiple ranges", () => {
    render(
      <Highlight
        ranges={[
          { start: 0, end: 2 },
          { start: 4, end: 7 }
        ]}>
        abcdefgh
      </Highlight>
    );

    const marks = screen.getAllByTestId("highlight-mark");
    expect(marks).toHaveLength(2);
    expect(marks[0]).toHaveTextContent("ab");
    expect(marks[1]).toHaveTextContent("efg");
  });

  test("merges overlapping ranges", () => {
    render(
      <Highlight
        ranges={[
          { start: 1, end: 4 },
          { start: 3, end: 6 }
        ]}>
        abcdefgh
      </Highlight>
    );

    const marks = screen.getAllByTestId("highlight-mark");
    expect(marks).toHaveLength(1);
    expect(marks[0]).toHaveTextContent("bcdef");
  });
});
