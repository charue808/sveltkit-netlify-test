<script lang=ts>
	import * as config from '$lib/config';
	import { maska } from "maska/svelte";
	import { enhance } from '$app/forms';

	
	let count = $state(0);
	let isChecked = $state(false);
	let guests = $state([]);
	let total = $derived((guests.length + 1) * 65.00)
	let totalRSVP = $derived((guests.length + 1))

	$effect(() => {
		if(!isChecked) {
			count = 0;
		}
		if (isChecked) {
			count = 1;
		}
	});

</script>

<svelte:head>
	<title>Shinnenkai - {config.title} </title>
</svelte:head>

<section class="hero is-small is-primary">
	<div class="hero-body">
		<h1 class="title">
			2025 Shinnenkai
		</h1>
		<p class="subtitle">January 2025</p>
	</div>
</section>
<section class="section">
	<div class="content">
		<h2>Information about the event</h2>
		<p>
			Maybe there will be an image of the flyer and dates and event information would go here.
		</p>
	</div>
</section>
<section class="section">
	<div class="content">
		<h2>Registration Form</h2>
		<p>
			Information about registration goes here. Manage expectations for users.
		</p>
		<form name="shinnenkai rsvp" method="POST" use:enhance={({ formData }) => {
			formData.append('Total RSVP', `${totalRSVP}`);
			formData.append('Total Cost', `${total}`)
		}}>
			<div class="field">
				<label for="name" class="label">Full Name</label>
				<div class="control">
					<input id="name" class="input" type="text" name="FullName" required />
				</div>
			</div>
			<div class="field">
				<label for="email" class="label">Email</label>
				<div class="control">
					<input id="email" class="input" type="email" name="Email" required />
				</div>
			</div>
			<div class="field">
				<label for="phone" class="label">Phone</label>
				<div class="control">
					<input use:maska={'+1-###-###-####'} type="tel" class="input" id="phone" name="Phone" required />
				</div>
			</div>
			<div class="field">
				<div class="control">
					<label class="checkbox">
						<input type="checkbox" bind:checked={isChecked} required />
						Would you like to bring a guest(s)?
					</label>
				</div>
			</div>
			{#if isChecked}
			<div class="columns">
				<div class="column">
					<div class="is-flex is-flex-direction-row">
						<button type="button" class="button is-primary" onclick={() => count -= 1}>Decrement</button>
						<div class="box"><span class="is-size-1">{count}</span></div>
						<button type="button" class="button is-primary" onclick={() => count  += 1}>Increment</button>
					</div>

				</div>
				<div class="column">
					<div class="field">
						<label for="guest" class="label">Guest</label>
						<div class="control">
							<input type="text" class="input" />
						</div>
					</div>
				</div>
			</div>
			{/if}
			<div class="field">
				<div class="control">
					<label class="radio">
						<input type="radio" name="payment" value="Check" required />
						Check
					</label>
					<label class="radio">
						<input type="radio" name="payment" value="Credit Card" />
						Credit Card
					</label>
				</div>
			</div>
			<div class="field">
				<div class="control">
					<p>Total: {guests.length + 1} {(guests.length + 1) < 0 ? `guest` : 'guests'} X $65.00 = ${total}.00</p>
				</div>
			</div>
			<div class="field">
				<div class="control">
					<button class="button is-primary" type="submit">Submit</button>
				</div>
			</div>
		</form>
	</div>
</section>

