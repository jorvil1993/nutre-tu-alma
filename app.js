const experiences = [
  {
    id: "prueba-imitacion-paz",
    reading: `Cuantas veces desea el hombre desordenadamente alguna cosa, luego pierde el sosiego.

El soberbio y el avariento nunca están quietos; el pobre y el humilde de espíritu viven en mucha paz.

El hombre que no es perfectamente mortificado en sí, presto es tentado y vencido de cosas pequeñas y viles.

El flaco de espíritu y que aún está inclinado a lo animal y sensible, con dificultad se puede abstraer totalmente de los deseos terrenos.

Y cuando se abstiene recibe muchas veces tristeza, y se enoja presto si alguno le contradice.

Pero si alcanza lo que desea, siente luego pesadumbre por el remordimiento de la conciencia; porque siguió a su apetito, el cual nada aprovecha, para alcanzar la paz que busca.

En resistir, pues, a las pasiones se halla la verdadera paz del corazón, y no en seguirlas.

No hay, pues, paz en el corazón del hombre carnal, ni del que se entrega a lo exterior, sino en el que es fervoroso y espiritual.`,
    source: "La Imitación de Cristo · Libro I, capítulo 6",
    question: "Ante Jesús, ¿qué deseo o impulso te está robando el sosiego, y qué resistencia concreta puedes ofrecerle hoy por amor?",
    image: "./assets/images/01-cristo-y-pedro.png",
    imageAlt: "Cristo resucitado sostiene con ternura a san Pedro arrodillado junto al mar.",
  },
  {
    id: "prueba-filotea-vocacion",
    reading: `No, Filotea, la devoción nada echa a perder, cuando es verdadera; al contrario, todo lo perfecciona, y, cuando es contraria a la vocación de alguno, es, sin la menor duda, falsa. La abeja, dice Aristóteles, saca su miel de las flores sin dañarlas y las deja frescas y enteras, según las encontró; mas la verdadera devoción todavía hace más, porque no sólo no causa perjuicio a vocación ni negocio alguno, sino, antes bien, los adorna y embellece. Las piedras preciosas, introducidas en la miel, se vuelven más relucientes, cada una según su propio color; así también cada uno de nosotros se hace más agradable a Dios en su vocación, cuando la acomoda a la devoción: el gobierno de la familia se hace más amoroso; el amor del marido y de la mujer, más sincero; el servicio del príncipe, más fiel; y todas las ocupaciones, más suaves y amables.`,
    source: "Filotea · Parte I, capítulo 3",
    question: "¿Qué parte concreta de tu trabajo, familia u obligaciones necesitas hoy ofrecer a Dios para vivirla como vocación y no como carga?",
    image: "./assets/images/02-virgen-y-nino.png",
    imageAlt: "La Virgen María sostiene al Niño Jesús mientras dos ángeles adoran en oración.",
  },
  {
    id: "prueba-paz-abandono",
    reading: `Es conveniente hacer un comentario a propósito del abandono. Para que sea auténtico y engendre la paz, es preciso que sea pleno; que pongamos todo, sin excepción, en las manos de Dios, no tratando de organizar, de «salvarnos» por nosotros mismos en ningún terreno: material, afectivo o espiritual. No se puede dividir la existencia humana en secciones: en algunas sería legítimo abandonarse en Dios confiadamente, y en otras, por el contrario, convendría «desenvolverse» exclusivamente por uno mismo. Y sepamos una cosa: cualquier realidad que no abandonemos, que pretendamos organizar por nuestra cuenta sin dar «carta blanca» a Dios, continuará inquietándonos de un modo u otro. La medida de nuestra paz interior será la de nuestro abandono, es decir la de nuestro desprendimiento.`,
    source: "La paz interior · Capítulo 5",
    question: "¿Qué asunto sigues intentando “salvar” únicamente con tus propias fuerzas, sin darle a Dios carta blanca?",
    image: "./assets/images/01-cristo-y-pedro.png",
    imageAlt: "Cristo resucitado sostiene con ternura a san Pedro arrodillado junto al mar.",
  },
];

const feed = document.querySelector("#feed");
feed.className = "feed";

const escapeHtml = (value) =>
  value.replace(/[&<>'\"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#039;",
    '"': "&quot;",
  })[character]);

const readingCard = (experience, topicNumber) => `
  <article class="card reading-card" aria-label="Lectura ${topicNumber}">
    <div class="topline"><span class="brand">Hacia Dios</span><span>${topicNumber} de ${experiences.length}</span></div>
    <div class="card-main">
      <p class="card-type">Lectura · 1 minuto</p>
      <div class="reading-text">${escapeHtml(experience.reading).replaceAll("\n\n", "<br><br>")}</div>
    </div>
    <div>
      <div class="source">${escapeHtml(experience.source)}</div>
      <div class="swipe-hint">Desliza para meditar</div>
    </div>
  </article>`;

const questionCard = (experience, topicNumber) => `
  <article class="card question-card" aria-label="Pregunta de meditación ${topicNumber}">
    <div class="topline"><span class="brand">Hacia Dios</span><span>Medita</span></div>
    <div class="card-main">
      <span class="question-mark" aria-hidden="true">?</span>
      <p class="card-type">Para llevar al corazón</p>
      <p class="question-text">${escapeHtml(experience.question)}</p>
    </div>
    <div class="swipe-hint">Desliza para contemplar</div>
  </article>`;

const imageCard = (experience, topicNumber) => `
  <article class="card image-card" aria-label="Imagen de contemplación ${topicNumber}">
    <img src="${experience.image}" alt="${escapeHtml(experience.imageAlt)}" />
    <div class="image-overlay">
      <div class="topline"><span class="brand">Hacia Dios</span><span>Contempla</span></div>
      <div>
        <div class="image-caption">Pintura sacra · imagen de prueba</div>
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

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js");
}
