<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import NavBar from "./NavBar.svelte";
  import Button from "./Button.svelte";
  export let segment;

  let current = "home";
  let currentEl;
  let width;
  let offset;
  let offsetFirstEl;

  // get width and offset of active button
  $: if (document.getElementById(current) !== null) {
    currentEl = document.getElementById(current);
    width = currentEl.offsetWidth;
    offset = currentEl.offsetLeft - offsetFirstEl;
  }

  // get initial width and offset of first element
  onMount(() => {
    currentEl = document.getElementById(current);
    width = currentEl.offsetWidth;
    offset = currentEl.offsetLeft;
    offsetFirstEl = offset;
  });
</script>

<nav class="m-auto w-auto p-4">
	<ul class="flex">
		<li><a id="home" class='{segment === undefined ? "selected" : ""} p-2' href='.' on:click="{() => current = 'home'}">
			<Button>Home</Button></a></li>
		<li><a id="projects" class='{segment === "projects" ? "selected" : ""} p-2' href='projects' on:click="{() => current = 'projects'}">
			<Button>Projects</Button></a></li>
		<li><a id="about" class='{segment === "about" ? "selected" : ""} p-2' href='about' on:click="{() => current = 'about'}">
			<Button>About</Button></a></li>
	</ul>
	<!-- Animated bar-->
	<div class="pt-4">
		<NavBar {width} {offset} />
	</div>
</nav>
