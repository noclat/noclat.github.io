<script>
  import cx from 'clsx';

  let container;
  let x = 0;
  let y = 0;
  let transition = true;
  let timeout;
  let touch = false;

  function tilt(e) {
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width/2;
    const centerY = rect.top + rect.height/2;
    const posX = Math.max(rect.left, Math.min(rect.right, e.clientX));
    const posY = Math.max(rect.top, Math.min(rect.bottom, e.clientY));
    const invert = touch ? -1 : 1;
    x = (posX - centerX) / (rect.width/2) * invert;
    y = (posY - centerY) / (rect.height/2) * invert;
  }

  function tap() {
    touch = true;
    timeout = setTimeout(() => touch = false, 600);
  }

  function enter() {
    if (touch) return;
    clearTimeout(timeout);
    timeout = setTimeout(() => transition = false, 300);
  }

  function leave() {
    if (touch) return;
    clearTimeout(timeout);
    transition = true;
    timeout = setTimeout(() => {
      x = 0;
      y = 0;
    }, 50);
  }
</script>

<div
  role="region"
  bind:this={container}
  on:touchstart={tap}
  on:mouseenter={enter}
  on:mousemove={tilt}
  on:mouseleave={leave}
  style={`--rx:${y*10}deg;--ry:${-x*10}deg;--px:${50+x*5}%;--py:${50+y*50}%`}
  class={cx(
    'relative overflow-hidden',
    'w-48 lg:w-60 aspect-[3/4] lg:aspect-[5/7] flex p-0.5',
    'bg-gradient-to-br from-white/[0.05] via-white/20 to-white/[0.05]',
    'shadow-xl shadow-black/70',
    '[transform:perspective(20cm)_rotateX(var(--rx))_rotateY(var(--ry))]',
    {
      'transition-transform': transition,
      'ease-[cubic-bezier(0.34,1.56,0.64,1)] duration-300': transition && !touch,
      'ease-out duration-700': transition && touch,
    },
    $$props.class
  )}
>
  <div class="w-full p-4 flex flex-col items-center justify-center bg-black">
    <slot />
  </div>
  <div
    class={cx(
      'holo',
      {
        'transition-[background-position] after:transition-[background-position]': transition,
        'ease-[cubic-bezier(0.34,1.56,0.64,1)] after:ease-[cubic-bezier(0.34,1.56,0.64,1)] duration-300 after:duration-300': transition && !touch,
        'ease-out after:ease-out duration-1000 after:duration-700': transition && touch,
      }
    )}
  />
</div>