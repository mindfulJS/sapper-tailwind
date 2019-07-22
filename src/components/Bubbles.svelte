<script>
  import IconWelcome from "../components/IconWelcome.svelte";
  import IconSkills from "../components/IconSkills.svelte";
  import IconProjects from "../components/IconProjects.svelte";
  import Tooltip from "../components/Tooltip.svelte";
</script>


<div class="bubble-default bubble1">
  <Tooltip tooltipText="It's coffee time, welcome!">
    <div class="bubble-circle">
      <div class="mt-4"><IconWelcome /></div>
    </div>
  </Tooltip>
</div>
<div class="bubble-default bubble2">
  <Tooltip tooltipText="My skills">
    <div class="bubble-circle">
      <div class="mt-5"><IconSkills /></div>
    </div>
  </Tooltip>
</div>
<div class="bubble-default bubble3">
  <Tooltip tooltipText="My projects">
    <div class="bubble-circle">
      <div class="mt-5"><IconProjects /></div>
    </div>
  </Tooltip>
</div>

<style>
  .bubble-default {
    position: absolute;
    top: calc(9rem + 8px);
    left: calc(50% - 40px);
    width: 80px;
    height: 80px;
    display: inline-block;
    border-radius: 50%;
    transition: 0.25s ease-in-out;
    transform-origin: "50% 50%";
    animation-fill-mode: forwards;
    transition-delay: 0.05s;
  }

  .bubble-default:hover {
    animation-play-state: paused;
  }

  .bubble-circle {
    /* background-color: rgba(255, 255, 255, 0.5); */
    width: 80px;
    height: 80px;
    display: inline-block;
    /*border: lightgrey solid 3px;*/
    border-radius: 50%;
    transition: 0.25s ease-in-out;
    transform-origin: "50% 50%";
    transition-delay: 0.05s;
  }
  .bubble-circle:hover {
    /*background-color: rgba(255, 255, 255, 0.75);*/
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
      transform: rotate(60deg) translateX(calc(-12rem - 12px)) rotate(-60deg);
    }
    to {
      transform: rotate(420deg) translateX(calc(-12rem - 12px)) rotate(-420deg);
    }
  }

  @keyframes orbit2 {
    from {
      transform: rotate(0deg) translateX(calc(12rem + 12px)) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(calc(12rem + 12px)) rotate(-360deg);
    }
  }

  @keyframes orbit3 {
    from {
      transform: rotate(-60deg) translateX(calc(-12rem - 12px)) rotate(60deg);
    }
    to {
      transform: rotate(300deg) translateX(calc(-12rem - 12px)) rotate(-300deg);
    }
  }
</style>