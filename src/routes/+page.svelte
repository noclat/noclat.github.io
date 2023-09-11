<script>
	import Divider from "$lib/components/Divider.svelte";
	import About from "$lib/layouts/About.svelte";
	import Hero from "$lib/layouts/Hero.svelte";
	import Services from "$lib/layouts/Services.svelte";
	import Stack from "$lib/layouts/Stack.svelte";
</script>

<main class="max-w-sm lg:max-w-[1440px] mx-auto pt-px pl-px space-y-px">
	<Divider />
	<Hero />
	<Divider />
	<Services />
	<Stack />
	<Divider />
	<About />
	<Divider />
</main>

<style lang="postcss">
	:global(body) {
		background-size: 100vw calc(var(--unit) + 1px);
		background-image: linear-gradient(to bottom, rgba(226,232,235,.02) 1px, transparent 1px);
		background-position: top center;
	}

  main {
		border-right: 1px solid transparent;
		background-size: 100% calc(var(--unit) + 1px);
		background-image:
			linear-gradient(to right, rgba(226,232,235,.03) 1px, transparent 1px), 
			linear-gradient(to bottom, rgba(226,232,235,.03) 1px, transparent 1px),
			radial-gradient(at top left, rgba(226,232,235,.2) 1px, rgba(226,232,235,0) 1px);
		background-position: top left;
	}
	
	@media screen(lg) {
		main {
			background-size: 33.33% calc(var(--unit) + 1px);
		}
	}
</style>