<script>
  import Vivus from 'vivus';
  import { onMount } from 'svelte';

  import Divider from "$lib/components/Divider.svelte";
  import Section from "$lib/components/Section.svelte";

  const services = [
    {
      title: 'Interfaces',
      examples: [
        'Web apps',
        'Web sites',
        'Component libraries',
      ],
    },
    {
      title: 'Systems',
      examples: [
        'APIs',
        'Automations',
        'CLIs',
      ],
    },
    {
      title: 'Standards',
      examples: [
        'CI/CD',
        'Git',
        'Accessibility',
      ],
    },
  ];

  let svgs = [];
  onMount(() => {
    for (let svg of svgs) {
      // const vivus = new Vivus(svg.id, { duration: 500 });
      // vivus.play();
    }
  });
</script>

<Section>
  <div class="row-span-6 lg:row-span-3 col-span-full flex lg:grid lg:grid-cols-3 gap-px overflow-x-auto scrollbar-none max-lg:bg-black snap-x scroll-smooth snap-mandatory">
    {#each services as service, i}
      <article class="shrink-0 w-full flex flex-col items-center justify-center lg:bg-black snap-center snap-always">
        <header class="text-left">
          <h2 class="text-lg/none font-extrabold uppercase text-white">
            {service.title}
          </h2>
          <ul class="text-white/50">
            {#each service.examples as example}
              <li>{example}</li>
            {/each}
          </ul>
        </header>
      </article>
    {/each}
  </div>
</Section>