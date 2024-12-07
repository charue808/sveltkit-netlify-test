<script lang="ts">
	import * as config from '$lib/config';
	import type { ActionData } from './$types';
	import { maska } from "maska/svelte";
	import { enhance } from '$app/forms';
	import FaAddSign from 'virtual:icons/fa-solid/plus';
	import FaMinusSign from 'virtual:icons/fa-solid/minus';
	import FaMapAlt from 'virtual:icons/fa-solid/map-marked-alt';
	import eventImage from '$lib/imgs/2025ShinnenkaiCover.webp'
	import shinnenkaiFlyer from '$lib/files/shinnenkai2025flyer.pdf';


	let { form }: { form: ActionData } = $props();
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
		<p class="subtitle">January 19, 2025 10:00am - 1:00pm |
			<a class="subtitle" href="https://maps.app.goo.gl/3BMHriobaGaNzDf16"><span class="icon"><FaMapAlt /></span> Natsunoya Tea House</a>
		</p>
	</div>
</section>
<section class="section">
	<div class="content">
		<figure class="image">
			<img src={eventImage} alt="2025 Shinnenkai" />
		</figure>
	</div>
</section>
<section class="section">
	<div class="container">
		<div class="content">
			<p class="is-size-5">
				We welcome our members and their guests to ring in the new year at our 2025 Shinnenkai on January 19, 2025 at the iconic Natsunoya Tea House from 10:00am - 1:00pm. Seats are $65.00 per person. Come and enjoy delicious food and views, bring home <strong>bake sale and country store</strong> goodies, try your luck with <strong>Fukubukuro</strong> and <strong>Lucky Me</strong>, enjoy special <strong>entertainment</strong> and more!
			</p>
			<p>
				We welcome Lucky Me, Bake Sale & Country Store Donations! For more information contact Staci Yoshihara and Corday Feagins at <a href="mailto:programs@jwsf.org">programs@jwsf.org</a>.
			</p>
			<p>
				While we encourge our members to register online using the form below, members can download a copy of the flyer to register by mail. <a href={shinnenkaiFlyer}>Download Flyer</a>
			</p>
		</div>
	</div>
</section>
<section class="section">
	<div class="container is-max-desktop">
		<div class="content">
			<div class="box">
				<h2>Registration Form</h2>
				{#if form?.success}
				<div class="notification is-success is-light">
					<p>Thank you for registering for the 2025 Shinnenkai. We look forward to seeing you on January 19, 2025 at Natsunoya Tea House. A confirmation email has been sent you with further instructions.</p>
				</div>
				{/if}
				{#if form?.error}
					<div class="notification is-error is-light">
						<p>It looks like there has been an error with your registration. Please contact hello@jwsf.org</p>
					</div>
				{/if}
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
							<p class="is-size-4-tablet is-size-5-mobile has-text-weight-semibold">Total: {guests.length + 1} x $65.00 = ${total}.00</p>
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

