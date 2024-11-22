<script>
	import * as config from '$lib/config';
	import { enhance } from "$app/forms";
</script>

<svelte:head>
	<title>Contact Us - {config.title}</title>
	<meta name="description" content="Let us know how we're doing or how we can better serve our community." />
</svelte:head>

<section class="hero is-primary">
	<div class="hero-body">
		<h1 class="title">Get In Touch</h1>
		<h2 class="subtitle">We look forward to hearing from you</h2>
	</div>
</section>
<section class="section">
	<div class="container">
		<div class="columns">
			<div class="column is-6 content">
				<h3>Instructions</h3>
				<p>If interested in learning more about The Japanese Women’s Society Foundation, we welcome you to contact us by entering your contact information in the fields on this page and clicking on the “Send” button.
				</p>
			</div>
			<div class="column is-6">
				<div class="mb-3">
					<form name="contact" method="POST">
		
					<div class="field">
						<label for="name" class="label">Name</label>
						<div class="control">
							<input id="name" class="input" type="text" name="Name" />
						</div>
					</div>
					
					<div class="field">
						<label for="email" class="label">Email</label>
						 <div class="control">
							<input id="email" class="input" type="email" name="Email" />
						</div>
					</div>
					
					<div class="field">
						<label for="subject" class="label">Subject</label>
						<div class="control">
						<input id="subject" class="input" type="text" name="Subject" />
						</div>
					</div>
					
					<div class="field">
						<label for="message" class="label">Message</label>
						<div class="control">
							<textarea id="message" class="textarea" name="Message"></textarea>
						</div>
					</div>
								
					<div class="field">
						<div class="control">
							<button type="submit" class="button is-success">Send</button>
						</div>
					</div>
					</form>
					</div>
			</div>
		</div>

	</div>
</section>
