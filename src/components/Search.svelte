<script>
  import { searchTerm } from "../routes/store";
  export let placeholder = "Pesquisar emoji...";

  import { X } from "phosphor-svelte";

  const clearSearch = () => {
    searchTerm.set("");
  };
</script>

<div class="p-4">
  <div class="relative w-full">
    <input
      type="text"
      {placeholder}
      autocomplete="off"
      class="w-full rounded-md border text-neutral-400 border-input bg-input p-3 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
      bind:value={$searchTerm}
    />
    {#if $searchTerm.length > 0}
      <div class="absolute inset-y-0 right-0 flex items-center pr-3">
        <button type="button" class="focus:outline-none" on:click={clearSearch}>
          <X size={18} />
        </button>
      </div>
    {/if}
  </div>
</div>
