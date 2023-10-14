import { Meta, StoryObj } from "@storybook/react";
import MainSplineSceneComponent from "./MainSplineScene";

const meta: Meta<typeof MainSplineSceneComponent> = {
  component: MainSplineSceneComponent,
};

export default meta;
type Story = StoryObj<typeof MainSplineSceneComponent>;

export const MainSplineScene: Story = {
  args: {
    // add props here
  },
};
