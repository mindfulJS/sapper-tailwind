<div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>

<style>
  .bg {
    animation: slide 3s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, #921212 50%, #b79292 50%);
    bottom: 0;
    left: -50%;
    opacity: 0.1;
    position: absolute;
    right: -50%;
    top: 0;
  }

  .bg2 {
    animation-direction: alternate-reverse;
    animation-duration: 4s;
  }

  .bg3 {
    animation-duration: 5s;
  }

  @keyframes slide {
    0% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(25%);
    }
  }
</style>