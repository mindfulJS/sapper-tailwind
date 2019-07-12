<script>
  import { slide, fade } from "svelte-transitions";
  import ProjectCodesandbox from "../components/ProjectCodesandbox.svelte";

  const projects = [
    {
      name: "Instruments Checks",
      showDescription: false,
      codesandboxName: "instruments-checks-i4nbs",
      description: "Inventory of instruments for mobile devices.",
      comments:
        "This was a coding challenge! The goal was to build a single page application in ONE html file in pure Javascript (no framework).",
      technologies: "ES6, Maps API, CSS filters, Mobile Design"
    },
    {
      name: "Projects Statistics",
      showDescription: false,
      codesandboxName: "projects-statistics-tbg6w",
      description: "Statistics and Project Management tools.",
      comments:
        "How much money do you make per month? This dynamic graph will show you the right data with also a colourful timeline for your Project Managements.",
      technologies: "ES6, Chart.js, Google Charts, Responsive Design"
    },
    {
      name: "Svelte Material",
      showDescription: false,
      codesandboxName: "svelte-material-c298p",
      description: "Material Design Library for Svelte.js",
      comments: "Using the latest technologies.",
      technologies: "Svelte, Material Web Components"
    }
  ];
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

{#each projects as project, i}
  <div transition:slide class="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex mx-auto p-6 m-6 bg-white rounded-lg shadow-xl" >
    <div class="w-1/3 mr-4">{project.name}</div>
    <figure class="w-2/3">
      <img class="cursor-pointer hover:opacity-75" src="projects-{project.name.replace(/ /g,'')}.png" alt="{project.name}" on:click="{() => project.showDescription = !project.showDescription}">
      {#if project.showDescription}
        <div transition:slide class="text-justify">
          <div class="mt-4"><font class="text-purple-600 font-bold">Description:</font>
            {project.description}</div>
          <div class="mt-4"><font class="text-purple-600 font-bold">Approach:</font> 
            {project.comments}</div>
          <div class="mt-4"><font class="text-purple-600 font-bold">Technologies used:</font> 
            {project.technologies}</div>
          <div class="mt-4 float-right">
            <ProjectCodesandbox {project}/>
          </div>
        </div>
      {/if}
    </figure>
  </div>
  
{/each}
