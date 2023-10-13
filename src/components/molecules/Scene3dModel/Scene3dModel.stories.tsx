import { Meta, StoryObj } from "@storybook/react";
import Scene3dModelComponent from "./Scene3dModel";

const meta: Meta<typeof Scene3dModelComponent> = {
  component: Scene3dModelComponent,
};

export default meta;
type Story = StoryObj<typeof Scene3dModelComponent>;

export const Scene3dModel: Story = {
  args: {
    // add props here
  },
};
