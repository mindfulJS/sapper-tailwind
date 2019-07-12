<script>
import SplashScreenMatrix from "./SplashScreenMatrix.svelte";
let text = "Welcome";
</script>

<div class="loading">
  {#each text as letter, i}
    <span>{text[i]}</span>
  {/each}
</div>

<SplashScreenMatrix />

<style>
  .loading {
    margin: auto;
    width: 100%;
    height: 100%;
    top: 0px;
    bottom: 0px;
    font: BOLD 32px Monospace;
    color: #00ae00;
    -webkit-perspective: 100px;
    perspective: 100px;
    background-color: #1c2022;
    position: fixed;
    /* border: 3px solid #00ff00; */
    /* border-radius: 3px; */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .loading > span {
    -webkit-animation: flip 0.6s;
    animation: flip 0.6s;
    display: inline-block;
    -webkit-transform-origin: 50% 50% -10px;
    transform-origin: 50% 50% -10px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
  .loading > span:nth-child(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
  .loading > span:nth-child(2) {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }
  .loading > span:nth-child(3) {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .loading > span:nth-child(4) {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .loading > span:nth-child(5) {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  .loading > span:nth-child(6) {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }
  .loading > span:nth-child(7) {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }

  @-webkit-keyframes flip {
    to {
      -webkit-transform: rotateX(1turn);
      transform: rotateX(1turn);
    }
  }

  @keyframes flip {
    to {
      color: #26e600;
      -webkit-transform: rotateX(1turn);
      transform: rotateX(1turn);
    }
  }
</style>