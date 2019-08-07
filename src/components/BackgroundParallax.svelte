<script>
 import { darkMode } from "../stores.js";
 const layers = [0, 1, 3, 4, 5, 6, 8];
 export let y;
 export let segment;
</script>

<div class="fade-in">
  <div class="parallax-container">

    {#each layers as layer}
      <img
				class='{$darkMode ? "night" : "day" }'
				style="transform: translate(0,{-y * layer / (layers.length + 1)}px);"
        src="https://www.firewatchgame.com/images/parallax/parallax{layer}.png"
        alt="parallax layer {layer}"
      >
    {/each}
    
  </div>
	
<!--  <div class='last-layer-container'>-->
		<div class="last-layer {$darkMode ? "night" : "day" }"></div>
<!--	</div>-->
</div>

<style>
	.night {
	  transition: filter 2s ease-in-out;
	  filter: hue-rotate(200deg);
	}

	.day {
	  transition: filter 2s ease-in-out;
	  filter: hue-rotate(360deg);
	}

	.fade-in {
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
	  min-height: 750vh;
	  text-align: center;
	}

	.last-layer {
	  position: absolute;
	  top: 711px;
	  left: 0;
	  width: 100%;
	  /*height: calc(100% - 711px);*/
	  height: 800vh;
	  background-color: rgb(32, 0, 1);
	  /*padding: 20vh 0 0 0;*/
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