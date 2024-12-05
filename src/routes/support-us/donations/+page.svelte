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
		<div class="box has-text-centered">
			<h3 class="is-size-4 has-text-weight-semibold mb-1">Donation by Check</h3>
			<p class="mb-3">Please make your check payable to: <strong>Japanese Women's Society Foundation</strong></p>
			<p class="mb-4">
				Japanese Women's Society Foundation <br/> 
				PO Box 3233<br/> 
				Honolulu, HI 96801
			</p>
		</div>
	</div>
</section>
<section class="section">
	<div class="container">
	<div class="content">
		<Markdown {md} />
	</div>
	</div>
</section>