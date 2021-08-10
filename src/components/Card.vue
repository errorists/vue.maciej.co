<template>
  <section class="card">
    <div class='content'>
      <slot name='cardTitle'>
      </slot>
      <slot name='cardContent'>
      </slot>
      <slot name='cardList'>
      </slot>
    </div>
    <keep-alive>
      <slot name='cardGallery'>
      </slot>
    </keep-alive>
      <slot name='cardStatic'>
      </slot>
  </section>
</template>

<style lang="scss" scoped>

@import
'../scss/variables';

section {
  position: relative;
	width: 100%;
	padding: 4vh 0 6rem 0;
	margin: 0 0 15vw 0;
  border-radius: 2px 0 0 2px;

  &::before {
    content: '';
    background: linear-gradient(130deg, hsl(180,10%,97%), hsl(0,0%,100%));
    position: absolute; left: 5vw; right: 0; top: 0; bottom: 0;
    z-index: -1;
  }
}
@media (prefers-color-scheme: dark) {
  section::before {
    background: linear-gradient(130deg, hsl(0,0%,10%), hsl(0,0%,4%));
  }
}
@media (max-width: 960px) {
  section::before {
    left: 0;
    border-radius: 0;
  }
}
</style>
