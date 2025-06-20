// Feature toggle functionality for Why Choose section
function toggleFeature(element) {
  const isActive = element.classList.contains("active");
  // Close all feature items
  document.querySelectorAll(".feature-item").forEach((item) => {
    item.classList.remove("active");
    const toggle = item.querySelector(".feature-toggle");
    if (toggle) {
      toggle.textContent = "+";
    }
  });
  // Open clicked item if it wasn't active
  if (!isActive) {
    element.classList.add("active");
    const toggle = element.querySelector(".feature-toggle");
    if (toggle) {
      toggle.textContent = "−";
    }
  }
}
// Enhanced mobile touch handling for feature items
document.addEventListener("DOMContentLoaded", function () {
  const featureItems = document.querySelectorAll(".feature-item");
  featureItems.forEach((item) => {
    // Add touch feedback
    item.addEventListener("touchstart", function () {
      this.style.backgroundColor = "#f0f0f0";
    });
    item.addEventListener("touchend", function () {
      setTimeout(() => {
        this.style.backgroundColor = "";
      }, 150);
    });
    // Prevent double-tap zoom on mobile
    item.addEventListener("touchend", function (e) {
      e.preventDefault();
      toggleFeature(this);
    });
  });
});
// Form submission handlers
document.getElementById("heroForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  alert("Thank you for your interest! We will contact you soon.");
  this.reset();
});
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  alert(
    "Appointment request submitted successfully! We will contact you to confirm."
  );
  this.reset();
});
document.getElementById("planForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  alert("Consultation booked successfully! We will contact you soon.");
  this.reset();
});
// FAQ toggle functionality
function toggleFAQ(element) {
  const faqItem = element.parentElement;
  const isActive = faqItem.classList.contains("active");
  // Close all FAQ items
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.classList.remove("active");
  });

  // Open clicked item if it wasn't active
  if (!isActive) {
    faqItem.classList.add("active");
  }
}
// Button click handlers
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    if (
      this.textContent.includes("Book") ||
      this.textContent.includes("Consultation")
    ) {
      if (this.type !== "submit") {
        e.preventDefault();
        alert("Redirecting to booking form...");
        document
          .querySelector(".hero-right")
          .scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});
// Plan buy button
document.querySelector(".plan-buy-btn").addEventListener("click", function () {
  alert("Redirecting to payment gateway...");
});
// Learn more links
document.querySelectorAll(".learn-more").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    alert(
      "More information about our safety protocols will be displayed here."
    );
  });
});
// City card clicks
document.querySelectorAll(".city-card").forEach((card) => {
  card.addEventListener("click", function () {
    const cityName = this.querySelector(".city-name").textContent;
    alert(`Showing clinics in ${cityName}...`);
  });
});
// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
// Form validation
document.querySelectorAll('input[type="tel"]').forEach((input) => {
  input.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
  });
});
// Checkbox validation
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", function (e) {
    const checkbox = this.querySelector('input[type="checkbox"]');
    if (checkbox && !checkbox.checked) {
      e.preventDefault();
      alert("Please agree to the terms and conditions.");
    }
  });
});
// Loading states for buttons
document.querySelectorAll('button[type="submit"]').forEach((button) => {
  button.addEventListener("click", function () {
    const originalText = this.textContent;
    this.textContent = "Processing...";
    this.disabled = true;
    setTimeout(() => {
      this.textContent = originalText;
      this.disabled = false;
    }, 2000);
  });
});
