<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<section>
	<div class="container">
		<div class="content">
			<h1>{data.title}</h1>
			<p>{data.content}</p>
		</div>
	</div>
</section>