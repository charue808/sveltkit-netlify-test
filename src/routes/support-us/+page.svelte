<script>
	import Markdown from 'svelte-exmarkdown';
	let md = $state('# support us!');
	
	</script>
	
	<section>
		<div class="container">
		<div class="content">
			<Markdown {md} />
		</div>
		</div>
	</section>