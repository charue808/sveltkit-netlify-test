<script lang="ts">
	import * as config from '$lib/config';
	import { maska } from "maska/svelte";
	import { enhance } from '$app/forms';
	import FaAddSign from 'virtual:icons/fa-solid/plus';
	import FaMinusSign from 'virtual:icons/fa-solid/minus';


	let isChecked = $state(false);
	let guests: Array<{title: string, name: string}> = $state([]);
	let guestCount = $derived(guests.length);
	let total = $derived((guests.length + 1) * 65.00)
	let totalRSVP = $derived((guests.length + 1))


	$effect(() => {
		if(!isChecked) {
			guests = [];
		}
	});

	function incrementGuests() {
		const guestCount = guests.length + 1;
		guests.push({title: `Guest #${guestCount}: Full Name`, name:""})
	}

	function decrementGuests() {
		guests.pop();
	}

	function concatKey(data: Array<Record<string, any>>, key: string): string {
		let result = data.map(obj => obj[key]).join(" , ");
		return result;
	}

	function createGuestInfo() {
		let guestString;
		if (isChecked) {
			guestString = concatKey(guests, 'name')
		} else {
			guestString = 'there are no guests'
		}
		return guestString
 }
</script>

<svelte:head>
	<title>Shinnenkai - {config.title} </title>
	<meta name="description" content="2025 Shinnenkai New Year Celebration with JWSF" />
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
	<div class="container is-max-desktop">
		<div class="content">
			<div class="box">
				<h2>Registration Form</h2>
				<p>
					Information about registration goes here. Manage expectations for users.
				</p>
				<form name="shinnenkai rsvp" method="POST" use:enhance={({ formData }) => {
					
					let guestInfo = createGuestInfo();
					formData.append('BringingGuests', isChecked ? 'Yes' : 'No')
					formData.append('TotalRSVP', `${totalRSVP}`);
					formData.append('TotalCost', `${total}`)
					formData.append('GuestInfo', `${guestInfo}`)
				}}>
					<div class="columns">
						<div class="column">
							<div class="field">
								<label for="firstName" class="label">First Name</label>
								<div class="control is-expanded">
									<input id="firstName" class="input" type="text" name="FirstName" required />
								</div>
							</div>
						</div>
						<div class="column">
							<div class="field">
								<label for="lastName" class="label">Last Name</label>
								<div class="control">
									<input id="lastName" class="input" type="text" name="LastName" required />
								</div>
							</div>
						</div>
					</div>
					<div class="columns">
						<div class="column">
							<div class="field">
								<label for="email" class="label">Email</label>
								<div class="control">
									<input id="email" class="input" type="email" name="Email" required />
								</div>
							</div>
						</div>
						<div class="column">
							<div class="field">
								<label for="phone" class="label">Phone</label>
								<div class="control">
									<input use:maska={'1-###-###-####'} type="tel" class="input" id="phone" name="Phone" required />
								</div>
							</div>
						</div>
					</div>
					<div class="field">
						<div class="control">
							<label class="checkbox">
								<input type="checkbox" bind:checked={isChecked} name="Add Guests" />
								Would you like to bring a guest(s)?
							</label>
						</div>
					</div>
					{#if isChecked}
							<label for="add-guests" class="label">Add Guest(s)</label>
							<div id="add-guests" class="mb-5">
								<button type="button" class="button is-primary is-inline-block" onclick={decrementGuests} disabled={guestCount === 0}>
									<span class="icon">
										<FaMinusSign />
									</span>
								</button>
								<div class="mx-5 is-size-4 is-text-center is-inline-block">{guestCount}</div>
								<button type="button" class="button is-primary is-inline-block" onclick={incrementGuests}>
									<span class="icon">
										<FaAddSign/>
									</span>
								</button>
							</div>
							{#each guests as guest}
							<div class="field">
								<label for="guest" class="label">{guest.title}</label>
								<div class="control">
									<input type="text" class="input" bind:value={guest.name} />
								</div>
							</div>
							{/each}
					{/if}
			
					<div class="field">
						<label for="payment-options" class="label">Payment Option</label>
						<div id="payment-options" class="control">
							<label class="radio">
								<input type="radio" name="Payment" value="Check" required />
								Check
							</label>
							<label class="radio">
								<input type="radio" name="Payment" value="Credit Card" />
								Credit Card
							</label>
						</div>
					</div>
					<div class="field">
						<div class="control">
							<p class="is-size-4-table is-size-5-mobile has-text-weight-semibold">Total: {guests.length + 1} {(guests.length + 1) === 1 ? `Seat` : 'Seats'} X $65.00 = ${total}.00</p>
						</div>
					</div>
					<div class="field">
						<div class="control">
							<button class="button is-primary" type="submit">Submit</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>

