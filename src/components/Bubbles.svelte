<script>
  import IconWelcome from "../components/IconWelcome.svelte";
  import IconSkills from "../components/IconSkills.svelte";
  import IconProjects from "../components/IconProjects.svelte";
  import Tooltip from "../components/Tooltip.svelte";
</script>

<div id="bubbles" class="relative mx-auto p-6 w-full h-full">
	<img src="bitmoji.gif" alt="Ben" class="mx-auto rounded-full border-4 border-gray-300 w-48 h-48" />
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

<style>
  .bubble-background {
    position: absolute;
    top: calc(6rem - 6px);
    left: calc(50% - 30px);
    width: 60px;
    height: 60px;
    display: inline-block;
    border-radius: 50%;
    transition: 0.25s ease-in-out;
    transform-origin: "50% 50%";
    animation-fill-mode: forwards;
    transition-delay: 0.05s;
  }

  .bubble-background:hover {
    /*background-color: rgba(255, 255, 255, 0.25);
                                                          border: white 1px solid;*/
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
    transition-delay: 0.05s;
  }
  .bubble-circle:hover {
    background-color: rgba(255, 255, 255, 0.35);
    border: white solid 3px;
  }

  .bubble1 {
    animation: orbit1 30s linear infinite;
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