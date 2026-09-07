// Replace this with the KYRA Bottles WhatsApp number in international format.
// Example for India: 919876543210 (no +, spaces or dashes).
const WHATSAPP_NUMBER = "918400509922";

const menu = document.querySelector(".menu");
const nav = document.querySelector("#navlinks");

menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", open);
});

document.querySelectorAll("#navlinks a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.querySelector("#quoteForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const business = document.querySelector("#business").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const type = document.querySelector("#type").value;
  const details = document.querySelector("#details").value.trim();

  const message =
`Hello KYRA Bottles,

I want a quote for custom-branded bottles.

Name: ${name}
Business: ${business}
Phone: ${phone}
Requirement: ${type}
Details: ${details || "Not specified"}

Please share pricing, MOQ and available bottle options.`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});
