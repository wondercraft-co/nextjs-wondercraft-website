import { Meta, StoryObj } from "@storybook/react";
import ButtonComponent from "./Button";

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {
  args: {
    // add props here
  },
};
