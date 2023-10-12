import { Meta, StoryObj } from "@storybook/react";
import PageHeroComponent from "./PageHero";

const meta: Meta<typeof PageHeroComponent> = {
  component: PageHeroComponent,
};

export default meta;
type Story = StoryObj<typeof PageHeroComponent>;

export const PageHero: Story = {
  args: {
    // add props here
  },
};
