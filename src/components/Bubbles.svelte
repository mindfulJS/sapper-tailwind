<script>
  import IconWelcome from "../components/IconWelcome.svelte";
  import IconSkills from "../components/IconSkills.svelte";
  import IconProjects from "../components/IconProjects.svelte";
  import Tooltip from "../components/Tooltip.svelte";
  import { darkMode } from "../stores.js";
  import { get } from "svelte/store";

  export let segment;

  function toggleDarkMode() {
    darkMode.set(!$darkMode);
  }
  /*
                    let range = 20;
                    let width = window.innerWidth;
                    let height = window.innerHeight;

                    let originX = width / 2;
                    let originY = height / 2;
                    let totalX = width / 2;
                    let totalY = height / 2;
                    let mouseX;
                    let mouseY;
                    let positionX;
                    let positionY;
                    let x;
                    let y;

                    function GetMousePosition(event) {
                    mouseX = event.clientX;
                    mouseY = event.clientY;
                    positionX = mouseX - originX;
                    positionY = mouseY - originY;
                    console.log(mouseX);
                    x = Math.min(positionX / totalX, 1) * range;
                    y = -Math.min(positionY / totalY, 1) * range;
                    }

                    on:mousemove="{GetMousePosition}"
                    style="transform: rotateX({y}deg) rotateY({x}deg)"
                    */
</script>

<div id="bubble-main"><img src="bitmoji.gif" alt="Ben" class='bubble-main-default cursor-pointer {segment === undefined ? "" : "bubble-main-translate"}' on:click="{toggleDarkMode}" /></div>


<!--
<div id="bubbles-dynamic-position" class='{segment === undefined ? "position1 mt-20" : "position2"}'>
  <div id="bubbles" class="relative mx-auto p-6 w-full h-full">
    <img src="bitmoji.gif" alt="Ben" class="mx-auto rounded-full border-4 border-transparent w-48 h-48" style="filter: drop-shadow(0 0 0.75rem white);" />
    <div class="bubble-background bubble1 frosted-glass">
      <Tooltip tooltipText="My projects">
        <div class="bubble-circle">
          <div class="mt-3"><IconProjects /></div>
        </div>
      </Tooltip>
    </div>
    <div class="bubble-background bubble2 frosted-glass">
      <Tooltip tooltipText="My skills">
        <div class="bubble-circle">
          <div class="mt-2"><IconSkills /></div>
        </div>
      </Tooltip>
    </div>
    <div class="bubble-background bubble3 frosted-glass">
      <Tooltip tooltipText="A warm (coffee) welcome!">
        <div class="bubble-circle">
          <div class="mt-2"><IconWelcome /></div>
        </div>
      </Tooltip>
    </div>
  </div>
</div>
-->

<style>
  .bubble-main-default {
    position: absolute;
    top: 8rem;
    left: calc(50% - 6rem);
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    transform-origin: "50% 50%";
    transition: 0.4s ease-in-out;
    filter: drop-shadow(0 0 0.75rem white);
  }

  .bubble-main-translate {
    transform: translate(calc(50vw - 3rem), -11rem) scale(0.25);
  }

  .bubble-projects-translate {
    animation-play-state: paused;
    transform: translate(calc(50vw - 3rem), -5rem);
  }

  .bubble-background {
    position: absolute;
    top: 12rem;
    left: calc(50% - 2rem);
    width: 4rem;
    height: 4rem;
    display: inline-block;
    border-radius: 50%;
    transition: 0.25s ease-in-out;
    transform-origin: "50% 50%";
    animation-fill-mode: forwards;
  }

  .bubble-background:hover {
    background-color: rgba(255, 255, 255, 0.05);
    filter: drop-shadow(0 0 0.75rem white);
    animation-play-state: paused;
  }

  .frosted-glass {
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
  }

  .bubble-circle {
    /* background-color: rgba(255, 255, 255, 0.5); */
    width: 60px;
    height: 60px;
    display: inline-block;
    border: transparent solid 3px;
    border-radius: 50%;
    transition: 0.25s ease-in-out;
    transform-origin: "50% 50%";
    transition-delay: 1s;
  }
  .bubble-circle:hover {
    background-color: rgba(255, 255, 255, 0.35);
    /*border: white solid 3px;*/
  }

  .bubble1 {
    animation: orbit1 30s linear infinite;
    transition-delay: 1s;
  }

  .bubble2 {
    animation: orbit2 30s linear infinite;
  }

  .bubble3 {
    animation: orbit3 30s linear infinite;
  }

  @keyframes orbit1 {
    from {
      transform: rotate(60deg) translateX(calc(-8rem - 12px)) rotate(-60deg);
    }
    to {
      transform: rotate(420deg) translateX(calc(-8rem - 12px)) rotate(-420deg);
    }
  }

  @keyframes orbit2 {
    from {
      transform: rotate(0deg) translateX(calc(8rem + 12px)) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(calc(8rem + 12px)) rotate(-360deg);
    }
  }

  @keyframes orbit3 {
    from {
      transform: rotate(-60deg) translateX(calc(-8rem - 12px)) rotate(60deg);
    }
    to {
      transform: rotate(300deg) translateX(calc(-8rem - 12px)) rotate(-300deg);
    }
  }
</style>