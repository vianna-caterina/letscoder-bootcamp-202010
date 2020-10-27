function mountWelcome(username = "User") {
  var container = mountContainer(`<section class="welcome">
    <h2>Welcome ${username} to Hello World App!</h2>
</section>`);

  return container;
}
