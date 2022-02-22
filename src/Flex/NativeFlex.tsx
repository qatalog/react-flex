import React, { forwardRef } from "react";

import { FlexProps } from "./Flex";
import { FlexContainer } from "./Flex.styles";

type NativeFlexProps = Omit<FlexProps, "as"> & { isNative: boolean };

const NativeFlex = forwardRef<
  React.RefAttributes<HTMLDivElement>,
  NativeFlexProps
>(
  (
    {
      alignItems,
      alignContent,
      children,
      direction,
      gap,
      justifyContent,
      wrap,
      isNative,
      inline,
      ...props
    },
    ref
  ) => (
    <FlexContainer
      ref={ref}
      $alignItems={alignItems}
      $alignContent={alignContent}
      $direction={direction}
      $gap={gap}
      $justifyContent={justifyContent}
      $isNative={isNative}
      $wrap={wrap}
      $inline={inline}
      {...props}
    >
      {children}
    </FlexContainer>
  )
);

NativeFlex.displayName = "NativeFlex";

export default NativeFlex;
