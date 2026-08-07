(() => {
  "use strict";

  const CONTRACT_URL = "./assets/documents/contrato-adopcion-responsable-arcy.pdf";
  const CONTRACT_FILENAME = "Contrato-de-Adopcion-Responsable-ARCY.pdf";

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  function initNavigation() {
    const menuToggle = document.querySelector("[data-menu-toggle]");
    const navigation = document.querySelector("[data-navigation]");
    const dropdowns = [...document.querySelectorAll("[data-dropdown]")];

    const closeDropdowns = (except = null) => {
      dropdowns.forEach((dropdown) => {
        if (dropdown === except) return;
        dropdown.classList.remove("is-open");
        dropdown.querySelector("[data-dropdown-toggle]")?.setAttribute("aria-expanded", "false");
      });
    };

    menuToggle?.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      navigation?.classList.toggle("is-open", !isOpen);
      if (isOpen) closeDropdowns();
    });

    dropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector("[data-dropdown-toggle]");
      toggle?.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpen = dropdown.classList.contains("is-open");
        closeDropdowns(dropdown);
        dropdown.classList.toggle("is-open", !isOpen);
        toggle.setAttribute("aria-expanded", String(!isOpen));
      });
    });

    navigation?.addEventListener("click", (event) => {
      if (!(event.target instanceof HTMLAnchorElement)) return;
      menuToggle?.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
      closeDropdowns();
    });

    document.addEventListener("click", (event) => {
      if (!(event.target instanceof Element) || !event.target.closest("[data-dropdown]")) {
        closeDropdowns();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      closeDropdowns();
      menuToggle?.setAttribute("aria-expanded", "false");
      navigation?.classList.remove("is-open");
    });
  }

  function animalCardTemplate(animal) {
    const image = animal.image
      ? `<img src="${escapeHtml(animal.image)}" alt="Fotografía de ${escapeHtml(animal.name)}, perrito adoptable de ARCY" loading="lazy" width="800" height="1000">`
      : `<div class="animal-placeholder" role="img" aria-label="Fotografía pendiente"><span aria-hidden="true">🐾</span><small>Fotografía pendiente</small></div>`;

    const facts = Array.isArray(animal.facts)
      ? animal.facts.map((fact) => `<li>${escapeHtml(fact)}</li>`).join("")
      : "";

    const message = encodeURIComponent(
      `Hola ARCY, quiero adoptar a ${animal.name}. Vi su perfil en la página de adoptables y deseo recibir información sobre el proceso de adopción.`
    );
    const whatsappUrl = `https://wa.me/525523298138?text=${message}`;

    return `<article class="animal-card" data-species="${escapeHtml(animal.species)}" id="${escapeHtml(animal.id)}">
      <div class="animal-image-wrap">${image}<span class="animal-status">En adopción</span></div>
      <div class="animal-card-body">
        <div class="animal-meta">
          <span>${escapeHtml(animal.species)}</span>
          <span>${escapeHtml(animal.sex)}</span>
          <span>${escapeHtml(animal.age)}</span>
        </div>
        <h3>${escapeHtml(animal.name)}</h3>
        <p class="animal-summary">${escapeHtml(animal.description)}</p>
        <ul class="animal-facts" aria-label="Datos principales de ${escapeHtml(animal.name)}">${facts}</ul>
        <details class="animal-story">
          <summary>Conocer su historia</summary>
          <p>${escapeHtml(animal.story)}</p>
        </details>
        <a
          class="button button--whatsapp animal-whatsapp"
          href="${whatsappUrl}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Quiero adoptar a ${escapeHtml(animal.name)} por WhatsApp"
        >Quiero adoptar</a>
      </div>
    </article>`;
  }

  function initAnimals() {
    const grid = document.querySelector("[data-animal-grid]");
    if (!grid) return;

    const animals = Array.isArray(globalThis.animals) ? globalThis.animals : [];
    const chips = [...document.querySelectorAll("[data-filter]")];

    const render = (filter = "all") => {
      const filtered = filter === "all" ? animals : animals.filter((animal) => animal.species === filter);
      if (!filtered.length) {
        grid.innerHTML = `<div class="empty-state"><div><div class="empty-state-icon" aria-hidden="true">🐾</div><h3>Catálogo en actualización</h3><p>ARCY publicará aquí únicamente fotografías, edades y descripciones verificadas.</p><a class="button button--outline" href="https://wa.me/525523298138" target="_blank" rel="noopener noreferrer">Consultar disponibilidad por WhatsApp</a></div></div>`;
        return;
      }
      grid.innerHTML = filtered.map(animalCardTemplate).join("");
    };

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((item) => item.classList.remove("is-active"));
        chip.classList.add("is-active");
        render(chip.dataset.filter || "all");
      });
    });

    render();
  }

  function initAdoptionFlow() {
    const privacyDialog = document.querySelector("[data-privacy-dialog]");
    const privacyForm = document.querySelector("[data-privacy-form]");
    const consentCheckbox = document.querySelector("[data-privacy-consent]");
    const acceptButton = document.querySelector("[data-accept-privacy]");
    const successDialog = document.querySelector("[data-success-dialog]");
    if (!(privacyDialog instanceof HTMLDialogElement) || !(successDialog instanceof HTMLDialogElement)) return;

    let lastTrigger = null;

    const openPrivacy = (trigger) => {
      lastTrigger = trigger;
      if (consentCheckbox instanceof HTMLInputElement) consentCheckbox.checked = false;
      if (acceptButton instanceof HTMLButtonElement) acceptButton.disabled = true;
      privacyDialog.showModal();
    };

    const downloadContract = () => {
      const link = document.createElement("a");
      link.href = CONTRACT_URL;
      link.download = CONTRACT_FILENAME;
      document.body.append(link);
      link.click();
      link.remove();
    };

    document.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) return;
      const trigger = event.target.closest("[data-general-download]");
      if (trigger instanceof HTMLElement) openPrivacy(trigger);
    });

    consentCheckbox?.addEventListener("change", () => {
      if (acceptButton instanceof HTMLButtonElement && consentCheckbox instanceof HTMLInputElement) {
        acceptButton.disabled = !consentCheckbox.checked;
      }
    });

    privacyForm?.addEventListener("submit", (event) => {
      const submitter = event.submitter;
      if (!(submitter instanceof HTMLButtonElement) || submitter.value !== "accept") return;
      event.preventDefault();
      if (!(consentCheckbox instanceof HTMLInputElement) || !consentCheckbox.checked) return;
      downloadContract();
      privacyDialog.close("accept");
      window.setTimeout(() => successDialog.showModal(), 100);
    });

    document.querySelectorAll("[data-close-success]").forEach((button) => {
      button.addEventListener("click", () => {
        successDialog.close();
        lastTrigger?.focus();
      });
    });

    [privacyDialog, successDialog].forEach((dialog) => {
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
          dialog.close();
          lastTrigger?.focus();
        }
      });
    });
  }

  function initCountdown() {
    const countdown = document.querySelector("[data-countdown]");
    if (!(countdown instanceof HTMLElement)) return;

    const target = new Date(countdown.dataset.eventDate || "");
    const end = new Date("2026-08-23T17:00:00-06:00");
    const days = countdown.querySelector("[data-days]");
    const hours = countdown.querySelector("[data-hours]");
    const minutes = countdown.querySelector("[data-minutes]");
    const seconds = countdown.querySelector("[data-seconds]");
    const message = countdown.querySelector("[data-countdown-message]");

    if (Number.isNaN(target.getTime())) {
      if (message) message.textContent = "Fecha pendiente de confirmar.";
      return;
    }

    let timer = null;

    const update = () => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        [days, hours, minutes, seconds].forEach((item) => { if (item) item.textContent = "00"; });
        if (message) message.textContent = now <= end ? "¡El Huellatón está en curso!" : "El Huellatón 2026 ha concluido. Gracias por dejar huella.";
        if (now > end && timer !== null) window.clearInterval(timer);
        return;
      }

      const totalSeconds = Math.floor(difference / 1000);
      const values = {
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor((totalSeconds % 86400) / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
      };
      if (days) days.textContent = String(values.days).padStart(2, "0");
      if (hours) hours.textContent = String(values.hours).padStart(2, "0");
      if (minutes) minutes.textContent = String(values.minutes).padStart(2, "0");
      if (seconds) seconds.textContent = String(values.seconds).padStart(2, "0");
    };

    update();
    timer = window.setInterval(update, 1000);
  }

  document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initAnimals();
    initAdoptionFlow();
    initCountdown();
  });
})();
