<script>
	import Markdown from 'svelte-exmarkdown';
	let md = $state('# Membership!!!');
	
	</script>
	
	<section>
		<div class="container">
		<div class="content">
			<Markdown {md} />
		</div>
		</div>
	</section>