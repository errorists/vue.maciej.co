<template>
  <div>
    <ul>
      <li><slot name='backLink'></slot></li>
      <li><slot name='storeLink'></slot></li>
      <li><slot name='nextLink'></slot></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
div {
	display: flex;
	margin: -2vh 0 16vh 0;
	justify-content: center;
}
ul {
	display: inline-flex;
	max-width: 600px;
	padding: 0.5rem;
	background-color: hsl(227, 55%, 98%);
	border-radius: 5px;
}
li {
	display: inline-block;
}
li a {
	margin: 0 1rem;
}
@media (max-width: 960px) {
	div {
    margin: 5vh 0;
	}
}
@media (max-width: 560px) {
	ul {
		display: flex;
		flex-direction: column;
	}
  li a {
		margin: 0.5rem 1.5rem;
	}
}
</style>
