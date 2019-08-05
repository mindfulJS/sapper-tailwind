<script>
  export let width;
  export let offset;
</script>

<style>
  .bar {
    background-color: rgba(255, 255, 255, 0.75);
    height: 4px;
    transition: 0.2s;
  }

  .bar-offset {
    transform: translate(var(--offset), 0px);
  }
</style>

<!-- Animated bar -->
<div class="bar bar-offset" style="width: {width}px; --offset: {offset}px"></div>
