<script>
  import { onMount } from "svelte";

  let loader;

  onMount(() => {
    loader.style.display = 'none';
  });
</script>

<div class="h-screen w-screen bg-slate-300 fixed top-0 left-0 z-[9999] flex items-center justify-center" bind:this={loader}>
  <div class="loader"></div>
</div>

<style>
  /* Original: https://css-loaders.com/progress/ */
  .loader {
    width: 48px;
    aspect-ratio: 1;
    --_g: no-repeat radial-gradient(circle closest-side,#374151 90%,#0000);
    background: 
      var(--_g) 0%   50%,
      var(--_g) 50%  50%,
      var(--_g) 100% 50%;
    background-size: calc(100%/3) 50%;
    animation: l3 1s infinite linear;
  }
  @keyframes l3 {
      20%{background-position:0%   0%, 50%  50%,100%  50%}
      40%{background-position:0% 100%, 50%   0%,100%  50%}
      60%{background-position:0%  50%, 50% 100%,100%   0%}
      80%{background-position:0%  50%, 50%  50%,100% 100%}
  }
</style>
