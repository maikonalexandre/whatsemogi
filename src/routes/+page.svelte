<script>
  import { copyToClipboard } from "../utils/index";
  import { makeEmogi } from "../utils/index";
  import { searchTerm } from "./store";

  export let data;
  export let fil = [];

  const getInMemory = () => {
    const isBrowser = typeof window !== "undefined";
    if (isBrowser) {
      let item = JSON.parse(localStorage.getItem("slotEmogis"));

      console.log(item);

      return item ? item.reverse() : [];
    }
  };

  const o = getInMemory();

  const search = () => {
    return data.emogis.filter((e) => {
      return e.name.toLowerCase().includes($searchTerm);
    });
  };

  $: searchTerm.subscribe((value) => {
    if (value.length === 0) {
      if (o) {
        fil = o;
        return;
      }
      fil = [];
    } else {
      fil = search();
    }
  });
</script>

<div>
  <span class="px-2">Usados recentemente</span>
  <div class="grid grid-cols-10 text-2xl gap-2 items-center pt-2">
    {#each fil as e}
      <button
        on:click={async () => {
          await copyToClipboard(makeEmogi(e.code));
        }}
        class="text-center py-1 hover:bg-slate-700 rounded-full"
      >
        {makeEmogi(e.code)}
      </button>
    {/each}
  </div>
</div>
