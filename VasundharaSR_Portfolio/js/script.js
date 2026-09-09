// script.js
// Renders all dynamic content from data.js into the DOM and wires up
// every interactive feature: nav toggle, theme switch, project filter,
// project modal, favourites (localStorage), and contact form validation.

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderInternships();
  renderEducation();

  initNavToggle();
  initThemeToggle();
  initScrollTop();
  initModal();
  initContactForm();

  document.getElementById("year").textContent = new Date().getFullYear();
});

/* ---------------------------------------------------------------------- */
/* Rendering helpers                                                      */
/* ---------------------------------------------------------------------- */

const renderHero = () => {
  const statsList = document.getElementById("statsList");
  // map + template literals — builds the stat pills from an array of objects
  statsList.innerHTML = stats
    .map(({ value, label }) => `
      <li>
        <span class="stat-value">${value}</span>
        <span class="stat-label">${label}</span>
      </li>`)
    .join("");
};

const renderAbout = () => {
  document.getElementById("aboutSummary").textContent = profile.summary;

  const learningPathEl = document.getElementById("learningPath");
  learningPathEl.innerHTML = learningPath.map((step) => `<li>${step}</li>`).join("");

  const highlightListEl = document.getElementById("highlightList");
  highlightListEl.innerHTML = highlights
    .map(({ title, desc }) => `<li><strong>${title}</strong><span>${desc}</span></li>`)
    .join("");
};

const renderSkills = () => {
  document.getElementById("toolsList").innerHTML = skillTools
    .map((tool) => `<li>${tool}</li>`)
    .join("");

  document.getElementById("softSkillsList").innerHTML = softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");

  document.getElementById("proficiencyList").innerHTML = skillProficiency
    .map(({ skill, level }) => `
      <div class="dl-row">
        <dt>${skill}</dt>
        <dd>${level}</dd>
      </div>`)
    .join("");
};

// --- Projects: data-driven cards + tag filter + favourites ---------------

const FAVORITES_KEY = "portfolio_favoriteProjects";
const getFavorites = () => JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
const saveFavorites = (list) => localStorage.setItem(FAVORITES_KEY, JSON.stringify(list));

const toggleFavorite = (id) => {
  const current = getFavorites();
  const updated = current.includes(id)
    ? current.filter((favId) => favId !== id)
    : [...current, id]; // spread — add without mutating the original array
  saveFavorites(updated);
  return updated;
};

const buildProjectCard = (project) => {
  const { id, title, subtitle, description, image, tags, github, demo } = project;
  const favorites = getFavorites();
  const isFav = favorites.includes(id);

  const links = [
    github && `<a href="${github}" target="_blank" rel="noopener" onclick="event.stopPropagation()">GitHub ↗</a>`,
    demo && `<a href="${demo}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Live Demo ↗</a>`,
  ].filter(Boolean).join("");

  const card = document.createElement("article");
  card.className = "project-card";
  card.dataset.id = id;
  card.dataset.tags = tags.join(",");
  card.innerHTML = `
    <img src="${image}" alt="${title} project preview" loading="lazy">
    <div class="project-card-body">
      <div class="project-card-heading">
        <div>
          <h3>${title}</h3>
          <p class="card-subtitle">${subtitle}</p>
        </div>
        <button class="favorite-btn${isFav ? " is-fav" : ""}" aria-label="Toggle favourite">${isFav ? "★" : "☆"}</button>
      </div>
      <p class="card-desc">${description}</p>
      <ul class="card-tags">${tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
      <div class="card-links">${links || "<span>Private repository</span>"}</div>
    </div>
  `;

  card.querySelector(".favorite-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    const updated = toggleFavorite(id);
    const isNowFav = updated.includes(id);
    e.currentTarget.textContent = isNowFav ? "★" : "☆";
    e.currentTarget.classList.toggle("is-fav", isNowFav);
  });

  card.addEventListener("click", () => openProjectModal(project));

  return card;
};

const renderProjectCards = (activeTag = "All") => {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = "";

  const visible = activeTag === "All"
    ? projects
    : projects.filter((p) => p.tags.includes(activeTag));

  visible.forEach((project) => grid.appendChild(buildProjectCard(project)));

  if (!visible.length) {
    grid.innerHTML = `<p style="color:var(--text-muted)">No projects match "${activeTag}".</p>`;
  }
};

const renderFilterBar = () => {
  // Build a unique tag list from every project's tags array
  const allTags = projects.flatMap((p) => p.tags);
  const uniqueTags = ["All", ...new Set(allTags)];

  const filterBar = document.getElementById("filterBar");
  filterBar.innerHTML = uniqueTags
    .map((tag, i) => `<button class="filter-btn${i === 0 ? " active" : ""}" data-tag="${tag}">${tag}</button>`)
    .join("");

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjectCards(btn.dataset.tag);
  });
};

const renderProjects = () => {
  renderFilterBar();
  renderProjectCards();
};

const renderInternships = () => {
  const tbody = document.getElementById("internshipsBody");
  tbody.innerHTML = internships
    .map(({ org, role, period, description }) => `
      <tr>
        <td>${org}</td>
        <td>${role}</td>
        <td>${period}</td>
        <td>${description}</td>
      </tr>`)
    .join("");
};

const renderEducation = () => {
  const tbody = document.getElementById("educationBody");
  tbody.innerHTML = education
    .map(({ institution, degree, period, description }) => `
      <tr>
        <td>${institution}</td>
        <td>${degree}</td>
        <td>${period}</td>
        <td>${description}</td>
      </tr>`)
    .join("");

  document.getElementById("certList").innerHTML = certifications
    .map(({ name, issuer }) => `<li>${name}<span>${issuer}</span></li>`)
    .join("");
};

/* ---------------------------------------------------------------------- */
/* Interactive UI behaviours                                              */
/* ---------------------------------------------------------------------- */

// 1. Mobile hamburger nav toggle
const initNavToggle = () => {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.classList.toggle("active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the menu after a link is tapped (mobile)
  menu.querySelectorAll(".nav-link").forEach((link) =>
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
};

// 2. Dark / light theme switch, persisted in localStorage
const THEME_KEY = "portfolio_theme";

const THEME_ICONS = {
  // Icon shown = the mode a click will switch TO
  sun: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg>',
  moon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>',
};

const initThemeToggle = () => {
  const btn = document.getElementById("themeToggle");
  const saved = localStorage.getItem(THEME_KEY) || "light";
  applyTheme(saved);

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "light" ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });
};

const applyTheme = (theme) => {
  const isDark = theme === "dark";
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  // In dark mode, show the sun (click to go light); in light mode, show the moon (click to go dark).
  document.getElementById("themeToggle").innerHTML = isDark ? THEME_ICONS.sun : THEME_ICONS.moon;
};

// 3. Fixed scroll-to-top button
const initScrollTop = () => {
  const btn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 400);
  });

  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
};

// 4. Project detail modal
const initModal = () => {
  const overlay = document.getElementById("modalOverlay");
  document.getElementById("modalClose").addEventListener("click", closeProjectModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeProjectModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProjectModal();
  });
};

const openProjectModal = ({ title, subtitle, longDescription, image, tags, github, demo }) => {
  document.getElementById("modalImage").src = image;
  document.getElementById("modalImage").alt = `${title} preview`;
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalSubtitle").textContent = subtitle;
  document.getElementById("modalDescription").textContent = longDescription;
  document.getElementById("modalTags").innerHTML = tags.map((tag) => `<li>${tag}</li>`).join("");

  const links = [
    github && `<a class="btn btn-outline" href="${github}" target="_blank" rel="noopener">GitHub Repo</a>`,
    demo && `<a class="btn btn-primary" href="${demo}" target="_blank" rel="noopener">Live Demo</a>`,
  ].filter(Boolean).join("");
  document.getElementById("modalLinks").innerHTML = links || "<span>Private repository</span>";

  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
};

const closeProjectModal = () => {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
};

/* ---------------------------------------------------------------------- */
/* Contact form — regex validation, inline messages, no reload            */
/* ---------------------------------------------------------------------- */

const VALIDATORS = {
  name: {
    regex: /^[A-Za-z][A-Za-z\s'-]{1,49}$/,
    message: "Enter a name with at least 2 letters (letters, spaces, hyphens only).",
  },
  email: {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Enter a valid email address, e.g. name@example.com.",
  },
  message: {
    regex: /^.{10,500}$/s,
    message: "Message must be between 10 and 500 characters.",
  },
};

const validateField = (fieldName, value) => {
  const { regex, message } = VALIDATORS[fieldName];
  const isValid = regex.test(value.trim());

  const group = document.getElementById(fieldName).closest(".form-group");
  const errorEl = document.getElementById(`${fieldName}Error`);

  group.classList.toggle("invalid", !isValid);
  group.classList.toggle("valid", isValid);
  errorEl.textContent = isValid ? "" : message;

  return isValid;
};

const initContactForm = () => {
  const form = document.getElementById("contactForm");
  const successEl = document.getElementById("formSuccess");
  const fields = ["name", "email", "message"];

  // Validate as the user types / leaves a field
  fields.forEach((fieldName) => {
    const input = document.getElementById(fieldName);
    input.addEventListener("input", () => validateField(fieldName, input.value));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // no page reload

    const values = fields.reduce((acc, fieldName) => {
      acc[fieldName] = document.getElementById(fieldName).value;
      return acc;
    }, {});

    const allValid = fields
      .map((fieldName) => validateField(fieldName, values[fieldName]))
      .every(Boolean);

    if (!allValid) {
      successEl.textContent = "";
      return;
    }

    const { name } = values;
    successEl.textContent = `Thanks, ${name}! Your message has been noted — I'll get back to you soon.`;
    form.reset();
    fields.forEach((fieldName) => {
      document.getElementById(fieldName).closest(".form-group").classList.remove("valid", "invalid");
    });
  });
};
