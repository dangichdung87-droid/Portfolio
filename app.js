const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    projectCards.forEach(card => {
      const categories = card.dataset.category.split(" ");
      const show = filter === "all" || categories.includes(filter);
      card.classList.toggle("hidden", !show);
    });
  });
});

const projectData = {
  clinic: {
    type: "Java / Web",
    title: "Clinic Appointment Management",
    description: "A web application concept for managing online clinic appointments. The project includes patient, doctor and staff workflows, appointment scheduling and payment-related business rules.",
    tech: ["Java", "Servlet/JSP", "SQL Server", "Tomcat"]
  },
  employee: {
    type: "Database",
    title: "Employee Management",
    description: "A relational database exercise for managing departments, employees and skills while applying unique constraints, identity columns, relationships and business rules.",
    tech: ["SQL", "Database Design", "Relationships", "Queries"]
  },
  portfolio: {
    type: "Frontend",
    title: "Personal Portfolio",
    description: "This responsive portfolio is built with semantic HTML, CSS and vanilla JavaScript. It includes project filtering, project detail modals, a responsive navigation menu and a contact form interface.",
    tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"]
  }
};

const modal = document.getElementById("projectModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalType = document.getElementById("modalType");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");

function openModal(projectKey) {
  const project = projectData[projectKey];
  if (!project) return;

  modalType.textContent = project.type;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalTech.innerHTML = project.tech.map(item => `<span>${item}</span>`).join("");

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  modalClose.focus();
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".details-btn").forEach(button => {
  button.addEventListener("click", () => openModal(button.dataset.project));
});

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});

const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", event => {
  event.preventDefault();
  formNote.textContent = "Thank you! This demo form is ready for a backend/email service.";
  contactForm.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
