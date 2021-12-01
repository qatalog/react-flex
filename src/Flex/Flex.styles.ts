import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { FlexProps } from "./Flex";
import { $ } from "./types";

type FlexContainerProps = $<FlexProps> & {
  $isNative: boolean;
  [key: string]: any;
};

const calculateMargins = ({
  $isNative,
  $gap = 0,
  $wrap = "nowrap",
  $direction = "row",
  theme,
}): FlattenSimpleInterpolation => {
  const margin = theme.spacing($gap);

  if ($wrap === "nowrap" || !$isNative) {
    if ($direction === "column") {
      return css`
        & > *:not(:last-child) {
          margin-bottom: ${margin}px;
        }
      `;
    }
    if ($direction === "row-reverse") {
      return css`
        & > *:not(:first-child) {
          margin-right: ${margin}px;
        }
      `;
    }
    if ($direction === "column-reverse") {
      return css`
        & > *:not(:first-child) {
          margin-bottom: ${margin}px;
        }
      `;
    }
    // by default it would be row
    return css`
      & > *:not(:last-child) {
        margin-right: ${margin}px;
      }
    `;
  } else {
    return css`
      gap: ${margin}px;
    `;
  }
};

export const FlexContainer = styled.div<FlexContainerProps>`
  display: ${({ $inline }) => (!!$inline ? "inline-flex" : "flex")};
  flex-direction: ${({ $direction }) => $direction};
  flex-wrap: ${({ $wrap }) => $wrap};
  justify-content: ${({ $justify }) => $justify};
  align-content: ${({ $alignContent }) => $alignContent};
  align-items: ${({ $alignItems }) => $alignItems};

  ${({ $isNative, $gap = 0, $wrap = "nowrap", $direction = "row", theme }) =>
    $gap > 0 &&
    calculateMargins({
      $isNative,
      $gap,
      $wrap,
      $direction,
      theme,
    })}
`;

export const NonnativeFlexContainer = styled(FlexContainer)<
  FlexContainerProps & {
    $gaps: Record<number, Record<string, number>>;
  }
>`
  & > * {
    ${({ theme, $gaps }) => {
      const childGaps = Object.keys($gaps);

      let styles = "";

      if (!childGaps.length) {
        return styles;
      }

      childGaps.forEach((gap) => {
        styles = `
      ${styles}
  
      &:nth-child(${gap}) {
        margin-right: ${theme.spacing($gaps[gap].marginRight ?? 0)}px;
        margin-bottom: ${theme.spacing($gaps[gap].marginBottom ?? 0)}px;
      }
    `;
      });

      return styles;
    }}
  }
`;
