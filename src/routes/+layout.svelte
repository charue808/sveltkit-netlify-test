<script>
  import "../app.scss";
  import brand from '$lib/imgs/JWSF_DigitalLogo.webp';
	import * as config from '$lib/config';
	let { children } = $props();

  let isActive = $state(false);
  
</script>

<header>
<nav class="navbar is-spaced" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" aria-label="JWSF Logo link to home page" href={config.url}>
      <img src={brand} alt="JWSF Logo in webp format" />
    </a>

    <button class="navbar-burger" class:is-active={isActive} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onclick={() => isActive = !isActive}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" class:is-active={isActive}>
    <div class="navbar-start">
      <a class="navbar-item" href="/about-us">
        About Us
      </a>

      <a class="navbar-item" href="/become-a-member">
        Become a Member
      </a>

      <a class="navbar-item" href="/giving-back">Giving Back</a>

      <a class="navbar-item" href="/scholarships-and-grants">Scholarships & Grants</a>

      <a class="navbar-item" href="/support-us">
        Support Us
      </a>

      <a class="navbar-item" href="/contact-us">Contact Us</a>

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" href="/support-us">
            <strong>Donate Today</strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</header>
<main>
  {@render children()}
</main>
<footer class="footer">
  <div class="container">
    <div class="columns">
      <div class="column is-5">
        <figure>
          <img src={brand} alt="JWSF LOGO" />
        </figure>
      </div>
      <div class="column is-1"></div>
      <div class="column is-2 bd-footer-links">
        <p class="bd-footer-link-title">
          <a href="/about-us">About Us</a>
        </p>
        <p class="bd-footer-link-title">
          <a href="/become-a-member">Become a Member</a>
        </p>
      </div>
      <div class="column is-2 bd-footer-links">
        <p class="bd-footer-link-title">
          <a href="/giving-back">Giving Back</a>
        </p>
        <p class="bd-footer-link-title">
          <a href="/scholarships-and-grants">Scholarships &amp; Grants</a>
        </p>
        <p class="bd-footer-link">
          <a href="/scholarships-and-grants/academic-scholarship">Academic Scholarship</a>
        </p>
        <p class="bd-footer-link">
          <a href="/scholarships-and-grants/grant-award">Grant Award</a>
        </p>
      </div>
      <div class="column is-2 bd-footer-links">
        <p class="bd-footer-link-title">
          <a href="/support-us/donations">Donate Today</a>
        </p>
        <p class="bd-footer-link-title">
          <a href="/community-events">Community Events</a>
        </p>
      </div>
    </div>
  </div>
  <div class="container mt-6">
    <div class="content has-text-centered">
      <p>
        &copy; {new Date().getFullYear()} - {config.title} - ein: {config.ein}
      </p>
    </div>
  </div>
</footer>

<style class="scss">

main {
  min-height: 75vh;
}

.navbar-item img {
  max-height: 3.75rem;
}

.bd-footer-links {
  & a {
    color: currentColor;
    &:hover {
      color: #3273dc;
    }
  }
}

.bd-footer-link-title {
  color: #363636;
  font-size: 1.25rem;
  font-weight: 600;

  &:not(:first-child) {
    margin-top: 1.5rem;
  }
}

.bd-footer-link {
  margin-top: .5rem;
}

</style>