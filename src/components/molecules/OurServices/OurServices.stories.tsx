import { Meta, StoryObj } from "@storybook/react";
import OurServicesComponent from "./OurServices";

const meta: Meta<typeof OurServicesComponent> = {
  component: OurServicesComponent,
};

export default meta;
type Story = StoryObj<typeof OurServicesComponent>;

export const OurServices: Story = {
  args: {
    // add props here
  },
};
