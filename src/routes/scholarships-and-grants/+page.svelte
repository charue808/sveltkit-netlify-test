<script lang="ts">
	import * as config from '$lib/config';
	import type { PageData } from './$types';
	import Markdown from 'svelte-exmarkdown';
	let { data }: { data: PageData } = $props();
	let md = $state(data.content);
</script>

<svelte:head>
	<title>{data.title} - {config.title}</title>
	<meta name="description" content={data.description} />
</svelte:head>

<section class="hero is-medium hero-img-med">
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
<section class="section">
	<div class="container">
		<div class="content">
			<h3>Available Awards</h3>
			{#each data.awards as award}
			<article class="mtb35">
				<h4>
					<a href={award.url}>{award.title}</a>
					<span class="is-size-6">up to {award.amount}</span>
				</h4>
				<p>
					{award.description}
				</p>
				{#if award.isOpen}
					<p class="is-italic">Application Deadline: {award.deadline}</p>
				{/if}
			</article>
			{/each}
		</div>
	</div>
</section>

<style>
.mtb35 {
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
}

</style>