const experiences = [
  {
    id: "prueba-imitacion-paz",
    reading: `Cuantas veces desea el hombre desordenadamente alguna cosa, luego pierde el sosiego.

El soberbio y el avariento nunca están quietos; el pobre y el humilde de espíritu viven en mucha paz.

El hombre que no es perfectamente mortificado en sí, presto es tentado y vencido de cosas pequeñas y viles.`,
    source: "La Imitación de Cristo · Libro I, capítulo 6",
    question: "Ante Jesús, ¿qué deseo o impulso te está robando el sosiego, y qué resistencia concreta puedes ofrecerle hoy por amor?",
    imageQuestion: "¿Qué deseo te roba la paz?",
    image: "./assets/images/01-cristo-y-pedro.png",
    imageAlt: "Cristo resucitado sostiene con ternura a san Pedro arrodillado junto al mar.",
  },
  {
    id: "prueba-filotea-vocacion",
    reading: `En la creación, manda Dios a las plantas que lleven sus frutos, cada una según su especie; de la misma manera que a los cristianos, plantas vivas de la Iglesia, les manda que produzcan frutos de devoción, cada uno según su condición y estado. De diferente manera han de practicar la devoción el noble y el artesano, el criado y el príncipe, la viuda, la soltera y la casada; y no solamente esto, sino que es menester acomodar la práctica de la devoción a las fuerzas, a los quehaceres y a las obligaciones de cada persona en particular.`,
    source: "Filotea · Parte I, capítulo 3",
    question: "¿Qué parte concreta de tu trabajo, familia u obligaciones necesitas hoy ofrecer a Dios para vivirla como vocación y no como carga?",
    imageQuestion: "¿Cómo puedes santificar hoy tu trabajo?",
    image: "./assets/images/02-virgen-y-nino.png",
    imageAlt: "La Virgen María sostiene al Niño Jesús mientras dos ángeles adoran en oración.",
  },
  {
    id: "prueba-paz-abandono",
    reading: `Es conveniente hacer un comentario a propósito del abandono. Para que sea auténtico y engendre la paz, es preciso que sea pleno; que pongamos todo, sin excepción, en las manos de Dios, no tratando de organizar, de «salvarnos» por nosotros mismos en ningún terreno: material, afectivo o espiritual.`,
    source: "La paz interior · Capítulo 5",
    question: "¿Qué asunto sigues intentando “salvar” únicamente con tus propias fuerzas, sin darle a Dios carta blanca?",
    imageQuestion: "¿Qué necesitas entregar a Dios?",
    image: "./assets/images/01-cristo-y-pedro.png",
    imageAlt: "Cristo resucitado sostiene con ternura a san Pedro arrodillado junto al mar.",
  },
  {
    id: "prueba-azul-confianza",
    reading: `«Tú no has entendido, hijo, que Yo he escogido la necedad para confundir la sabiduría y la debilidad para derrotar la fuerza.

Es mi voluntad que este pequeño volumen se propague así tal como es: éste será el medio con el que llamaré a muchos Sacerdotes a mi Movimiento y me formaré mi ejército invencible...

Tu poca fe, tu desconfianza en Mí me aflige, hijo. ¿Qué temes? ¿De qué tienes miedo? Ora y abandónate a Mí: deja que sea Yo sola la que verdaderamente obre.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 13 de octubre de 1973",
    question: "¿Qué preocupación de tu negocio o de tu día sigues cargando tú solo, sin haberla dejado de verdad en manos de Dios?",
    imageQuestion: "¿Qué temor no le has entregado a Dios?",
    image: "./assets/images/03-virgen-consuela.png",
    imageAlt: "La Virgen sostiene el rostro de un hombre arrodillado y angustiado, consolándolo con ternura.",
  },
  {
    id: "prueba-agustin-inquieto",
    reading: `Grande eres, Señor, e inmensamente digno de alabanza; grande es tu poder y tu inteligencia no tiene límites.

Y ahora hay aquí un hombre que te quiere alabar. Un hombre que es parte de tu creación y que, como todos, lleva siempre consigo por todas partes su mortalidad y el testimonio de su pecado, el testimonio de que tú siempre te resistes a la soberbia humana. Así pues, no obstante su miseria, ese hombre te quiere alabar. Y tú lo estimulas para que encuentre deleite en tu alabanza; nos creaste para ti y nuestro corazón andará siempre inquieto mientras no descanse en ti.`,
    source: "Confesiones · Libro I, capítulo 1",
    question: "¿En qué rincón de tu corazón sigue buscando descanso en el control o en la razón, en vez de en Dios?",
    imageQuestion: "¿Dónde descansa tu corazón?",
    image: "./assets/images/04-agustin-corazon-inquieto.png",
    imageAlt: "San Agustín, de noche junto a una ventana, mira hacia una luz cálida con la mano sobre el pecho.",
  },
  {
    id: "prueba-philippe-acto",
    reading: `Os digo esto para haceros comprender lo siguiente: a través de acontecimientos insignificantes, Dios puede sanarnos profundamente. A veces sentimos como una llamada del Señor para salir de nosotros mismos, para dar un paso adelante, para hacernos más adultos, más libres. Hay momentos de la vida en los que nos damos vueltas a nosotros mismos sobre nuestra inmadurez, nuestras quejas, nuestros lamentos, nuestras dependencias y de repente un día se nos da la gracia, que es un don de Dios, pero que apela también a nuestra libertad. Hay una elección que hacer; se trata de una curación y conversión a la vez: la libertad debe optar por llevar a cabo un acto de valor. Cuando realizamos un acto de valor, aunque sea para algo insignificante que Dios nos pida, esto puede llevarnos a una curación profunda, a una nueva libertad que nos es concedida por Dios.`,
    source: "La confianza en Dios · Capítulo 1",
    question: "¿Qué pequeño acto de confianza te está pidiendo Dios hoy, uno que quizás te parece insignificante pero que puede sanarte por dentro?",
    imageQuestion: "¿Qué acto de confianza te pide hoy?",
    image: "./assets/images/05-manos-confianza.png",
    imageAlt: "Cristo extiende la mano hacia un niño que se acerca a tomarla con confianza.",
  },
];

const feed = document.querySelector("#feed");
feed.className = "feed";

const RESUME_STORAGE_KEY = "nutre-tu-alma:resume-v1";
const FULL_CYCLE_SIZE = 100;

const escapeHtml = (value) =>
  value.replace(/[&<>'\"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#039;",
    '"': "&quot;",
  })[character]);

const readingCard = (experience, topicNumber) => `
  <article class="card reading-card" data-content-id="${experience.id}" data-phase="reading" aria-label="Lectura ${topicNumber}">
    <div class="topline"><span class="brand">Hacia Dios</span><span>${topicNumber} de ${experiences.length}</span></div>
    <div class="card-main">
      <p class="card-type">Lectura · pausa breve</p>
      <div class="reading-text">${escapeHtml(experience.reading).replaceAll("\n\n", "<br><br>")}</div>
    </div>
    <div>
      <div class="source">${escapeHtml(experience.source)}</div>
      <div class="swipe-hint">Desliza para meditar</div>
    </div>
  </article>`;

const questionCard = (experience, topicNumber) => `
  <article class="card question-card" data-content-id="${experience.id}" data-phase="question" aria-label="Pregunta de meditación ${topicNumber}">
    <div class="topline"><span class="brand">Hacia Dios</span><span>Medita</span></div>
    <div class="card-main">
      <p class="card-type">Para llevar al corazón</p>
      <p class="question-text">${escapeHtml(experience.question)}</p>
    </div>
    <div class="swipe-hint">Desliza para contemplar</div>
  </article>`;

const imageCard = (experience, topicNumber) => `
  <article class="card image-card" data-content-id="${experience.id}" data-phase="image" aria-label="Imagen de contemplación ${topicNumber}">
    <img src="${experience.image}" alt="${escapeHtml(experience.imageAlt)}" />
    <div class="image-overlay">
      <div>
        <div class="topline"><span class="brand">Hacia Dios</span><span>Contempla</span></div>
        <p class="image-reflection">${escapeHtml(experience.imageQuestion)}</p>
      </div>
      <div>
        <div class="swipe-hint">Desliza para continuar</div>
      </div>
    </div>
  </article>`;

feed.innerHTML = experiences
  .flatMap((experience, index) => [
    readingCard(experience, index + 1),
    questionCard(experience, index + 1),
    imageCard(experience, index + 1),
  ])
  .join("");

const cards = [...feed.querySelectorAll(".card")];

const loadResume = () => {
  try {
    return JSON.parse(localStorage.getItem(RESUME_STORAGE_KEY) || "null");
  } catch {
    return null;
  }
};

const resumeIndex = () => {
  const saved = loadResume();
  if (!saved?.contentId || !saved?.phase) return 0;

  const savedIndex = cards.findIndex(
    (card) => card.dataset.contentId === saved.contentId && card.dataset.phase === saved.phase,
  );
  if (savedIndex < 0) return 0;

  if (!saved.advanceOnResume) return savedIndex;
  if (savedIndex < cards.length - 1) return savedIndex + 1;

  return experiences.length >= FULL_CYCLE_SIZE ? 0 : savedIndex;
};

const saveResume = (card) => {
  const phase = card.dataset.phase;
  const position = {
    contentId: card.dataset.contentId,
    phase,
    advanceOnResume: phase === "image",
  };
  localStorage.setItem(RESUME_STORAGE_KEY, JSON.stringify(position));
};

const restoreIndex = resumeIndex();
let resumeRestored = false;

requestAnimationFrame(() => {
  cards[restoreIndex]?.scrollIntoView({ block: "start" });
  requestAnimationFrame(() => {
    resumeRestored = true;
  });
});

const resumeObserver = new IntersectionObserver(
  (entries) => {
    if (!resumeRestored) return;
    const activeCard = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]?.target;
    if (activeCard) saveResume(activeCard);
  },
  { root: feed, threshold: 0.68 },
);

cards.forEach((card) => resumeObserver.observe(card));

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js");
}
