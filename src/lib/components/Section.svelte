<script lang="ts">
  import cx from 'clsx';
</script>

<section
  class={cx(
    'grid lg:grid-cols-3 auto-rows-[var(--unit)] gap-px',
    $$props.class
  )}
>
  <slot />
</section>