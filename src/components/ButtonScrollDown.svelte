<script>
  import { fade } from "svelte-transitions";
</script>

<a href="#underground" alt="Go down" transition:fade>
	<button class="bg-transparent text-white font-bold pt-2 pb-6 px-4 rounded-full">
		<div class="arrow text-white">
			<svg width="44" height="44" viewBox="0 0 24 24" style="fill:white">
				<path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" stroke="white" stroke-width="2"></path>
			</svg>
		</div>
	</button>
</a>



<style>
  .arrow {
    position: relative;
    animation: animate 1.5s infinite;
    animation-delay: 1s;
    transition: 0.5s ease;
  }

  @keyframes animate {
    from {
      opacity: 0;
      top: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      top: 20px;
    }
  }
</style>