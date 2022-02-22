import React from "react";

import { useDebouncedFn } from "./util";

import { FlexProps } from "./Flex";
import { NonnativeFlexContainer } from "./Flex.styles";

export const getGaps = (
  rows: Record<string, number[]>,
  gap: number
): Record<number, Record<string, number>> => {
  let gaps = {};

  if (!gap) {
    return gaps;
  }

  const rowsIndex = Object.keys(rows);

  if (!rowsIndex) {
    return gaps;
  }

  if (rowsIndex.length === 1) {
    rows[1].forEach((rowIndex: number, i: number) => {
      gaps = {
        ...gaps,
        [rowIndex]: {
          marginRight: rows[1].length === i + 1 ? 0 : gap,
        },
      };
    });
  } else {
    rowsIndex.forEach((rowIndex: string) => {
      rows[rowIndex].forEach((index: number, i: number) => {
        gaps = {
          ...gaps,
          [index]: {
            marginRight: rows[rowIndex].length === i + 1 ? 0 : gap,
            marginBottom: parseInt(rowIndex, 10) === rowsIndex.length ? 0 : gap,
          },
        };
      });
    });
  }

  return gaps;
};

const NonnativeFlex = React.forwardRef<
  React.RefAttributes<HTMLDivElement>,
  Omit<FlexProps, "as">
>(
  (
    {
      wrap,
      gap,
      direction,
      alignItems,
      alignContent,
      justify,
      inline,
      children,
      ...props
    },
    ref
  ) => {
    void ref;
    const containerRef = React.useRef<HTMLDivElement | null>() as React.MutableRefObject<HTMLDivElement>;

    const [rows, setRows] = React.useState({});

    const gaps = React.useMemo(() => getGaps(rows, gap!!), [rows]);

    const [handleResize, _isReady] = useDebouncedFn(
      () => {
        const {
          width,
        } = containerRef?.current?.getBoundingClientRect() as DOMRect;

        const newRows = {};
        let rowsCount = 1;
        let childsWidth = 0;

        const containerChildren = Array.from(
          containerRef?.current?.children ?? []
        );

        containerChildren.forEach((child: HTMLDivElement, i: number) => {
          const childRect = child.getBoundingClientRect();
          const nextChildRect = containerChildren?.[
            i + 1
          ]?.getBoundingClientRect();
          childsWidth += childRect?.width + gap!;

          if (!newRows[rowsCount]) {
            newRows[rowsCount] = [i + 1];
          } else {
            newRows[rowsCount] = [...newRows[rowsCount], i + 1];
          }

          if (direction?.includes("column")) {
            rowsCount += 1;
            return;
          }

          if (
            wrap !== "nowrap" &&
            (childsWidth > width || childsWidth + nextChildRect?.width > width)
          ) {
            rowsCount += 1;
            childsWidth = 0;
          }
        });
        setRows(newRows);
      },
      50,
      [direction]
    );

    React.useEffect(() => {
      if (!gap) {
        return;
      }

      if (!containerRef.current) {
        return;
      }

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    return (
      <NonnativeFlexContainer
        ref={containerRef}
        $alignItems={alignItems}
        $alignContent={alignContent}
        $direction={direction}
        $gaps={gaps}
        $justify={justify}
        $wrap={wrap}
        $inline={inline}
        {...props}
      >
        {children}
      </NonnativeFlexContainer>
    );
  }
);

NonnativeFlex.displayName = "NonnativeFlex";

export default NonnativeFlex;
