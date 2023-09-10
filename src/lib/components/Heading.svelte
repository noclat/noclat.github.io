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
              'animate-type-in after-[var(--delay)] transform-gpu text-white',
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