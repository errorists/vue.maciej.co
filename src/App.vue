<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>

import Home from '@/components/Home'

export default {
  components: {
    Home
  }
}
</script>

<style lang="scss">

// IMPORTS

@import
'/scss/variables',
'/scss/global',
'/scss/typography',
'/scss/cards',
'/scss/flickity',
'/scss/media'
;

</style>
