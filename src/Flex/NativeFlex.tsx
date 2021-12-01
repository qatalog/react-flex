import React from "react";

import { FlexProps } from "./Flex";
import { FlexContainer } from "./Flex.styles";

type NativeFlexProps = Omit<FlexProps, "as"> & { isNative: boolean };

const NativeFlex: React.FC<NativeFlexProps> = ({
  alignItems,
  alignContent,
  children,
  direction,
  gap,
  justify,
  wrap,
  isNative,
  inline,
  ...props
}) => (
  <FlexContainer
    $alignItems={alignItems}
    $alignContent={alignContent}
    $direction={direction}
    $gap={gap}
    $justify={justify}
    $isNative={isNative}
    $wrap={wrap}
    $inline={inline}
    {...props}
  >
    {children}
  </FlexContainer>
);

NativeFlex.displayName = "NativeFlex";

export default NativeFlex;
