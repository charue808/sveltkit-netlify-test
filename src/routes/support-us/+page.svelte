<div class="container">
	<h1 class="title is-1">Support Us</h1>
	<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
</div>

<form name="test" method="post" action="/success" netlify>
	<input type="hidden" name="form-name" value="test" />
	<input type="hidden" name="bot-field" />
	<p>
			<label>Your Name: <input type="text" name="name" /></label>
	</p>
	<p>
			<label>Your Email: <input type="email" name="email" /></label>
	</p>
	<p>
			<label>Message: <textarea name="message"></textarea></label>
	</p>
	<p>
			<button type="submit">Send</button>
	</p>
</form>