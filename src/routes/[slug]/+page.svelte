<script>
  import { page } from "$app/stores";
  import { copyToClipboard } from "../../utils/index";
  import { makeEmogi } from "../../utils/index";
  import { searchTerm } from "../store";
  const key = $page.url.pathname.replace("/", "");

  export let data;
  export let fil = [];

  const t = data.emogis.filter((e) => {
    return e.category.replace(/\s/g, "").toLowerCase() === key;
  });

  const search = () => {
    return data.emogis.filter((e) => {
      return e.name.toLowerCase().includes($searchTerm);
    });
  };

  $: searchTerm.subscribe((value) => {
    if (value.length === 0) {
      fil = t;
    } else {
      fil = search();
    }
  });

  const saveInMemory = (emogi) => {
    const isBrowser = typeof window !== "undefined";
    if (isBrowser) {
      let item = JSON.parse(localStorage.getItem("slotEmogis"));

      if (item) {
        item = item.filter((e) => {
          return JSON.stringify(e) != JSON.stringify(emogi);
        });

        if (item.length > 75) {
          item.shift();
        }

        localStorage.setItem("slotEmogis", JSON.stringify([...item, emogi]));
        return;
      }

      localStorage.setItem("slotEmogis", JSON.stringify([emogi]));
    }
  };
</script>

<div class="grid grid-cols-10 text-2xl gap-2 items-center pt-2">
  {#each fil as e}
    <button
      on:click={async () => {
        saveInMemory(e);
        await copyToClipboard(makeEmogi(e.code));
      }}
      class="text-center py-1 hover:bg-slate-700 rounded-full"
    >
      {makeEmogi(e.code)}
    </button>
  {/each}
</div>
