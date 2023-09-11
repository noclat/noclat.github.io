<script>
  import Divider from "$lib/components/Divider.svelte";
  import Section from "$lib/components/Section.svelte";

  const services = [
    {
      title: 'Interfaces',
      description: `Depp knowledge of design and front-end developement to craft web applications and web sites that are responsive, accessible, usable and pleasant.`,
    },
    {
      title: 'Systems',
      description: `Making tested automation scripts, CLIs and complete APIs for your business.`,
    },
    {
      title: 'Standards',
      description: `Relying on the most famous technologies and the best practices to provide high-quality maintainable code.`,
    },
  ];
</script>

<Section>
  <div class="row-span-6 lg:row-span-3 col-span-full flex lg:grid lg:grid-cols-3 gap-px overflow-x-auto scrollbar-none max-lg:bg-black snap-x scroll-smooth snap-mandatory">
    {#each services as service, i}
      <article class="shrink-0 w-full flex flex-col items-center justify-center lg:bg-black snap-center snap-always">
        <header class="space-y-2 text-left">
          <h2 class="text-lg/none font-extrabold uppercase text-white">
            {service.title}
          </h2>
          <p class="text-white/80">
            {service.description}
          </p>
        </header>
      </article>
    {/each}
  </div>
</Section>