console.log("Workin")
document.getElementById('ass').addEventListener('click', changeVisibility, null);
function changeVisibility() {
  document.getElementById('Sel').classList.add('show');
}
console.log("gb workin")
document.getElementById('go-btn').addEventListener('click', redirectToWebsite, null);

function redirectToWebsite() {
  window.location.href = "https://eaglercraft.ru";
}
