<script>
  import { onMount } from "svelte";
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

<style>
	nav {
	  border-bottom: 1px solid rgba(255, 62, 0, 0.1);
	  font-weight: 300;
	  padding: 0 1em;
	}

	ul {
	  margin: 0;
	  padding: 0;
	}

	/* clearfix */
	ul::after {
	  content: "";
	  display: block;
	  clear: both;
	}

	li {
	  display: block;
	  float: left;
	}

	.selected {
	  position: relative;
	  display: inline-block;
	}
	/*
		.selected::after {
		  position: absolute;
		  content: "";
		  width: calc(100% - 1em);
		  height: 2px;
		  background-color: rgb(255, 62, 0);
		  display: block;
		  bottom: -1px;
		}
	*/
	a {
	  text-decoration: none;
	  padding: 1em 0.5em;
	  display: block;
	}
</style>

<nav>
	<ul>
		<li><a id="home" class='{segment === undefined ? "selected" : ""}' href='.' on:click="{() => current = 'home'}">
			<Button color="blue">Home</Button></a></li>
		<li><a id="projects" class='{segment === "projects" ? "selected" : ""}' href='projects' on:click="{() => current = 'projects'}">
			<Button color="purple">Projects</Button></a></li>
		<li><a id="about" class='{segment === "about" ? "selected" : ""}' href='about' on:click="{() => current = 'about'}">
			<Button color="green">About</Button></a></li>
	</ul>
	<!-- Animated bar-->
	<NavBar {width} {offset} />
</nav>
