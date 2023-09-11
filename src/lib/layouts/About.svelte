<script lang="ts">
  import { Globe, Quote } from 'lucide-svelte';

  import Section from '$lib/components/Section.svelte';

  const social = [
    {
      label: 'Resume on LindedIn',
      href: 'http://linkedin.com/in/noclat',
    },
    {
      label: 'Code on GitHub',
      href: 'http://github.com/noclat',
    },
    {
      label: 'Articles on DEV',
      href: 'https://dev.to/noclat',
    },
    {
      label: 'hi@noclat.com',
      href: 'mailto:hi@noclat.com',
    },
  ];
</script>

<Section class="text-xl/snug lg:text-2xl/snug xl:text-3xl/snug">
  <h2 class="sr-only">About</h2>
  <div class="relative overflow-hidden row-span-4 lg:row-span-2 lg:col-span-2 p-6 lg:px-8 xl:p-12 flex items-end justify-center bg-black">
    <figure class="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/3 opacity-[0.02] w-[200px] lg:w-[300px] xl:w-[400px] aspect-square pointer-events-none select-none">
      <Quote
        size="100%"
        strokeWidth={4}
        absoluteStrokeWidth={true}
        class="rotate-180"
      />
    </figure>
    <p class="relative z-1 text-white/70">
      Started to code at 13, passionate about design, cumulated 8+ years of experience in agencies, services, SaaS, e-commerce, and freelance.
      <br />Co-founder of <a href="https://placekit.io" target="_blank" class="text-white">PlaceKit</a>.
    </p>
  </div>
  <div class="relative overflow-hidden row-span-3 lg:row-span-2 p-6 lg:px-8 xl:p-12 flex flex-col items-center lg:items-end justify-center lg:justify-end gap-2 lg:gap-0 bg-black">
    <figure class="absolute top-0 right-0 translate-x-1/4 -translate-y-1/3 opacity-[0.02] w-[200px] lg:w-[300px] xl:w-[400px] aspect-square pointer-events-none select-none">
      <Globe
        size="100%"
        strokeWidth={4}
        absoluteStrokeWidth={true}
        class="rotate-[15deg]"
      />
    </figure>
    {#each social as link}
      <a
        href={link.href}
        target="_blank"
        class="text-white/70 hover:text-white transition"
      >
        {link.label}
      </a>
    {/each}
  </div>
</Section>

<style lang="postcss">
  a {
    @apply underline underline-offset-4 decoration-2 decoration-white/20 hover:decoration-white transition;
  }
</style>