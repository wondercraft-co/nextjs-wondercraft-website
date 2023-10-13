import { Meta, StoryObj } from "@storybook/react";
import Scene3dComponent from "./Scene3d";

const meta: Meta<typeof Scene3dComponent> = {
  component: Scene3dComponent,
};

export default meta;
type Story = StoryObj<typeof Scene3dComponent>;

export const Scene3d: Story = {
  args: {
    // add props here
  },
};
