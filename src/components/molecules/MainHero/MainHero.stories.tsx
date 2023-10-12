import { Meta, StoryObj } from "@storybook/react";
import MainHeroComponent from "./MainHero";

const meta: Meta<typeof MainHeroComponent> = {
  component: MainHeroComponent,
};

export default meta;
type Story = StoryObj<typeof MainHeroComponent>;

export const MainHero: Story = {
  args: {
    // add props here
  },
};
