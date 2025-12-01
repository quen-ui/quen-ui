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
import { Text } from "../typography/Text"

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
  const text = typeof children === "string" ? children : (children as any)?.props?.children;

  const chunksFromRanges: TMatchChunk[] | null = useMemo(() => {
    if (ranges && ranges.length && text) {
      const normalized = normalizeRanges(ranges, text.length);
      if (normalized.length === 0) return null;

      return buildChunksFromRanges(text, normalized, maxChunks);
    }
    return null;
  }, [ranges, text, maxChunks]);

  if (chunksFromRanges) {
    return (
      <Text size="m" {...rootProps}>
        {renderChunks(
          chunksFromRanges,
          highlightTag,
          highlightComponent,
          highlightClassName,
          highlightStyle,
          color
        )}
      </Text>
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
    if (!text) return null;
    if (!regex) return [{ type: "text", text: text }];

    const matches = collectMatches(text, regex);
    if (!matches || matches.length === 0)
      return [{ type: "text", text: text }];

    return buildChunks(text, matches, maxChunks);
  }, [text, regex, maxChunks]);

  if (!chunks || chunks.length === 0 || !regex) {
    return <span {...rootProps}>{text}</span>;
  }
  return (
    <Text size="m" {...rootProps}>
      {renderChunks(
        chunks,
        highlightTag,
        highlightComponent,
        highlightClassName,
        highlightStyle,
        color
      )}
    </Text>
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
