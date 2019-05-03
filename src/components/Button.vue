<template>
  <a
	v-bind:href="link"
	target="_blank"
  >
		<svg width="17" height="8" viewBox="0 0 17 8"><path d="M10.5 4.74999C10.7761 4.74999 11 4.97385 11 5.24999V7.06573C11 7.46508 11.4451 7.70328 11.7774 7.48176L16.6256 4.24961C16.8037 4.13086 16.8037 3.86912 16.6256 3.75038L11.7773 0.518226C11.4451 0.296708 11 0.534904 11 0.934252V2.74999C11 3.02614 10.7761 3.24999 10.5 3.24999H1C0.585786 3.24999 0.25 3.58578 0.25 3.99999C0.25 4.41421 0.585786 4.74999 1 4.74999H10.5Z"/></svg>
		<span class="highlighter">{{ label }}</span>
	  
  </a>
</template>

<script>
	export default {
		props: {
			label: {
				type: String,
				default: 'Button',
			},
			link: {
				type: String,
				default: 'https://maciej.co'
			}
		}
}
</script>

<style lang="scss" scoped>

@import
'../scss/variables';

a {
	display: inline-flex;
	padding: 0.5rem 0;
	cursor: pointer;
	border-radius: 2px;
	align-items: center;
	margin-right: 2rem;
}
span {
	font: 1.25rem/2 $header;
	font-weight: normal;
	color: $text-prime;
}
svg {
	margin-right: 0.5rem;
	fill: $text-third;
}

@media (max-width: 480px) {
	span {
		font: 1rem/1.5 $header;
	}
}
</style>
