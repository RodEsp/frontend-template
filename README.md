# RodEsp's Frontend Template

My personal frontend template for quickly building web apps.

The choice of tools and frameworks is partly based on my personal preferences (shadcn), partly based on what I think is the most modern, performant, and production-ready (biome, vite, vitest), and partly based on what is the most popular and well-supported (react, tailwind, storybook). It should be relatively easy to swap out any of the tools for your own preferences. I try to keep this template as minimal as possible while still including everything you need for a "production ready" project, such as testing, accessibility, and documentation tools. This is not intended to be a "one size fits all" template, but rather a starting point for your own projects, with the repetitive parts of setting up a new project handled for you. It should be relatively easy to expand or customize for your own needs.

The template intends to be as future-looking as possible, so it uses the latest versions of the tools and frameworks, and is configured to use the latest features and best practices. Please pay attention to the [`tsconfig.json`](./tsconfig.json) if you do not want to use bleeding edge features or need to support older browsers or frameworks.

## Features

- React
- Tailwind CSS
- Shadcn UI
- Lucide
- Simple Icons
- Storybook
- Vite
- Vitest
- Biome
- Dependabot

## Design Resources

* [tweakcn.com](https://tweakcn.com/editor/theme) to create a custom theme for your project.
* [htmlcolorcodes.com](https://htmlcolorcodes.com/color-picker/) to pick colors for your project.
* [harmonizer.evilmartians.com](https://harmonizer.evilmartians.com/#W1siMTAwIiwxMDAsbnVsbCwiMjAwIiw5MCxudWxsLCIzMDAiLDc3LG51bGwsIjQwMCIsNjUsbnVsbCwiNTAwIiw1MSxudWxsLCI2MDAiLDUxLG51bGwsIjcwMCIsNjUsbnVsbCwiODAwIiw3NyxudWxsLCI5MDAiLDkwLG51bGwsIjEwMDAiLDEwMCxudWxsXSxbIkdyZWVuIiwxNTVdLFsiYXBjYSIsImJnVG9GZyIsImV2ZW4iLCIjZmZmIiwiIzAwMCIsNSwic3JnYiJdXQ) to harmonize colors for your project.

## Using this template

The simplest way to get started with this template is to click the "Use this template" button at the top-right of the repository page.  
If you don't have a GitHub account, you can also download the repository as a ZIP file and extract it to your local machine.

### Running the project

`npm install` to install the dependencies.  
`npm run dev` to start the development server.  
`npm run build` to build the production version.  
`npm run storybook` to start the storybook server.  
`npm run test` to run the tests.  
`npm run lint` to run the linter.  
`npm run format` to format the code.  
`npm run shadcn:add` to add a new component to the project.  
`npm run build-storybook` to build the storybook static site.  
`npm run preview` to preview the production version.  