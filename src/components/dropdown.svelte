<script>
  import { ChevronDown } from "lucide-svelte";

  export let caption;
  export let extendClasslist = '';
</script>

<div class="dropdown">
  <button class="hover:underline">
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
    @apply hidden absolute bg-gray-200 border border-gray-300 rounded min-w-48 shadow z-[5] animate-slide;
  }

  .dropdown:hover .dropdown-content {
    @apply block;
  }
</style>
