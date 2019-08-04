export function getProjectsData() {
  return {
    icon: "start-up.svg",
    list: [
      {
        id: 1,
        name: "Instruments Checks",
        showDescription: false,
        codesandboxName: "instruments-checks-i4nbs",
        description: "Inventory of instruments",
        comments:
          "This is a One HTML page challenge! The goal was to build a single page application in ONE file only (no framework).",
        technologies: "ES6, Maps API, CSS filters, Mobile Design"
      },
      {
        id: 2,
        name: "Projects Statistics",
        showDescription: false,
        codesandboxName: "projects-statistics-tbg6w",
        description: "Statistics and Project Management",
        comments:
          "Another One HTML page challenge! Some dynamic graphs and tables with a colourful timeline for Project Managements.",
        technologies: "ES6, Chart.js, Google Charts, Responsive Design"
      },
      {
        id: 3,
        name: "Svelte Material",
        showDescription: false,
        codesandboxName: "svelte-material-c298p",
        description:
          "A library to use the latest Material Design components in Svelte.",
        comments:
          "Implemented some HTML templates ready to use for new projects.",
        technologies: "Svelte, Material Web Components"
      }
    ]
  };
}
