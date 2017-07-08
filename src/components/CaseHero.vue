<template>
  <header>
    <div class="h-top">
      <slot name='headerRole'>
      </slot>
      <slot name='headerScope'>
      </slot>
      <slot name='headerDeliverables'>
      </slot>
      <slot name='headerDuration'>
      </slot>
    </div>
    <div class='h-wrapper'>
      <aside>
        <slot name='headerTitle'>
        </slot>
        <div class='challenges'>
          <slot name='headerChallenges'>
          </slot>
        </div>
      </aside>
      <div class='h-right'>
        <slot name='headerPic'>
        </slot>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import
'../scss/variables';
header {
	width: 95vw; height: 100%;
	margin: 0 0 10vw 5vw;
}
p {
	color: $text-prime;
	font-size: 1rem; line-height: 1.25;
}
.h-top {
	width: 100%; height: 100%;
	max-width: 1280px;
	display: flex;
	justify-content: space-between;
	padding: 5vh 5vw 5vh 25vw;
}
h5 {
	font-size: 1rem;
	color: $text-prime;
	margin-bottom: 0.375rem;
}
li:first-child h5 {
	color: $text-third;
	margin-bottom: 0.75rem;
}
.h-wrapper {
	width: 100%;
	display: flex;
	justify-content: space-between;
}
aside {
	width: 23vw;
	margin-right: 2vw;
}
h3 {
	text-indent: 44px;
}
.challenges {
	margin-top: 20vh;
}
.challenges ul li:first-child {
	text-indent: 44px;
}
.challenges li {
	margin-bottom: 5px;
}
.challenges div {
	display: flex;
}
.challenges span {
	display: inline-block;
	flex: 0 0 auto;
	width: 32px; height: 32px;
	margin-right: 10px;
	color: $yellow;
	border: 1px solid $yellow;
	border-radius: 50%;
	line-height: 32px;
	text-align: center;
}
.challenges p {
	margin-top: 6px;
}
.h-right {
	position: relative;
	width: 70vw; height: 750px;
	overflow: hidden;
	border-radius: 2px 0 0 2px;
}

@media (max-width: 960px) {
  .h-top {
		padding: 5vh 5vw 5vh 0;
	}
	.h-wrapper {
		width: 100%;
		flex-direction: column;
	}
	aside {
		width: 100%;
	}
	h3 {
		text-indent: 0;
	}
	.challenges {
		margin: 10vh 0 5vh 0;
	}
	.h-right {
		margin-left: -5vw;
		width: 100vw;
	}
}

@media (max-width: 560px) {
	.h-top {
		display: none;
	}
	h3 {
		margin-top: 5vh;
	}
}

</style>
