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
    question: "¿Qué preocupación sigues cargando tú solo, sin haberla dejado de verdad en manos de Dios?",
    imageQuestion: "¿Qué temes? ¿De qué tienes miedo? Ora y abandónate a Mí: deja que sea Yo sola la que verdaderamente obre.",
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
  {
    id: "prueba-philippe-mana",
    reading: `La gracia de Dios se da al momento, día a día. A veces nos gustaría poder reservarla, crear «almacenes» de fuerza. Pero no es posible. Observad la imagen del maná que alimentó a los hebreos en el desierto; cuando pretendieron almacenarlo se pudría. Dios lo daba cada día, en la justa medida, ni más ni menos, y tenía el mejor sabor que a cada uno le convenía. Cuando decimos «pan nuestro», lo que pedimos no son grandes reservas (¿qué haríamos con ellas?), sino que simplemente pedimos el pan de este día, y Dios nos lo da, por lo que no es necesario preocuparse.`,
    source: "La confianza en Dios · Jacques Philippe, Capítulo 5",
    question: "¿En qué área de tu vida te cuesta confiar en que Dios te dará, día a día, exactamente lo que necesitas?",
    imageQuestion: "¿Confías en el pan de hoy?",
    image: "./assets/images/06-mana-desierto.png",
    imageAlt: "Una familia bíblica recoge el maná del suelo al amanecer en el desierto, con gratitud.",
  },
  {
    id: "prueba-philippe-orgullo",
    reading: `Cuando el bien que está presente en nuestra vida se convierte en un pretexto para juzgar y menospreciar a los demás, está convirtiéndose en una ocasión de orgullo. Debemos estar atentos porque sucede muy rápido. La actitud verdadera es alegrarse del bien que está presente en nuestra vida, pero sin bajar la guardia ante lo que podría alimentar un orgullo más o menos consciente. Sabemos que los dos signos habituales y principales del orgullo son tanto menospreciar a los demás como desanimarse. El desánimo es una expresión del orgullo, dijo Teresa. Cuando se es humilde, cuando uno acepta su pequeñez, no se desanima pues tiene confianza en Dios y en sí mismo.`,
    source: "La confianza en Dios · Jacques Philippe, Capítulo 2",
    question: "¿Cuándo fue la última vez que juzgaste a alguien o te desanimaste contigo mismo, sin ver que las dos cosas nacen del mismo orgullo?",
    imageQuestion: "¿Qué mueve tu juicio: humildad u orgullo?",
    image: "./assets/images/07-fariseo-publicano.png",
    imageAlt: "El fariseo ora erguido con la cabeza en alto mientras el publicano se queda atrás, arrodillado y cabizbajo.",
  },
  {
    id: "prueba-philippe-padre-fiel",
    reading: `Esta relación filial con Dios, que se expresa y se profundiza especialmente en la oración, no siempre es fácil de vivir hoy en día. Vivir como niños, en un mundo de competencia despiadada, no es nada fácil. Debemos ser adultos, saber perder a veces, manteniendo sin embargo el corazón de un niño, un corazón que descansa en Dios, que se abandona en Dios. Él sabrá ser nuestro defensor. Él es nuestro Padre, es fiel. Con frecuencia nos agitamos, en lugar de contar con el Señor con confianza. Un aspecto esencial de la vida espiritual es este trabajo de renovación de la confianza en nuestro corazón. Herido por el pecado original, en él habitan los miedos, las dudas, y su curación requiere mucho tiempo. Quizás nunca lleguemos a curarlo totalmente a lo largo de nuestra vida, pero al menos podremos llevar a cabo grandes progresos por esta confianza.`,
    source: "La confianza en Dios · Jacques Philippe, Capítulo 4",
    question: "En medio de las exigencias de tu semana, ¿dónde te agitas solo en vez de contar con tu Padre con confianza?",
    imageQuestion: "¿Te abandonas en tu Padre?",
    image: "./assets/images/08-padre-misericordioso.png",
    imageAlt: "El padre de la parábola corre a abrazar a su hijo que regresa, sosteniéndolo con ternura.",
  },
  {
    id: "combate-caida-desanimo",
    reading: `Cuando cometemos alguna falta, ya sea por irreflexión o sorpresa, ya sea con malicia y premeditación, lo importante es no desanimarse, no dejar de luchar por recuperar de nuevo la amistad con Dios, la paz y pureza del alma. Cuando nos suceda hacer o decir o pensar algo que va contra la ley de Dios, tenemos que decirle humildemente a Nuestro Señor: "Oh Dios mío: acabo de demostrar lo que soy: miseria, debilidad, mala inclinación. Pero ¿qué más podía esperarse de una creatura tan miserable y débil como yo, sino caídas, infidelidades y pecados?".`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 25",
    question: "Cuando caes o fallas, ¿te encierras en el desánimo de tu orgullo herido, o acudes enseguida a Dios para pedir perdón y recobrar la paz?",
    imageQuestion: "¿Te encierras en el desánimo o vuelves a Dios?",
    image: "./assets/images/10-combate-caida-desanimo.png",
    imageAlt: "Cristo se inclina con infinita misericordia para levantar y consolar a un hombre arrodillado y arrepentido.",
  },
];

const feed = document.querySelector("#feed");
feed.className = "feed";

const RESUME_STORAGE_KEY = "nutre-tu-alma:resume-v1";
const FULL_CYCLE_SIZE = 100;
const QUESTION_HEADINGS = [
  "Para llevar al corazón",
  "Para meditar hoy",
  "Detente ante Dios",
  "En silencio, pregúntate",
  "Ora con esta pregunta",
  "Examina tu corazón",
  "Preséntalo al Señor",
  "Antes de continuar",
  "Escucha al Señor",
  "Vuelve tu corazón a Dios",
];

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
    <div class="topline"><span class="brand">Nutre tu Alma</span><span>${topicNumber} de ${experiences.length}</span></div>
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
    <div class="topline"><span class="brand">Nutre tu Alma</span><span>Medita</span></div>
    <div class="card-main">
      <p class="card-type">${QUESTION_HEADINGS[(topicNumber - 1) % QUESTION_HEADINGS.length]}</p>
      <p class="question-text">${escapeHtml(experience.question)}</p>
    </div>
    <div class="swipe-hint">Desliza para contemplar</div>
  </article>`;

const imageCard = (experience, topicNumber) => `
  <article class="card image-card" data-content-id="${experience.id}" data-phase="image" aria-label="Imagen de contemplación ${topicNumber}">
    <img src="${experience.image}" alt="${escapeHtml(experience.imageAlt)}" />
    <div class="image-overlay">
      <div>
        <div class="topline"><span class="brand">Nutre tu Alma</span><span>Contempla</span></div>
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
let activeCardIndex = restoreIndex;

const PAGE_DURATION = 220;
const SWIPE_DISTANCE = 44;
const SWIPE_VELOCITY = 0.35;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let isPaging = false;
let pagingFrame = null;
let gesture = null;
let lastWheelAt = 0;

feed.tabIndex = 0;

const cardScrollTop = (index) => {
  const feedBounds = feed.getBoundingClientRect();
  const cardBounds = cards[index].getBoundingClientRect();
  return feed.scrollTop + cardBounds.top - feedBounds.top;
};

const goToCard = (requestedIndex) => {
  const targetIndex = Math.max(0, Math.min(cards.length - 1, requestedIndex));
  if (targetIndex === activeCardIndex || isPaging) return;

  const startTop = feed.scrollTop;
  const targetTop = cardScrollTop(targetIndex);
  activeCardIndex = targetIndex;

  if (reduceMotion) {
    feed.scrollTop = targetTop;
    saveResume(cards[targetIndex]);
    return;
  }

  isPaging = true;
  feed.classList.add("is-paging");
  const startedAt = performance.now();
  const easeOutCubic = (progress) => 1 - (1 - progress) ** 3;

  const animate = (now) => {
    const progress = Math.min(1, (now - startedAt) / PAGE_DURATION);
    feed.scrollTop = startTop + (targetTop - startTop) * easeOutCubic(progress);

    if (progress < 1) {
      pagingFrame = requestAnimationFrame(animate);
      return;
    }

    feed.scrollTop = targetTop;
    feed.classList.remove("is-paging");
    isPaging = false;
    pagingFrame = null;
    saveResume(cards[targetIndex]);
  };

  pagingFrame = requestAnimationFrame(animate);
};

const finishGesture = (event) => {
  if (!gesture || event.pointerId !== gesture.pointerId) return;

  const distance = event.clientY - gesture.startY;
  const elapsed = Math.max(1, performance.now() - gesture.startedAt);
  const velocity = Math.abs(distance) / elapsed;
  const shouldPage = Math.abs(distance) >= SWIPE_DISTANCE || velocity >= SWIPE_VELOCITY;

  if (shouldPage) goToCard(activeCardIndex + (distance < 0 ? 1 : -1));
  gesture = null;
};

feed.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "mouse" && event.button !== 0) return;
  if (isPaging) return;

  feed.focus({ preventScroll: true });
  gesture = { pointerId: event.pointerId, startY: event.clientY, startedAt: performance.now() };
  feed.setPointerCapture?.(event.pointerId);
});

feed.addEventListener(
  "pointermove",
  (event) => {
    if (!gesture || event.pointerId !== gesture.pointerId) return;
    if (Math.abs(event.clientY - gesture.startY) > 8) event.preventDefault();
  },
  { passive: false },
);

feed.addEventListener("pointerup", finishGesture);
feed.addEventListener("pointercancel", () => {
  gesture = null;
});

feed.addEventListener(
  "wheel",
  (event) => {
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    event.preventDefault();

    const now = performance.now();
    if (isPaging || now - lastWheelAt < PAGE_DURATION + 80) return;
    lastWheelAt = now;
    goToCard(activeCardIndex + (event.deltaY > 0 ? 1 : -1));
  },
  { passive: false },
);

feed.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown" || event.key === "PageDown") {
    event.preventDefault();
    goToCard(activeCardIndex + 1);
  }

  if (event.key === "ArrowUp" || event.key === "PageUp") {
    event.preventDefault();
    goToCard(activeCardIndex - 1);
  }
});

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
    if (activeCard) {
      activeCardIndex = cards.indexOf(activeCard);
      saveResume(activeCard);
    }
  },
  { root: feed, threshold: 0.68 },
);

cards.forEach((card) => resumeObserver.observe(card));

// Mantiene la pantalla encendida únicamente mientras Nutre tu Alma está visible.
// Algunos teléfonos pueden revocarlo en ahorro de batería o con poca batería.
let screenWakeLock = null;

const keepScreenAwake = async () => {
  if (!("wakeLock" in navigator) || document.visibilityState !== "visible" || screenWakeLock) return;

  try {
    screenWakeLock = await navigator.wakeLock.request("screen");
    screenWakeLock.addEventListener("release", () => {
      screenWakeLock = null;
    });
  } catch {
    // El sistema decide no concederlo, por ejemplo, en ahorro de batería.
  }
};

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") keepScreenAwake();
});

window.addEventListener("focus", keepScreenAwake);
keepScreenAwake();

if ("serviceWorker" in navigator) {
  let reloadingForUpdate = false;

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (reloadingForUpdate) return;
    reloadingForUpdate = true;
    window.location.reload();
  });

  navigator.serviceWorker
    .register("./sw.js", { updateViaCache: "none" })
    .then((registration) => registration.update());
}
