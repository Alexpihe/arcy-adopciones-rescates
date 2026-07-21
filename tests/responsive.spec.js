import { expect, test } from "@playwright/test";

const viewports = [
  { name: "móvil", width: 390, height: 844 },
  { name: "tableta", width: 768, height: 1024 },
  { name: "escritorio", width: 1440, height: 1000 },
];

for (const viewport of viewports) {
  test(`diseño responsive en ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /Una segunda oportunidad/i })).toBeVisible();
    await expect(page.locator("[data-animal-grid] .animal-card")).toHaveCount(2);
    const bodyWidth = await page.locator("body").evaluate((element) => element.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewport.width + 1);
  });
}

test("flujo de privacidad y descarga", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Quiero adoptar: Perrito por publicar/i }).click();
  const acceptButton = page.getByRole("button", { name: /Aceptar y descargar/i });
  await expect(acceptButton).toBeDisabled();
  await page.locator("[data-privacy-consent]").check();
  await expect(acceptButton).toBeEnabled();

  const downloadPromise = page.waitForEvent("download");
  await acceptButton.click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toContain("Contrato-de-Adopcion-Responsable-ARCY");
  await expect(page.getByRole("heading", { name: "Formato descargado" })).toBeVisible();
});
