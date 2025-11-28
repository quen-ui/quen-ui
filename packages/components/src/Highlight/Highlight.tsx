import {
  useMemo,
  createElement,
  Fragment,
  type CSSProperties
} from "react";
import type { IHighlightProps, TMatchChunk } from "./types";
import {
  buildRegexFromQuery,
  buildChunks,
  collectMatches,
  normalizeRanges,
  buildChunksFromRanges
} from "./helpers";
import { HighlightStyled } from "./styles";

const Highlight = ({
  children,
  highlightComponent,
  highlightStyle,
  highlightTag = "mark",
  highlightClassName,
  escapeQuery = true,
  query,
  maxChunks = Infinity,
  rootProps,
  color = "yellow",
  splitByWords = false,
  caseSensitive = false,
  ranges
}: IHighlightProps) => {
  if (children === null) {
    return <span {...rootProps}>{children}</span>;
  }

  const chunksFromRanges: TMatchChunk[] | null = useMemo(() => {
    if (ranges && ranges.length && children) {
      const normalized = normalizeRanges(ranges, children.length);
      if (normalized.length === 0) return null;

      return buildChunksFromRanges(children, normalized, maxChunks);
    }
    return null;
  }, [ranges, children, maxChunks]);

  if (chunksFromRanges) {
    return (
      <span {...rootProps}>
        {renderChunks(
          chunksFromRanges,
          highlightTag,
          highlightComponent,
          highlightClassName,
          highlightStyle,
          color
        )}
      </span>
    );
  }

  const regex = useMemo(
    () =>
      buildRegexFromQuery(query ?? null, {
        caseSensitive,
        escapeQuery,
        splitByWords
      }),
    [query, caseSensitive, escapeQuery, splitByWords]
  );

  const chunks: TMatchChunk[] | null = useMemo(() => {
    if (!children) return null;
    if (!regex) return [{ type: "text", text: children }];

    const matches = collectMatches(children, regex);
    if (!matches || matches.length === 0)
      return [{ type: "text", text: children }];

    return buildChunks(children, matches, maxChunks);
  }, [children, regex, maxChunks]);

  if (!chunks || chunks.length === 0 || !regex) {
    return <span {...rootProps}>{children}</span>;
  }
  return (
    <span {...rootProps}>
      {renderChunks(
        chunks,
        highlightTag,
        highlightComponent,
        highlightClassName,
        highlightStyle,
        color
      )}
    </span>
  );
};

function renderChunks(
  matchChunks: TMatchChunk[],
  highlightTag: IHighlightProps["highlightTag"],
  highlightComponent: IHighlightProps["highlightComponent"],
  highlightClassName: string | undefined,
  highlightStyle: CSSProperties | undefined,
  color: IHighlightProps["color"]
) {
  return matchChunks.map((c, i) => {
    if (c.type === "text") {
      return <Fragment key={`t-${i}`}>{c.text}</Fragment>;
    }

    // highlight chunk
    if (highlightComponent) {
      const Comp = highlightComponent;
      return (
        <Comp
          key={`m-${i}`}
          className={highlightClassName}
          style={highlightStyle}>
          {c.text}
        </Comp>
      );
    }

    if (highlightTag === "mark") {
      return (
        <HighlightStyled
          data-testid="highlight-mark"
          key={`m-${i}`}
          color={color}
          className={highlightClassName}
          style={highlightStyle}>
          {c.text}
        </HighlightStyled>
      );
    }

    return createElement(
      highlightTag!,
      {
        key: `m-${i}`,
        className: highlightClassName,
        style: highlightStyle
      },
      c.text
    );
  });
}

export default Highlight;
