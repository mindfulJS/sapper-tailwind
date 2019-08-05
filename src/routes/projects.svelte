<script>
  import { slide, fade } from "svelte/transition";
  import ProjectCodesandbox from "../components/ProjectCodesandbox.svelte";
  import { getProjectsData } from "../data/projects_data";

  const projects = getProjectsData();
</script>

<style>
  .frosted-glass {
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
  }
</style>

<svelte:head>
	<title>Projects</title>
</svelte:head>


<div out:fade>
  {#each projects.list as project, i (project.id)}
    <div in:slide="{{ delay: 300 * i }}" class="frosted-glass max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex mx-auto p-6 m-6 rounded-lg" on:mouseover="{() => project.showDescription = true}" on:mouseout="{() => project.showDescription = false}">
      <div class="w-1/3 mr-4">{project.name}</div>
      <figure class="w-2/3">
        <img class="cursor-pointer hover:opacity-75 rounded-lg" src="projects-{project.name.replace(/ /g,'')}.png" alt="{project.name}" on:click="{() => project.showDescription = true}">
        {#if project.showDescription}
          <div transition:slide class="text-justify">
            <div class="mt-4"><font class="text-purple-600 font-bold">Description:</font>
              {project.description}</div>
            <div class="mt-4"><font class="text-purple-600 font-bold">Approach:</font> 
              {project.comments}</div>
            <div class="mt-4"><font class="text-purple-600 font-bold">Technologies used:</font> 
              {project.technologies}</div>
            <div class="mt-4 text-right">
              <ProjectCodesandbox {project}/>
            </div>
          </div>
        {/if}
      </figure>
    </div>
  {:else}
    <!-- this block renders when projects.length === 0 -->
    <p>loading...</p>
  {/each}
</div>
