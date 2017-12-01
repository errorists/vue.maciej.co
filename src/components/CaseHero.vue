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
	width: 100%; height: 100%;
	margin-bottom: 10vw;
}
p {
	color: $text-prime;
	font-size: 1rem; line-height: 1.25;
}
.h-top {
	width: 100%; height: 100%;
	max-width: 70%;
	display: flex;
	justify-content: space-between;
	padding: 5vh 5% 5vh 30%;
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
	width: 23%;
  padding-left: 5%;
	margin-right: 2%;
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
	width: 70%; height: 750px;
	overflow: hidden;
	border-radius: 2px 0 0 2px;
}

@media (max-width: 960px) {
  .h-top {
		padding: 5vh 10% 5vh 10%;
	}
	.h-wrapper {
		width: 100%;
		flex-direction: column;
	}
	aside {
    width: 90%;
    padding-left: 0;
  	margin-right: 0;
    margin-left: 10%;
	}
	h3 {
		text-indent: 0;
	}
	.challenges {
		margin: 10vh 0 5vh 0;
	}
	.h-right {
		width: 100%;
	}
}

@media (max-width: 720px) {
  .h-top {
		padding: 5vh 5% 5vh 5%;
	}
  aside {
    width: 95%;
    padding-left: 0;
  	margin-right: 0;
    margin-left: 5%;
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
