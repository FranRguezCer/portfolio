// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Apply smooth scroll only for links with hash (#)
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 56, // Adjust to avoid the navbar
          behavior: 'smooth'
        });
      }
    }
    // Allow default behavior for external or different page links
  });
});

// Add Font Awesome icons to the footer
document.addEventListener('DOMContentLoaded', () => {
  const footerIcons = document.querySelector('footer div');
  footerIcons.innerHTML += `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  `;
});

// Language management
document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("lang-toggle");
  const lang = localStorage.getItem("lang") || "en";
  const page = window.location.pathname.split("/").pop().split(".")[0] || "index";

  setLanguage(lang, page);

  langToggle.addEventListener("click", () => {
    const currentLang = localStorage.getItem("lang") || "en";
    const newLang = currentLang === "en" ? "es" : "en";
    setLanguage(newLang, page);
    localStorage.setItem("lang", newLang);
  });
});

// Function to set the language for the page
function setLanguage(lang, page) {
  const elements = document.querySelectorAll("[data-i18n]");
  const langFile = `lang/${page}_${lang}.json`;

  fetch(langFile)
    .then((response) => response.json())
    .then((translations) => {
      elements.forEach((el) => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[key] || el.textContent;
      });

      // Update the CV links (Navbar and About Me)
      const cvLinks = document.querySelectorAll('[data-i18n="view_cv"], [data-i18n="view_cv_main"]');
      const cvFile = lang === "en" 
        ? "assets/cv/Francisco_Rodriguez_CV_en.pdf" 
        : "assets/cv/Francisco_Rodriguez_CV_es.pdf";

      cvLinks.forEach(link => link.setAttribute("href", cvFile));
    })
    .catch((error) => console.error("Error loading language file:", error));

  // Toggle the language button icon without border and larger size
  const langToggle = document.getElementById("lang-toggle");
  langToggle.innerHTML = lang === "en" 
    ? '<img src="assets/img/flag-es.png" alt="Spanish Flag" style="width: 32px; height: 20px; border: none;">' 
    : '<img src="assets/img/flag-uk.png" alt="UK Flag" style="width: 32px; height: 20px; border: none;">';

  langToggle.style.border = "none";
  langToggle.style.padding = "0";
  langToggle.style.background = "transparent";
  langToggle.style.outline = "none";
}
