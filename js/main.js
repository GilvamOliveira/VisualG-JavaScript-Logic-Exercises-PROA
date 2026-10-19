const links = {
  one: "./pages/pdf-manzano.html",
  two: "https://www.linkedin.com/in/gilvam-oliveira/",
  three: "./pages/manzano.html",
  four: "./pages/faccat.html",
  five: "./pages/pdf-faccat.html",
};
const openLink = (id) => {
  const href = links[id];
  if (!href) return;
  window.setTimeout(() => {
    if (id === "one" || id === "two" || id === "five")
      window.open(href, "_blank", "noopener,noreferrer");
    else window.location.href = href;
  }, 180);
};
const byId = (id) => document.getElementById(id);
Object.keys(links).forEach((id) => {
  const button = byId(id);
  if (button) button.addEventListener("click", () => openLink(id));
});
const shortcutFor = (key) => {
  const pressed = key.toLowerCase();
  if (pressed === "m") return "three";
  if (pressed === "f") return "four";
  return null;
};
window.addEventListener("keydown", (event) => {
  if (event.ctrlKey || event.metaKey || event.altKey) return;
  if (
    event.target &&
    typeof event.target.closest === "function" &&
    event.target.closest("input, textarea, select")
  )
    return;
  const id = shortcutFor(event.key);
  if (!id || event.repeat) return;
  const button = byId(id);
  if (!button) return;
  button.dataset.pressed = "true";
  openLink(id);
});
window.addEventListener("keyup", (event) => {
  const id = shortcutFor(event.key);
  const button = id ? byId(id) : null;
  if (button) button.dataset.pressed = "false";
});
