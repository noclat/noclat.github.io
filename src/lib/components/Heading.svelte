<script>
  import cx from 'clsx';
  export let title = '';
</script>

<h1
  class={cx(
    'flex flex-col gap-px text-9xl/none font-black uppercase text-gray-950',
    $$props.class
  )}
>
  {#each title.split(/[\s\n\r]+/) as line, i (i)}
  <span class="flex flex-col justify-end h-[var(--unit)] overflow-hidden bg-gray-950">
    <span class="inline-flex items-baseline relative top-[.23em]">
      {#each line.split('') as char, j (j)}
        <span
          style={`--delay:${300+(i*100+j*50)}ms`}
          class="animate-type-in after-[var(--delay)] transform-gpu text-gray-100"
          class:-mx-2={i === 1 && j === 2}
        >
          {char}
        </span>
      {/each}
    </span>
  </span>
  {/each}
</h1>