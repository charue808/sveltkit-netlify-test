<script lang="ts">
	import * as config from '$lib/config';
	import shinnenkaiCover from '$lib/imgs/2025ShinnenkaiCover.webp'
</script>
<svelte:head>
	<title>Home - {config.title}</title>
	<meta name="description" content="Home for JWSF online" />
</svelte:head>

<section class="hero is-primary is-fullheight">
	<div class="hero-body">
		<div class="columns">
			<div class="column">
				<h1 class="title">Japanese Women's Society Foundation</h1>
			</div>
			<div class="column">
				<div class="box">
					<figure class="image">
						<img src={shinnenkaiCover} alt="2025 Shinnenkai" />
					</figure>
					<div class="content">
						<h2>2025 Shinnenkai Registration now open!</h2>
						<a href="/shinnenkai">Learn More</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
