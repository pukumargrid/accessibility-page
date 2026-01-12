document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const countryCode = document.getElementById("countryCode").value;
    const message = document.getElementById("message").value;
    const terms1 = document.getElementById("terms1").checked;
    const terms2 = document.getElementById("terms2").checked;

    const selectedRole = document.querySelector('input[name="role"]:checked');
    const role = selectedRole ? selectedRole.value : "";

    if (!terms1 && !terms2) {
      alert("Please accept at least one terms agreement");
      return;
    }

    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: countryCode + " " + phone,
      role: role,
      message: message,
      terms1: terms1,
      terms2: terms2,
    };

    console.log("Form submitted:", formData);
    alert("Message sent successfully! We will get back to you soon.");

    contactForm.reset();
  });

  const searchBtn = document.querySelector(".search-btn");
  const searchInput = document.getElementById("searchInput");

  searchBtn.addEventListener("click", function () {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
      console.log("Searching for:", searchTerm);
      alert("Searching for: " + searchTerm);
    }
  });

  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchBtn.click();
    }
  });

  const subscribeForm = document.querySelector(".subscribe-form");
  const subscribeBtn = subscribeForm.querySelector("button");
  const subscribeInput = document.getElementById("subscribeEmail");

  subscribeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = subscribeInput.value.trim();

    if (email && email.includes("@")) {
      console.log("Subscribed:", email);
      alert("Thank you for subscribing!");
      subscribeInput.value = "";
    } else {
      alert("Please enter a valid email address");
    }
  });

  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  const learnMoreLinks = document.querySelectorAll(".learn-more");
  learnMoreLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Learn more content coming soon!");
    });
  });

  const languageSelect = document.getElementById("languageSelect");
  languageSelect.addEventListener("change", function () {
    const selectedLanguage = this.options[this.selectedIndex].text;
    console.log("Language changed to:", selectedLanguage);
  });
});
