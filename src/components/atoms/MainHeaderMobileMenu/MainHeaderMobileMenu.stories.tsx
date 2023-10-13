import { Meta, StoryObj } from "@storybook/react";
import MainHeaderMobileMenuComponent from "./MainHeaderMobileMenu";

const meta: Meta<typeof MainHeaderMobileMenuComponent> = {
  component: MainHeaderMobileMenuComponent,
};

export default meta;
type Story = StoryObj<typeof MainHeaderMobileMenuComponent>;

export const MainHeaderMobileMenu: Story = {
  args: {
    // add props here
  },
};
