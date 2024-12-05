<script lang="ts">
	import * as config from '$lib/config';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	import Markdown from 'svelte-exmarkdown';
	let md = $state(data.content);
</script>

<svelte:head>
	<title>{data.title} - {config.title}</title>
	<meta name="description" content={data.description} />
</svelte:head>

<section class="hero is-primary">
	<div class="hero-body">
		<h1 class="title">{data.heading}</h1>
		<h2 class="subtitle">{data.subheading}</h2>
	</div>
</section>
<section class="section">
	<div class="container">
	<div class="content">
		<Markdown {md} />
	</div>
	</div>
</section>
<section class="section is-medium">
	<div class="container">
		{#each data.products as product}
		<div class="box">
			<article class="media">
				<div class="media-left is-hidden-touch">
					<figure class="image is-240x240">
						<img src={product.image} alt={product.imgAlt} />
					</figure>
				</div>
				<div class="media-content">
					<div class="is-hidden-desktop">
					<figure class="image is-3by4">
						<img src={product.image} alt={product.imgAlt} />
					</figure>
					</div>
					<div class="content">
						<h4>{product.title}
							{#if product.subtitle}: {product.subtitle}{/if}
						</h4>
						<p class="retailPrice">Retail Price: {product.retailPrice}</p>
						<p>Sale Price: {product.salePrice}</p>
						<p>{product.description}</p>
						<p>How to purchase this item</p>
						<p class="sold-out">Sold Out. Thank you to all our supporters. We hope you enjoy the book.</p>
					</div>
				</div>
			</article>
			</div>
		{/each}
	</div>
</section>
<section class="section">
	<div class="container">
		<div class="content">
			<a href="/support-us">Back to Support Us</a>
		</div>
	</div>
</section>

<style>
.retailPrice {
  color: #747474;
	text-decoration: line-through;
}

.sold-out {
  font-weight: bold;
  font-size: 1em;
}
</style>