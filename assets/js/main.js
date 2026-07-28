
const CONTRACT_URL = "./assets/documents/contrato-adopcion-responsable-arcy.pdf";
const CONTRACT_FILENAME = "Contrato-de-Adopcion-Responsable-ARCY.pdf";

const menuToggle = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-nav]");
const animalGrid = document.querySelector("[data-animal-grid]");
const privacyDialog = document.querySelector("[data-privacy-dialog]");
const privacyForm = document.querySelector("[data-privacy-form]");
const consentCheckbox = document.querySelector("[data-privacy-consent]");
const acceptPrivacyButton = document.querySelector("[data-accept-privacy]");
const successDialog = document.querySelector("[data-success-dialog]");
const generalDownloadButtons = document.querySelectorAll("[data-general-download]");

let selectedAnimal = "Interés general de adopción";
let lastTrigger = null;

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

function animalCardTemplate(animal) {
  const speciesClass = animal.species.toLowerCase() === "gato" ? "cat" : "dog";
  const imageMarkup = animal.image
    ? `<img src="${escapeHtml(animal.image)}" alt="${escapeHtml(animal.name)}" loading="lazy" width="640" height="480" />`
    : `<div class="animal-placeholder animal-placeholder--${speciesClass}" role="img" aria-label="Fotografía pendiente de ${escapeHtml(animal.species.toLowerCase())}">
         <span aria-hidden="true">${speciesClass === "cat" ? "◇" : "♡"}</span>
         <small>Fotografía pendiente</small>
       </div>`;

  return `
    <article class="animal-card${animal.placeholder ? " animal-card--placeholder" : ""}">
      <div class="animal-image-wrap">
        ${imageMarkup}
        <span class="animal-status">${animal.placeholder ? "Información pendiente" : "En adopción"}</span>
      </div>
      <div class="animal-card-body">
        <div class="animal-meta">
          <span>${escapeHtml(animal.species)}</span>
          <span>${escapeHtml(animal.age)}</span>
        </div>
        <h3>${escapeHtml(animal.name)}</h3>
        <p>${escapeHtml(animal.description)}</p>
        <button
          class="button button--primary animal-adopt-button"
          type="button"
          data-adopt-animal="${escapeHtml(animal.name)}"
          aria-label="Quiero adoptar: ${escapeHtml(animal.name)}"
        >
          Quiero adoptar
        </button>
      </div>
    </article>
  `;
}

function renderAnimals() {
  if (!animalGrid) return;

  const catalog = Array.isArray(globalThis.animals) ? globalThis.animals : [];

  if (!catalog.length) {
    animalGrid.innerHTML = `
      <div class="empty-state animal-empty-state">
        <div class="empty-state-icon" aria-hidden="true">♡</div>
        <div>
          <h3>Catálogo en preparación.</h3>
          <p>ARCY publicará aquí los animales con datos confirmados.</p>
        </div>
      </div>`;
    return;
  }

  animalGrid.innerHTML = catalog.map(animalCardTemplate).join("");
}

function openPrivacyDialog(trigger, animalName = "Interés general de adopción") {
  selectedAnimal = animalName;
  lastTrigger = trigger;
  consentCheckbox.checked = false;
  acceptPrivacyButton.disabled = true;

  if (typeof privacyDialog.showModal === "function") {
    privacyDialog.showModal();
  } else {
    privacyDialog.setAttribute("open", "");
  }
}

function downloadContract() {
  const link = document.createElement("a");
  link.href = CONTRACT_URL;
  link.download = CONTRACT_FILENAME;
  link.dataset.selectedAnimal = selectedAnimal;
  document.body.append(link);
  link.click();
  link.remove();
}

function openSuccessDialog() {
  if (typeof successDialog.showModal === "function") {
    successDialog.showModal();
  } else {
    successDialog.setAttribute("open", "");
  }
}

function closeSuccessDialog() {
  if (typeof successDialog.close === "function") {
    successDialog.close();
  } else {
    successDialog.removeAttribute("open");
  }
  lastTrigger?.focus();
}

renderAnimals();

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  navigation?.classList.toggle("is-open", !isOpen);
});

navigation?.addEventListener("click", (event) => {
  if (!(event.target instanceof HTMLAnchorElement)) return;
  menuToggle?.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const adoptButton = target.closest("[data-adopt-animal]");
  if (adoptButton instanceof HTMLButtonElement) {
    openPrivacyDialog(adoptButton, adoptButton.dataset.adoptAnimal);
  }
});

generalDownloadButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openPrivacyDialog(button);
  });
});

consentCheckbox?.addEventListener("change", () => {
  acceptPrivacyButton.disabled = !consentCheckbox.checked;
});

privacyForm?.addEventListener("submit", (event) => {
  const submitter = event.submitter;
  if (!(submitter instanceof HTMLButtonElement) || submitter.value !== "accept") return;

  event.preventDefault();
  if (!consentCheckbox.checked) return;

  downloadContract();
  if (typeof privacyDialog.close === "function") {
    privacyDialog.close("accept");
  } else {
    privacyDialog.removeAttribute("open");
  }
  window.setTimeout(openSuccessDialog, 120);
});

successDialog?.querySelectorAll("[data-close-success]").forEach((button) => {
  button.addEventListener("click", closeSuccessDialog);
});

[privacyDialog, successDialog].forEach((dialog) => {
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
      lastTrigger?.focus();
    }
  });
});
