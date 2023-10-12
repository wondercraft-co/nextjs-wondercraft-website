import { Meta, StoryObj } from "@storybook/react";
import PageFeaturesComponent from "./PageFeatures";

const meta: Meta<typeof PageFeaturesComponent> = {
  component: PageFeaturesComponent,
};

export default meta;
type Story = StoryObj<typeof PageFeaturesComponent>;

export const PageFeatures: Story = {
  args: {
    // add props here
  },
};
