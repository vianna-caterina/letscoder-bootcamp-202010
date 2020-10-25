function mountTitle(onHome) {
  var container = mountContainer('<h1 class="title">Hello 🌎 App </h1>');

  container.onclick = onHome;

  return container;
}
