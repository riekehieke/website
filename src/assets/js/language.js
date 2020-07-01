if (!NodeList.prototype.forEach) NodeList.prototype.forEach = Array.prototype.forEach;

let german = JSON.parse((localStorage.getItem('german') || true));
function toggleLanguage() {
  german = !german;
  localStorage.setItem('german', german)
  setLanguage(german);
}
function setLanguage() {
  console.log(`Switched to ${german ? 'German' : 'English'}`);
  document.querySelectorAll('[data-de]').forEach(el => el.innerHTML = el.dataset[german ? 'de' : 'en']);
}