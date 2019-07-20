<script>
  import IconWelcome from "../components/IconWelcome.svelte";
  import IconSkills from "../components/IconSkills.svelte";
  import IconProjects from "../components/IconProjects.svelte";
  import Tooltip from "../components/Tooltip.svelte";
</script>


<div class="Bubble-default Bubble1">
  <Tooltip tooltipText="It's coffee time, welcome!">
    <div class="mt-4"><IconWelcome /></div>
  </Tooltip>
</div>
<div class="Bubble-default Bubble2">
  <Tooltip tooltipText="My skills">
    <div class="mt-5"><IconSkills /></div>
  </Tooltip>
</div>
<div class="Bubble-default Bubble3">
  <Tooltip tooltipText="My projects">
    <div class="mt-5"><IconProjects /></div>
  </Tooltip>
</div>

<style>
  .Bubble-default {
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: calc(9rem + 8px);
    left: calc(50% - 40px);
    width: 80px;
    height: 80px;
    display: inline-block;
    border: lightgrey solid 3px;
    border-radius: 50%;
    transition: 0.25s ease-in-out;
    transform-origin: "50% 50%";
    animation-fill-mode: forwards;
    transition-delay: 0.05s;
  }

  .Bubble-default:hover {
    background-color: rgba(255, 255, 255, 0.75);
    animation-play-state: paused;
  }

  .Bubble1 {
    animation: orbit1 30s linear infinite;
  }

  .Bubble2 {
    animation: orbit2 30s linear infinite;
  }

  .Bubble3 {
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