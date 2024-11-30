<script lang="ts">
	import type { PageData } from './$types';
	import Markdown from 'svelte-exmarkdown';
	let { data }: { data: PageData } = $props();
	let md = $state('# Membership!!!');
	</script>

	<section>
		<div class="container">
		<div class="content">
			<Markdown {md} />
		</div>
		</div>
	</section>
	<section>
		<div class="container">
			<div class="content">
				<h1>{data.title}</h1>
				<p>{data.content}</p>
			</div>
		</div>
	</section>