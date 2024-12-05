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
			<h3>Officers &amp; Committee Chairs</h3>
			<h4>Officers</h4>
			<ul class="officerList">
				{#each data.officers as officer}
					<li class="mb-2">
						<span class="is-size-6">{officer.name}</span><br/>
						<span class="is-italic is-size-6">{officer.position}</span>
					</li>
				{/each}
			</ul>
			<h4>Committee Chairs</h4>
			<ul class="officerList">
				{#each data.committeeChairs as committeeChair}
				<li>
					{committeeChair.name}
				</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
<section class="section">
	<div class="container">
		<div class="content">
			<h3>Organization Documents</h3>
			<ul>
				<li>
					<a href="/static/uploads/052020_bylaws.pdf">ByLaws - updated 2020</a>
				</li>
				<li>
					<a href="/static/uploaded/70th_kinengo_2024.pdf">70th Kinengo (Commerative Booklet)</a>
				</li>
			</ul>
		</div>
	</div>
</section>

<style>
ul.officerList {
  list-style-type: none;
}

ul.officerList li::before {
  content: "\200B";
}
</style>