<script>
	import Markdown from 'svelte-exmarkdown';
	let { title, content } = $props();
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
				<h1>{title}</h1>
				<p>{content}</p>
			</div>
		</div>
	</section>