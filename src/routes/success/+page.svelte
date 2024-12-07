<script lang="ts">
	import * as config from '$lib/config';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	import Markdown from 'svelte-exmarkdown';
	let md = $state('# Success!');	
</script>
<svelte:head>
	<title>{data.title} - {config.title}</title>
	<meta name="description" content={data.description} />
</svelte:head>
<section class="section is-large">
	<div class="container has-text-centered">
		<h1 class="title is-1">Success</h1>
		<p>Your form has been submitted!</p>
	</div>
</section>

