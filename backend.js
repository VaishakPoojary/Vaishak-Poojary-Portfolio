// Theme Toggle
const toggleBtn = document.getElementById("themeToggle");

function updateThemeIcon() {
  const currentTheme = document.body.getAttribute("data-bs-theme");
  toggleBtn.innerHTML =
    currentTheme === "dark"
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
}

toggleBtn.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.body.setAttribute("data-bs-theme", newTheme);
  updateThemeIcon();
});

updateThemeIcon(); // Initialize icon

// Typing effect for roles
const roles = ["Data Analyst", "Power BI Developer", "Excel Expert", "Tableau Creator"];
let index = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-role");

function typeRole() {
  if (charIndex < roles[index].length) {
    typedText.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(eraseRole, 1500);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    typedText.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(typeRole, 300);
  }
}

document.addEventListener("DOMContentLoaded", typeRole);



document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  const text = `Hi, I'm ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;

  // Replace with your phone number (with country code, no +)
  const whatsappNumber = "9136719084"; 

  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
});


