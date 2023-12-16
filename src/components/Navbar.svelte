<script>
  import { Smiley } from "phosphor-svelte";
  import { SoccerBall } from "phosphor-svelte";
  import { Clock } from "phosphor-svelte";
  import { Dog } from "phosphor-svelte";
  import { Coffee } from "phosphor-svelte";
  import { Car } from "phosphor-svelte";
  import { Lightbulb } from "phosphor-svelte";
  import { HashStraight } from "phosphor-svelte";
  import { Flag } from "phosphor-svelte";
  import { User } from "phosphor-svelte";

  import { page } from "$app/stores";
</script>

<nav>
  <ul
    class="flex gap-8 py-3 px-4 border-b border-b-neutral-600 text-3xl max-sm:text-sm max-sm:gap-1 max-sm:p-1"
  >
    <li
      data-currentpage={$page.url.pathname === "/"}
      class="data-[currentpage=true]:bg-slate-700 p-1 rounded-2xl hover:bg-slate-700 transition"
    >
      <a href="/"><Clock /></a>
    </li>
    <li
      data-currentpage={$page.params.slug === "smileys&emotion"}
      class="data-[currentpage=true]:bg-slate-700 p-1 rounded-2xl hover:bg-slate-700 transition"
    >
      <a href="/smileys&emotion"><Smiley /></a>
    </li>
    <li
      data-currentpage={$page.params.slug === "people&body"}
      class="data-[currentpage=true]:bg-slate-700 p-1 rounded-2xl hover:bg-slate-700 transition"
    >
      <a href="/people&body"><User /></a>
    </li>
    <li
      data-currentpage={$page.params.slug === "animals&nature"}
      class="data-[currentpage=true]:bg-slate-700 p-1 rounded-2xl hover:bg-slate-700 transition"
    >
      <a href="/animals&nature"><Dog /></a>
    </li>
    <li
      data-currentpage={$page.params.slug === "activities"}
      class="data-[currentpage=true]:bg-slate-700 p-1 rounded-2xl hover:bg-slate-700 transition"
    >
      <a href="/activities"><SoccerBall /></a>
    </li>
    <li
      data-currentpage={$page.params.slug === "food&drink"}
      class="data-[currentpage=true]:bg-slate-700 p-1 rounded-2xl hover:bg-slate-700 transition"
    >
      <a href="/food&drink"><Coffee /></a>
    </li>
    <li
      data-currentpage={$page.params.slug === "travel&places"}
      class="data-[currentpage=true]:bg-slate-700 p-1 rounded-2xl hover:bg-slate-700 transition"
    >
      <a href="/travel&places"><Car /></a>
    </li>
    <li
      data-currentpage={$page.params.slug === "objects"}
      class="data-[currentpage=true]:bg-slate-700 p-1 rounded-2xl hover:bg-slate-700 transition"
    >
      <a href="/objects"><Lightbulb /></a>
    </li>
    <li
      data-currentpage={$page.params.slug === "symbols"}
      class="data-[currentpage=true]:bg-slate-700 p-1 rounded-2xl hover:bg-slate-700 transition"
    >
      <a href="/symbols"><HashStraight /></a>
    </li>
    <li
      data-currentpage={$page.params.slug === "flags"}
      class="data-[currentpage=true]:bg-slate-700 p-1 rounded-2xl hover:bg-slate-700 transition"
    >
      <a href="/flags"><Flag /></a>
    </li>
  </ul>
</nav>
