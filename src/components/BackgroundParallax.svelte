<script>
  const layers = [0, 1, 3, 4, 5, 6, 8];
  export let y;
</script>

<div class="fade-in">
  <div class="parallax-container">

    {#each layers as layer}
      <img
        style="transform: translate(0,{-y * layer / (layers.length + 1)}px)"
        src="https://www.firewatchgame.com/images/parallax/parallax{layer}.png"
        alt="parallax layer {layer}"
      >
    {/each}
    
  </div>
  <div class="last-layer-container">
    <div class="last-layer"></div>
  </div>
</div>

<style>
	.fade-in {
	  background-color: rgb(253, 174, 51);
	  opacity: 0;
	  animation: fadeIn 0.4s forwards;
	  animation-delay: 0.2s;
	}

	.parallax-container {
	  position: fixed;
	  width: 2400px;
	  height: 712px;
	  left: 50%;
	  transform: translate(-50%, 0);
	}

	.parallax-container img {
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  will-change: transform;
	}

	.parallax-container img:last-child::after {
	  position: absolute;
	  width: 100%;
	  height: 100%;
	  background: rgb(45, 10, 13);
	}

	.last-layer-container {
	  position: relative;
	  width: 100%;
	  height: 900vh;
	  color: rgb(220, 113, 43);
	  text-align: center;
	  padding: 4em 0.5em 0.5em 0.5em;
	  box-sizing: border-box;
	}

	.last-layer {
	  position: absolute;
	  top: 700px;
	  left: 0;
	  width: 100%;
	  height: calc(100% - 700px);
	  background-color: rgb(32, 0, 1);
	  color: white;
	  padding: 20vh 0 0 0;
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