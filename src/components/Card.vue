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
	width: 95vw;
	padding: 5vh 0 10vh 0;
	margin: 0 0 15vw 5vw;
	border-radius: 2px 0 0 2px;
}
@media (max-width: 960px) {
  section {
    margin-left: 0;
		width: 100vw;
  }
}
</style>
