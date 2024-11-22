<script>
	import Markdown from 'svelte-exmarkdown';
	let md = $state('# community events!');
	
	</script>
	
	<section>
		<div class="container">
		<div class="content">
			<Markdown {md} />
		</div>
		</div>
	</section>


