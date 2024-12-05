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

<section class="hero is-medium hero-img-med is-primary">
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
			<h3>Donations</h3>
			<p>Through your donations we can continue to enrich the local community in the area's of culture, education, gerontology and women's issues. Whether through support activites for the 2nd floor residents at Hale Pulama Mau, providing grants to local non-profits and individuals, or academic scholarships for local students in the geriatric field, your donation of any amount is graciously needed.</p>
			<a href="/support-us/donations">Learn more</a>
		</div>
	</div>
</section>
<section class="section">
	<div class="container">
		<div class="content">
			<h3>Publications</h3>
			<p>We have released two publications. A revision of our awarding winning 2004 Kokoro Book and a cookbook filled with all the local recipes of the japanese hawaiian community, Sharing With Heart.</p>
			<a href="/support-us/publications">Learn more</a>
		</div>
	</div>
</section>