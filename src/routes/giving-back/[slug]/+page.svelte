<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="container">
	<hgroup>
		<h1 class="title">{data.meta.title}</h1>
	</hgroup>
	<div class="content">
		<data.content />
	</div>
</article>
