/**
 * Catálogo vigente de adoptables de ARCY.
 * Fuente: "catalogo adoptables (1).pdf", proporcionado por ARCY en septiembre de 2026.
 *
 * Cuando el propio catálogo contiene datos distintos entre el texto y la ficha gráfica,
 * se indica que deben confirmarse directamente con ARCY antes de iniciar la adopción.
 */
globalThis.animals = [
  {
    id: "zule",
    species: "Perro",
    name: "Zule",
    age: "5 años",
    sex: "Hembra",
    image: "./assets/images/adoptables/zule.webp",
    description: "Amorosa, leal y fuerte. Venció el TVT y está lista para comenzar una nueva vida con una familia responsable.",
    facts: [
      "Talla mediana",
      "Esterilizada",
      "Vacunada y desparasitada",
      "Esquema de salud al día",
      "Recuperada de TVT",
      "Compatibilidad con otros animales: confirmar con ARCY"
    ],
    story: "Fue encontrada en Xilotzingo, Zumpango, y llegó a ARCY como parte de un protocolo TNR. Durante su estancia fue diagnosticada con TVT (Tumor Venéreo Transmisible). Gracias al tratamiento, los cuidados y su fortaleza logró vencer la enfermedad. Lleva cerca de dos años esperando una familia."
  },
  {
    id: "manchas",
    species: "Perro",
    name: "Manchas",
    age: "2 años",
    sex: "Macho",
    image: "./assets/images/adoptables/manchas.webp",
    description: "Muy cariñoso con las personas y de energía media. Busca una familia que le dé la estabilidad que perdió cuando fue abandonado.",
    facts: [
      "Energía media",
      "Esterilizado",
      "Vacunado y desparasitado",
      "No convive con gatos",
      "Compatibilidad con otros perros: confirmar con ARCY",
      "Recomendado con niños mayores de 10 años"
    ],
    story: "Fue abandonado en una casa del fraccionamiento Haciendas de Guadalupe, en Tizayuca, Hidalgo. Cuando las personas que rentaban la vivienda se fueron, lo dejaron atrás y terminó solo en la calle. El catálogo contiene información distinta sobre su convivencia con otros perros, por lo que este punto debe confirmarse directamente con ARCY."
  },
  {
    id: "llanita",
    species: "Perro",
    name: "Llanita",
    age: "6 meses",
    sex: "Hembra",
    image: "./assets/images/adoptables/llanita.webp",
    description: "Noble, cariñosa y de energía media. Está lista para dejar atrás los días de soledad que vivió antes de su rescate.",
    facts: [
      "Talla mediana",
      "Energía media",
      "Esterilizada",
      "Vacunada y desparasitada",
      "No convive con perros ni gatos",
      "Recomendada con niños mayores de 10 años"
    ],
    story: "Fue rescatada de un terreno llano y solitario en Huicalco, Tizayuca, Hidalgo, donde pasó varios días y noches expuesta a la lluvia, al sol y al abandono. Desde su rescate ha recibido los cuidados necesarios y hoy busca una familia que nunca vuelva a dejarla sola."
  },
  {
    id: "gufy",
    species: "Perro",
    name: "Gufy",
    age: "8–9 meses · confirmar",
    sex: "Macho",
    image: "./assets/images/adoptables/gufy.webp",
    description: "Cariñoso, juguetón y sociable. Se lleva muy bien con niños y otros perros.",
    facts: [
      "Talla mediana",
      "Esterilizado",
      "Vacunado y desparasitado",
      "Convive con niños",
      "Convive con otros perros",
      "No convive con gatos"
    ],
    story: "Nació en las calles y fue atropellado en la colonia Nuevo Pedregal, en Tizayuca, Hidalgo. El accidente le provocó una luxación en una pata, pero recibió atención médica y logró recuperarse por completo. El catálogo muestra 8 meses en su ficha gráfica y 9 meses en el texto, por lo que la edad actual debe confirmarse con ARCY."
  },
  {
    id: "yuya",
    species: "Perro",
    name: "Yuya",
    age: "Edad por confirmar",
    sex: "Hembra",
    image: "./assets/images/adoptables/yuya.webp",
    description: "Muy cariñosa, tranquila y de energía baja. Disfruta la compañía de las personas, los niños y otros perros.",
    facts: [
      "Energía baja",
      "Esterilizada",
      "Vacunada y desparasitada",
      "Convive con niños",
      "Convive con otros perros",
      "No convive con gatos"
    ],
    story: "Fue rescatada sobre la carretera federal México–Pachuca, a la altura del fraccionamiento Davivir, en Tizayuca, Hidalgo, donde se encontraba en una zona de alto riesgo por la cercanía con la circulación vehicular. Hoy está a salvo y lista para encontrar una familia."
  },
  {
    id: "panterita",
    species: "Perro",
    name: "Panterita",
    age: "5 meses",
    sex: "Hembra",
    image: "./assets/images/adoptables/panterita.webp",
    description: "Sociable, noble y amorosa. Puede integrarse a una familia que ya tenga perros o gatos.",
    facts: [
      "Esterilizada",
      "Vacunada y desparasitada",
      "Convive con otros perros",
      "Convive con gatos",
      "Muy sociable"
    ],
    story: "Fue rescatada cuando tenía apenas dos meses gracias a un trabajo coordinado entre ARCY Adopciones y Rescates y personal del municipio. Desde muy pequeña tuvo que enfrentar la vida en las calles. Hoy está lista para encontrar un hogar definitivo."
  },
  {
    id: "colmillo",
    species: "Perro",
    name: "Colmillo",
    age: "Aproximadamente 3 años",
    sex: "Macho",
    image: "./assets/images/adoptables/colmillo.webp",
    description: "Noble, cariñoso y sociable. Disfruta la compañía de las personas y convive bien con otros perros.",
    facts: [
      "Esterilizado",
      "Vacunado y desparasitado",
      "Convive con otros perros",
      "No convive con gatos",
      "Muy sociable"
    ],
    story: "Fue encontrado en el fraccionamiento Quma Rancho Don Antonio en evidente estado de abandono y descuido. Su cuerpo reflejaba la falta de atención mientras buscaba alimento y un lugar seguro. Hoy se encuentra listo para encontrar la familia que merece."
  },
  {
    id: "marcy",
    species: "Perro",
    name: "Marcy",
    age: "6 meses",
    sex: "Hembra",
    image: "./assets/images/adoptables/marcy.webp",
    description: "Juguetona, cariñosa, inteligente y sociable. Ha avanzado enormemente en su proceso de rehabilitación.",
    facts: [
      "Mix de Pastor Belga",
      "Talla mediana a grande",
      "Juguetona",
      "Cariñosa",
      "Inteligente",
      "Compatibilidad específica: confirmar con ARCY"
    ],
    story: "Fue rescatada cuando tenía alrededor de tres meses. Nació y creció dentro de una manada de perros y, por las condiciones en las que había vivido, al principio no permitía que las personas se acercaran. Con paciencia y cuidados aprendió poco a poco a confiar y hoy está preparada para continuar su historia con una familia responsable."
  },
  {
    id: "margared",
    species: "Perro",
    name: "Margared",
    age: "6 meses",
    sex: "Hembra",
    image: "./assets/images/adoptables/margared.webp",
    description: "Amorosa, juguetona e inteligente. Busca una familia paciente que continúe fortaleciendo su confianza.",
    facts: [
      "Mix de Labrador",
      "Talla mediana a grande",
      "Juguetona",
      "Cariñosa",
      "Inteligente",
      "Compatibilidad específica: confirmar con ARCY"
    ],
    story: "Fue rescatada cuando tenía alrededor de tres meses después de crecer dentro de una manada de perros. El propietario accedió a entregarla para ponerla a salvo. Ha avanzado en su proceso de rehabilitación y ahora necesita un hogar seguro, paciencia y compromiso para toda la vida."
  },
  {
    id: "lagrimitas",
    species: "Perro",
    name: "Lagrimitas",
    age: "7 meses",
    sex: "Macho",
    image: "./assets/images/adoptables/lagrimitas.webp",
    description: "Sociable, amoroso y todavía temeroso al principio. Necesita una familia paciente que continúe acompañando su rehabilitación.",
    facts: [
      "Talla mediana",
      "Vacunado",
      "Esterilizado",
      "Sociable y amoroso",
      "Temeroso al principio",
      "Rehabilitación reportada al 85% en el catálogo"
    ],
    story: "Cuando tenía alrededor de cuatro meses fue rescatado en el fraccionamiento Los Héroes SADASI mientras era atacado por una jauría. La experiencia lo dejó con mucho miedo y sin permitir que lo tocaran. Con amor, paciencia y rehabilitación ha recuperado gran parte de su confianza y ya está listo para conocer una familia."
  },
  {
    id: "lola",
    species: "Perro",
    name: "Lola",
    age: "9 meses",
    sex: "Hembra",
    image: "./assets/images/adoptables/lola.webp",
    description: "Dulce y muy amorosa. Le encanta estar cerca de las personas y buscar brazos donde sentirse segura.",
    facts: [
      "Talla mediana",
      "Muy cariñosa",
      "Busca contacto con las personas",
      "Compatibilidad con perros, gatos y niños: confirmar con ARCY"
    ],
    story: "Fue abandonada afuera del refugio junto a su papá, ambos en un estado de desnutrición severa. Lamentablemente, su papá falleció al día siguiente del rescate. Lola continuó su proceso con una actitud cariñosa y muchas ganas de salir adelante. Hoy busca una familia que la cuide para siempre."
  },
  {
    id: "luna",
    species: "Perro",
    name: "Luna",
    age: "Aprox. 1–2 años · confirmar",
    sex: "Hembra",
    image: "./assets/images/adoptables/luna.webp",
    description: "Juguetona, activa y llena de energía. Convive con niños y otros perros.",
    facts: [
      "Energía alta",
      "Convive con niños",
      "Convive con otros perros",
      "No convive con gatos",
      "Protocolo de salud completo",
      "Edad exacta: confirmar con ARCY"
    ],
    story: "Fue resguardada de urgencia después de ser señalada por un supuesto ataque a un niño. Al revisar un video, ARCY observó que la situación no era como se había señalado y decidió intervenir para protegerla. El texto del catálogo la describe con aproximadamente un año, mientras que la ficha gráfica indica dos años; por ello la edad debe confirmarse con ARCY."
  },
  {
    id: "gela",
    species: "Perro",
    name: "Gela",
    age: "Aproximadamente 3 años y medio",
    sex: "Hembra",
    image: "./assets/images/adoptables/gela.webp",
    description: "Inteligente, juguetona y cariñosa. Aprende rápido y disfruta convivir y recibir afecto.",
    facts: [
      "Talla mediana",
      "Esterilizada",
      "Muy inteligente",
      "Puede mostrarse reactiva con perros en la calle",
      "Convive bien con los perros con los que vive actualmente",
      "Necesita paciencia y acompañamiento"
    ],
    story: "Llegó a ARCY después de ser rescatada de una situación en la que vivía con unos vecinos. Aprende con rapidez y ya relaciona las salidas al patio o a la calle con ir al baño. En exteriores puede reaccionar ante otros perros, posiblemente por miedo o inseguridad, aunque con los perros con los que convive actualmente se lleva bien."
  }
];

// Mantiene actualizado el contador del catálogo sin obligar a reemplazar adoptables.html.
document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector(".catalog-section .section-heading h2");
  if (heading) heading.textContent = `${globalThis.animals.length} historias que pueden continuar a tu lado.`;
});
