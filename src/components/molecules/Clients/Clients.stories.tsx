import { Meta, StoryObj } from "@storybook/react";
import ClientsComponent from "./Clients";

const meta: Meta<typeof ClientsComponent> = {
  component: ClientsComponent,
};

export default meta;
type Story = StoryObj<typeof ClientsComponent>;

export const Clients: Story = {
  args: {
    // add props here
  },
};
