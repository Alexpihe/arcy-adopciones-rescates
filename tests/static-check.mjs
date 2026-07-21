import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const html = await readFile(path.join(root, "index.html"), "utf8");

const requiredText = [
  "Sobre nosotros",
  "Perritos y gatitos",
  "Próximos eventos",
  "Contáctanos",
  "Quiero adoptar",
  "55 2329 8138",
  "data-privacy-dialog",
];

for (const value of requiredText) {
  if (!html.includes(value)) throw new Error(`Falta contenido obligatorio: ${value}`);
}

const localRefs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((value) => !value.startsWith("#") && !value.startsWith("http") && !value.startsWith("mailto:") && !value.startsWith("tel:"));

for (const ref of localRefs) {
  if (ref.startsWith("/")) throw new Error(`Ruta absoluta no permitida: ${ref}`);
  const clean = ref.split(/[?#]/)[0];
  await access(path.resolve(root, clean));
}

const jsFiles = [
  path.join(root, "assets/js/animals.js"),
  path.join(root, "assets/js/main.js"),
];

for (const file of jsFiles) await access(file);
await access(path.join(root, "assets/css/styles.css"));
await access(path.join(root, "assets/documents/contrato-adopcion-responsable-arcy.pdf"));

console.log(`Verificación aprobada: ${localRefs.length} recursos locales accesibles y rutas relativas.`);
