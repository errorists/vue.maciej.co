<template>
  <div id="app">
    <Toolbar/>
    <transition
      mode="out-in"
      v-on:appear="appear"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    >
      <router-view class="view"></router-view>
    </transition>
    <Credits/>
    <div id='blinds'></div>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue'
import Credits from '@/components/Credits.vue'
import Velocity from 'velocity-animate/velocity.js'

export default {
  methods: {
    appear: function(el) {
      var b = document.getElementById('blinds');
      Velocity(b, { translateX: '-100%' }, { duration: 400, delay: 200 });
      Velocity(el, { opacity: 1 }, { duration: 0, delay: 100 });
    },
    beforeEnter: function(el) {
      el.style.opacity = 0
    },
    enter: function(el, done) {
      var b = document.getElementById('blinds');
      Velocity(el, { opacity: 1 }, { duration: 0, complete: window.scrollTo(0, 0) });
      Velocity(b, { translateX: '100%' }, { duration: 600, delay: 50, complete: done });
    },
    leave: function(el, done) {
      var b = document.getElementById('blinds');
      Velocity(el, { opacity: 0 }, { duration: 0, delay: 400 });
      Velocity(b, { translateX: '-100%' }, { duration: 0 });
      Velocity(b, { translateX: '0%' }, { duration: 400, complete: done });
    }
  },
  components: {
    Toolbar,
    Credits,
    Velocity
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
'/scss/dark',
'/scss/media'
;

#blinds {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  pointer-events: none;
  background: hsl(180,10%,94%);
}

</style>
