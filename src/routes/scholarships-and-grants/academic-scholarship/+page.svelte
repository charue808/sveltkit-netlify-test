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
<section class="hero is-primary">
	<div class="hero-body">
		<h1 class="title">{data.heading}
			<span class="tag">
				{#if data.isAppOpen} Open {:else} Closed {/if}
			</span>
		</h1>
		<h2 class="subtitle">
			Deadline: {data.deadline} &nbsp; | &nbsp; <span>{data.email}</span>
		</h2>
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
			<div class="call-out">
				<div class="my-5">
					<h3>Application</h3>
					<p>
						Application period has ended please check back at a future date.
					</p>
				</div>
				<div class="my-5">
					<h3>Eligibility</h3>
					<ul>
						{#each data.eligibility as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
				<div class="mt-6">
					<p><small>Updated on: {data.publishDate}</small></p>
				</div>
			</div>
		</div>
	</div>
</section>


<style>
.call-out {
  padding: 1rem;
  background-color: #F6F6FF;
  border-radius: .75rem;
}
</style>