import { SiVite } from "@icons-pack/react-simple-icons";
import type { Meta } from "@storybook/react-vite";
import StackComponentCard from "../components/StackComponentCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example/StackComponentCard",
  component: StackComponentCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof StackComponentCard>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Vite = () => (
  <StackComponentCard icon={<SiVite />} title="Vite" href="#">
    Vite is a build tool that helps you create a modern web application.
  </StackComponentCard>
);
