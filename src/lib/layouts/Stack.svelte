<script lang="ts">
  import cx from 'clsx';
  import Section from '$lib/components/Section.svelte';

  let current: string | null = null;

  type ILogo = {
    title: string;
    html: string;
    classes?: string;
  };

  const logos: ILogo[] = [
    {
      title: 'SvelteKit',
      classes: 'fill-white',
      html: `<path d="M19.26 4.65a5.7 5.7 0 0 1 .97 4.3c-.13.71-.4 1.4-.8 2 .59 1.1.78 2.38.56 3.61a5.34 5.34 0 0 1-2.42 3.58l-4.65 2.97a6.1 6.1 0 0 1-8.18-1.76 5.7 5.7 0 0 1-.97-4.3c.13-.72.4-1.4.8-2A5.62 5.62 0 0 1 4 9.44a5.34 5.34 0 0 1 2.42-3.58l4.65-2.97a6.1 6.1 0 0 1 8.18 1.76ZM10.63 19.6c.33-.09.65-.23.94-.41l4.66-2.97a3.22 3.22 0 0 0 1.45-2.15 3.5 3.5 0 0 0-.58-2.6 3.7 3.7 0 0 0-3.97-1.46 3.5 3.5 0 0 0-.95.41l-1.78 1.13a.9.9 0 0 1-.28.13c-.45.12-.93-.06-1.2-.44a1.05 1.05 0 0 1-.17-.79c.04-.26.2-.5.43-.64l4.66-2.97c.1-.06.19-.1.29-.13.45-.11.93.06 1.2.45.14.2.2.44.18.69l-.02.17.18.05a6 6 0 0 1 1.82.92l.24.17.09-.27a3.43 3.43 0 0 0-.47-3.03 3.7 3.7 0 0 0-3.98-1.46 3.4 3.4 0 0 0-.94.41L7.77 7.78a3.21 3.21 0 0 0-1.45 2.15c-.17.9.04 1.84.58 2.6a3.7 3.7 0 0 0 3.97 1.46c.34-.09.66-.23.95-.41l1.78-1.13a.9.9 0 0 1 .28-.13c.45-.12.93.06 1.2.44.16.23.22.51.17.79-.04.26-.2.5-.43.64l-4.66 2.97c-.09.06-.19.1-.29.13-.45.12-.93-.06-1.2-.45-.14-.2-.2-.44-.18-.69l.01-.17-.17-.05a6.21 6.21 0 0 1-1.82-.91l-.24-.18-.09.27a3.43 3.43 0 0 0 .47 3.02 3.7 3.7 0 0 0 3.98 1.47Z" />`,
    },
    {
      title: 'React',
      html: `
        <g strokeWidth=".89px" class="fill-none stroke-white">
          <path d="M12 8.19c2.5 0 4.83.36 6.59.96 2.11.73 3.41 1.83 3.41 2.83 0 1.04-1.38 2.22-3.65 2.97a21 21 0 0 1-6.35.86c-2.44 0-4.75-.28-6.48-.87C3.32 14.2 2 13 2 11.98 2 11 3.24 9.9 5.33 9.18c1.76-.62 4.14-.99 6.67-.99Z" />
          <path d="M8.7 10.1c1.25-2.17 2.72-4 4.12-5.23 1.69-1.46 3.3-2.04 4.16-1.54.9.52 1.23 2.3.75 4.64a21.02 21.02 0 0 1-2.43 5.94 20.96 20.96 0 0 1-4 5.18C9.57 20.6 7.88 21.16 7 20.66c-.86-.5-1.19-2.12-.78-4.29A21.1 21.1 0 0 1 8.7 10.1Z" />
          <path d="M8.7 13.91a20.95 20.95 0 0 1-2.46-6.18c-.43-2.2-.13-3.87.73-4.37.9-.52 2.6.08 4.4 1.67 1.35 1.2 2.74 3 3.93 5.06a20.95 20.95 0 0 1 2.5 6.05c.44 2.27.08 4.01-.8 4.52-.86.5-2.43-.02-4.1-1.46a21.13 21.13 0 0 1-4.2-5.29Z" />
        </g>
        <circle cx="12" cy="11.98" r="1.87" class="fill-white" />
      `,
    },
    {
      title: 'Next.js',
      classes: 'fill-white',
      html: `<path fill-rule="nonzero" d="m11.28 1-.33.04a11.03 11.03 0 0 0 0 21.93 11.12 11.12 0 0 0 6.07-1.16c.19-.1.22-.12.2-.14l-1.8-2.4-1.75-2.38-2.2-3.26a316.9 316.9 0 0 0-2.23-3.26l-.02 3.22c0 3.1 0 3.22-.05 3.3-.05.1-.1.14-.19.19-.06.03-.12.04-.45.04h-.37l-.1-.06a.4.4 0 0 1-.14-.16l-.05-.1v-4.3l.01-4.32.07-.08a.6.6 0 0 1 .16-.14c.09-.04.12-.04.5-.04.43 0 .5.01.62.14l2.65 4 4.34 6.57 1.74 2.64.1-.06a10.95 10.95 0 0 0 4.85-10.8 11.05 11.05 0 0 0-9.82-9.38 28.2 28.2 0 0 0-1.81-.02Zm4.5 6.66c.1.05.19.15.22.25.02.06.02 1.25.02 3.95v3.86l-.7-1.04-.68-1.05v-2.8c0-1.82.01-2.84.03-2.9.03-.11.1-.2.21-.26.09-.05.12-.05.46-.05.32 0 .37 0 .44.04Z" />`,
    },
    {
      title: 'Node.js',
      classes: 'fill-white',
      html: `
        <path d="M12 22.5a1.5 1.5 0 0 1-.8-.22l-2.57-1.52c-.39-.21-.2-.29-.07-.33.51-.18.61-.22 1.16-.53.06-.03.13-.02.19.01l1.97 1.17c.07.04.18.04.24 0l7.7-4.44a.24.24 0 0 0 .11-.2v-8.9a.24.24 0 0 0-.11-.2l-7.7-4.45a.24.24 0 0 0-.23 0l-7.7 4.44a.24.24 0 0 0-.12.21v8.88c0 .09.05.17.12.2l2.11 1.23c1.15.57 1.84-.1 1.84-.79V8.31c0-.12.1-.22.23-.22h.97c.13 0 .22.1.22.22v8.77c0 1.53-.83 2.4-2.27 2.4-.45 0-.8 0-1.78-.48L3.5 17.84c-.5-.3-.8-.83-.8-1.4v-8.9c0-.58.3-1.11.8-1.4l7.7-4.44a1.68 1.68 0 0 1 1.62 0l7.7 4.44c.5.29.8.83.8 1.4v8.88c0 .58-.3 1.12-.8 1.4l-7.7 4.45a1.6 1.6 0 0 1-.8.22" />
        <path d="M14.38 16.38c-3.37 0-4.07-1.54-4.07-2.84 0-.12.1-.22.22-.22h1c.1 0 .2.08.21.19.15 1 .6 1.52 2.64 1.52 1.62 0 2.3-.37 2.3-1.23 0-.5-.19-.86-2.7-1.1-2.11-.21-3.42-.68-3.42-2.36 0-1.56 1.31-2.48 3.5-2.48 2.47 0 3.7.85 3.85 2.7a.22.22 0 0 1-.23.23h-1c-.1 0-.2-.07-.21-.17-.24-1.06-.82-1.4-2.4-1.4-1.78 0-1.98.61-1.98 1.07 0 .56.24.73 2.63 1.04 2.36.32 3.49.76 3.49 2.42 0 1.68-1.4 2.64-3.84 2.64" />
      `,
    },
    {
      title: 'TypeScript',
      classes: 'fill-white',
      html: `<path d="M22.5 3.55v16.9c0 1.13-.92 2.05-2.05 2.05H3.55a2.05 2.05 0 0 1-2.05-2.05V3.55c0-1.13.92-2.05 2.05-2.05h16.9c1.13 0 2.05.92 2.05 2.05Zm-11.45 9.6h2.63v-1.68H6.34v1.68h2.62v7.5h2.09v-7.5Zm3.45 5.06v2.05c.33.17.73.3 1.18.39a7.76 7.76 0 0 0 2.85-.01c.44-.1.83-.25 1.16-.47a2.37 2.37 0 0 0 1.09-2.14c0-.37-.06-.7-.17-.98a2.27 2.27 0 0 0-.48-.75 3.53 3.53 0 0 0-.75-.58c-.3-.18-.63-.34-1-.5a7.02 7.02 0 0 1-1.27-.64 1.4 1.4 0 0 1-.34-.34.73.73 0 0 1-.02-.8.93.93 0 0 1 .31-.3c.13-.07.3-.14.49-.18a4.01 4.01 0 0 1 2.82.57v-1.92c-.3-.12-.65-.2-1.02-.26s-.8-.09-1.28-.09-.95.05-1.38.16c-.44.1-.82.27-1.15.49a2.4 2.4 0 0 0-1.08 2.08c0 .62.18 1.14.53 1.57.35.43.89.8 1.6 1.1.3.11.55.23.8.34.24.1.45.23.63.34.18.12.32.25.42.4a.8.8 0 0 1 .06.85.86.86 0 0 1-.3.3 2 2 0 0 1-.48.19 3.9 3.9 0 0 1-3.22-.87Z" />`,
    },
    {
      title: 'TailwindCSS',
      classes: 'fill-white',
      html: `<path d="M12 4.8c-3.2 0-5.2 1.6-6 4.8C7.2 8 8.6 7.4 10.2 7.8c.91.23 1.57.9 2.29 1.62C13.66 10.62 15.03 12 18 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.57-.9-2.29-1.62C16.34 6.18 14.97 4.8 12 4.8ZM6 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.56.9 2.29 1.62 1.17 1.2 2.54 2.58 5.51 2.58 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.57-.9-2.29-1.62C10.34 13.38 8.97 12 6 12Z" />`,
    },
  ];
</script>

<Section>
  <h2 class="sr-only">Preferred stack</h2>
  <div class="relative col-span-full max-lg:row-span-2 flex items-center bg-black">
    <div class="w-full flex items-center justify-evenly lg:justify-center lg:gap-12 px-2 h-8 lg:h-12">
      {#each logos as logo, i}
        {@const id = `logo-${i}`}
        <svg
          role="img"
          aria-labelledby={id}
          viewBox="0 0 24 24"
          on:mouseenter={() => current = logo.title}
          on:mouseleave={() => current = null}
          class={cx(
            'h-full w-auto',
            'opacity-50 hover:opacity-100 hover:-translate-y-1 hover:scale-105',
            'transition',
            logo.classes
          )}
        >
          <title id={id}>{logo.title}</title>
          {@html logo.html}
        </svg>
      {/each}
    </div>
    <p
      role="presentation"
      class={cx(
        'absolute bottom-4 inset-x-4 text-center',
        'text-xs/none lg:text-sm/none font-bold uppercase text-white',
        'transition-opacity',
        {
          'opacity-50': !current,
        }
      )}
    >
      {current || 'and more...'}
    </p>
  </div>
</Section>