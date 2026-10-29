/* ============================================================
   main.js — portfolio behavior
   ============================================================ */
(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // --------- storage helpers (safe in private windows) ---------
  const storage = {
    get(k) { try { return localStorage.getItem(k); } catch (_) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (_) {} }
  };

  // --------- language ---------
  function getDict(lang) { return TRANSLATIONS[lang] || TRANSLATIONS.fr; }

  function resolve(path, dict) {
    return path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), dict);
  }

  function applyLanguage(lang) {
    const dict = getDict(lang);
    document.documentElement.setAttribute("lang", lang);

    // text nodes
    $$("[data-i18n]").forEach((el) => {
      const path = el.getAttribute("data-i18n");
      const value = resolve(path, dict);
      if (typeof value === "string") {
        if (el.hasAttribute("data-i18n-attr")) {
          el.setAttribute(el.getAttribute("data-i18n-attr"), value);
        } else {
          el.textContent = value;
        }
      }
    });

    // page title
    document.title = dict.meta.title;

    // CV link
    const cv = $("#cvDownload");
    if (cv) {
      cv.setAttribute("href", `assets/cv/CV_Arije_Trabelsi_${lang.toUpperCase()}.pdf`);
      cv.setAttribute("download", `CV_Arije_Trabelsi_${lang.toUpperCase()}.pdf`);
    }

    // lang toggle state
    const toggle = $("#langToggle");
    if (toggle) toggle.setAttribute("aria-checked", lang === "en" ? "true" : "false");

    // rebuild dynamic sections (labels change)
    renderSkills(lang);
    renderProjects(lang, currentFilter);
    renderCertificates(lang);
    updateFilterLabels(lang);

    storage.set("portfolio.lang", lang);
  }

  // --------- skills ---------
  function renderSkills(lang) {
    const dict = getDict(lang);
    const grid = $("#skillsGrid");
    if (!grid) return;

    grid.innerHTML = SKILLS.map((s, i) => {
      const title = dict.skills.cats[s.key] || s.key;
      const tags = s.tags.map((t) => `<span class="skill-card__tag">${t}</span>`).join("");
      return `
        <article class="skill-card reveal">
          <span class="skill-card__num">0${i + 1}</span>
          <h3 class="skill-card__title">${title}</h3>
          <div class="skill-card__tags">${tags}</div>
        </article>
      `;
    }).join("");

    observeReveal(grid);
  }

  // --------- projects ---------
  let currentFilter = "all";

  function renderProjects(lang, filter) {
    const dict = getDict(lang);
    const grid = $("#projectsGrid");
    if (!grid) return;

    grid.innerHTML = PROJECTS.map((p, i) => {
      const item = dict.projects.items[p.key] || { title: p.key, desc: "", category: "" };
      const hidden = filter !== "all" && !p.categories.includes(filter);
      const tools = p.tools.map((t) => `<span class="project__tag">${t}</span>`).join("");
      const num = String(i + 1).padStart(2, "0");
      const href = p.doc || p.github;
      const label = p.doc ? dict.projects.viewDoc : dict.projects.viewGithub;
      return `
        <article class="project reveal ${hidden ? "is-hidden" : ""}" data-cats="${p.categories.join(" ")}">
          <span class="project__num">PROJECT · ${num}</span>
          <h3 class="project__title">${item.title}</h3>
          <p class="project__desc">${item.desc}</p>
          <div class="project__tags">${tools}</div>
          <div class="project__footer">
            <span class="project__category">${item.category}</span>
            <a href="${href}" target="_blank" rel="noopener noreferrer" class="project__link">
              ${label}
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>
            </a>
          </div>
        </article>
      `;
    }).join("");

    observeReveal(grid);
  }

  function updateFilterLabels(lang) {
    const dict = getDict(lang);
    const map = {
      all: dict.projects.filterAll,
      bi: dict.projects.filterBi,
      data: dict.projects.filterData,
      web: dict.projects.filterWeb,
      ia: dict.projects.filterIa
    };
    $$(".filter").forEach((f) => {
      const key = f.getAttribute("data-filter");
      if (map[key]) f.textContent = map[key];
    });
  }

  function setupFilters() {
    const container = $("#projectFilters");
    if (!container) return;
    container.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter");
      if (!btn) return;
      currentFilter = btn.getAttribute("data-filter");
      $$(".filter", container).forEach((f) => {
        const active = f === btn;
        f.classList.toggle("is-active", active);
        f.setAttribute("aria-selected", active ? "true" : "false");
      });
      renderProjects(currentLang(), currentFilter);
    });
  }

  // --------- certificates (fanned stack with navigation) ---------
  let certOrder = [];        // order[0] is on top
  let certTopIndex = 0;      // top card index in CERTIFICATES
  let certFanned = false;

  function renderCertificates(lang) {
    const dict = getDict(lang);
    const stack = $("#certStack");
    if (!stack) return;

    const total = CERTIFICATES.length;

    stack.innerHTML = CERTIFICATES.map((c, i) => {
      const item = dict.certificates.items[c.key] || { title: c.key, date: "" };
      const initials = item.title
        .split(/\s+/)
        .filter(Boolean)
        .map((w) => w[0])
        .join("")
        .slice(0, 3)
        .toUpperCase();

      return `
        <article class="cert" data-index="${i}" role="group" aria-label="${item.title}">
          <header class="cert__header">
            <span class="cert__issuer">${dict.certificates.issuer}</span>
          </header>
          <h3 class="cert__title">${item.title}</h3>
          <div class="cert__meta">
            <span class="cert__badge" aria-hidden="true">${initials}</span>
            <a href="${c.file}" target="_blank" rel="noopener noreferrer" class="cert__link">
              ${dict.certificates.view}
              <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>
            </a>
          </div>
        </article>
      `;
    }).join("");

    // dots
    const dots = $("#certDots");
    if (dots) {
      dots.innerHTML = CERTIFICATES.map((_, i) => {
        return `<button type="button" class="cert-nav__dot" data-dot="${i}" role="tab" aria-label="Certificat ${i + 1}"></button>`;
      }).join("");
    }

    // keep order on language switch if valid; otherwise reset
    if (certOrder.length !== total) {
      certOrder = CERTIFICATES.map((_, i) => i);
      certTopIndex = 0;
    }

    layoutCertificates();
    bindCertificateEvents(stack);
    observeReveal(stack);
  }

  function layoutCertificates() {
    const stack = $("#certStack");
    if (!stack) return;
    const cards = $$(".cert", stack);
    const total = cards.length;
    if (!total) return;

    cards.forEach((card) => {
      const i = Number(card.getAttribute("data-index"));
      const pos = certOrder.indexOf(i);         // 0 = on top
      const spread = 10;
      const yStep = 14;
      const centerIndex = (total - 1) / 2;

      card.style.zIndex = String(total - pos);
      card.classList.toggle("is-top", pos === 0);

      if (certFanned) {
        const offset = pos - centerIndex;
        const rot = offset * spread * 0.7;
        const tx = offset * 44;
        const ty = Math.abs(offset) * 10;
        card.style.transform = `translateX(calc(-50% + ${tx}px)) translateY(${ty}px) rotate(${rot}deg)`;
      } else {
        card.style.transform = `translateX(-50%) translateY(${pos * yStep}px) rotate(${(pos - centerIndex) * 2}deg)`;
      }
    });

    // dots
    certTopIndex = certOrder[0];
    $$(".cert-nav__dot").forEach((d) => {
      const i = Number(d.getAttribute("data-dot"));
      const active = i === certTopIndex;
      d.classList.toggle("is-active", active);
      d.setAttribute("aria-selected", active ? "true" : "false");
    });
  }

  function bringCertToFront(index) {
    const pos = certOrder.indexOf(index);
    if (pos < 0) return;
    certOrder.splice(pos, 1);
    certOrder.unshift(index);
    layoutCertificates();
  }

  function cycleCert(dir) {
    // dir: +1 = next, -1 = previous
    const total = certOrder.length;
    if (!total) return;
    if (dir > 0) {
      // move current top to end
      certOrder.push(certOrder.shift());
    } else {
      // move last to top
      certOrder.unshift(certOrder.pop());
    }
    layoutCertificates();
  }

  function bindCertificateEvents(stack) {
    if (stack._certBound) return;
    stack._certBound = true;

    stack.addEventListener("mouseenter", () => { certFanned = true; layoutCertificates(); });
    stack.addEventListener("mouseleave", () => { certFanned = false; layoutCertificates(); });

    stack.addEventListener("click", (e) => {
      // let certificate links through
      if (e.target.closest(".cert__link")) return;
      const card = e.target.closest(".cert");
      if (!card) return;
      e.preventDefault();
      const i = Number(card.getAttribute("data-index"));
      bringCertToFront(i);
    });

    stack.addEventListener("focusin", (e) => {
      const card = e.target.closest(".cert");
      if (card) {
        certFanned = true;
        bringCertToFront(Number(card.getAttribute("data-index")));
      }
    });
    stack.addEventListener("focusout", () => {
      setTimeout(() => {
        if (!stack.contains(document.activeElement)) {
          certFanned = false;
          layoutCertificates();
        }
      }, 60);
    });

    const prev = $("#certPrev");
    const next = $("#certNext");
    if (prev) prev.addEventListener("click", () => cycleCert(-1));
    if (next) next.addEventListener("click", () => cycleCert(+1));

    const dots = $("#certDots");
    if (dots) {
      dots.addEventListener("click", (e) => {
        const d = e.target.closest(".cert-nav__dot");
        if (!d) return;
        bringCertToFront(Number(d.getAttribute("data-dot")));
      });
    }
  }

  // --------- navigation ---------
  function setupNav() {
    const nav = $("#nav");
    const hamburger = $("#hamburger");
    const links = $("#navLinks");

    // sticky border on scroll
    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // mobile toggle
    hamburger.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      hamburger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        links.classList.remove("is-open");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });

    // section highlighting
    const sectionIds = ["about", "skills", "experience", "projects", "certificates", "contact"];
    const sectionEls = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const linkMap = new Map(
      $$("#navLinks a").map((a) => [a.getAttribute("href").slice(1), a])
    );

    const highlight = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            linkMap.forEach((a) => a.classList.remove("is-current"));
            const link = linkMap.get(entry.target.id);
            if (link) link.classList.add("is-current");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sectionEls.forEach((s) => highlight.observe(s));
  }

  // --------- language toggle ---------
  function setupLangToggle() {
    const toggle = $("#langToggle");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      const next = currentLang() === "fr" ? "en" : "fr";
      applyLanguage(next);
    });
    // keyboard
    toggle.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle.click();
      }
    });
  }

  function currentLang() {
    return document.documentElement.getAttribute("lang") || "fr";
  }

  // --------- copy email ---------
  function setupCopyEmail() {
    const btn = $("#copyEmail");
    const toast = $("#toast");
    if (!btn) return;
    const email = "erij.trabelsi@esen.tn";
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(email);
      } catch (_) {
        // fallback
        const t = document.createElement("textarea");
        t.value = email;
        document.body.appendChild(t);
        t.select();
        try { document.execCommand("copy"); } catch (_) {}
        document.body.removeChild(t);
      }
      const dict = getDict(currentLang());
      toast.textContent = dict.contact.copied;
      toast.classList.add("is-visible");
      clearTimeout(toast._t);
      toast._t = setTimeout(() => toast.classList.remove("is-visible"), 1800);
    });
  }

  // --------- contact form ---------
  function setupContactForm() {
    const form = $("#contactForm");
    if (!form) return;
    const toast = $("#toast");
    const fileInput = $("#cf-file");
    const fileText = $("#cf-file-text");

    if (fileInput && fileText) {
      const initialText = fileText.textContent;
      fileInput.addEventListener("change", () => {
        const f = fileInput.files && fileInput.files[0];
        fileText.textContent = f ? f.name : (getDict(currentLang()).contact.form.filePlaceholder || initialText);
      });
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const dict = getDict(currentLang()).contact.form;
      const email = $("#cf-email").value.trim();
      const subject = $("#cf-subject").value.trim();
      const message = $("#cf-message").value.trim();
      const file = fileInput && fileInput.files && fileInput.files[0];

      if (!email || !subject || !message) {
        showToast(dict.error);
        return;
      }

      const bodyLines = [
        message,
        "",
        "---",
        "From: " + email
      ];
      if (file) {
        bodyLines.push("Attached file (please attach from your email client): " + file.name);
      }

      const mailto =
        "mailto:erij.trabelsi@esen.tn" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));

      showToast(dict.sent);
      window.location.href = mailto;
    });

    function showToast(msg) {
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.add("is-visible");
      clearTimeout(toast._t);
      toast._t = setTimeout(() => toast.classList.remove("is-visible"), 2600);
    }
  }

  // --------- scroll reveal ---------
  let revealObserver;
  function setupReveal() {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    $$(".reveal, .section, .experience, .about__text, .about__side").forEach((el) => {
      el.classList.add("reveal");
      revealObserver.observe(el);
    });
  }
  function observeReveal(root) {
    if (!revealObserver) return;
    $$(".reveal", root).forEach((el) => {
      if (!el.classList.contains("is-visible")) revealObserver.observe(el);
    });
  }

  // --------- init ---------
  document.addEventListener("DOMContentLoaded", () => {
    const saved = storage.get("portfolio.lang");
    const initial = saved === "en" || saved === "fr" ? saved : "fr";

    setupNav();
    setupLangToggle();
    setupFilters();
    setupCopyEmail();
    setupContactForm();
    setupReveal();

    applyLanguage(initial);
  });
})();
