import { access, readFile, stat } from "node:fs/promises";
import { constants } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const checks = [
  "index.html",
  "netlify.toml",
  "assets/css/styles.css",
  "assets/js/animals.js",
  "assets/js/main.js",
  "assets/images/arcy-logo-transparente.png",
  "assets/documents/contrato-adopcion-responsable-arcy.pdf",
];

for (const relativePath of checks) {
  await access(resolve(root, relativePath), constants.R_OK);
  const info = await stat(resolve(root, relativePath));
  if (!info.isFile() || info.size === 0) {
    throw new Error(`Archivo inválido o vacío: ${relativePath}`);
  }
}

const html = await readFile(resolve(root, "index.html"), "utf8");
const forbiddenAbsoluteAssetPaths = /(href|src)=["']\/(?!\/)/g;
if (forbiddenAbsoluteAssetPaths.test(html)) {
  throw new Error("index.html contiene rutas absolutas. Usa rutas relativas ./assets/...");
}

const requiredReferences = [
  "./assets/css/styles.css",
  "./assets/js/animals.js",
  "./assets/js/main.js",
  "./assets/documents/contrato-adopcion-responsable-arcy.pdf",
];
for (const reference of requiredReferences) {
  if (!html.includes(reference)) {
    throw new Error(`Falta la referencia ${reference} en index.html`);
  }
}

const netlifyConfig = await readFile(resolve(root, "netlify.toml"), "utf8");
for (const expected of ['command = "npm run build"', 'publish = "dist"', 'base = "."']) {
  if (!netlifyConfig.includes(expected)) {
    throw new Error(`netlify.toml no contiene la configuración obligatoria: ${expected}`);
  }
}

console.log("Verificación aprobada: estructura, rutas y configuración Netlify correctas.");
