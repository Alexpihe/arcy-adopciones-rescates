(() => {
  "use strict";
  function initStaticCatalogFilters() {
    const root = document.querySelector("[data-catalog-root]");
    if (!root) return;
    const cards = [...root.querySelectorAll("[data-catalog-status]")];
    const filters = [...root.querySelectorAll("[data-catalog-filter]")];
    const applyFilter = (filter) => {
      cards.forEach((card) => { card.hidden = !(filter === "all" || card.dataset.catalogStatus === filter); });
      filters.forEach((button) => {
        const active = button.dataset.catalogFilter === filter;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
    };
    filters.forEach((button) => button.addEventListener("click", () => applyFilter(button.dataset.catalogFilter || "all")));
    applyFilter("all");
  }
  document.addEventListener("DOMContentLoaded", initStaticCatalogFilters);
})();
