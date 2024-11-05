<script>
  import { ChevronDown } from "lucide-svelte";

  export let caption;
  export let extendClasslist = '';
</script>

<div class="dropdown">
  <button class="hover:underline cursor-default">
    {caption}
    <ChevronDown size={16} class="inline-block -mt-0.5"/>
  </button>

  <div class="dropdown-content {extendClasslist}">
    <slot />
  </div>

</div>

<style lang="postcss">
  .dropdown {
    @apply relative inline-block;
  }

  .dropdown-content {
    @apply hidden absolute bg-white border-t-2 border-sky-500 min-w-48 shadow-md z-[5] animate-slide p-1;
  }

  .dropdown:hover .dropdown-content {
    @apply block;
  }
</style>
