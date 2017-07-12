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
section {
  position: relative;
	width: 100%;
	padding: 5vh 0 10vh 0;
	margin: 0 0 15vw 0;
	border-radius: 2px 0 0 2px;

  &::before {
    content: '';
    position: absolute; left: 5vw; right: 0; top: 0; bottom: 0;
    z-index: -1;
  }
}
.light::before {
  background: linear-gradient(130deg, hsl(180,10%,97%), hsl(180,20%,94%));
}
.dark::before {
  background: linear-gradient(130deg, hsl(180,5%,12%), hsl(180,5%,2%));
}
@media (max-width: 960px) {
  section::before {
    left: 0;
  }
}
</style>
