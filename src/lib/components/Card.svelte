<script>
  import cx from 'clsx';
  import { Rocket } from 'lucide-svelte';

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
    'card relative',
    'w-48 lg:w-60 aspect-[3/4] lg:aspect-[5/7] flex p-0.5',
    'bg-gradient-to-br from-white/[0.05] via-white/20 to-white/[0.05]',
    'shadow-xl shadow-[#000]/[0.5]',
    '[transform:perspective(20cm)_rotateX(var(--rx))_rotateY(var(--ry))]',
    {
      'transition-transform': transition,
      'ease-[cubic-bezier(0.34,1.56,0.64,1)] duration-300': transition && !touch,
      'ease-out duration-500': transition && touch,
    },
    $$props.class
  )}
>
  <div class="front relative z-1 w-full p-4 flex flex-col items-center justify-center bg-black">
    <slot />
  </div>
  <div class="back absolute inset-0.5 flex flex-col items-center justify-center bg-black pointer-events-none select-none">
    <Rocket
      class="opacity-20"
      size="48"
      absoluteStrokeWidth={true}
    />
  </div>
  <div
    class={cx(
      'holo',
      {
        'transition-[background-position] after:transition-[background-position]': transition,
        'ease-[cubic-bezier(0.34,1.56,0.64,1)] after:ease-[cubic-bezier(0.34,1.56,0.64,1)] duration-300 after:duration-300': transition && !touch,
        'ease-out after:ease-out duration-500 after:duration-500': transition && touch,
      }
    )}
  />
</div>

<style lang="postcss">
  .card {
    transform-style: preserve-3d;
    animation: flip 1s .5s cubic-bezier(0.68, -0.6, 0.32, 1.6) backwards;
  }

  .front, .back {
    visibility: visible;
    perspective: 0;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
  }

  .back {
    transform: rotateY(180deg);
  }

  @keyframes flip {
    from { transform: perspective(20cm) rotateY(-180deg); }
    to { transform: perspective(20cm) rotateY(0deg); }
  }

  /* holographic, thanks https://css-tricks.com/holographic-trading-card-effect */
  .holo {
    opacity: .6;
    background-position: center, 0 var(--py), var(--px) var(--py);
    pointer-events: none;
    user-select: none;
  }

  .holo, .holo::after {
    position: absolute;
    z-index: 2;
    inset: 0;
    background-image:
      url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox='0 0 70 70' style='background-color%3A%23fff'%3E%3Cpath fill='%23040607' fill-opacity='0.5' fill-rule='evenodd' d='M0 0h35v35H0V0Zm5 5h25v25H5V5Zm5 5h15v15H10V10Zm5 5h5v5h-5v-5ZM40 5h25v25H40V5Zm5 5h15v15H45V10Zm5 5h5v5h-5v-5Zm20 20H35v35h35V35Zm-5 5H40v25h25V40Zm-5 5H45v15h15V45Zm-5 5h-5v5h5v-5ZM30 40H5v25h25V40Zm-5 5H10v15h15V45Zm-5 5h-5v5h5v-5Z'%2F%3E%3C%2Fsvg%3E"),
      repeating-linear-gradient(0deg, hsl(309,80%,80%) 0%, hsl(204,80%,60%) 50%, hsl(51,80%,60%) 100%),
      repeating-linear-gradient(135deg, hsl(204,29%,10%) 45%, hsl(204,29%,90%) 50%, hsl(204,29%,10%) 55%);
    background-size: 20px auto, 100% 700%, 700%;
    background-blend-mode: exclusion, hue, hard-light;
    mix-blend-mode: color-dodge;
    filter: brightness(0.5) contrast(2) saturate(1.5);
  }

  .holo::after {
    content: "";
    background-position: center, 0 var(--py), calc(var(--px) * -1) calc(var(--py) * -1);
  }
</style>