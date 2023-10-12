import { Meta, StoryObj } from "@storybook/react";
import MainFooterComponent from "./MainFooter";

const meta: Meta<typeof MainFooterComponent> = {
  component: MainFooterComponent,
};

export default meta;
type Story = StoryObj<typeof MainFooterComponent>;

export const MainFooter: Story = {
  args: {
    // add props here
  },
};
