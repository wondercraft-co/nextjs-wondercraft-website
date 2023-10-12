import { Meta, StoryObj } from "@storybook/react";
import TestimonialComponent from "./Testimonial";

const meta: Meta<typeof TestimonialComponent> = {
  component: TestimonialComponent,
};

export default meta;
type Story = StoryObj<typeof TestimonialComponent>;

export const Testimonial: Story = {
  args: {
    // add props here
  },
};
