import { Meta, StoryObj } from "@storybook/react";
import ProjectCardComponent from "./ProjectCard";

const meta: Meta<typeof ProjectCardComponent> = {
  component: ProjectCardComponent,
};

export default meta;
type Story = StoryObj<typeof ProjectCardComponent>;

export const ProjectCard: Story = {
  args: {
    // add props here
  },
};
