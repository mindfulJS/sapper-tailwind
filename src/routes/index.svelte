<script>
	import { fade, slide } from "svelte/transition";
	//import Bubbles from "../components/Bubbles.svelte";
	import ButtonScrollDown from "../components/ButtonScrollDown.svelte";
	import IconWelcome from "../components/IconWelcome.svelte";
	import IconSkills from "../components/IconSkills.svelte";
	import IconProjects from "../components/IconProjects.svelte";
	import IconContact from "../components/IconContact.svelte";
	import { getAboutData } from "../data/about_data";
	import { getProjectsData } from "../data/projects_data";

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
	.blur {
	  filter: blur(2px) grayscale(1);
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

<div in:fade="{{ delay: 280 }}" out:fade class="mt-64">
	<!-- Picture in circle-->
	<!--
	<a href="#underground" alt="Go down">
		<div class="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto p-6 m-6" style="opacity: {1 - Math.max(0, y / 200)}">
			<Bubbles />
		</div>
	</a>-->

	<!-- Button to go down the page -->
	<div class="pt-10">
		<ButtonScrollDown />
	</div>

	<!-- Underground part -->
	<div id="underground" class="fade-in text-white opacity-0">
		<!-- Welcome -->
		<div id="about" class="mt-56 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto p-6 m-6" style="transform: scale({Math.min(1.7,1/(1 - Math.max(0, y / 5000)))})">
			<IconWelcome />
			<p id="about-title" class="text-4xl">Welcome to my portfolio</p>
			<div class="px-6 text-justify">
				{about.about.introduction} {about.about.likes}
			</div>
		</div>
		<!-- Skills -->
		<div id="skills" class="mt-32 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto p-6 m-6" style="transform: scale({Math.min(1.7,1/(1 - Math.max(0, y / 5000)))})">
			<IconSkills />
			<p id="skills-title" class="text-4xl">Skills</p>
			<div class="px-6 text-justify">
				{about.about.skills}
			</div>
		</div>
		<!-- Projects -->
		<div id="projects" class="mt-32 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto p-6 m-6" style="transform: scale({Math.min(1.7,1/(1 - Math.max(0, y / 5000)))})">
			<IconProjects />
			<p id="projects-title" class="text-4xl">Projects</p>
		</div>
		
		<!-- Carousel -->
		<div id="projects-carousel" class="mt-10 mb-32 mx-auto text-center w-full overflow-x-hidden" style="-webkit-overflow-scrolling: touch;">
			<div class="mx-2 flex flex-row" style="transform: translateX({(y - 1200)/4 + "px"})">
				{#each projects.list as project, i}
					<div class="m-2 flex-1">
						<img class="text-center rounded-lg" src="projects-{project.name.replace(/ /g,'')}.png" alt="{project.name}">
					</div>
				{/each}
			</div>
			<div class="mx-2 flex flex-row" style="transform: translateX({-(y - 1200)/4 + "px"})">
				{#each projects.list as project, i}
					<div class="m-2 flex-1">
						<img class="text-center rounded-lg blur" src="projects-{project.name.replace(/ /g,'')}.png" alt="{project.name}">
					</div>
				{/each}
			</div>
		</div>

		<!-- contact -->
		<div id="contact" class="mt-32 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto p-6 m-6" style="transform: scale({Math.min(1.7,1/(1 - Math.max(0, y / 5000)))})">
			<IconContact />
			<p id="contact-title" class="text-4xl">Contact</p>
			<div class="px-6 text-center">
				{about.about.contact}
			</div>
		</div>

	</div>
</div>