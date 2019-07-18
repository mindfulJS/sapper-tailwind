<script>
  import { slide, fade } from "svelte-transitions";
  import ProjectCodesandbox from "../components/ProjectCodesandbox.svelte";
  import { getProjectsData } from "../data/projects_data";

  const projects = getProjectsData();
  export let y;
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<svelte:window bind:scrollY={y}/>

{#each projects as project, i}
  <div transition:slide class="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex mx-auto p-6 m-6 bg-white rounded-lg shadow-xl" on:mouseover="{() => project.showDescription = true}" on:mouseout="{() => project.showDescription = false}">
    <div class="w-1/3 mr-4">{project.name}</div>
    <figure class="w-2/3">
      <img class="cursor-pointer hover:opacity-75" src="projects-{project.name.replace(/ /g,'')}.png" alt="{project.name}" on:click="{() => project.showDescription = true}">
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
  <!-- this block renders when photos.length === 0 -->
  <p>loading...</p>
{/each}
