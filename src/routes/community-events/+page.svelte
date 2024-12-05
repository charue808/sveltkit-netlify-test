<script lang="ts">
	import * as config from '$lib/config';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	import Markdown from 'svelte-exmarkdown';
	let md = $state('# community events!');
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


<style>
	/*
.call-out {
  padding: 1rem;
  background-color: #F6F6FF;
  border-radius: .75rem;
}


.event-item {
  border-bottom: solid 1px #d8d8d8;
  margin-top: 2.5rem;
}

div.box > article.event-item:first-child {
  margin-top: .5rem;
}

div.box > article.event-item:last-child {
  border-bottom: none;
}

.event-content {
  margin-bottom: 3rem;
}

.event-info {
  margin-bottom: 0rem !important;
  font-size: .9rem;
  color: hsl(0, 0%, 48%);
}

.event-date {

}

.event-time {

}

.event-location {
  margin-top: 0px;
  font-size: .9rem;
  color: hsl(0, 0%, 48%);
}

.event-spacer {
  margin-left: 5px;
  margin-right: 5px;
}
*/
</style>