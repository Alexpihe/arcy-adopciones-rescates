import { access, cp, mkdir, readFile, rm } from "node:fs/promises";
import { constants } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const output = resolve(root, "dist");
const required = [
  "index.html",
  "assets/css/styles.css",
  "assets/js/animals.js",
  "assets/js/main.js",
  "assets/images/arcy-logo-transparente.png",
  "assets/documents/contrato-adopcion-responsable-arcy.pdf",
];

for (const relativePath of required) {
  try {
    await access(resolve(root, relativePath), constants.R_OK);
  } catch {
    throw new Error(`Falta un archivo obligatorio para el despliegue: ${relativePath}`);
  }
}

const html = await readFile(resolve(root, "index.html"), "utf8");
for (const relativePath of required.slice(1)) {
  const browserPath = `./${relativePath}`;
  if (!html.includes(browserPath) && !relativePath.endsWith("animals.js")) {
    throw new Error(`index.html no referencia el recurso esperado: ${browserPath}`);
  }
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(resolve(root, "index.html"), resolve(output, "index.html"));
await cp(resolve(root, "assets"), resolve(output, "assets"), { recursive: true });

console.log("Construcción terminada: dist/index.html y dist/assets/ están listos para Netlify.");
