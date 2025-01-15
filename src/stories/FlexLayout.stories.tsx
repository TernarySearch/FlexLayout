import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { FlexLayout } from "./FlexLayoutExample";

const meta: Meta<typeof FlexLayout> = {
    title: "Example/FlexLayout",
    component: FlexLayout,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof FlexLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: () => <FlexLayout />,
};
