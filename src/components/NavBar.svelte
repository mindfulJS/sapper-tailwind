<script>
  export let width;
  export let offset;
</script>

<style>
  .bar {
    background-color: white;
    height: 2px;
    transition: 0.2s;
  }

  .bar-offset {
    transform: translate(var(--offset), 0px);
  }
</style>

<!-- Animated bar -->
<div class="bar bar-offset" style="width: {width}px; --offset: {offset}px"></div>
