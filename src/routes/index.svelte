<script>
	import { fade, slide } from "svelte-transitions";
	import Bubbles from "../components/Bubbles.svelte";
	import ButtonScrollDown from "../components/ButtonScrollDown.svelte";
	import IconWelcome from "../components/IconWelcome.svelte";
	import IconSkills from "../components/IconSkills.svelte";
	import IconProjects from "../components/IconProjects.svelte";
	import IconContact from "../components/IconContact.svelte";
	import { getAboutData } from "../data/about_data";
	import { getProjectsData } from "../data/projects_data";
	//import BackgroundSlide from "../components/BackgroundSlide.svelte";

	const about = getAboutData();
	const projects = getProjectsData();
	export let y;
</script>

<style>
	.fade-in {
	  opacity: 0;
	  animation: fadeIn 0.4s forwards;
	  animation-delay: 0.2s;
	}
	@keyframes fadeIn {
	  0% {
	    opacity: 0;
	  }
	  100% {
	    opacity: 1;
	  }
	}
</style>

<svelte:head>
	<title>My Portfolio</title>
</svelte:head>

<!-- Define y for scrolling -->
<svelte:window bind:scrollY={y}/>

<!-- Picture in circle-->
<a href="#underground" alt="Go down">
	<div transition:slide class="max-w-sm mx-auto flex p-6 m-6" style="opacity: {1 - Math.max(0, y / 200)}; transform: scale({1 - Math.max(0, y / 1500)})">
		<figure class="mx-auto p-6" >
			<img src="bitmoji.gif" alt="Ben" class="rounded-full border-4 border-gray-300 w-50 h-50 shadow-xl" />
			<Bubbles />
		</figure>
	</div>
</a>

<!-- Button to go down the page -->
<div class="pt-10">
	<ButtonScrollDown />
</div>
<!-- Underground part -->
<div id="underground" class="text-white max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto p-6 m-6 opacity-0 fade-in" transition:fade>
  <!-- Welcome -->
	<div id="about" class="mt-56" style="transform: scale({1/(1 - Math.max(0, y / 5000))})">
		<IconWelcome />
		<p id="about-title" class="text-4xl">Welcome to my portfolio</p>
		<div transition:slide class="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto flex p-6 m-6 bg-transparent rounded-lg">
			<div class="w-full text-justify">
				{about.about.introduction} {about.about.likes}
			</div>
		</div>
	</div>
  <!-- Skills -->
	<div id="skills" class="mt-32 mx-2" style="transform: scale({1/(1 - Math.max(0, y / 5000))})">
		<IconSkills />
		<p id="skills-title" class="text-4xl">Skills</p>
		<div transition:slide class="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto flex p-6 m-6 bg-transparent rounded-lg">
			<div class="w-full text-justify">
				{about.about.skills}
			</div>
		</div>
	</div>
  <!-- Projects -->
	<div id="projects" class="mt-32 mx-2" style="transform: scale({1/(1 - Math.max(0, y / 5000))})">
		<IconProjects />
		<p id="projects-title" class="text-4xl">Projects</p>
	</div>
	
</div>

<!-- Carousel -->
<div id="carousel" class="overflow-x-hidden mt-10 mb-32 mx-auto text-center w-full">
	
	<div class="mx-2 flex flex-row" style="transform: translateX({(y - 1200)/4 + "px"})">
		{#each projects.list as project, i}
			<div transition:slide class="m-2 flex-1">
				<figure>
					<img class="text-center" src="projects-{project.name.replace(/ /g,'')}.png" alt="{project.name}">
				</figure>
			</div>
		{/each}
	</div>
	<div class="mx-2 flex flex-row" style="transform: translateX({-(y - 1200)/4 + "px"})">
		{#each projects.list as project, i}
			<div transition:slide class="m-2 flex-1">
				<figure>
					<img class="text-center" src="projects-{project.name.replace(/ /g,'')}.png" alt="{project.name}">
				</figure>
			</div>
		{/each}
	</div>
	
</div>


<div id="underground-end" class="text-white max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto p-6 m-6 opacity-0 fade-in pt-32 pb-32 relative" transition:fade>
  <!-- contact -->
	<div id="contact" class="mx-2" style="transform: scale({1/(1 - Math.max(0, y / 5000))})">
	
		<IconContact />
		<p id="contact-title" class="text-4xl">Contact</p>
		<div transition:slide class="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto flex p-6 m-6 bg-transparent rounded-lg">
			<div class="w-full text-center">
				{about.about.contact}
			</div>
		</div>
	</div>
	
</div>