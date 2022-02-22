import * as React from "react";
import { Story } from "@storybook/react/types-6-0";

import Flex, { FlexProps } from "./Flex";

export default {
  title: "Layout/Flex",
  component: Flex,
  argTypes: {
    alignContent: {
      control: {
        type: "select",
        options: [
          "flex-start",
          "flex-end",
          "center",
          "space-between",
          "space-around",
          "stretch",
        ],
      },
    },
    alignItems: {
      control: {
        type: "select",
        options: ["flex-start", "flex-end", "center", "baseline", "stretch"],
      },
    },
    direction: {
      control: {
        type: "select",
        options: ["row", "row-reverse", "column", "column-reverse"],
      },
    },
    gap: {
      control: {
        type: "number",
      },
    },
    justifyContent: {
      control: {
        type: "select",
        options: [
          "center",
          "start",
          "end",
          "flex-start",
          "flex-end",
          "left",
          "right",
          "normal",
          "space-between",
          "space-around",
          "space-evenly",
          "stretch",
          "inherit",
          "initial",
          "unset",
        ],
      },
    },
    wrap: {
      control: {
        type: "select",
        options: ["nowrap", "wrap"],
      },
    },
  },
};

const Template: Story<FlexProps> = (args: FlexProps) => (
  <Flex {...args}>
    {Array(6)
      .fill(null)
      .map((_, i) => (
        <div
          key={i}
          style={{
            minHeight: 200,
            width: 250,
            border: "thin solid",
          }}
        >
          {i}
        </div>
      ))}
  </Flex>
);

export const Default = Template.bind({});

Default.args = {
  gap: 1,
};

export const Wrap = Template.bind({});

Wrap.args = {
  gap: 1,
  wrap: "wrap",
};

export const Column = Template.bind({});

Column.args = {
  gap: 1,
  direction: "column",
};
