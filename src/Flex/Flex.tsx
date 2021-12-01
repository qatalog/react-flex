import * as React from "react";

import {
  AlignContent,
  AlignItems,
  FlexDirection,
  JustifyContent,
  FlexWrap,
} from "./types";

import NativeFlex from "./NativeFlex";
import NonnativeFlex from "./NonnativeFlex";

let isFlexGapSupported = false;
if (typeof window !== "undefined") {
  const isOpera =
    // @ts-ignore
    (!!window?.opr && !!opr?.addons) ||
    // @ts-ignore
    !!window?.opera ||
    navigator?.userAgent.indexOf(" OPR/") >= 0;
  const isSafari = /^((?!chrome|android).)*safari/i.test(
    navigator?.userAgent ?? ""
  );
  isFlexGapSupported =
    !!window?.CSS?.supports?.("gap", "0px") && !(isSafari || isOpera);
}

export interface FlexProps extends React.HTMLAttributes<any> {
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  children?: React.ReactNode;
  direction?: FlexDirection;
  gap?: number;
  justify?: JustifyContent;
  wrap?: FlexWrap;
  inline?: boolean;
  as?: React.ElementType;
}

const Flex: React.FC<FlexProps> = ({
  wrap = "nowrap",
  gap = 0,
  inline = false,
  ...props
}) =>
  wrap === "nowrap" || isFlexGapSupported ? (
    <NativeFlex
      gap={gap}
      wrap={wrap}
      isNative={isFlexGapSupported}
      inline={inline}
      {...props}
    />
  ) : (
    <NonnativeFlex gap={gap} wrap={wrap} inline={inline} {...props} />
  );

Flex.displayName = "Flex";

export default Flex;
