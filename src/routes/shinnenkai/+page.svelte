<script lang=ts>
	import { enhance } from '$app/forms';
	let guests = $state([]);
	let total = $derived((guests.length + 1) * 65.00)
	let totalRSVP = $derived((guests.length + 1))
</script>

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
		<form name="shinnenkai rsvp" data-netlify="true" method="POST" use:enhance={({ formData }) => {
			formData.append('Total RSVP', `${totalRSVP}`);
			formData.append('Total Cost', `${total}`)
		}}>
			<input name="form-name" type="hidden" value="shinnenkai-rsvp" />
			<div class="field">
				<label for="name" class="label">Full Name</label>
				<div class="control">
					<input id="name" class="input" type="text" name="FullName" />
				</div>
			</div>
			<div class="field">
				<label for="email" class="label">Email</label>
				<div class="control">
					<input id="email" class="input" type="email" name="Email" />
				</div>
			</div>
			<div class="field">
				<label for="phone" class="label">Phone</label>
				<div class="control">
					<input id="phone" class="input" type="tel" name="PhoneNumber" />
				</div>
			</div>
			<div class="field">
				<label for="guestCount" class="label">How many guests would you like to bring?</label>
				<div class="control">
					<input id="guestCount" type="number" class="input" bind:value={guests.length} disabled name="GuestCount"/>
				</div>
				<button type="button" class="button is-primary" disabled={guests.length <= 0} onclick={() => guests.pop() }>Decrement</button>
				<button type="button" class="button is-primary" onclick={() => guests.push(guests.length + 1)}>Increment</button>
			</div>
			{#each guests as guest}
			<div class="field">
				<label for={`guest-${guest}`} class="label">Guest #{guest}</label>
				<div class="control">
					<input id={`guest-${guest}`} class="input" type="text" name="GuestName{guest}" />
				</div>
			</div>
			{/each}
			<div class="field">
				<div class="control">
					<label class="radio">
						<input type="radio" name="payment" value="Check" />
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