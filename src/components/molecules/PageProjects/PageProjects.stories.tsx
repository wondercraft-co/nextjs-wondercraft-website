import { Meta, StoryObj } from "@storybook/react";
import PageProjectsComponent from "./PageProjects";

const meta: Meta<typeof PageProjectsComponent> = {
  component: PageProjectsComponent,
};

export default meta;
type Story = StoryObj<typeof PageProjectsComponent>;

export const PageProjects: Story = {
  args: {
    // add props here
  },
};
