<script lang="ts">
  import * as config from '$lib/config';
	import type { PageData } from './$types';
	import Markdown from 'svelte-exmarkdown';
	let { data }: { data: PageData } = $props();
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
      <h3>{data.kuakiniHeading}</h3>
      <p>{data.kuakiniDescription}</p>
      <div class="wrapper">
        {#each data.kuakiniPrograms as kuakiniProgram}
        <div>
          <h4>{kuakiniProgram.title}</h4>
          <p>{kuakiniProgram.description}</p>
          <a class="service-link" href={kuakiniProgram.url}>Learn More</a>
        </div>
        {/each}
      </div>
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="content">
      <h3>{data.communityHeading}</h3>
      <p>{data.communityDescription}</p>
      <div class="wrapper">
        {#each data.communityPrograms as communityProgram}
        <div>
          <h4>{communityProgram.title}</h4>
          <p>{communityProgram.description}</p>
          <a class="service-link" href={communityProgram.url}>Learn More</a>
        </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>

.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  margin:0 0 0 -.5rem;
}

.wrapper > div {
  display: flex;
  flex-direction: column;
  flex: 1 0 400px;
  height: auto;
  margin:0 0 .5rem .5rem;
  padding: 1rem;
  border-radius: 6px;
  background-color: #f2f2f2 ;
}

.service-link {
  margin-top: auto;
}

</style>