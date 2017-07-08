<template>
  <nav id="navigationBar">
    <h4>Maciej Zadykowicz</h4>
    <p>I design and build digital products, brands and experiences.</p>
    <a href="https://twitter.com/spaceape" target="_blank" title="@spaceape on Twitter" class="twitter">
      <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
        <path id="twitterPath" d="M5.702 12.567c.762-.208.726-1.3-.05-1.458-1.374-.28-2.458-1.304-2.855-2.617.36.09.73.143 1.107.156.753.023 1.068-.953.443-1.373-1.04-.7-1.676-1.875-1.676-3.16 0-.302.036-.598.104-.884C5.14 5.67 8.34 7.155 11.797 7.33c.497.024.88-.432.77-.917-.066-.28-.1-.572-.1-.87 0-2.095 1.687-3.793 3.765-3.793 1.054 0 2.04.438 2.746 1.197.177.19.44.275.695.224l.165.184c-.428.477-.06 1.323.66 1.237.07-.007-.18.28-.18.28l1.19.977c.82-.648 1.536-1.426 2.117-2.3.405-.61-.213-1.37-.88-1.12.145-.277.267-.567.362-.867.21-.658-.507-1.225-1.1-.87-.697.416-1.453.728-2.245.925C18.806.745 17.557.25 16.232.25c-2.908 0-5.264 2.37-5.264 5.294 0 .07.002.14.004.208-3.093-.39-5.894-1.968-7.857-4.392-.33-.408-.968-.36-1.232.096-.464.802-.712 1.714-.712 2.66 0 .88.216 1.725.608 2.472-.348.05-.643.346-.643.743 0 1.64.693 3.076 1.808 4.054-.19.187-.283.473-.19.764.476 1.5 1.586 2.685 2.99 3.273-1.126.556-2.373.852-3.666.852-.33 0-.66-.02-.99-.058-.79-.092-1.16.945-.494 1.376 2.175 1.402 4.697 2.16 7.327 2.16 7.98 0 13.59-6.41 13.59-13.678v-.225l-1.193-.977c-.202.142-.33.38-.318.644.007.2.01.38.01.558 0 6.48-4.988 12.178-12.09 12.178-1.36 0-2.686-.227-3.938-.663 1.52-.3 2.944-.958 4.165-1.92.553-.438.254-1.327-.45-1.34-1.218-.022-2.317-.634-2.994-1.588.338-.026.673-.084 1-.173z" fill-rule="nonzero"/>
      </svg>
    </a>
    <a href="mailto:hi@maciej.co" title="Maciej&#39;s mailbox"><h5><span class="highlighter">Get in touch</span></h5></a>
  </nav>
</template>

<script>
import Headroom from 'headroom.js/dist/headroom.js'

export default {
  mounted () {
  	this.$nextTick(() => {
    	this.initHeadroom()
    })
  },
  methods: {
  	initHeadroom () {
  		var myElement = document.querySelector('nav');
  		var headroom  = new Headroom(myElement, {
        tolerance : {
          up : 5,
          down : 0
        }
      });
  		headroom.init(
  		);
  	}
  },
  components: {
    Headroom
  }
}
</script>

<style lang="scss" scoped>

@import
'../scss/variables';

nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
	background-color: rgba(255,255,255, .98);
	padding: 0 5vw;
	width: 100%; height: 54px;
	display: flex;
	align-items: stretch;
	justify-content: space-between;
}
h4 {
	font: 1.125rem/54px $header;
	color: $text-prime;
	margin-right: 2rem;
	text-transform: uppercase;
}
p {
	line-height: 54px;
	color: $text-third;
}
.twitter {
	width: 54px; height: 54px;
	margin: 0 0 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover #twitterPath {
		fill: #311B92;
	}
}
#twitterPath {
	fill: $link;
}
h5 {
	line-height: 54px;
	color: $link;
	margin: 0 0 0 1.5vw;
}
nav .highlighter::after {
	top: 70%;
}
@media (max-width: 960px) {
	p {
		display: none;
	}
}
@media (max-width: 500px) {
	nav {
		padding: 0 5vw;
	}
	h4 {
		font-size: 1rem;
		margin-right: 0;
	}
	h5 {
		font-size: 1rem;
	}
}
@media (max-width: 320px) {
	.twitter {
		display: none;
	}
}

</style>
