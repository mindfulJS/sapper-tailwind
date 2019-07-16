<script>
  import Modal from "./Modal.svelte";
  import Button from "./Button.svelte";
  import { fade } from "svelte-transitions";

  let showModal = false;
  export let project;

  function Close() {
    //project.showDescription = false;
    showModal = false;
  }
</script>

<div on:click="{() => showModal = true}">
  <Button buttonColor="white">Open</Button>
</div>

{#if showModal}
<div transition:fade>
	<Modal on:close="{Close}">
    <iframe src="https://codesandbox.io/embed/{project.codesandboxName}?fontsize=14" title="Instruments Checks" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
	</Modal>
</div>
{/if}
