<script>
  import { onMount } from "svelte";

  let loader;

  onMount(() => {
    loader.style.display = 'none';
  });
</script>

<div class="h-screen w-screen bg-gray-200 fixed top-0 left-0 z-[9999] flex items-center justify-center" bind:this={loader}>
  <div class="loader"></div>
</div>

<style>
  /* Original: https://css-loaders.com/spinner/ */
  .loader {
    width: 64px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 4px solid #0000;
    border-right-color: #0ea5e990;
    position: relative;
    animation: l24 1s infinite linear;
  }
  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: inherit;
    animation: inherit;
    animation-duration: 2s;
  }
  .loader:after {
    animation-duration: 4s;
  }
  @keyframes l24 {
    100% {transform: rotate(1turn)}
  }
</style>
