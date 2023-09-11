<script lang="ts">
	import Profile from '$lib/assets/profile.webp';
	import Card from '$lib/components/Card.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<Section>
	<Heading
		class="lg:col-span-2 row-span-3"
		title="Freelance JavaScript Developer."
	/>
  <Divider class="lg:hidden" />
	<aside class="row-span-5 lg:row-span-3 overflow-hidden flex items-center justify-center p-4 bg-black">
    <Card>
      <div class="flex flex-col items-center gap-6">
        <figure class="relative w-24 lg:w-32 aspect-[9/10] p-1 rounded-[50%] border-2 border-white/10 bg-black">
          <img
            src={Profile}
            alt=""
            width="auto"
            height="200"
            loading="lazy"
            class="w-full h-full rounded-[50%] object-cover saturate-0 contrast-125 brightness-125"
          />
          <span class="absolute z-1 -bottom-1 left-1/2 -translate-x-1/2 inline-flex items-center gap-px p-px whitespace-nowrap font-bold text-xs text-white bg-white/20 backdrop-blur-sm">
            <span class="py-0.5 px-1.5 bg-black/70">
              XP
            </span>
            <span class="py-0.5 px-1.5 bg-black/70">
              8+ years
            </span>
          </span>
        </figure>
        <header class="text-center lg:space-y-2">
          <h2 class="text-md/none lg:text-lg/none font-black uppercase text-white">Nicolas Torres</h2>
          <p class="text-xs/none font-bold uppercase text-white/50">full-stack</p>
        </header>
      </div>
      <footer
        role="presentation"
        class="absolute z-1 bottom-3 inset-x-3 flex items-center justify-between gap-2 text-xs/none text-white/20"
      >
        <span>🇫🇷 FR</span>
        <span>1/1</span>
      </footer>
    </Card>
	</aside>
</Section>
