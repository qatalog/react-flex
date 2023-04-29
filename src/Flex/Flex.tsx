import * as React from "react";

import {
  AlignContent,
  AlignItems,
  FlexDirection,
  JustifyContent,
  FlexWrap,
} from "./types";
import { getBrowserInfo } from "./util";

import NativeFlex from "./NativeFlex";
import NonnativeFlex from "./NonnativeFlex";

let isFlexGapSupported = false;

const browserInfo = getBrowserInfo();

if (!(browserInfo instanceof Error)) {
  const browserName = browserInfo.name;
  const browserVersion = parseFloat(browserInfo.version ?? "");

  isFlexGapSupported =
    !!window?.CSS?.supports?.("gap", "0px") &&
    !(
      (browserName === "safari" && browserVersion < 14.1) ||
      (browserName === "opera" && browserVersion < 70)
    );
}

export interface FlexProps extends Omit<React.AllHTMLAttributes<any>, "as"> {
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  children?: React.ReactNode;
  direction?: FlexDirection;
  gap?: number;
  justifyContent?: JustifyContent;
  wrap?: FlexWrap;
  inline?: boolean;
  as?: React.ElementType;
}

const Flex = React.forwardRef<React.RefAttributes<HTMLDivElement>, FlexProps>(
  ({ wrap = "nowrap", gap = 0, inline = false, ...props }, ref) =>
    wrap === "nowrap" || isFlexGapSupported ? (
      <NativeFlex
        ref={ref}
        gap={gap}
        wrap={wrap}
        isNative={isFlexGapSupported}
        inline={inline}
        {...props}
      />
    ) : (
      <NonnativeFlex
        ref={ref}
        gap={gap}
        wrap={wrap}
        inline={inline}
        {...props}
      />
    )
);

Flex.displayName = "Flex";

export default Flex;
