import { Meta, StoryObj } from "@storybook/react";
import MainHeaderComponent from "./MainHeader";

const meta: Meta<typeof MainHeaderComponent> = {
  component: MainHeaderComponent,
};

export default meta;
type Story = StoryObj<typeof MainHeaderComponent>;

export const MainHeader: Story = {
  args: {
    // add props here
  },
};
