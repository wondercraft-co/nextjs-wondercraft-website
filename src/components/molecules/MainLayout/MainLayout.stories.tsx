import { Meta, StoryObj } from "@storybook/react";
import MainLayoutComponent from "./MainLayout";

const meta: Meta<typeof MainLayoutComponent> = {
  component: MainLayoutComponent,
};

export default meta;
type Story = StoryObj<typeof MainLayoutComponent>;

export const MainLayout: Story = {
  args: {
    // add props here
  },
};
