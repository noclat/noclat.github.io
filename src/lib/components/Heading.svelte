<script>
  import cx from 'clsx';

  export let title = '';
</script>

<h1
  class={cx(
    'flex flex-col gap-px max-lg:items-center',
    'text-5xl/none lg:text-8xl/none xl:text-9xl/none max-lg:tracking-tighter',
    'font-black uppercase text-black',
    $$props.class
  )}
>
  {#each title.toLocaleUpperCase().split(/[\s\n\r]+/) as line, i (i)}
    <span class="flex flex-col justify-end h-[var(--unit)] overflow-hidden bg-black">
      <span class="inline-flex items-baseline relative top-[.2em] xl:top-[.23em]">
        {#each line.split('') as char, j (j)}
          <span
            style={`--delay:${300+(i*100+j*50)}ms`}
            class={cx(
              'char text-white',
              {
                '-ml-1 lg:-ml-3': char === 'V' && line[j-1] === 'A', // fixing kerning
                '-mr-1 lg:-mr-3': char === 'V' && line[j+1] === 'A', // fixing kerning
              }
            )}
          >
            {char}
          </span>
        {/each}
      </span>
    </span>
  {/each}
</h1>

<style lang="css">
  .char {
    @apply transform-gpu;
    animation: type-in .5s cubic-bezier(0.68,-0.55,0.27,1.55) both;
    animation-delay: var(--delay);
  }

  @keyframes type-in {
    0% {
      opacity: 0;
      color: inherit;
      text-shadow: 0 0 1px theme(colors.white);
      transform: scale(1) translateY(100%) rotate(15deg);
    }
    70% {
      color: inherit;
    }
    90% {
      text-shadow: 0 0 1px theme(colors.white);
    }
    100% {
      opacity: 100;
      color: theme(colors.white);
      text-shadow: none;
      transform: none;
      text-shadow: 2px 2px 0 theme(colors.black), 4px 4px 0 rgba(226,232,235,0.2);
    }
  }
</style>