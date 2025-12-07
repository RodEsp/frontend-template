import logo from "/rodesp-logo.png";
import "./App.css";

import {
  SiBiome,
  SiGithub,
  SiLucide,
  SiReact,
  SiShadcnui,
  SiSimpleicons,
  SiStorybook,
  SiTailwindcss,
  SiVite,
  SiVitest,
} from "@icons-pack/react-simple-icons";

import { Button } from "@/components/shadcn/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import StackComponentCard from "./components/StackComponentCard";

function App() {
  return (
    <>
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div
        id="appRoot"
        className="flex flex-col items-center justify-center min-h-full p-8"
      >
        <a href="https://rodesp.dev" target="_blank" rel="noopener">
          <img src={logo} className="logo m-4" alt="RodEsp logo" />
        </a>
        <h1 className="text-4xl font-extrabold bg-linear-to-r from-chart-2 to-chart-5 text-transparent bg-clip-text">
          Frontend Template
        </h1>

        <p className="mt-4 text-xl text-muted-foreground">
          A modern frontend stack for building scalable and performant web
          experiences
        </p>

        <Button variant="outline" className="my-8 transition-none">
          <SiGithub />
          <a
            href="https://github.com/RodEsp/frontend-template"
            target="_blank"
            rel="noopener"
          >
            RodEsp/frontend-template
          </a>
        </Button>

        <h2 className="text-2xl font-bold bg-linear-to-r from-chart-5 to-chart-2 text-transparent bg-clip-text">
          Stack
        </h2>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <StackComponentCard
            icon={<SiReact />}
            title="React"
            href="https://react.dev"
          >
            React is a JavaScript library for creating user interfaces.
          </StackComponentCard>
          <StackComponentCard
            icon={<SiTailwindcss />}
            title="Tailwind CSS"
            href="https://tailwindcss.com"
          >
            Tailwind is a CSS framework for styling web components.
          </StackComponentCard>
          <StackComponentCard
            icon={<SiShadcnui />}
            title="Shadcn"
            href="https://ui.shadcn.com"
          >
            Shadcn is a set of pre-styled components for building component
            libraries.
          </StackComponentCard>
          <StackComponentCard
            icon={<SiLucide />}
            title="Lucide"
            href="https://lucide.dev"
          >
            Lucide is set of beautiful svg icons for the web.
          </StackComponentCard>
          <StackComponentCard
            icon={<SiSimpleicons />}
            title="Simple Icons"
            href="https://simpleicons.org"
          >
            Simple Icons is a set of SVG icons for popular brands.
          </StackComponentCard>
          <StackComponentCard
            icon={<SiStorybook />}
            title="Storybook"
            href="https://storybook.js.org"
          >
            Storybook allows you to build and test UI components in isolation.
          </StackComponentCard>
          <StackComponentCard
            icon={<SiVite />}
            title="Vite"
            href="https://vitejs.dev"
          >
            Vite is a build tool for frontend development.
          </StackComponentCard>
          <StackComponentCard
            icon={<SiVitest />}
            title="Vitest"
            href="https://vitest.dev"
          >
            ViTest is a test framework for frontend development.
          </StackComponentCard>
          <StackComponentCard
            icon={<SiBiome />}
            title="Biome"
            href="https://biomejs.dev"
          >
            Biome is a linter and formatter for web languages.
          </StackComponentCard>
        </div>
      </div>
    </>
  );
}

export default App;
