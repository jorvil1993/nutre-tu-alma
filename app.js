const experiences = [
  {
    id: "teresita-oracion-impulso",
    reading: `Para mí, la oración es un impulso del corazón, una simple mirada dirigida al cielo, un grito de agradecimiento y de amor, tanto en medio de la prueba como en el seno del gozo. Es algo grande, sobrenatural, que me dilata el alma.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Conferencia 6",
    question: "¿Es tu oración un diálogo espontáneo y agradecido de corazón a corazón con Dios en cualquier circunstancia de tu día?",
    imageQuestion: "¿Es tu oración un impulso de amor hacia Dios?",
    image: "./assets/images/34-teresita-oracion-impulso.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-pie-de-la-cruz",
    reading: `Junto a la cruz de Jesús estaban su madre y el discípulo a quien amaba. Jesús, viendo a su madre y al discípulo, dijo: «Mujer, ahí tienes a tu hijo». Luego dijo al discípulo: «Ahí tienes a tu madre». Y desde aquella hora el discípulo la acogió en su casa.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 8: Al Pie de la Cruz",
    question: "¿Acoges a María en tu vida diaria como verdadera Madre espiritual, confiándole tus luchas, trabajos y decisiones?",
    imageQuestion: "¿Acudes a María como Madre al pie de la Cruz?",
    image: "./assets/images/53-olaizola-pie-de-la-cruz.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "solo-dios-llena-el-alma",
    reading: `Mucho aprovecharás, si te guardas libre de todo cuidado temporal. Muy menguado serás, si alguna cosa temporal estimares. No te parezca cosa alguna alta, ni grande, ni acepta, ni agradable, sino Dios puramente, o lo que sea de Dios. Ten por vana cualquier consolación que te viniere de alguna criatura. El alma que ama a Dios, desprecia todas las cosas sin Él. Solo Dios eterno e inmenso que todo lo llena, gozo del alma y alegría verdadera del corazón.`,
    source: "La Imitación de Cristo · Libro II, capítulo 5",
    question: "¿Qué consuelo pequeño y pasajero has puesto en el lugar que solo le corresponde a Dios?",
    imageQuestion: "¿Qué pones en el lugar de Dios?",
    image: "./assets/images/159-solo-dios-llena-el-alma.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "el-desanimo-es-una-expresion-del-orgullo",
    reading: `Sabemos que los dos signos habituales y principales del orgullo son tanto menospreciar a los demás como desanimarse. El desánimo es una expresión del orgullo, dijo Teresa. Cuando se es humilde, cuando uno acepta su pequeñez, no se desanima pues tiene confianza en Dios y en sí mismo.`,
    source: "La confianza en Dios · Capítulo 2",
    question: "¿Reconoces tu desánimo de estos días como lo que en el fondo es: una forma de orgullo?",
    imageQuestion: "¿Tu desánimo es en el fondo orgullo?",
    image: "./assets/images/198-el-desanimo-es-una-expresion-del-orgullo.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-caridad-no-ambiciosa",
    reading: `La caridad no es ambiciosa: no busca honores ni grandezas terrenas, porque para quien posee a Jesús, todo lo demás es nada.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo VI",
    question: "¿Está tu corazón desprendido de los aplausos del mundo, encontrando su plena riqueza en el amor de Cristo?",
    imageQuestion: "¿Buscas a Cristo por encima de todo honor?",
    image: "./assets/images/68-ligorio-caridad-no-ambiciosa.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "las-tres-cosas-que-dan-la-paz",
    reading: `Hagamos tres cosas, muy querida hija, y conseguiremos la paz: tengamos la completa y pura intención de buscar en todas las cosas la honra de Dios y su gloria; hagamos lo poco que podamos con este objeto siguiendo los consejos de nuestro padre espiritual, y dejemos que Dios se encargue del resto. ¿Por qué se angustia el que tiene a Dios como objeto de sus intenciones y hace lo que puede? ¿Qué tiene que temer?`,
    source: "La paz interior · Los santos y la paz del alma · San Francisco de Sales, 2",
    question: "Después de hacer lo poco que puedes hoy, ¿te animas a dejar que Dios se encargue del resto?",
    imageQuestion: "¿Dejas que Dios se encargue del resto?",
    image: "./assets/images/188-las-tres-cosas-que-dan-la-paz.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-silencio-pilato",
    reading: `Pilato le pregunta: «¿Qué es la verdad?», teniendo la Verdad encarnada de pie frente a él. Jesús calla ante el cinismo del poder terrenal. Su silencio es más elocuente que cualquier discurso: la verdad no se defiende con gritos ni soberbia, sino con la entrega de la propia vida en fidelidad al Padre, mostrando que el reino de Dios no se apoya en componendas mundanas sino en la luz.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 6: El Silencio ante Pilato",
    question: "¿Buscas la verdad de Dios en el silencio y la fidelidad interior, o te dejas arrastrar por las opiniones y respetos humanos?",
    imageQuestion: "¿Vives en la verdad de Dios ante las presiones del mundo?",
    image: "./assets/images/51-olaizola-silencio-pilato.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-dios-dulzuras",
    reading: `Cuando una persona empieza su vida espiritual, por lo general siente al principio muchos consuelos y gozos en el alma. Pero si estos gozos son muy grandes, hay que tener cuidado porque puede suceder que el espíritu se entusiasme por las dulzuras de Dios y no por el Dios de las dulzuras.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 54",
    question: "Cuando oras, ¿buscas la satisfacción sensible que te produce el consuelo, o buscas amar a Dios con pureza aun en la aridez?",
    imageQuestion: "¿Buscas a Dios por Él mismo o por sus consuelos?",
    image: "./assets/images/19-combate-dios-dulzuras.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-consagracion-matutina",
    reading: `«Consagraos a Mí cada mañana diciendo con el corazón: 'Madre mía, soy todo tuyo y todo lo mío te pertenece'. Esta entrega total me permite obrar libremente en vuestras vidas, modelando vuestro espíritu a semejanza de mi Hijo Jesús para que seáis luz en medio de las tinieblas del mundo.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 1 de enero de 1981",
    question: "¿Renuevas cada mañana tu consagración filial a la Virgen, entregándole tus obras, pensamientos y afectos?",
    imageQuestion: "¿Te entregas por entero a María cada mañana?",
    image: "./assets/images/127-sacerdotes-consagracion-matutina.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-camino-de-la-cruz",
    reading: `«El camino por el que quiero conducir a mis hijos es el camino de la Cruz. Permaneced conmigo junto a Jesús crucificado, ofreciendo en silencio vuestros dolores para la salvación de las almas.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 28 de marzo de 1975",
    question: "¿Permaneces en pie junto a la Cruz en los momentos de sufrimiento, uniéndote al sacrificio redentor de Jesús?",
    imageQuestion: "¿Permaneces fiel junto a la Cruz en la prueba?",
    image: "./assets/images/109-sacerdotes-camino-de-la-cruz.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "arrojate-con-confianza",
    reading: `¿Para qué te estribas en tus propias fuerzas, si ésas no te pueden sostener ni darte firmeza alguna? Arrójate con confianza en los brazos del Señor, y no temas, que no se apartará para dejarte caer. Arrójate seguro y confiado, que Él te recibirá en sus brazos y te sanará de todos tus males.`,
    source: "Confesiones de San Agustín · Libro VIII, capítulo 11",
    question: "¿En qué fuerzas propias te sigues sosteniendo, en vez de arrojarte con confianza en los brazos de Dios?",
    imageQuestion: "¿Te arrojas confiado en los brazos de Dios?",
    image: "./assets/images/168-arrojate-con-confianza.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-llave-oracion",
    reading: `Por la mañana la oración es la llave que nos abre los tesoros de Dios y por la noche es el manto que nos coloca bajo su Divina Protección. Los milagros más maravillosos y los cambios más portentosos han sido preparados por muchas oraciones. Para que la oración tenga efecto es necesario que la hagamos con mucha confianza en el poder y la bondad de Nuestro Señor. Cuanto más confiemos en Él, más seremos ayudados por su bondad y por su infinito poder.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 42",
    question: "¿Es tu oración de cada mañana la llave con que abres tu corazón a Dios, o comienzas tus tareas fiándote solo de tus fuerzas?",
    imageQuestion: "¿Empiezas tu día abriendo el corazón a Dios?",
    image: "./assets/images/17-combate-llave-oracion.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "toda-prueba-es-una-prueba-de-fe",
    reading: `Toda prueba es una prueba de fe. Si soy creyente y paso por un momento difícil, inevitablemente me planteo esta pregunta, de manera más o menos manifiesta: ¿Cuál es la función de Dios en todo esto? ¿Me quiere realmente, está presente en todas mis vivencias? Ya sea en ocasión de una enfermedad, desempleo u otros, poco importa, nuestra confianza en Dios se pone a prueba.`,
    source: "La confianza en Dios · Capítulo 6",
    question: "En la prueba que atraviesas ahora, ¿qué respuesta de fe le estás dando a la pregunta de si Dios te quiere?",
    imageQuestion: "¿Qué respuesta de fe das a tu prueba?",
    image: "./assets/images/204-toda-prueba-es-una-prueba-de-fe.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-paz-en-la-tribulacion",
    reading: `«En la prueba y en la tribulación no perdáis la paz, porque Yo estoy a vuestro lado como Madre solícita y protectora.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 15 de septiembre de 1984",
    question: "Cuando sobrevienen las pruebas y dificultades, ¿conservas la paz recordando que tu Madre celestial vela por ti?",
    imageQuestion: "¿Conservas la paz sabiendo que María vela por ti?",
    image: "./assets/images/140-sacerdotes-paz-en-la-tribulacion.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-paz-corazon",
    reading: `Conserva siempre la paz del corazón, porque en un corazón turbado no puede habitar el Espíritu de Dios.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 20",
    question: "¿Cuidas la paz de tu alma en medio de las prisas cotidianas para que Dios habite siempre en ti?",
    imageQuestion: "¿Proteges la paz interior de tu alma?",
    image: "./assets/images/60-combate-paz-corazon.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-tengo-sed",
    reading: `«Tengo sed», exclama el Salvador desde el madero: la sed ardiente de salvar a todas las almas y derramar su amor sobre la humanidad.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 9",
    question: "¿Sientes compasión por la sed que tiene Jesús de tu amor y de la salvación de tus hermanos?",
    imageQuestion: "¿Sacias la sed de Cristo con tu amor y oración?",
    image: "./assets/images/103-olaizola-tengo-sed.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "temo-la-adversidad-en-medio-de-la-prosperidad",
    reading: `Ninguno ama aquello que sufre y tolera, aunque tenga amor a tolerarlo y sufrirlo. Pues aunque alguno se alegre de que tolera y sufre, pero no obstante, más quiere que no haya que sufrir y tolerar. Cuando padezco cosas adversas, deseo las prósperas, y cuando estoy en posesión de las prósperas, estoy temiendo las adversas. ¿Qué medio puede hallarse entre estos dos contrarios, donde la vida humana deje de ser probada y combatida de semejantes afectos?`,
    source: "Confesiones de San Agustín · Libro X, capítulo 28",
    question: "¿Puedes reconocer hoy que temes perder lo próspero tanto como antes deseabas alcanzarlo?",
    imageQuestion: "¿Qué prosperidad temes perder hoy?",
    image: "./assets/images/173-temo-la-adversidad-en-medio-de-la-prosperidad.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-union-con-pedro",
    reading: `«Amad a la Iglesia y manteneos siempre unidos al Sucesor de Pedro, porque en la comunión eclesial reside la roca firme de vuestra fe.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 29 de junio de 1976",
    question: "¿Vives tu fe en comunión filial con la Iglesia y el Santo Padre, amando la unidad del Cuerpo místico de Cristo?",
    imageQuestion: "¿Amas y defiendes la unidad de la Iglesia?",
    image: "./assets/images/113-sacerdotes-union-con-pedro.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "prueba-paz-abandono",
    reading: `Es conveniente hacer un comentario a propósito del abandono. Para que sea auténtico y engendre la paz, es preciso que sea pleno; que pongamos todo, sin excepción, en las manos de Dios, no tratando de organizar, de «salvarnos» por nosotros mismos en ningún terreno: material, afectivo o espiritual.`,
    source: "La paz interior · Capítulo 5",
    question: "¿Qué asunto sigues intentando “salvar” únicamente con tus propias fuerzas, sin darle a Dios carta blanca?",
    imageQuestion: "¿Qué necesitas entregar a Dios?",
    image: "./assets/images/01-cristo-y-pedro.webp",
    imageAlt: "Cristo resucitado sostiene con ternura a san Pedro arrodillado junto al mar.",
  },
  {
    id: "la-dulzura-con-nosotros-mismos",
    reading: `Una de las mejores prácticas de la dulzura, en la cual nos deberíamos ejercitar, es aquella cuyo objeto somos nosotros mismos, de manera que nunca nos enojemos contra nosotros ni contra nuestras imperfecciones, pues si bien la razón quiere que, cuando cometemos faltas, sintamos descontento y aflicción, conviene, no obstante, que evitemos un descontento agrio, malhumorado, despechado y colérico.`,
    source: "Filotea: Introducción a la Vida Devota · Tercera Parte, capítulo IX",
    question: "Cuando fallas, ¿te tratas a ti mismo con la misma dulzura con la que tratarías a otro?",
    imageQuestion: "¿Te tratas con dulzura cuando fallas?",
    image: "./assets/images/180-la-dulzura-con-nosotros-mismos.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "donde-esta-tu-fe",
    reading: `¿Por ventura hay cosa difícil para Mí? ¿O seré yo como el que dice y no hace? ¿Dónde está tu fe? Ten firmeza y perseverancia. Sé varón fuerte y magnánimo, y a su tiempo te llegará el consuelo. Espérame, espera; Yo vendré y te curaré. Tentación es la que te atormenta, y vano temor el que te espanta. ¿Qué aprovecha el cuidado de lo que está por venir, sino para tener tristeza sobre tristeza? Bástale a cada día su molestia. Vana cosa es y sin provecho entristecerse o alegrarse de lo venidero, que quizás nunca acaecerá.`,
    source: "La Imitación de Cristo · Libro III, capítulo 30",
    question: "¿Cuánta tristeza de hoy nace, en realidad, de anticipar un mañana que quizás nunca llegue?",
    imageQuestion: "¿Dónde está tu fe en este momento?",
    image: "./assets/images/164-donde-esta-tu-fe.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-amor-misericordioso",
    reading: `El amor misericordioso de Dios no busca personas perfectas para amarlas, sino que su amor hace perfectas a las almas que se reconocen necesitadas de su perdón. Lo que atrae la ternura de Dios hacia nosotros no son nuestras supuestas grandezas, sino el vacío de nuestro corazón esperando ser llenado de su amor. Dios no puede resistirse al alma que se humilla y confía en Él.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Conferencia 5",
    question: "¿Presentas a Dios tus vacíos y pobrezas para que Él los llene de su gracia, o intentas disimular tus miserias ante su presencia?",
    imageQuestion: "¿Abres tu corazón vacío para que Dios lo llene?",
    image: "./assets/images/33-teresita-amor-misericordioso.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "prueba-philippe-mana",
    reading: `La gracia de Dios se da al momento, día a día. A veces nos gustaría poder reservarla, crear «almacenes» de fuerza. Pero no es posible. Observad la imagen del maná que alimentó a los hebreos en el desierto; cuando pretendieron almacenarlo se pudría. Dios lo daba cada día, en la justa medida, ni más ni menos, y tenía el mejor sabor que a cada uno le convenía. Cuando decimos «pan nuestro», lo que pedimos no son grandes reservas (¿qué haríamos con ellas?), sino que simplemente pedimos el pan de este día, y Dios nos lo da, por lo que no es necesario preocuparse.`,
    source: "La confianza en Dios · Jacques Philippe, Capítulo 5",
    question: "¿En qué área de tu vida te cuesta confiar en que Dios te dará, día a día, exactamente lo que necesitas?",
    imageQuestion: "¿Confías en el pan de hoy?",
    image: "./assets/images/06-mana-desierto.webp",
    imageAlt: "Una familia bíblica recoge el maná del suelo al amanecer en el desierto, con gratitud.",
  },
  {
    id: "sacerdotes-escudo-de-oracion",
    reading: `«La oración perseverante es el escudo que os protege de todo mal y la fuente inagotable de vuestra fortaleza interior.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 13 de mayo de 1981",
    question: "¿Perseveras en la oración diaria con fidelidad, incluso cuando experimentas cansancio o aridez espiritual?",
    imageQuestion: "¿Perseveras en la oración como tu mayor fortaleza?",
    image: "./assets/images/128-sacerdotes-escudo-de-oracion.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-purificar-deseo",
    reading: `Purificar el deseo significa querer lo que Dios quiere, y encontrar en su santa voluntad nuestra única y verdadera alegría.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Cuarta Conferencia",
    question: "¿Buscas que tus deseos se alineen con la voluntad de Dios, hallando en su querer tu descanso y tu paz?",
    imageQuestion: "¿Buscas que tus deseos coincidan con el querer de Dios?",
    image: "./assets/images/78-teresita-purificar-deseo.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "el-alma-libre-y-desprendida",
    reading: `Que vuestra voluntad esté siempre preparada para cualquier eventualidad. Y que vuestro corazón no se esclavice a nada. Cuando experimentéis algún deseo, hacedlo de un modo que no sufráis en caso de fracaso, sino mantened el espíritu tan tranquilo como si no hubieseis anhelado cosa alguna. La verdadera libertad consiste en no apegarse a nada.`,
    source: "La paz interior · Los santos y la paz del alma · Juan de Bonilla, 2",
    question: "¿A qué resultado concreto está esclavizado hoy tu corazón, de modo que su fracaso te destrozaría?",
    imageQuestion: "¿A qué está esclavizado tu corazón?",
    image: "./assets/images/186-el-alma-libre-y-desprendida.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-elevar-corazon",
    reading: `Cuando sientas el ataque de una mala inclinación, y renueva inmediatamente tu amor a Jesús.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 15",
    question: "Ante una tentación repentina, ¿te detienes a dialogar con ella o elevas de inmediato tu corazón a Jesús?",
    imageQuestion: "¿Elevas tu corazón a Jesús en la prueba?",
    image: "./assets/images/58-combate-elevar-corazon.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "paz-consigo-y-con-los-otros",
    reading: `Hay algunos que tienen paz consigo, y también con los otros. Otros hay que ni la tienen consigo, ni la dejan tener a los demás: molestos para los otros, lo son más para sí mismos. Y hay otros que tienen paz consigo, y trabajan en reducir a paz a los otros. Pues toda nuestra paz en esta miserable vida, está puesta más en el sufrimiento humilde, que en dejar de sentir contrariedades. El que sabe mejor padecer, tendrá mayor paz. Este es el vencedor de sí mismo y señor del mundo, amigo de Cristo y heredero del cielo.`,
    source: "La Imitación de Cristo · Libro II, capítulo 3",
    question: "¿Buscas la paz evitando todo sufrimiento, o aprendes a padecer con humildad como el verdadero camino hacia ella?",
    imageQuestion: "¿Buscas la paz o huyes del sufrimiento?",
    image: "./assets/images/156-paz-consigo-y-con-los-otros.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-lluvia-rosas",
    reading: `Pasaré mi cielo haciendo el bien en la tierra. Una lluvia de rosas descenderá sobre las almas que confíen en Jesús.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Novena Conferencia",
    question: "¿Confías en la comunión de los santos y en su intercesión constante para ayudarte en tus batallas diarias?",
    imageQuestion: "¿Confías en la intercesión amorosa de los santos?",
    image: "./assets/images/83-teresita-lluvia-rosas.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "quejate-tan-poco-como-puedas",
    reading: `Quéjate tan poco como puedas de las injurias que te hagan, porque es cosa cierta que, ordinariamente, el que suele quejarse peca, porque el amor propio siempre exagera las injurias; pero, sobre todo, no te lamentes en presencia de personas inclinadas a indignarse y a pensar mal.`,
    source: "Filotea: Introducción a la Vida Devota · Tercera Parte, capítulo VIII",
    question: "¿A quién sueles contarle tus quejas: a alguien que te calma, o a alguien que las agranda?",
    imageQuestion: "¿A quién le cuentas tus quejas?",
    image: "./assets/images/182-quejate-tan-poco-como-puedas.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-caridad-no-se-irrita",
    reading: `La caridad no se irrita: responde a la ofensa con mansedumbre y vence el mal a fuerza de hacer el bien.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo VIII",
    question: "Cuando recibes una palabra dura o un desprecio, ¿respondes con la mansedumbre y el silencio paciente de Jesús?",
    imageQuestion: "¿Respondes con mansedumbre ante la ofensa?",
    image: "./assets/images/70-ligorio-caridad-no-se-irrita.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-juicio-caifas",
    reading: `Ante el sumo sacerdote, Jesús confiesa con valentía la verdad, mostrando que la fidelidad a Dios está por encima de cualquier juicio humano.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 4",
    question: "¿Das testimonio valiente de tu fe católica y de la verdad sin dejarte acobardar por el qué dirán?",
    imageQuestion: "¿Das testimonio valiente de la verdad ante los hombres?",
    image: "./assets/images/98-olaizola-juicio-caifas.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-desconfianza-propia",
    reading: `La desconfianza de nosotros mismos es tan necesaria en el combate espiritual que sin ella no podemos dar un solo paso hacia la victoria.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 1",
    question: "¿Reconoces tu propia fragilidad humana para no apoyarte vanamente en tus solas fuerzas, sino en el auxilio de Dios?",
    imageQuestion: "¿Desconfías de tus fuerzas para confiar en Dios?",
    image: "./assets/images/55-combate-desconfianza-propia.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-apostoles-de-esperanza",
    reading: `«Sed apóstoles incansables de la esperanza cristiana en medio de este mundo desorientado. Llevad a todos la certeza de que Dios nos ama con amor eterno, y que su misericordia es un manantial inagotable que nunca defrauda a quien acude con fe y arrepentimiento sincero.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 8 de diciembre de 1987",
    question: "¿Eres sembrador de esperanza cristiana en tu entorno, recordando a los demás que la misericordia de Dios no tiene fin?",
    imageQuestion: "¿Eres sembrador de esperanza cristiana y misericordia?",
    image: "./assets/images/152-sacerdotes-apostoles-de-esperanza.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "la-verdadera-humildad-es-aceptarse",
    reading: `En ocasiones tenemos una idea falsa de humildad. La verdadera humildad no radica en juzgarse o menospreciarse a uno mismo. Decirse con desprecio: no vales nada, eres un inútil... La verdadera humildad es exactamente lo contrario: aceptarse de manera honesta, tal y como uno es.`,
    source: "La confianza en Dios · Capítulo 2",
    question: "¿Confundes a veces la humildad con despreciarte a ti mismo, en vez de aceptarte con honestidad?",
    imageQuestion: "¿Confundes humildad con despreciarte?",
    image: "./assets/images/200-la-verdadera-humildad-es-aceptarse.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-union-eucaristia",
    reading: `Hablando San Lorenzo Justiniano con Jesús, le dice: «¡Oh Dios!, enamorado de nuestras almas, por medio de este sacramento dispusiste que tu corazón y el nuestro fueran un solo corazón inseparablemente unido». Y San Bernardino de Siena añade que «el dársenos Jesucristo en alimento fue el último grado del amor, porque unión más cabal y completa no puede darse cual la que hay entre el manjar y quien lo come». Jesús quiso unirse a nosotros para no ser más que una sola cosa.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo II",
    question: "Cuando recibes la Sagrada Comunión, ¿acudes con la reverencia de quien sabe que Cristo viene a fundir su corazón con el tuyo?",
    imageQuestion: "¿Recibes la Eucaristía con amor ardiente?",
    image: "./assets/images/21-ligorio-union-eucaristia.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "la-confianza-es-el-antidoto-al-miedo",
    reading: `En definitiva, la confianza en Dios es el antídoto que Jesucristo propone a sus discípulos de todos los tiempos. Este fue el secreto de los mártires, de los misioneros, de tantos santos y héroes anónimos cristianos que nunca se dejaron arrastrar por la inseguridad personal ni por un miedo que, por supuesto, visitó su corazón como también visita el nuestro.`,
    source: "La confianza en Dios · Prólogo",
    question: "¿Qué secreto de los santos, capaces de no dejarse arrastrar por el miedo, te falta todavía por vivir?",
    imageQuestion: "¿Qué antídoto contra el miedo te falta vivir?",
    image: "./assets/images/195-la-confianza-es-el-antidoto-al-miedo.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-consagracion-del-hogar",
    reading: `«Consagrad vuestros hogares a mi Corazón Inmaculado. Yo seré la Reina y protectora de vuestras familias, trayendo unidad, fidelidad y bendición sobre vuestros hijos y seres queridos.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 1 de enero de 1985",
    question: "¿Consagras tu familia a la Virgen María, pidiéndole que reine en tu hogar con su paz y su gracia?",
    imageQuestion: "¿Consagras tu hogar y familia a la Virgen María?",
    image: "./assets/images/141-sacerdotes-consagracion-del-hogar.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-alegre-pequenez",
    reading: `La pequeñez no es cobardía ni tristeza: es la alegre libertad de quien sabe que todo lo recibe gratuitamente del amor del Padre.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Segunda Conferencia",
    question: "¿Vives con la alegría sencilla de los hijos de Dios que reconocen que todo don y gracia viene del Padre?",
    imageQuestion: "¿Vives con la alegre libertad de los hijos de Dios?",
    image: "./assets/images/76-teresita-alegre-pequenez.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-intercesion-maternal",
    reading: `«Confiad plenamente en mi intercesión maternal ante el trono de Dios. Ninguno de los que han acudido a mi amparo ha quedado jamás desasistido por mi amor de Madre.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 13 de mayo de 1988",
    question: "¿Acudes con confianza plena a la intercesión de María en tus momentos de necesidad, sabiendo que ella nunca te desampara?",
    imageQuestion: "¿Confías plenamente en la intercesión maternal de María?",
    image: "./assets/images/154-sacerdotes-intercesion-maternal.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "alimentados-de-la-palabra-de-dios",
    reading: `Si nos falta confianza es porque no estamos lo suficientemente alimentados de la Palabra de Dios. Todos aquellos que frecuentan asiduamente la Escritura tendrán esta experiencia un día u otro, la de estar algo preocupados o desalentados, y con un versículo de la Escritura se recuperarán, la confianza les será devuelta, haciéndoles encontrar la paz.`,
    source: "La confianza en Dios · Capítulo 3",
    question: "¿Cuánto hace que un versículo de la Escritura no te devuelve la confianza que hoy sientes debilitada?",
    imageQuestion: "¿Qué palabra te devolvería la confianza?",
    image: "./assets/images/202-alimentados-de-la-palabra-de-dios.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-prendimiento-serenidad",
    reading: `En el prendimiento, los discípulos huyen presos del miedo, pero Jesús permanece sereno, dispuesto a beber el cáliz que el Padre le ha dado.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 3",
    question: "Ante las tormentas y temores de tu vida, ¿perseveras con serenidad y fe, confiando en que Dios no te abandona?",
    imageQuestion: "¿Mantienes la fe y la serenidad en las horas oscuras?",
    image: "./assets/images/97-olaizola-prendimiento-serenidad.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-ascensor-brazos",
    reading: `Teresa comprendió que el ascensor que debía elevarla hasta el cielo eran los mismos brazos de Jesús. Para eso no necesitaba hacerse grande, sino al contrario, permanecer pequeña, haciéndose cada vez más pequeña. La santidad no consiste en acumular méritos con orgullo, sino en reconocer con gozo nuestra impotencia y abandonarnos totalmente en los brazos del Padre celestial, como un niño que descansa seguro en el regazo de su madre.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Conferencia 2",
    question: "¿Pretendes alcanzar la santidad apoyado en tus propias fuerzas, o te abandonas con humildad filial en los brazos de Jesús?",
    imageQuestion: "¿Te abandonas como un niño en los brazos de Dios?",
    image: "./assets/images/30-teresita-ascensor-brazos.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "el-arrepentimiento-tranquilo-y-firme",
    reading: `Por lo tanto, el disgusto por nuestras faltas ha de ser tranquilo, sereno y firme; porque, así como un juez castiga mejor a los malos dictando sus sentencias, según razón y con ánimo tranquilo, que dictándolas con impetuosidad y pasión, pues entonces no castiga las faltas por lo que éstas son, sino por lo que es él mismo; así nosotros nos castigamos mejor con arrepentimientos tranquilos y constantes, que con arrepentimientos violentos, agrios y coléricos.`,
    source: "Filotea: Introducción a la Vida Devota · Tercera Parte, capítulo IX",
    question: "¿Te corriges a ti mismo como un juez sereno, o como alguien que descarga su propia pasión?",
    imageQuestion: "¿Te corriges con calma o con violencia?",
    image: "./assets/images/181-el-arrepentimiento-tranquilo-y-firme.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-humildad-oculta",
    reading: `Quien ama a Jesucristo no se engríe de sus buenas obras ni busca la alabanza de los hombres, sino que procura ocultarse a los ojos del mundo para no ser visto sino de Dios solo. La verdadera virtud ama el rincón escondido.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo V",
    question: "¿Buscas el reconocimiento y el aplauso humano en tus buenas obras, o te basta saber que tu Padre del cielo te ve en lo secreto?",
    imageQuestion: "¿Haces el bien para ser visto por Dios solo?",
    image: "./assets/images/25-ligorio-humildad-oculta.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "cuatro-cosas-que-causan-paz",
    reading: `Procura, hijo, hacer antes la voluntad de otro que la tuya. Escoge siempre tener menos que más. Busca siempre el lugar más bajo, y está sujeto a todos. Desea siempre, y ruega que se cumpla en ti enteramente la divina voluntad. Así entrarás en los términos de la paz y descanso.`,
    source: "La Imitación de Cristo · Libro III, capítulo 23",
    question: "De estos cinco pasos hacia la paz, ¿cuál es el que más te cuesta vivir hoy?",
    imageQuestion: "¿Qué paso hacia la paz te cuesta más?",
    image: "./assets/images/163-cuatro-cosas-que-causan-paz.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-eucaristia-y-caridad",
    reading: `La belleza de la fe eucarística se manifiesta en el amor generoso hacia los pobres, porque el mismo Cristo que adoramos en el altar nos espera en el hermano necesitado.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 7",
    question: "¿Reconoces el rostro de Cristo en los pobres y necesitados, uniendo tu adoración eucarística con el servicio caritativo?",
    imageQuestion: "¿Reconoces a Cristo presente en los pobres?",
    image: "./assets/images/91-ratzinger-eucaristia-y-caridad.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-caridad-todo-lo-espera",
    reading: `La caridad todo lo espera: confía firmemente en las promesas del Señor y sabe que quien espera en Dios jamás quedará defraudado.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo XII",
    question: "¿Mantienes una esperanza viva e inquebrantable en las promesas divinas, aun cuando todo a tu alrededor parezca oscuro?",
    imageQuestion: "¿Confías plenamente en las promesas del Señor?",
    image: "./assets/images/74-ligorio-caridad-todo-lo-espera.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-paciencia-getsemani",
    reading: `La paciencia, según santo Tomás, es la virtud por la cual ante la presencia del mal no nos dejamos vencer por la tristeza o el disgusto. Jesús puso como condición para seguirlo el llevar con paciencia la cruz de sufrimientos de cada día. Y éstos nunca faltarán a nadie. Unas veces será una enfermedad, otras una grave situación económica, o un accidente, o la muerte de un ser querido, o una persona que nos trata sin caridad o con dureza o humillándonos. Ante estas contrariedades podemos tomar la actitud de Jesús en el huerto de los Olivos: clamar: "Padre, si no es posible que se aleje de mi este cáliz de amargura, que se haga tu santa voluntad".`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 24",
    question: "Ante las contrariedades y asperezas de tu día, ¿te dejas vencer por la tristeza y la queja, o te unes a Jesús aceptando con paciencia su voluntad?",
    imageQuestion: "¿Aceptas tu cruz con la paz de Getsemaní?",
    image: "./assets/images/13-combate-paciencia-getsemani.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "no-limites-tu-paciencia",
    reading: `No limites tu paciencia a tal o cual clase de injurias y de aflicciones, sino extiéndela universalmente a todas las que Dios te envíe o permita que te sobrevengan. Algunos hay que sólo quieren sufrir las tribulaciones que son honrosas, como, por ejemplo, ser heridos o caer prisioneros en la guerra, ser maltratados a causa de su fe, empobrecerse por algún pleito después de haberlo ganado; mas éstos no aman la tribulación, sino la honra que acarrea.`,
    source: "Filotea: Introducción a la Vida Devota · Tercera Parte, capítulo III",
    question: "¿Aceptas con paz solo las cruces que además te hacen quedar bien ante los demás?",
    imageQuestion: "¿Aceptas solo el sufrimiento que da honra?",
    image: "./assets/images/184-no-limites-tu-paciencia.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-perdon-y-reconciliacion",
    reading: `«La paz verdadera nace de la reconciliación con Dios y con los hermanos. Abrid vuestro corazón al perdón y no permitáis que la amargura ni el rencor echen raíces en vuestra alma.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 1 de enero de 1979",
    question: "¿Perdonas con prontitud las ofensas recibidas, dejando que la paz de Cristo sane toda herida de tu corazón?",
    imageQuestion: "¿Abres tu corazón al perdón y la reconciliación?",
    image: "./assets/images/121-sacerdotes-perdon-y-reconciliacion.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "prueba-imitacion-paz",
    reading: `Cuantas veces desea el hombre desordenadamente alguna cosa, luego pierde el sosiego.

El soberbio y el avariento nunca están quietos; el pobre y el humilde de espíritu viven en mucha paz.

El hombre que no es perfectamente mortificado en sí, presto es tentado y vencido de cosas pequeñas y viles.`,
    source: "La Imitación de Cristo · Libro I, capítulo 6",
    question: "Ante Jesús, ¿qué deseo o impulso te está robando el sosiego, y qué resistencia concreta puedes ofrecerle hoy por amor?",
    imageQuestion: "¿Qué deseo te roba la paz?",
    image: "./assets/images/01-cristo-y-pedro.webp",
    imageAlt: "Cristo resucitado sostiene con ternura a san Pedro arrodillado junto al mar.",
  },
  {
    id: "teresita-caridad-hermano",
    reading: `La verdadera caridad consiste en soportar todos los defectos del prójimo, no extrañarse de sus debilidades y edificarse de sus más pequeñas virtudes. Amar al hermano no es sentir afecto natural, sino querer su bien y servirle con paciencia por amor a Jesús. Cuando somos pacientes con los demás, atraemos sobre nuestra propia vida la misericordia del Padre celestial que nunca nos abandona y que nos llena de su paz.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Conferencia 8",
    question: "¿Soportas con paciencia y disculpas con amor los defectos ajenos, reconociendo cuánto te perdona Dios a ti cada día?",
    imageQuestion: "¿Miras a los demás con la paciencia de Cristo?",
    image: "./assets/images/36-teresita-caridad-hermano.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-mansedumbre-injurias",
    reading: `La caridad no se irrita. Cuando recibimos alguna injuria o desprecio, el amor propio nos incita a la ira y a la venganza; pero el alma que ama a Jesús procura guardar silencio y encomendar la causa a Dios, acordándose de cómo Jesús, cuando era ultrajado, no respondía con ultrajes, sino que oraba con misericordia por sus mismos perseguidores, ofreciendo su mansedumbre como escudo frente al mal.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo IX",
    question: "Cuando alguien te ofende o contradice, ¿te dejas arrastrar por la cólera, o buscas imitar el silencio y perdón de Jesús en su Pasión?",
    imageQuestion: "¿Frenas la ira imitando el silencio de Cristo?",
    image: "./assets/images/27-ligorio-mansedumbre-injurias.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-transformacion-creacion",
    reading: `La Eucaristía transforma no solo al creyente, sino a toda la creación, anticipando el banquete definitivo del Reino de Dios.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 4",
    question: "¿Vives la Eucaristía como el manantial que renueva todas tus actividades, trabajos y relaciones humanas?",
    imageQuestion: "¿Permites que la Eucaristía renueve todas tus obras?",
    image: "./assets/images/88-ratzinger-transformacion-creacion.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "la-medida-de-la-providencia-es-tu-confianza",
    reading: `La medida de la Divina Providencia en nosotros es la confianza que tenemos en ella. No preveáis los accidentes de esta vida con temor, sino prevedlos en medio de una profunda esperanza pues Dios, al que pertenecéis, os librará de ellos a medida que se presenten. Os ha guardado hasta el momento; manteneos firmemente en manos de la Divina Providencia, y os asistirá en todas las ocasiones, y cuando no podáis caminar, Él os llevará.`,
    source: "La paz interior · Los santos y la paz del alma · San Francisco de Sales, 6",
    question: "¿Con qué medida—temor o esperanza—sueles anticipar lo que todavía no ha sucedido?",
    imageQuestion: "¿Anticipas el futuro con temor o esperanza?",
    image: "./assets/images/191-la-medida-de-la-providencia-es-tu-confianza.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-fidelidad-pequenas-cosas",
    reading: `La fidelidad en las pequeñas cosas de cada día tiene un valor infinito, porque es allí donde el amor se demuestra con mayor pureza y verdad.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Séptima Conferencia",
    question: "¿Cuidas los pequeños detalles cotidianos de caridad y trabajo, ofreciéndolos como flores de amor al Señor?",
    imageQuestion: "¿Santificas los pequeños detalles de tu día?",
    image: "./assets/images/81-teresita-fidelidad-pequenas-cosas.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-reina-de-la-paz",
    reading: `«Yo soy la Reina de la Paz y mi triunfo es la victoria del amor sobre el odio. Sed instrumentos de reconciliación y mansedumbre en medio de un mundo dividido por la soberbia y la discordia.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 13 de octubre de 1976",
    question: "¿Siembras paz y reconciliación a tu alrededor, respondiendo al odio y la queja con la mansedumbre del Evangelio?",
    imageQuestion: "¿Eres instrumento de paz y reconciliación?",
    image: "./assets/images/114-sacerdotes-reina-de-la-paz.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "prueba-philippe-padre-fiel",
    reading: `Esta relación filial con Dios, que se expresa y se profundiza especialmente en la oración, no siempre es fácil de vivir hoy en día. Vivir como niños, en un mundo de competencia despiadada, no es nada fácil. Debemos ser adultos, saber perder a veces, manteniendo sin embargo el corazón de un niño, un corazón que descansa en Dios, que se abandona en Dios. Él sabrá ser nuestro defensor. Él es nuestro Padre, es fiel. Con frecuencia nos agitamos, en lugar de contar con el Señor con confianza. Un aspecto esencial de la vida espiritual es este trabajo de renovación de la confianza en nuestro corazón. Herido por el pecado original, en él habitan los miedos, las dudas, y su curación requiere mucho tiempo. Quizás nunca lleguemos a curarlo totalmente a lo largo de nuestra vida, pero al menos podremos llevar a cabo grandes progresos por esta confianza.`,
    source: "La confianza en Dios · Jacques Philippe, Capítulo 4",
    question: "En medio de las exigencias de tu semana, ¿dónde te agitas solo en vez de contar con tu Padre con confianza?",
    imageQuestion: "¿Te abandonas en tu Padre?",
    image: "./assets/images/08-padre-misericordioso.webp",
    imageAlt: "El padre de la parábola corre a abrazar a su hijo que regresa, sosteniéndolo con ternura.",
  },
  {
    id: "sacerdotes-mirada-al-cielo",
    reading: `«Mirad hacia el cielo, donde os espera la patria verdadera. No os dejéis atrapar por las vanidades pasajeras de la tierra, sino atesorad méritos para la eternidad mediante el amor y la caridad.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 15 de agosto de 1981",
    question: "¿Pones tu mirada en las realidades celestiales, viviendo tus días con desprendimiento de las vanidades mundanas?",
    imageQuestion: "¿Atesoras méritos eternos mediante la caridad?",
    image: "./assets/images/129-sacerdotes-mirada-al-cielo.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-fe-pura-noche",
    reading: `La fe pura brilla más en la noche de la prueba, cuando creemos sin ver y confiamos sin sentir consuelo alguno.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Sexta Conferencia",
    question: "En momentos de aridez o desolación espiritual, ¿perseveras creyendo con fe pura en el amor incondicional de Dios?",
    imageQuestion: "¿Perseveras en la fe aun en la aridez espiritual?",
    image: "./assets/images/80-teresita-fe-pura-noche.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-dolor-fecundo",
    reading: `«El dolor soportado por amor es fuente fecunda de vida espiritual, y en la herida del sufrimiento Dios derrama la mayor abundancia de su gracia.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 15 de septiembre de 1975",
    question: "¿Aceptas las pruebas de la vida sabiendo que el dolor vivido con amor engendra frutos eternos de santidad?",
    imageQuestion: "¿Vives el sufrimiento como ofrenda de amor?",
    image: "./assets/images/110-sacerdotes-dolor-fecundo.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-pureza-del-corazon",
    reading: `«La pureza del corazón os permite ver a Dios en todas las cosas y refleja el resplandor de la gracia en vuestra vida diaria.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 8 de diciembre de 1977",
    question: "¿Cuidas la pureza de tus pensamientos, miradas y afectos para que la presencia de Dios resplandezca en tu alma?",
    imageQuestion: "¿Cuidas la pureza del corazón ante Dios?",
    image: "./assets/images/118-sacerdotes-pureza-del-corazon.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "solo-en-ti-descansa-mi-corazon",
    reading: `Porque Tú, Señor, Dios mío, eres bueno sobre todo; Tú solo potentísimo; Tú solo suficientísimo y llenísimo; Tú solo suavísimo y agradabilísimo. Tú solo hermosísimo y amantísimo; Tú solo nobilísimo y gloriosísimo sobre todas las cosas, en quien están, estuvieron y estarán todos los bienes junta y perfectamente. Por eso es poco e insuficiente cualquier cosa que me das o prometes, o me descubres de Ti mismo, no viéndote ni poseyéndote cumplidamente. Porque no puede mi corazón descansar del todo y contentarse verdaderamente, si no descansa en Ti trascendiendo todos los dones y todo lo criado.`,
    source: "La Imitación de Cristo · Libro III, capítulo 21",
    question: "¿Qué don de Dios has confundido alguna vez con el propio Dios, buscando descansar en el regalo y no en Quien lo da?",
    imageQuestion: "¿Descansas en los dones o en Dios mismo?",
    image: "./assets/images/161-solo-en-ti-descansa-mi-corazon.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-camino-confianza",
    reading: `El secreto de Teresa es la confianza total y el abandono infantil en Dios. No hay camino más corto ni más seguro para llegar al Corazón de Jesús.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Conclusión",
    question: "¿Te decides a caminar hoy por la senda de la confianza y el abandono, viviendo como un hijo amado en las manos del Padre?",
    imageQuestion: "¿Te abandonas como un niño en las manos del Padre?",
    image: "./assets/images/84-teresita-camino-confianza.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-getsemani-oracion",
    reading: `En Getsemaní, Jesús experimenta la soledad más desgarradora. Los amigos se duermen mientras Él suda sangre en la lucha interior. Sin embargo, en medio del pavor y la angustia, brota la oración más pura: «Padre, no se haga mi voluntad, sino la tuya». Ahí se gana la redención del mundo, cuando la libertad humana del Hijo se entrega por entero a los designios salvíficos del Padre celestial.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 2: Getsemaní",
    question: "En tus momentos de soledad, angustia o prueba, ¿perseveras en la oración humilde repitiendo «hágase tu voluntad»?",
    imageQuestion: "¿Perseveras en la oración en tus horas difíciles?",
    image: "./assets/images/48-olaizola-getsemani-oracion.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-poder-de-la-gracia",
    reading: `«La gracia de Dios es más poderosa que todo el pecado del mundo. Nunca os desaniméis por vuestras caídas, sino acudid con prontitud al sacramento de la reconciliación para renacer en su amor.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 8 de diciembre de 1985",
    question: "¿Acudes con confianza y prontitud al sacramento del perdón cada vez que experimentas tu debilidad?",
    imageQuestion: "¿Acudes al sacramento del perdón sin desanimarte?",
    image: "./assets/images/144-sacerdotes-poder-de-la-gracia.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "todo-coopera-al-bien-de-los-que-aman-a-dios",
    reading: `Todo coopera al bien de los que aman a Dios. Y en realidad, si Dios puede y sabe sacar el bien del mal, ¿por quién lo haría, sino por los que se han entregado a Él sin reservas? Sí, incluso los pecados, de los que Dios en su bondad nos defiende, contribuyen al bien de los suyos.`,
    source: "La paz interior · Los santos y la paz del alma · San Francisco de Sales, 4",
    question: "¿Qué error tuyo del pasado puede Dios estar convirtiendo hoy, sin que aún lo notes, en un bien?",
    imageQuestion: "¿Qué error se está volviendo un bien?",
    image: "./assets/images/190-todo-coopera-al-bien-de-los-que-aman-a-dios.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-silencio-liturgico",
    reading: `El silencio sagrado en la liturgia no es vacío ni ausencia, sino la presencia llena de Dios que habla al corazón en la quietud profunda.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 5",
    question: "¿Guardas momentos de silencio sagrado en tu oración para escuchar la voz apacible del Señor en tu interior?",
    imageQuestion: "¿Escuchas la voz de Dios en el silencio sagrado?",
    image: "./assets/images/89-ratzinger-silencio-liturgico.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-crecimiento-paciente",
    reading: `Es necesario contentarse con ir creciendo poquito a poco en la perfección. Así crecen las plantas, los animales y los seres humanos: casi sin que nadie se dé cuenta, pero si ese crecer es continuo se llega a resultados muy satisfactorios. Los que perseveren, esos serán los triunfadores.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 32",
    question: "¿Tienes paciencia con tus lentos progresos espirituales, confiando en que Dios hace crecer la gracia día tras día?",
    imageQuestion: "¿Tienes paciencia con tus progresos espirituales?",
    image: "./assets/images/16-combate-crecimiento-paciente.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-pequenos-sacrificios",
    reading: `«Ofreced vuestros pequeños sacrificios diarios con amor, porque cada acto de renuncia ofrecido a Dios se transforma en lluvia de bendiciones.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 15 de septiembre de 1978",
    question: "¿Ofreces con alegría las pequeñas renuncias de cada día, convirtiéndolas en actos sinceros de amor a Dios?",
    imageQuestion: "¿Ofreces con amor tus sacrificios diarios?",
    image: "./assets/images/120-sacerdotes-pequenos-sacrificios.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-mandamiento-nuevo",
    reading: `En la Última Cena, Jesús lava los pies a sus discípulos y les da un mandamiento nuevo: que nos amemos unos a otros como Él nos ha amado.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 2",
    question: "¿Buscas servir a tus hermanos con la humildad del lavatorio de los pies, sin buscar reconocimientos ni primeros puestos?",
    imageQuestion: "¿Vives el mandamiento del amor fraterno en el servicio?",
    image: "./assets/images/96-olaizola-mandamiento-nuevo.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "la-devocion-es-la-dulzura-de-las-dulzuras",
    reading: `Créeme, amada Filotea, la devoción es la dulzura de las dulzuras y la reina de las virtudes, porque es la perfección de la caridad. Si la caridad es la leche, la devoción es la nata; si es una planta, la devoción es la flor; si es una piedra preciosa, la devoción es el brillo; si es un bálsamo precioso, la devoción es el aroma, el aroma de suavidad que conforta a los hombres y regocija a los ángeles.`,
    source: "Filotea: Introducción a la Vida Devota · Primera Parte, capítulo II",
    question: "¿Vives tu fe como una obligación pesada, o has probado ya la dulzura que promete cuando es verdadera?",
    imageQuestion: "¿Has probado la dulzura de la devoción?",
    image: "./assets/images/175-la-devocion-es-la-dulzura-de-las-dulzuras.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "la-paz-nace-de-la-humildad",
    reading: `La paz nace de la humildad. Nada nos altera como el amor propio y la estima que tenemos de nosotros mismos. ¿Qué significa si no el hecho de que nos sorprendamos, nos sintamos confusos e impacientes cuando caemos en alguna imperfección o en algún pecado? Indudablemente, creíamos ser buenos, firmes y sólidos; y, en consecuencia, cuando comprobamos que no hay nada de eso y que hemos dado con nuestros huesos en el suelo, nos sentimos engañados, y en consecuencia alterados, ofendidos e inquietos. Si supiéramos bien quiénes somos, en lugar de sentirnos sorprendidos por vernos por los suelos, nos sorprenderíamos de poder permanecer en pie.`,
    source: "La paz interior · Los santos y la paz del alma · San Francisco de Sales, 3",
    question: "¿Te sorprende más caer en tus defectos, o debería sorprenderte más el que Dios te sostenga en pie?",
    imageQuestion: "¿Qué te sorprende más: caer o seguir en pie?",
    image: "./assets/images/189-la-paz-nace-de-la-humildad.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "prueba-philippe-acto",
    reading: `Os digo esto para haceros comprender lo siguiente: a través de acontecimientos insignificantes, Dios puede sanarnos profundamente. A veces sentimos como una llamada del Señor para salir de nosotros mismos, para dar un paso adelante, para hacernos más adultos, más libres. Hay momentos de la vida en los que nos damos vueltas a nosotros mismos sobre nuestra inmadurez, nuestras quejas, nuestros lamentos, nuestras dependencias y de repente un día se nos da la gracia, que es un don de Dios, pero que apela también a nuestra libertad. Hay una elección que hacer; se trata de una curación y conversión a la vez: la libertad debe optar por llevar a cabo un acto de valor. Cuando realizamos un acto de valor, aunque sea para algo insignificante que Dios nos pida, esto puede llevarnos a una curación profunda, a una nueva libertad que nos es concedida por Dios.`,
    source: "La confianza en Dios · Capítulo 1",
    question: "¿Qué pequeño acto de confianza te está pidiendo Dios hoy, uno que quizás te parece insignificante pero que puede sanarte por dentro?",
    imageQuestion: "¿Qué acto de confianza te pide hoy?",
    image: "./assets/images/05-manos-confianza.webp",
    imageAlt: "Cristo extiende la mano hacia un niño que se acerca a tomarla con confianza.",
  },
  {
    id: "sacerdotes-consagracion-providencia",
    reading: `«Comienza este nuevo año consagrándote enteramente a mi Corazón Inmaculado. No te preocupes por el mañana ni te angusties por los acontecimientos del mundo: todo está en las manos del Padre celestial, y Yo velo constantemente sobre cada uno de vosotros con amor de Madre.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 1 de enero de 1974",
    question: "¿Entregas tus planes e incertidumbres del futuro a la Divina Providencia, descansando en el cuidado maternal de María?",
    imageQuestion: "¿Confías tu futuro a la Divina Providencia?",
    image: "./assets/images/107-sacerdotes-consagracion-providencia.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "la-mano-oculta-de-tu-providencia",
    reading: `Porque tu mano, Señor, en lo oculto de tu providencia no me dejaba y las lágrimas del corazón que mi madre vertía por mí de día y de noche eran un sacrificio ante ti por mi salvación. Y tú obraste en mí de maravillosas maneras. Sí, Dios mío, tú lo hiciste; tú, que diriges los pasos de los hombres y regulas sus caminos. ¿Ni qué pretensión de salvación puede haber si no viene de tu mano, que recrea lo que creaste?`,
    source: "Confesiones de San Agustín · Libro V, capítulo 7",
    question: "¿Qué paso de tu vida, que parecía obra tuya, reconoces ahora que era la mano oculta de Dios?",
    imageQuestion: "¿Ves la mano de Dios en tu camino?",
    image: "./assets/images/172-la-mano-oculta-de-tu-providencia.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-milagro-transustanciacion",
    reading: `En la Misa se realiza el milagro de la transustanciación: lo que parecía pan y vino se convierte verdaderamente en el Cuerpo y la Sangre de Cristo. Ante este misterio sobrecogedor, la razón humana se inclina con humildad y la fe responde con adoración y agradecimiento sin fin. El Dios inabarcable se pone enteramente en nuestras manos para alimentarnos en nuestro peregrinar terreno hacia el Reino eterno.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 7",
    question: "¿Participas en la Santa Misa con santo asombro y gratitud, o la vives como una rutina exterior sin hondura?",
    imageQuestion: "¿Vives el misterio de la Misa con santo asombro?",
    image: "./assets/images/45-ratzinger-milagro-transustanciacion.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-amar-padecer",
    reading: `Quien ama a Jesucristo ama el padecer. El que ama de veras a Jesucristo siente grandísimo gozo en verse tratado como lo fue Jesucristo: pobre, perseguido y despreciado. Todas las penas que se sufren por amor de Jesucristo son perlas preciosas con que se engalana el alma para presentarse un día en el cielo. No hay señal más segura de amor que padecer de buena gana por el Amado. Por eso los santos, no sólo sufrían con paciencia las enfermedades y las persecuciones, sino que las recibían con alegría, considerándose dichosos de parecerse a Jesús paciente en medio de las pruebas de esta vida presente.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo II",
    question: "¿Aceptas las molestias, dolores e incomprensiones cotidianas con paz, descubriendo en ellas la ocasión de parecerte a Jesús paciente?",
    imageQuestion: "¿Aceptas las molestias diarias por amor a Cristo?",
    image: "./assets/images/22-ligorio-amar-padecer.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-desprendimiento-puro",
    reading: `La caridad no busca sus propios intereses, sino sólo el agrado de Dios. El alma desprendida no busca consuelos propios en la devoción, sino dar gusto a su Señor. Si Dios la colma de consuelos, se los agradece; si la deja en sequedad y tinieblas, permanece igualmente fiel y sumisa, porque no ama los dones de Dios, sino al Dios de los dones, sirviéndole con generosa fidelidad en toda circunstancia.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo VIII",
    question: "¿Sirves a Dios por amor a su Persona, o te desanimas en cuanto desaparecen los consuelos sensibles de la oración?",
    imageQuestion: "¿Amas a Dios o solo a sus dones?",
    image: "./assets/images/26-ligorio-desprendimiento-puro.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "nave-sin-timon",
    reading: `El principio de toda mala tentación es la inconstancia del ánimo y la poca confianza en Dios. Porque como la nave sin timón la llevan a una y otra parte las olas, así el hombre descuidado y que desiste de su propósito es tentado de diversas maneras.`,
    source: "La Imitación de Cristo · Libro I, capítulo 13",
    question: "¿Dónde está el timón de tu confianza en Dios cuando llegan las olas de la tentación?",
    imageQuestion: "¿Dónde está el timón de tu confianza?",
    image: "./assets/images/157-nave-sin-timon.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-ofrecimiento-obras",
    reading: `Es sumamente conveniente que le ofrezcamos con frecuencia a Dios lo que hacemos, decimos, pensamos y sufrimos, lo que poseemos y todos nuestros buenos deseos. Pero para que este ofrecimiento sea totalmente del agrado del Señor es conveniente que lo unamos a los ofrecimientos que Jesucristo hizo al Padre Celestial durante su vida mortal, de todo lo que hacía, pensaba, hablaba y sufría. Esto le da un valor inmenso a lo poquito que en nuestra pobreza podemos ofrecer.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 53",
    question: "¿Ofreces a Dios tus cansancios y trabajos uniéndolos a la entrega de Jesús, para que adquieran valor eterno ante el Padre?",
    imageQuestion: "¿Ofreces tu jornada unido al sacrificio de Cristo?",
    image: "./assets/images/18-combate-ofrecimiento-obras.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "corazon-inquieto-hasta-que-descanse",
    reading: `Grande eres, Señor, e inmensamente digno de alabanza; grande es tu poder y tu inteligencia no tiene límites. Y ahora hay aquí un hombre que te quiere alabar. Un hombre que es parte de tu creación y que, como todos, lleva siempre consigo por todas partes su mortalidad y el testimonio de su pecado, el testimonio de que tú siempre te resistes a la soberbia humana. Así pues, no obstante su miseria, ese hombre te quiere alabar. Y tú lo estimulas para que encuentre deleite en tu alabanza; nos creaste para ti y nuestro corazón andará siempre inquieto mientras no descanse en ti.`,
    source: "Confesiones de San Agustín · Libro I, capítulo 1",
    question: "¿Reconoces hoy que tu corazón anda inquieto porque busca su descanso en otro lugar que no es Dios?",
    imageQuestion: "¿Dónde busca descanso tu corazón inquieto?",
    image: "./assets/images/166-corazon-inquieto-hasta-que-descanse.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-arma-del-rosario",
    reading: `«El arma más poderosa contra el mal es el Santo Rosario rezado con el corazón. Cada Avemaría es un canto de amor y un acto de confianza que atrae bendiciones sobre vosotros y vuestras familias, derribando los muros del orgullo y de la discordia.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 13 de mayo de 1982",
    question: "¿Rezas el Rosario contemplando los misterios de Cristo con el corazón, intercediendo por tus seres queridos?",
    imageQuestion: "¿Rezas el Rosario contemplando los misterios con el corazón?",
    image: "./assets/images/132-sacerdotes-arma-del-rosario.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "mi-confianza-era-confianza-en-mi-mismo",
    reading: `Consigo practicar el bien, soy una persona buena y honesta, y entonces tengo mucha confianza en Dios; no hay ningún inconveniente al respecto. Y entonces un momento difícil llega a mi vida, caigo por ejemplo en una falta inmensamente humillante. O tomo una decisión errónea, un poco desagradable, sobre todo cuando los demás se dan cuenta de ello. Me enfrento a mis errores... Me sumerjo entonces en un momento de tristeza y desaliento, y mi confianza en Dios desaparece, ¡se funde como la nieve al sol! ¿Qué significa esto? Lo que yo llamaba confianza en Dios era de hecho confianza en mí mismo.`,
    source: "La confianza en Dios · Capítulo 4",
    question: "Cuando fallas y tu confianza en Dios se tambalea con ella, ¿en quién estabas confiando en realidad?",
    imageQuestion: "¿Confías en Dios, o en ti mismo?",
    image: "./assets/images/199-mi-confianza-era-confianza-en-mi-mismo.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-caida-desanimo",
    reading: `Cuando cometemos alguna falta, ya sea por irreflexión o sorpresa, ya sea con malicia y premeditación, lo importante es no desanimarse, no dejar de luchar por recuperar de nuevo la amistad con Dios, la paz y pureza del alma. Cuando nos suceda hacer o decir o pensar algo que va contra la ley de Dios, tenemos que decirle humildemente a Nuestro Señor: "Oh Dios mío: acabo de demostrar lo que soy: miseria, debilidad, mala inclinación. Pero ¿qué más podía esperarse de una creatura tan miserable y débil como yo, sino caídas, infidelidades y pecados?".`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 25",
    question: "Cuando caes o fallas, ¿te encierras en el desánimo de tu orgullo herido, o acudes enseguida a Dios para pedir perdón y recobrar la paz?",
    imageQuestion: "¿Te encierras en el desánimo o vuelves a Dios?",
    image: "./assets/images/10-combate-caida-desanimo.webp",
    imageAlt: "Cristo se inclina con infinita misericordia para levantar y consolar a un hombre arrodillado y arrepentido.",
  },
  {
    id: "sacerdotes-alegria-del-espiritu",
    reading: `«La alegría cristiana es el fruto del Espíritu Santo en el alma, y brota de la certeza de saberse amado eternamente por Dios.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 1 de enero de 1984",
    question: "¿Vives con la alegría interior que nace de saberte infinitamente amado y perdonado por Dios?",
    imageQuestion: "¿Vives con la alegría de saberte amado por Dios?",
    image: "./assets/images/138-sacerdotes-alegria-del-espiritu.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-silencio-del-corazon",
    reading: `«En el silencio del corazón Dios habla con ternura inefable, enseñándoos los secretos de su amor y colmándoos de su paz divina.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 15 de septiembre de 1982",
    question: "¿Cultivas el silencio interior para escuchar la voz apacible del Señor que susurra en lo profundo de tu alma?",
    imageQuestion: "¿Cultivas el silencio para escuchar la voz de Dios?",
    image: "./assets/images/133-sacerdotes-silencio-del-corazon.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "hoy-el-hombre-manana-no-parece",
    reading: `Muy presto será contigo este negocio; mira cómo te has de componer. Hoy es el hombre y mañana no parece. En quitándolo de la vista, se va presto también de la memoria. ¡Oh torpeza y dureza del corazón humano, que solamente piensa en lo presente, sin cuidado de lo por venir! Así habías de conducirte en toda obra y pensamiento, como si hoy hubieses de morir. Si tuvieses buena conciencia, no temerías mucho la muerte. Mejor fuera evitar los pecados que huir de la muerte. Si no estás dispuesto hoy, ¿cómo lo estarás mañana? Mañana es día incierto; y ¿qué sabes si amanecerás mañana?`,
    source: "La Imitación de Cristo · Libro I, capítulo 23",
    question: "Si hoy fuera el último día de tu vida, ¿qué cambiarías ahora mismo en tu manera de vivir?",
    imageQuestion: "¿Vives hoy como si fueras a morir hoy?",
    image: "./assets/images/158-hoy-el-hombre-manana-no-parece.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-aceptar-flaqueza",
    reading: `Aceptar nuestra flaqueza no significa cruzarse de brazos ni ceder al desaliento, sino dejar de pretender justificarnos por nuestras propias obras para esperar todo de la sola gracia de Jesucristo, cuya fuerza se manifiesta plenamente en nuestra debilidad.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Conferencia 4",
    question: "¿Aceptas humildemente tus flaquezas para que en ellas resplandezca el poder y la gracia de Jesucristo?",
    imageQuestion: "¿Esperas todo de la gracia de Jesucristo?",
    image: "./assets/images/32-teresita-aceptar-flaqueza.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-guardar-lengua",
    reading: `Del modo de gobernar la lengua. Hablar poco y sólo lo necesario es una gran virtud. Quien habla mucho, peca mucho. El que guarda su boca guarda su alma. En el mucho hablar nunca falta pecado, pero el que refrena sus labios es prudente. El silencio prudente conserva la paz del alma.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 23",
    question: "¿Guardas silencio prudente en tus conversaciones, o dejas que el descontrol de las palabras robe la paz de tu alma?",
    imageQuestion: "¿Guardas silencio para proteger tu alma?",
    image: "./assets/images/14-combate-guardar-lengua.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-confianza-providencia",
    reading: `«No temáis por el futuro: la Providencia divina guía cada instante de vuestra existencia. Poned toda vuestra confianza en el Padre celestial, que viste los lirios del campo y alimenta a las aves del cielo.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 1 de enero de 1983",
    question: "¿Descansas en la certeza de que Dios Padre cuida de ti en todo momento, librándote de la ansiedad y el miedo?",
    imageQuestion: "¿Descansas en la Providencia amorosa del Padre?",
    image: "./assets/images/134-sacerdotes-confianza-providencia.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-vestidura-humildad",
    reading: `«La humildad es la vestidura de los siervos de Dios, y en el alma humilde el Señor realiza sus mayores maravillas de gracia.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 13 de mayo de 1980",
    question: "¿Buscas revestirte de humildad en tu trato con los demás, reconociendo que Dios ensalza siempre a los humildes?",
    imageQuestion: "¿Buscas la humildad para que Dios obre en ti?",
    image: "./assets/images/125-sacerdotes-vestidura-humildad.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-humildad-verdadera",
    reading: `La verdadera humildad no consiste en decir palabras de desprecio sobre uno mismo, agradeciendo a Dios todo lo bueno que hay en nosotros y reconociendo nuestra nada.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 35",
    question: "¿Vives una humildad auténtica que reconoce con gozo que todo bien en ti proviene de la generosidad de Dios?",
    imageQuestion: "¿Reconoces con gozo que todo bien viene de Dios?",
    image: "./assets/images/62-combate-humildad-verdadera.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-simon-cirineo",
    reading: `Simón de Cirene volvía cansado del campo cuando los soldados lo forzaron a cargar con la cruz de un condenado. Al principio cargó el madero con disgusto y resistencia; pero al caminar junto a Jesús y cruzar su mirada con la de aquel Hombre destrozado que no maldecía, el madero forzado se convirtió en el mayor honor de su vida. Cargar con la cruz del prójimo que sufre nunca es una pérdida de tiempo: es la senda misteriosa donde nos encontramos cara a cara con el Redentor, descubriendo que al sostener al hermano dolorido estamos aliviando el paso del mismo Cristo camino del Calvario.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 7: El Cirineo",
    question: "Cuando las necesidades y sufrimientos de los demás alteran tus planes, ¿te quejas del contratiempo, o descubres en ellos la cruz bendita de Jesús?",
    imageQuestion: "¿Ayudas a cargar la cruz del prójimo con amor?",
    image: "./assets/images/52-olaizola-simon-cirineo.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-lavatorio-pies",
    reading: `Jesús se arrodilla ante los discípulos con una jofaina y una toalla. El Maestro se hace siervo. Lavar los pies es tocar la parte más polvorienta y gastada del hermano, para limpiarla con amor entrañable y enseñarnos a servir con profunda humildad.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 1: El Lavatorio",
    question: "¿Estás dispuesto a servir con sencillez en lo oculto, inclinándote para aliviar las fragilidades y cansancios del prójimo?",
    imageQuestion: "¿Te inclinas para servir con humildad al prójimo?",
    image: "./assets/images/47-olaizola-lavatorio-pies.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "la-paz-camino-hacia-la-vida-eterna",
    reading: `La experiencia os demostrará que la paz, que inundará vuestra alma con la caridad, el amor a Dios y al prójimo, es el camino recto hacia la vida eterna. Cuidad de no dejar que vuestro corazón se turbe, se entristezca, se conmueva o se mezcle con lo que podría causarle inquietud. Trabajad siempre por mantenerlo tranquilo, pues el Señor dice: «Bienaventurados los pacíficos».`,
    source: "La paz interior · Los santos y la paz del alma · Juan de Bonilla, 1",
    question: "¿Qué has dejado entrar hoy en tu corazón que le causa inquietud sin que te dieras cuenta?",
    imageQuestion: "¿Qué inquieta hoy tu corazón?",
    image: "./assets/images/185-la-paz-camino-hacia-la-vida-eterna.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-comunion-transformacion",
    reading: `Comulgar no es simplemente recibir un símbolo, sino entrar en comunión íntima con la Persona viva de Jesucristo. Al asimilar el Pan del cielo, no transformamos nosotros a Cristo en nosotros, sino que Él nos transforma a nosotros en Él, haciéndonos partícipes de su propia vida divina y de su amor. Quien comulga con fe se une a la vida del Resucitado y se abre a la santidad.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 4",
    question: "¿Permites que la Comunión transforme tus criterios y afectos para que vivas y ames con los mismos sentimientos de Cristo?",
    imageQuestion: "¿Permites que Cristo te transforme en la Comunión?",
    image: "./assets/images/42-ratzinger-comunion-transformacion.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-mano-de-maria",
    reading: `«Confía en Mí, hijo. No tengas miedo de nada. Yo misma te tomaré de la mano y te conduciré en todo momento hacia Jesús.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 7 de julio de 1973",
    question: "¿Confías filialmente en el amparo maternal de la Virgen María para que ella guíe tus pasos hacia Jesús?",
    imageQuestion: "¿Te dejas llevar de la mano de María hacia Jesús?",
    image: "./assets/images/105-sacerdotes-mano-de-maria.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "el-amor-de-dios-no-esta-sujeto-a-eclipses",
    reading: `Si mi confianza recae verdaderamente en Dios, aunque yo esté bien o esté mal, aunque esté satisfecho o descontento de mí mismo, mi confianza no debería cambiar. El amor de Dios no está sujeto a eclipses. Es fundamental que nuestra confianza no recaiga en nuestros éxitos personales, sino que lo haga únicamente en el amor de Dios, su ternura, su infinita misericordia, en el hecho de que Él es nuestro Padre y que jamás podrá abandonarnos.`,
    source: "La confianza en Dios · Capítulo 4",
    question: "¿Tu confianza en Dios sube y baja según tus propios éxitos, o descansa solo en su amor?",
    imageQuestion: "¿Tu confianza depende de tus éxitos?",
    image: "./assets/images/201-el-amor-de-dios-no-esta-sujeto-a-eclipses.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-gozo-en-la-verdad",
    reading: `La caridad no se alegra con la injusticia, sino que goza con la verdad: su mayor consuelo es ver que las almas conocen a Dios y caminan en su amor.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo X",
    question: "¿Sientes un celo ardiente por la salvación de las almas, deseando que muchos encuentren la luz y la gracia de Cristo?",
    imageQuestion: "¿Deseas con ardor que todos conozcan a Dios?",
    image: "./assets/images/72-ligorio-gozo-en-la-verdad.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-fidelidad-cotidiana",
    reading: `«La fidelidad en las pequeñas cosas agrada inmensamente a Dios, porque allí se demuestra la autenticidad del amor verdadero.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 13 de mayo de 1983",
    question: "¿Realizas tus tareas cotidianas con esmero y amor, ofreciéndolas como pequeños actos de fidelidad a Dios?",
    imageQuestion: "¿Vives con fidelidad y amor en lo pequeño?",
    image: "./assets/images/135-sacerdotes-fidelidad-cotidiana.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-buen-ladron-paraiso",
    reading: `El buen ladrón clama desde su cruz: «Jesús, acuérdate de mí cuando estés en tu Reino», y recibe en el último instante la promesa bienaventurada del Paraíso.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 8",
    question: "¿Confías en que nunca es tarde para volver a Dios, acudiendo a su misericordia infinita con la fe del buen ladrón?",
    imageQuestion: "¿Confías en que la misericordia de Dios siempre está abierta?",
    image: "./assets/images/102-olaizola-buen-ladron-paraiso.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-peregrinos-hacia-el-cielo",
    reading: `«Hijos míos, vivid siempre con la mirada puesta en la eternidad. Esta vida terrena es solo un breve peregrinaje: no os apeguéis a lo pasajero, sino buscad las riquezas imperecederas del Reino de Dios mediante la santidad de vida y el amor fraterno sincero.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 15 de agosto de 1986",
    question: "¿Vives como peregrino en la tierra, buscando ante todo la santidad y los tesoros eternos del Reino de Dios?",
    imageQuestion: "¿Buscas ante todo los tesoros eternos del Reino de Dios?",
    image: "./assets/images/147-sacerdotes-peregrinos-hacia-el-cielo.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-enemigo-principal",
    reading: `En el combate espiritual no debemos querer pelear contra todos los enemigos a la vez. concentrando todas las fuerzas del alma en esa sola lucha, con la ayuda de la gracia divina.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 13",
    question: "¿Identificas con lucidez cuál es tu defecto dominante para combatirlo con paciencia y constancia cada día?",
    imageQuestion: "¿Combates con paciencia tu defecto principal?",
    image: "./assets/images/57-combate-enemigo-principal.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "marta-te-preocupas-por-muchas-cosas",
    reading: `Cuando Nuestro Señor reprende a Marta, le dice: «Marta, Marta, te preocupas e inquietas por muchas cosas». Mirad, si ella hubiera sido simplemente cuidadosa, no se hubiera alterado, pero como estaba preocupada e inquieta, se apresuraba y se angustiaba, y por eso la reprendió el Señor.`,
    source: "La paz interior · Los santos y la paz del alma · San Francisco de Sales, 7",
    question: "¿En qué te pareces hoy a Marta: cuidadoso de lo necesario, o preocupado por demasiadas cosas?",
    imageQuestion: "¿Eres hoy más Marta preocupada o en paz?",
    image: "./assets/images/193-marta-te-preocupas-por-muchas-cosas.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "el-sabor-del-delito",
    reading: `Bonitas eran aquellas frutas que robamos, pues eran criaturas tuyas, ¡oh, tú, creador de todas ellas, sumo Bien y verdadero Bien! Hermosas eran, pero no fueron ellas lo que deseó mi alma miserable, ya que yo las tenía mejores. Si las corté fue sólo para robarlas y, prueba de ello es que apenas cortadas, las arrojé; mi banquete consistió meramente en mi fechoría, pues me gozaba en la maldad. Porque si algo de aquellas peras entró en mi boca, su condimento no fue otro que el sabor del delito.`,
    source: "Confesiones de San Agustín · Libro II, capítulo 6",
    question: "¿Qué mal has hecho alguna vez no por lo que ganabas, sino por el simple gusto de transgredir?",
    imageQuestion: "¿Buscas el bien, o el gusto de pecar?",
    image: "./assets/images/165-el-sabor-del-delito.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-caridad-no-se-engrie",
    reading: `La caridad no se engríe: el alma que ama a Jesús se oculta gustosa, sabiendo que el mayor honor es ser tenido por nada para agradar solo al Amado.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo V",
    question: "¿Aceptas con paz el pasar desapercibido, buscando únicamente que Dios conozca tu entrega y tus sacrificios?",
    imageQuestion: "¿Buscas agradar a Dios en lo oculto?",
    image: "./assets/images/67-ligorio-caridad-no-se-engrie.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-pequenez-humilde",
    reading: `«Para ser dócil a mi acción maternal, es necesario que permanezcas pequeño y humilde. En los brazos de tu Madre celestial hallarás siempre refugio, consuelo y verdadera paz para tu alma fatigada.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 24 de agosto de 1973",
    question: "¿Buscas la humildad de los pequeños para dejarte formar por la gracia de Dios en medio de tus fatigas cotidianas?",
    imageQuestion: "¿Buscas el consuelo de Dios en la pequeñez humilde?",
    image: "./assets/images/106-sacerdotes-pequenez-humilde.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-perseverancia-don",
    reading: `La perseverancia es el don más precioso que debemos pedir sin descanso, porque el que persevere hasta el fin, ése se salvará.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 50",
    question: "¿Pides a diario con insistencia la gracia de la perseverancia para mantenerte fiel hasta el último momento?",
    imageQuestion: "¿Pides el don sagrado de la perseverancia?",
    image: "./assets/images/64-combate-perseverancia-don.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-mision-evangelizadora",
    reading: `La Eucaristía impulsa a la misión evangelizadora: quien ha experimentado la cercanía salvadora del Señor no puede callar la alegría de haber encontrado la Vida.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 8",
    question: "¿Sientes la urgencia santa de dar testimonio del amor de Cristo en tus ambientes cotidianos, llevando esperanza a quienes te rodean?",
    imageQuestion: "¿Sientes la llamada de compartir la alegría del Evangelio?",
    image: "./assets/images/92-ratzinger-mision-evangelizadora.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-fidelidad-al-pie-cruz",
    reading: `«Junto a la cruz de Jesús aprendéis el valor del silencio y de la fidelidad. No huyáis ante la dificultad, sino permaneced firmes en la fe sabiendo que la victoria pertenece al Señor.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 15 de septiembre de 1980",
    question: "¿Permaneces firme en la fe cuando arrecia la prueba, sabiendo que la cruz conduce siempre a la luz de la Resurrección?",
    imageQuestion: "¿Permaneces firme en la fe ante la prueba?",
    image: "./assets/images/126-sacerdotes-fidelidad-al-pie-cruz.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-memorial-pascua",
    reading: `La Eucaristía es el memorial vivo de la Pascua de Cristo, donde el acontecimiento de la cruz se hace presente para nuestra salvación.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 1",
    question: "¿Participas de la Santa Misa sabiendo que en el altar se hace presente el mismo sacrificio redentor de Cristo en el Calvario?",
    imageQuestion: "¿Vives la Misa como presencia viva del sacrificio de Cristo?",
    image: "./assets/images/85-ratzinger-memorial-pascua.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "cuidado-sin-inquietud-como-los-angeles",
    reading: `El cuidado y la diligencia que hemos de poner en nuestros asuntos son cosas muy diferentes de la preocupación, de la inquietud y del afán. Los ángeles tienen cuidado de nuestra salvación y nos la procuran con diligencia, mas no por ello sienten inquietud, desasosiego, ni ansia; porque el cuidado y la diligencia son propios de su caridad, pero la inquietud, el desasosiego y el afán serían del todo contrarios a su felicidad.`,
    source: "Filotea: Introducción a la Vida Devota · Tercera Parte, capítulo X",
    question: "¿Puedes imaginar hoy tus responsabilidades atendidas con el mismo cuidado sereno de un ángel, sin la ansiedad que sueles ponerle?",
    imageQuestion: "¿Puedes atender tus asuntos sin ansiedad?",
    image: "./assets/images/177-cuidado-sin-inquietud-como-los-angeles.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "donde-estas-cuando-no-estas-contigo",
    reading: `El hombre recogido antepone el cuidado de sí mismo a todos los cuidados; y el que tiene verdadero cuidado de sí, poco habla de otros. Nunca estarás recogido y devoto, si no callares las cosas ajenas, y especialmente mirares a ti mismo. Si del todo te ocupares en Dios y en ti, poco te moverá lo que sientes de fuera. ¿Dónde estás cuando no estás contigo? Y después de haber discurrido por todas las cosas ¿qué has ganado si de ti te olvidaste? Si has de tener paz y unión verdadera, conviene que todo lo pospongas, y tengas a ti solo delante de tus ojos.`,
    source: "La Imitación de Cristo · Libro II, capítulo 5",
    question: "¿Dónde estás tú, de verdad, cuando pasas el día entero pendiente de todo menos de tu propia alma?",
    imageQuestion: "¿Dónde estás cuando no estás contigo?",
    image: "./assets/images/162-donde-estas-cuando-no-estas-contigo.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-todo-cumplido",
    reading: `«Todo está cumplido». No es un grito de derrota, sino de triunfo y plenitud: el amor ha ido hasta el extremo, la fidelidad se ha mantenido intacta y la reconciliación del mundo está sellada. Inclinando la cabeza, Jesús entregó el espíritu en las manos amorosas de su Padre, dejándonos el testimonio supremo de que la entrega confiada vence a la muerte y abre para siempre las puertas de la vida eterna.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 8: Todo está cumplido",
    question: "¿Vives cada jornada con el anhelo santo de poder decir ante Dios que cumpliste por amor la misión que Él te encomendó?",
    imageQuestion: "¿Vives con el deseo de cumplir la voluntad de Dios?",
    image: "./assets/images/54-olaizola-todo-cumplido.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-llena-de-gracia",
    reading: `«Yo soy la Inmaculada Concepción, la llena de gracia que os invita a vivir en la pureza y en el amor de Dios. No tengáis miedo de vuestra debilidad: acudid a Mí con confianza de hijos, y Yo os revestiré de las virtudes de Jesús para que caminéis seguros hacia el Cielo.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 8 de diciembre de 1983",
    question: "¿Acudes filialmente a la Inmaculada Madre para que ella te revista de las virtudes de Cristo en tus luchas?",
    imageQuestion: "¿Acudes a María para revestirte de las virtudes de Cristo?",
    image: "./assets/images/137-sacerdotes-llena-de-gracia.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-madre-divina-gracia",
    reading: `«Yo soy la Madre de la divina gracia que os sostiene en la lucha diaria y os conduce con dulzura hacia la santidad.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 8 de diciembre de 1986",
    question: "¿Te dejas sostener por la gracia de Dios y el amparo de María para perseverar con gozo en tu camino de santidad?",
    imageQuestion: "¿Te dejas sostener por la gracia de Dios hacia la santidad?",
    image: "./assets/images/148-sacerdotes-madre-divina-gracia.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-santidad-pequenez",
    reading: `La santidad no es una meta inalcanzable reservada a gigantes espirituales; es simplemente acoger la misericordia de Dios y dejarse amar por Él en nuestra pequeñez cotidiana, confiando enteramente en su bondad paternal sin desanimarnos jamás.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Conferencia 1",
    question: "¿Crees de verdad que Dios te llama a la santidad hoy mismo, en medio de tus límites, debilidades y tareas cotidianas?",
    imageQuestion: "¿Te dejas amar por Dios en tu pequeñez?",
    image: "./assets/images/29-teresita-santidad-pequenez.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-gracia-origen",
    reading: `Tenemos que convencernos que no hay virtud, ni cualidad, ni buen proceder en nosotros que no proceda de la bondad y misericordia de Dios, porque nosotros mismos como dice san Pablo, ni siquiera podemos decir por propia cuenta que Jesús es Dios. Toda nuestra capacidad viene de Dios. Pues Dios es el que obra en nosotros el querer y el obrar.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 2",
    question: "¿Reconoces que todo el bien y la virtud que hay en ti es gracia de Dios, o te atribuyes en secreto el mérito de tus obras?",
    imageQuestion: "¿Reconoces que todo bien viene de Dios?",
    image: "./assets/images/11-combate-gracia-origen.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-caridad-comunitaria",
    reading: `La caridad fraterna no consiste en sentir afecto sensible hacia todos, sino en desearles el bien y servirles con paciencia por amor a Jesús.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Octava Conferencia",
    question: "¿Tratas con paciencia y benevolencia a quienes te resultan difíciles, amándolos con el corazón mismo de Cristo?",
    imageQuestion: "¿Amas al hermano difícil con la paciencia de Cristo?",
    image: "./assets/images/82-teresita-caridad-comunitaria.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "soberbia-que-ama-una-parte-como-si-fuera-el-todo",
    reading: `Todo esto sucede cuando los hombres te abandonan a ti, que eres la fuente de la vida, el verdadero creador y gobernador del universo; cuando la soberbia personal ama una parte del todo haciendo de ella un falso todo. Es así como por el camino de una piadosa humildad regresamos a ti y tú nos purificas de nuestros malos hábitos y te muestras propicio para los que te confiesan sus pecados, escuchas los gemidos de los que están presos con los pies en los grilletes y nos sueltas de las cadenas que nosotros mismos nos forjamos.`,
    source: "Confesiones de San Agustín · Libro III, capítulo 8",
    question: "¿Qué cadena te has forjado tú mismo al amar una parte de tu vida como si fuera el todo?",
    imageQuestion: "¿Qué cadena te forjaste tú mismo?",
    image: "./assets/images/169-soberbia-que-ama-una-parte-como-si-fuera-el-todo.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-distintivo-de-caridad",
    reading: `«La caridad fraterna es el distintivo de los verdaderos discípulos de Jesús. Amaos unos a otros con sinceridad, soportándoos con paciencia y perdonándoos de corazón en todo momento.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 15 de agosto de 1983",
    question: "¿Vives la caridad fraterna con paciencia y dulzura, superando los roces cotidianos con el perdón sincero?",
    imageQuestion: "¿Vives la caridad fraterna con perdón y paciencia?",
    image: "./assets/images/136-sacerdotes-distintivo-de-caridad.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "prueba-philippe-orgullo",
    reading: `Cuando el bien que está presente en nuestra vida se convierte en un pretexto para juzgar y menospreciar a los demás, está convirtiéndose en una ocasión de orgullo. Debemos estar atentos porque sucede muy rápido. La actitud verdadera es alegrarse del bien que está presente en nuestra vida, pero sin bajar la guardia ante lo que podría alimentar un orgullo más o menos consciente. Sabemos que los dos signos habituales y principales del orgullo son tanto menospreciar a los demás como desanimarse. El desánimo es una expresión del orgullo, dijo Teresa. Cuando se es humilde, cuando uno acepta su pequeñez, no se desanima pues tiene confianza en Dios y en sí mismo.`,
    source: "La confianza en Dios · Jacques Philippe, Capítulo 2",
    question: "¿Cuándo fue la última vez que juzgaste a alguien o te desanimaste contigo mismo, sin ver que las dos cosas nacen del mismo orgullo?",
    imageQuestion: "¿Qué mueve tu juicio: humildad u orgullo?",
    image: "./assets/images/07-fariseo-publicano.webp",
    imageAlt: "El fariseo ora erguido con la cabeza en alto mientras el publicano se queda atrás, arrodillado y cabizbajo.",
  },
  {
    id: "sacerdotes-fuerza-en-la-eucaristia",
    reading: `«Comenzad cada jornada con un acto de amor a Jesús Eucaristía. Él es vuestra fuerza, vuestro alimento y vuestra victoria en medio de todas las batallas de la vida espiritual.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 1 de enero de 1987",
    question: "¿Buscas en Jesús Eucaristía la fortaleza diaria que tu espíritu necesita para vencer el desánimo y la debilidad?",
    imageQuestion: "¿Buscas tu fortaleza diaria en Jesús Eucaristía?",
    image: "./assets/images/149-sacerdotes-fuerza-en-la-eucaristia.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-mirada-del-rosario",
    reading: `«El Santo Rosario es la oración de los sencillos y de los humildes. En él contempláis los misterios de la vida de Jesús a través de mis ojos de Madre, aprendiendo a amar como Él nos amó.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 13 de mayo de 1984",
    question: "¿Contemplas los misterios del Rosario con la mirada tierna de María, dejando que Cristo transforme tu vida?",
    imageQuestion: "¿Contemplas a Jesús con la mirada de María?",
    image: "./assets/images/139-sacerdotes-mirada-del-rosario.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-ser-el-amor",
    reading: `Comprendí que el amor encerraba todas las vocaciones, que el amor lo era todo, que abarcaba todos los tiempos y todos los lugares... En fin, ¡que el amor es eterno! En el corazón de la Iglesia, mi Madre, yo seré el amor. Así lo seré todo.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Conferencia 8",
    question: "¿Procuras que el amor a Dios y al prójimo sea el alma y el sentido más profundo de todas tus acciones?",
    imageQuestion: "¿Vives el amor como el centro de tu vida?",
    image: "./assets/images/37-teresita-ser-el-amor.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-beso-judas",
    reading: `Judas se acerca a Jesús en la oscuridad y lo saluda con un beso: el signo del afecto convertido en contraseña de traición. Y Jesús, mirándolo a los ojos con infinita tristeza y misericordia, le responde: «Amigo, ¿a qué has venido?». Hasta el último instante, el Señor no cierra la puerta al perdón, no responde con odio ni desprecio, sino que ofrece a su traidor el título de amigo para intentar conmover su corazón endurecido. Cuántas veces también nosotros traicionamos el amor de Dios con nuestras cobardías cotidianas, y Él sigue mirándonos con ternura y llamándonos amigos para rescatarnos del abismo.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 3: La Traición",
    question: "¿Reconoces cuántas veces Jesús sale a tu encuentro con misericordia para ofrecerte su amistad y perdón tras tus caídas?",
    imageQuestion: "¿Reconoces que Cristo te sigue llamando amigo?",
    image: "./assets/images/49-olaizola-beso-judas.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "paz-de-no-entrometerse",
    reading: `Mucha paz tendríamos si en los dichos y hechos ajenos que no nos pertenecen no quisiésemos meternos. ¿Cómo puede estar en paz mucho tiempo el que se entremete en cuidados ajenos, y busca ocasiones exteriores, y dentro de sí poco o tarde se recoge? Bienaventurados los sencillos, porque tendrán mucha paz.`,
    source: "La Imitación de Cristo · Libro I, capítulo 11",
    question: "¿En qué asunto ajeno te has metido esta semana, robándole la paz a tu propio corazón?",
    imageQuestion: "¿En qué te metes que no te pertenece?",
    image: "./assets/images/155-paz-de-no-entrometerse.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-caridad-benigna",
    reading: `La caridad es benigna. Quien ama a Jesucristo procura ser afable y manso con todos, principalmente con los que le son molestos o le han ofendido, pagando el mal con el bien y la aspereza con la dulzura de un corazón que imita al Salvador.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo III",
    question: "¿Respondes con mansedumbre a quienes te tratan con dureza, o te dejas llevar por la aspereza y el resentimiento?",
    imageQuestion: "¿Respondes a la aspereza con dulzura y caridad?",
    image: "./assets/images/23-ligorio-caridad-benigna.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-comunidad-unidad",
    reading: `La Eucaristía crea la verdadera comunidad cristiana. Porque todos comemos del mismo Pan único, llegamos a ser un solo cuerpo en Cristo, llamados a vivir en unidad, perdón fraterno y comunión sincera, derribando los muros de la indiferencia y del egoísmo. Así, el sacramento del altar se convierte en el principio visible de la paz y de la reconciliación entre todos los hombres que buscan a Dios con corazón sincero.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 8",
    question: "¿Fomentas la reconciliación y la unidad entre tus hermanos, viviendo la Eucaristía como vínculo de caridad fraterna?",
    imageQuestion: "¿Construyes unidad y fraternidad con los demás?",
    image: "./assets/images/46-ratzinger-comunidad-unidad.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-noche-santa-belen",
    reading: `«En la noche santa de Belén, Dios se hace Niño en la pobreza y el silencio. Acoged a Jesús con la pureza y la sencillez de los pastores, haciéndole un pesebre cálido en vuestro propio corazón.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 24 de diciembre de 1975",
    question: "¿Acoges a Jesús con un corazón sencillo y desprendido, libre de las distracciones y ruidos del mundo?",
    imageQuestion: "¿Haces en tu corazón un pesebre para Jesús?",
    image: "./assets/images/111-sacerdotes-noche-santa-belen.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-esperanza-cielo",
    reading: `La Eucaristía alimenta nuestra esperanza escatológica, recordándonos que somos peregrinos en camino hacia la patria del cielo.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 9",
    question: "¿Recuerdas en medio de tus afanes terrenales que eres un peregrino cuya morada definitiva es el cielo junto a Dios?",
    imageQuestion: "¿Caminas como peregrino hacia la patria del cielo?",
    image: "./assets/images/93-ratzinger-esperanza-cielo.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "toma-y-lee",
    reading: `Tomé el libro, lo abrí y leí para mí aquel capítulo que primero se presentó a mis ojos, y eran estas palabras: No en banquetes ni embriagueces, no en vicios y deshonestidades, no en contiendas y emulaciones, sino revestíos de Nuestro Señor Jesucristo, y no empleéis vuestro cuidado en satisfacer los apetitos del cuerpo. No quise leer más adelante, ni tampoco era menester, porque luego que acabé de leer esta sentencia, como si se me hubiera infundido en el corazón un rayo de luz clarísima, se disiparon enteramente todas las tinieblas de mis dudas.`,
    source: "Confesiones de San Agustín · Libro VIII, capítulo 12",
    question: "¿Qué palabra de Dios, leída sin buscarla, te ha cambiado alguna vez el rumbo del día?",
    imageQuestion: "¿Qué palabra te cambió el rumbo?",
    image: "./assets/images/171-toma-y-lee.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-rosario-paz",
    reading: `«El Santo Rosario es la cadena dulce que os une a Dios y la oración humilde que desarma toda soberbia y obtiene la paz del corazón.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 13 de mayo de 1974",
    question: "¿Rezas el Santo Rosario con devoción y sencillez, acogiéndolo como la dulce cadena que te une al Corazón de Dios?",
    imageQuestion: "¿Rezas el Rosario para alcanzar la paz interior?",
    image: "./assets/images/108-sacerdotes-rosario-paz.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-audacia-esperanza",
    reading: `La audacia de la esperanza consiste en esperar de Dios lo imposible, confiando en que su misericordia supera con creces todas nuestras limitaciones y pecados.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Tercera Conferencia",
    question: "Cuando te sientes indigno o débil, ¿te atreves a esperar con audacia la plenitud de la misericordia divina?",
    imageQuestion: "¿Tienes una esperanza audaz en la misericordia?",
    image: "./assets/images/77-teresita-audacia-esperanza.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-presencia-viva",
    reading: `Dios no es una hipótesis lejana sobre el origen del mundo, sino una presencia viva que ha plantado su tienda entre nosotros. En la Eucaristía, el Dios eterno se hace cercano y alcanzable para cada hombre, invitándonos a compartir su misma vida divina.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 1",
    question: "¿Reconoces y agradeces la cercanía real y viva de Dios que te espera en el Sagrario de cada iglesia?",
    imageQuestion: "¿Reconoces la presencia viva de Dios en el Sagrario?",
    image: "./assets/images/38-ratzinger-presencia-viva.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "en-vuestra-paciencia-poseereis-vuestras-almas",
    reading: `«Es menester que tengáis paciencia, para que, cumpliendo la voluntad de Dios, alcancéis su promesa», dice el Apóstol. Sí, porque, como había dicho el Salvador, «en vuestra paciencia, poseeréis vuestras almas». Este es el gran bien del hombre, Filotea: poseer su alma; y, conforme es más perfecta nuestra paciencia, más perfectamente también poseemos nuestras almas. Recuerda, con frecuencia, que Nuestro Señor nos ha salvado sufriendo y aguantando, y que, así mismo, nosotros hemos de conseguir nuestra salvación con los sufrimientos y aflicciones, aguantando las injurias, contradicciones y penas, con toda la suavidad que nos sea posible.`,
    source: "Filotea: Introducción a la Vida Devota · Tercera Parte, capítulo III",
    question: "¿Qué significaría hoy para ti poseer tu alma en paz, en lugar de dejártela arrebatar por cada contrariedad?",
    imageQuestion: "¿Posees tu alma, o te la arrebatan?",
    image: "./assets/images/183-en-vuestra-paciencia-poseereis-vuestras-almas.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-llanto-perdon-pedro",
    reading: `Pedro niega al Maestro por miedo a una criada, pero la mirada de Jesús lo rescata del abismo: las lágrimas del arrepentimiento abren la puerta a un amor más hondo y maduro.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 5",
    question: "Cuando experimentas tus propias flaquezas, ¿dejas que la mirada perdonadora de Cristo sane tu dolor y renueve tu entrega?",
    imageQuestion: "¿Dejas que el perdón de Cristo renueve tu amor?",
    image: "./assets/images/99-olaizola-llanto-perdon-pedro.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "aborrecer-los-defectos-con-paz",
    reading: `Es preciso aborrecer nuestros defectos, pero con un aborrecimiento tranquilo y pacífico, no con un odio despechado e inquieto; hay que tener paciencia al descubrirlos y sacar el provecho de un santo desprecio de nosotros mismos.`,
    source: "La paz interior · Los santos y la paz del alma · San Francisco de Sales, 8",
    question: "¿Odias tus defectos con paz, o con la misma violencia con la que juzgarías a otro?",
    imageQuestion: "¿Con qué ánimo miras tus defectos?",
    image: "./assets/images/194-aborrecer-los-defectos-con-paz.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-adoracion-eucaristica",
    reading: `La adoración no es un lujo ni un añadido a la comunión: es su prolongación natural. No se puede comulgar verdaderamente si antes y después no se adora con reverencia al Señor, guardando silencio en su presencia para escuchar su voz en el interior del corazón.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 5",
    question: "¿Adoras en silencio y recogimiento a Jesús Sacramentado para preparar y prolongar los frutos de tu comunión?",
    imageQuestion: "¿Adoras con reverencia al Señor eucarístico?",
    image: "./assets/images/43-ratzinger-adoracion-eucaristica.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-examen-conciencia",
    reading: `El examen de conciencia no debe hacerse con angustia ni escrúpulo, agradeciendo el bien recibido y pidiendo perdón por las faltas cometidas.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 27",
    question: "Al terminar tu jornada, ¿haces tu examen con la confianza filial de quien se sabe amado por su Padre celestial?",
    imageQuestion: "¿Revisas tu día con agradecimiento y confianza?",
    image: "./assets/images/61-combate-examen-conciencia.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-apostoles-de-paz",
    reading: `«Sed apóstoles de la paz y de la misericordia en vuestras familias. Llevad consuelo al que sufre y sed reflejo vivo del amor de Cristo para con todos los necesitados.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 1 de enero de 1982",
    question: "¿Llevas consuelo y esperanza a quienes sufren en tu entorno, siendo testigo vivo de la compasión de Jesús?",
    imageQuestion: "¿Llevas la paz y el consuelo de Dios a quienes sufren?",
    image: "./assets/images/131-sacerdotes-apostoles-de-paz.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-estrella-del-mar",
    reading: `«En estos tiempos de confusión y tinieblas, Yo soy vuestra guía segura. Refugiaos en mi Corazón Inmaculado mediante la oración del Rosario y la fidelidad al Evangelio, y veréis cómo la luz de Cristo disipa toda oscuridad y renueva la faz de la tierra.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 13 de mayo de 1979",
    question: "En medio de las dificultades y confusiones de la vida, ¿acudes a la luz del Evangelio y al refugio de María?",
    imageQuestion: "¿Buscas refugio en la luz del Evangelio y la oración?",
    image: "./assets/images/122-sacerdotes-estrella-del-mar.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-maria-mujer-eucaristica",
    reading: `María es la mujer eucarística por excelencia, que acogió primero en su seno al Verbo eterno y nos enseña a adorar a su Hijo con amor incondicional.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 10",
    question: "¿Miras a la Virgen María como modelo de adoración para acoger a Jesús con un corazón limpio y dócil en la comunión?",
    imageQuestion: "¿Acoges a Jesús con el corazón dócil de María?",
    image: "./assets/images/94-ratzinger-maria-mujer-eucaristica.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-asuncion-intercesion",
    reading: `«Asunta al cielo en cuerpo y alma, no me he alejado de vosotros, sino que estoy más cerca que nunca de cada una de vuestras necesidades. Presento vuestras oraciones y sacrificios ante el trono del Altísimo, intercediendo con amor de Madre para que no os falte jamás la gracia de la perseverancia final.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 15 de agosto de 1977",
    question: "¿Recurres a la intercesión de la Virgen Asunta al cielo, encomendándole tus pruebas y la salvación eterna de tu alma?",
    imageQuestion: "¿Confías tus súplicas a la Virgen Asunta al cielo?",
    image: "./assets/images/117-sacerdotes-asuncion-intercesion.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "cerrar-la-puerta-y-hallar-paz",
    reading: `Deja lo vano a los vanos, y tú ten cuidado de lo que te manda Dios. Cierra tu puerta sobre ti, y llama a tu amado Jesús; permanece con Él en tu aposento, que no hallarás en otro lugar tanta paz.`,
    source: "La Imitación de Cristo · Libro I, capítulo 20",
    question: "¿Te atreves hoy a cerrar la puerta del ruido exterior para quedarte a solas con Jesús?",
    imageQuestion: "¿Cierras la puerta para estar con Jesús?",
    image: "./assets/images/160-cerrar-la-puerta-y-hallar-paz.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "prueba-agustin-inquieto",
    reading: `Grande eres, Señor, e inmensamente digno de alabanza; grande es tu poder y tu inteligencia no tiene límites.

Y ahora hay aquí un hombre que te quiere alabar. Un hombre que es parte de tu creación y que, como todos, lleva siempre consigo por todas partes su mortalidad y el testimonio de su pecado, el testimonio de que tú siempre te resistes a la soberbia humana. Así pues, no obstante su miseria, ese hombre te quiere alabar. Y tú lo estimulas para que encuentre deleite en tu alabanza; nos creaste para ti y nuestro corazón andará siempre inquieto mientras no descanse en ti.`,
    source: "Confesiones · Libro I, capítulo 1",
    question: "¿En qué rincón de tu corazón sigue buscando descanso en el control o en la razón, en vez de en Dios?",
    imageQuestion: "¿Dónde descansa tu corazón?",
    image: "./assets/images/04-agustin-corazon-inquieto.webp",
    imageAlt: "San Agustín, de noche junto a una ventana, mira hacia una luz cálida con la mano sobre el pecho.",
  },
  {
    id: "presa-en-la-amistad-de-las-cosas-mortales",
    reading: `Era yo pues bien miserable; que por fuerza lo es el alma que vive presa en la amistad de las cosas mortales y se desgarra cuando las pierde. Es entonces cuando siente la miseria que lo hace miserable desde antes de que las pierda.`,
    source: "Confesiones de San Agustín · Libro IV, capítulo 6",
    question: "¿Qué cosa mortal tiene hoy presa tu alma, de tal modo que perderla te desgarraría por dentro?",
    imageQuestion: "¿Qué tiene presa tu alma?",
    image: "./assets/images/167-presa-en-la-amistad-de-las-cosas-mortales.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-roca-de-la-confianza",
    reading: `«Vivid cada momento presente en el abandono filial a la voluntad de Dios. No os dejéis turbar por los temores humanos, porque quien confía en el Señor está cimentado sobre roca firme.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 13 de mayo de 1978",
    question: "¿Edificas tu vida sobre la roca de la confianza en Dios, o te dejas tambalear por las preocupaciones del mundo?",
    imageQuestion: "¿Edificas tu vida sobre la confianza en Dios?",
    image: "./assets/images/119-sacerdotes-roca-de-la-confianza.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-sepulcro-esperanza",
    reading: `El cuerpo de Jesús descansa en el sepulcro nuevo en el silencio del Sábado Santo, esperando en la paz de la muerte la victoria inminente de la Resurrección.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 10",
    question: "En los momentos de silencio y espera en tu vida, ¿aguardas con esperanza viva el triunfo victorioso de la gracia de Dios?",
    imageQuestion: "¿Esperas con fe viva en las horas de silencio?",
    image: "./assets/images/104-olaizola-sepulcro-esperanza.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-gozo-bien-ajeno",
    reading: `El alma que ama a Dios no envidia la prosperidad de los demás, sino que se goza del bien ajeno como del propio. Quien de veras ama a Dios, no tiene más deseo que ver a Dios amado y glorificado por todos; por lo cual, cuando ve que otro adelanta en la virtud o hace más bien que él, se alegra grandemente y da gracias al Señor con corazón humilde y sincero.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo IV",
    question: "¿Te alegras con sinceridad de corazón por las virtudes y éxitos del prójimo, o sientes la secreta amargura de la envidia?",
    imageQuestion: "¿Te alegras con el bien del prójimo?",
    image: "./assets/images/24-ligorio-gozo-bien-ajeno.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-centro-eucaristico",
    reading: `«El amor a la Eucaristía es el centro de toda vida espiritual, porque allí late el Corazón vivo de mi Hijo Jesús para dársenos como alimento.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 15 de agosto de 1979",
    question: "¿Es la Santa Eucaristía el corazón y la fuente viva de la que brota toda tu fuerza y esperanza diaria?",
    imageQuestion: "¿Es la Eucaristía el centro de tu vida espiritual?",
    image: "./assets/images/123-sacerdotes-centro-eucaristico.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-vencer-distracciones",
    reading: `Si durante la oración te asaltan las distracciones, no te angusties ni te enojes. Cada vez que vuelves a Dios con humildad, tu oración es sumamente grata a sus ojos.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 18",
    question: "Cuando te distraes en la oración, ¿te desanimas con impaciencia o vuelves serenamente tu mirada al Señor?",
    imageQuestion: "¿Vuelves con serenidad a la presencia de Dios?",
    image: "./assets/images/59-combate-vencer-distracciones.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-mirada-pedro",
    reading: `Cantó el gallo y el Señor se volvió y miró a Pedro. No fue una mirada de reproche o condena, sino de amor herido y perdón entrañable. Y Pedro, saliendo fuera, lloró amargamente, dejando que esa mirada sanara su corazón quebrantado.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 5: El Llanto de Pedro",
    question: "¿Permites que la mirada misericordiosa de Jesús toque tu interior para suscitar en ti un dolor sincero de tus pecados?",
    imageQuestion: "¿Dejas que la mirada de Jesús renueve tu corazón?",
    image: "./assets/images/50-olaizola-mirada-pedro.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-uncion-betania",
    reading: `En Betania, María unge los pies de Jesús con perfume valioso, enseñándonos que el amor verdadero no escatima nada para el Señor.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 1",
    question: "¿Ofreces a Dios lo mejor de tu tiempo, afectos y talentos con la generosidad de quien ama sin calcular?",
    imageQuestion: "¿Ofreces a Dios lo mejor de tu vida sin calcular?",
    image: "./assets/images/95-olaizola-uncion-betania.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-fraccion-pan",
    reading: `En la fracción del pan, Jesús se entrega a Sí mismo por entero. No reparte cosas, sino su propio Ser para alimentarnos en el camino de la vida.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 2",
    question: "Cuando te acercas a comulgar, ¿recibes a Jesús con la reverencia de quien sabe que recibe a Dios mismo en su corazón?",
    imageQuestion: "¿Recibes a Cristo con veneración en la comunión?",
    image: "./assets/images/86-ratzinger-fraccion-pan.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-perseverancia-final",
    reading: `Quien ama a Jesucristo con amor verdadero, persevera en su gracia hasta la muerte. No basta haber empezado bien: la corona del cielo no se da a quien comenzó, sino a quien persevera fielmente hasta el fin en la amistad divina.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo XIII",
    question: "¿Pides cada día a Dios la gracia insustituible de la perseverancia final para mantenerte fiel en su amor hasta el último suspiro?",
    imageQuestion: "¿Pides la gracia de perseverar hasta el fin?",
    image: "./assets/images/28-ligorio-perseverancia-final.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-amor-fuerte-muerte",
    reading: `La Eucaristía nos enseña que el amor de Dios es más fuerte que la muerte. En la Última Cena, Jesús no huyó ante la traición ni ante el sufrimiento inminente, sino que transformó su muerte violenta en un acto libre de entrega y amor supremo. Al darnos su Cuerpo entregado y su Sangre derramada, convirtió la mayor injusticia de la historia humana en la fuente inagotable de la reconciliación y de la vida eterna. Por eso, en cada Misa participamos de esa victoria definitiva del amor sobre el pecado, aprendiendo a confiar en que la fidelidad de Dios sostiene nuestra existencia aun en las horas más oscuras.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 2",
    question: "En medio de tus pruebas y temores, ¿te refugias en el amor vencedor de Cristo que se renueva en cada Eucaristía?",
    imageQuestion: "¿Crees que el amor de Cristo vence toda muerte?",
    image: "./assets/images/40-ratzinger-amor-fuerte-muerte.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-caridad-todo-lo-sufre",
    reading: `La caridad todo lo sufre: abraza con amor las cruces que Dios envía, sabiendo que el padecer por amor purifica el corazón.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo XI",
    question: "¿Recibes los sufrimientos y contrariedades de la vida como oportunidades preciosas para demostrar tu amor a Jesús?",
    imageQuestion: "¿Abrazas tu cruz por amor a Jesús?",
    image: "./assets/images/73-ligorio-caridad-todo-lo-sufre.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-paz-en-el-corazon",
    reading: `«Que la paz de Cristo reine siempre en vuestros corazones y en vuestros hogares, porque donde hay paz y caridad, allí habita Dios.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 1 de enero de 1988",
    question: "¿Permites que la paz de Cristo reine en tus palabras, actitudes y relaciones cotidianas con quienes te rodean?",
    imageQuestion: "¿Permites que la paz de Cristo reine en tu corazón?",
    image: "./assets/images/153-sacerdotes-paz-en-el-corazon.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "trata-tus-asuntos-sin-precipitacion",
    reading: `Seas, pues, Filotea, cuidadosa y diligente en todos los asuntos que tuvieres a tu cargo, porque Dios te los ha confiado y quiere que los trates cual conviene; pero, si te es posible, no andes solícita ni ansiosa, es decir, no los emprendas con inquietud, angustia y afán. No te apresures en tu cometido, porque toda precipitación turba la razón y el juicio, y nos impide también hacer las cosas por las cuales nos afanamos.`,
    source: "Filotea: Introducción a la Vida Devota · Tercera Parte, capítulo X",
    question: "¿Qué asunto llevas hoy con tanta prisa que ya ni la razón ni el juicio te acompañan?",
    imageQuestion: "¿La prisa te está nublando el juicio?",
    image: "./assets/images/178-trata-tus-asuntos-sin-precipitacion.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-cenaculo-de-oracion",
    reading: `«En el Cenáculo de mi Corazón os enseño a orar con fervor y constancia. La oración humilde y perseverante abre los cielos y derrama ríos de gracia sobre la Iglesia y la humanidad.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 13 de mayo de 1986",
    question: "¿Perseveras en la oración con fe viva, sabiendo que la súplica humilde y confiada siempre es escuchada por el Padre?",
    imageQuestion: "¿Oras con fervor y constancia en el corazón de María?",
    image: "./assets/images/146-sacerdotes-cenaculo-de-oracion.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-remar-constancia",
    reading: `En el combate contra las malas tendencias es necesario no dejar un sólo día sin hacer algo por progresar en la virtud, porque en esto sucede como a los que van remando río arriba: si sueltan por un momento los remos se los lleva la corriente. No creer jamás que ya hemos llegado. Si alguien se imagina que ya llegó al grado de perfección y santidad que Dios desea de cada uno, se equivoca totalmente. Esto llevaría a no aprovechar las nuevas ocasiones de practicar la virtud.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 31",
    question: "¿Te esfuerzas cada día con constancia en la vida de oración, o has soltado los remos creyendo que ya no necesitas mejorar?",
    imageQuestion: "¿Mantienes el esfuerzo diario en la oración?",
    image: "./assets/images/15-combate-remar-constancia.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "el-ir-y-venir-de-mis-pensamientos",
    reading: `Ya me habías tú, Señor, que eres mi auxilio, soltado de aquellas cadenas, pero seguía yo preguntándome con insistencia de dónde procede el mal y no encontraba solución alguna. Pero tú no permitías que el ir y venir de mis pensamientos me apartara de la firme convicción de que tú existes y de que tu ser es inmutable. Creía también que eres el juez de los hombres y que tu providencia cuida de ellos y que pusiste el camino de la salvación para todos los hombres en tu Hijo Jesucristo y en las santas Escrituras que recomienda la autoridad de la Iglesia Católica.`,
    source: "Confesiones de San Agustín · Libro X, capítulo 28",
    question: "¿Qué pensamiento va y viene sin descanso en tu cabeza, sin que por eso se mueva tu fe en Dios?",
    imageQuestion: "¿Qué pensamiento no te deja descansar?",
    image: "./assets/images/170-el-ir-y-venir-de-mis-pensamientos.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "la-confianza-de-jesus-fue-puesta-a-prueba",
    reading: `Indudablemente Jesús sintió en su humanidad un terrible sentimiento de abandono por parte de Dios. En efecto, quiso que cayeran sobre Él el desamparo de los que se sienten solos y abandonados, quiso conocer y que recayeran sobre Él todos nuestros pecados, pero con la certeza de la intervención de Dios. La confianza de Jesús fue puesta a prueba, pero no la perdió.`,
    source: "La confianza en Dios · Capítulo 6",
    question: "Cuando sientes que Dios te ha abandonado, ¿puedes, como Jesús en la cruz, seguir confiando de todos modos?",
    imageQuestion: "¿Confías aunque sientas el abandono?",
    image: "./assets/images/203-la-confianza-de-jesus-fue-puesta-a-prueba.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "tratar-los-asuntos-sin-precipitacion",
    reading: `Es preciso tratar los asuntos cuidadosamente, pero sin prisa ni preocupación. No os lancéis a la tarea, pues cualquier clase de precipitación oscurece la razón y el juicio, y nos impide incluso hacer bien la cosa que emprendemos.`,
    source: "La paz interior · Los santos y la paz del alma · San Francisco de Sales, 7",
    question: "¿Qué tarea de hoy podrías hacer igual de bien, pero sin la prisa que le estás poniendo?",
    imageQuestion: "¿Le quitas la prisa a tu tarea de hoy?",
    image: "./assets/images/192-tratar-los-asuntos-sin-precipitacion.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-corona-espinas",
    reading: `Coronado de espinas y azotado por nuestros pecados, el Rey del universo reina desde la mansedumbre y el perdón.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 6",
    question: "¿Adoras a Cristo sufriente en sus llagas, reconociendo el precio infinito con que fuiste rescatado?",
    imageQuestion: "¿Contemplas la mansedumbre de Cristo coronado de espinas?",
    image: "./assets/images/100-olaizola-corona-espinas.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-caridad-servidora",
    reading: `La caridad no busca lo suyo: se olvida de su propia comodidad para entregarse con alegría al servicio y bien de los hermanos.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo VII",
    question: "¿Estás dispuesto a posponer tus preferencias personales para atender con generosidad las necesidades de los demás?",
    imageQuestion: "¿Te desprendes de ti mismo para servir al prójimo?",
    image: "./assets/images/69-ligorio-caridad-servidora.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-costado-abierto",
    reading: `Del costado abierto de Cristo en la cruz brotó sangre y agua: los sacramentos de la Iglesia. De su herida nace nuestra vida, y de su entrega total recibimos la gracia que nos sana, nos purifica y nos alimenta en el camino hacia la patria celestial.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 3",
    question: "¿Acudes a los sacramentos con veneración y sed viva de recibir la gracia sanadora que brota del Corazón de Jesús?",
    imageQuestion: "¿Acudes a los sacramentos con sed de Dios?",
    image: "./assets/images/41-ratzinger-costado-abierto.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-hora-redentor",
    reading: `Sabiendo Jesús que era llegada su hora de pasar de este mundo al Padre, como hubiese amado a los suyos, los amó hasta el extremo. El Redentor llamaba aquella hora la suya, porque entonces quería dar a los hombres la postrer prueba de su amor, muriendo por ellos en una cruz.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo I",
    question: "¿Te detienes en silencio a contemplar que Jesús entregó su vida hasta el extremo en la cruz por amor a ti?",
    imageQuestion: "¿Contemplas el amor de Cristo en la cruz?",
    image: "./assets/images/20-ligorio-hora-redentor.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-confianza-medios",
    reading: `Cuatro son los medios para lograr progresar en la confianza en Dios. El primero: pedirla muchas veces y con humildad, en nuestra oración. Jesús prometió: "Todo el que pide recibe. Mi Padre dará el buen espíritu a quien se lo pida". El segundo medio es: pensar en el gran poder de Dios y en su infinita bondad, que lo mueve a conceder siempre mucho más de lo que se le suplica. Recordar lo que el ángel le dijo a la Virgen María: "ninguna cosa es imposible para Dios".`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 3",
    question: "¿Acudes a la oración recordando el poder y la bondad de Dios, o rezas como si dudaras de que Él realmente escucha tus súplicas?",
    imageQuestion: "¿Confías en que para Dios nada es imposible?",
    image: "./assets/images/12-combate-confianza-medios.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "la-rosa-entre-las-espinas",
    reading: `El gran San Basilio dice que la rosa entre las espinas sugiere esta reflexión a los hombres: «Lo más agradable de este mundo, ¡oh mortales!, anda mezclado de tristeza; nada hay que sea enteramente puro: el dolor siempre acompaña a la alegría, la viudez al matrimonio, el trabajo a la fertilidad, la ignominia a la gloria, la injuria a los honores, el tedio a las delicias y la enfermedad a la salud.»`,
    source: "Filotea: Introducción a la Vida Devota · Primera Parte, capítulo XII",
    question: "¿Qué espina, mezclada a una alegría reciente, te está costando aceptar como parte de esta vida?",
    imageQuestion: "¿Qué espina va mezclada con tu alegría?",
    image: "./assets/images/179-la-rosa-entre-las-espinas.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-imitacion-de-virtudes",
    reading: `«La verdadera devoción a Mí no consiste en palabras vanas, sino en imitar las virtudes de mi Hijo Jesús: su mansedumbre ante la ofensa, su pureza de corazón, su obediencia a la voluntad del Padre y su caridad entrañable hacia los más pobres y desamparados.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 13 de mayo de 1985",
    question: "¿Reflejas en tu vida las virtudes de Jesús y de María mediante la mansedumbre, la pureza y el servicio al prójimo?",
    imageQuestion: "¿Imitas las virtudes de Jesús y de María en tu vida diaria?",
    image: "./assets/images/142-sacerdotes-imitacion-de-virtudes.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-momento-presente",
    reading: `No tenemos más que el momento presente para amar a Dios. El pasado ya está en la misericordia divina y el futuro en su providencia. Angustiarse por lo que vendrá mañana es perder la gracia que Dios nos tiene reservada para la hora presente. Vivamos el hoy con amor y confianza, sabiendo que cada instante bien vivido basta para complacer al Señor y santificar el alma.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Conferencia 7",
    question: "¿Vives el presente con paz y abandono en la providencia, o dejas que las preocupaciones del futuro te roben la gracia de hoy?",
    imageQuestion: "¿Vives el momento presente confiado en Dios?",
    image: "./assets/images/35-teresita-momento-presente.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-caridad-prudente",
    reading: `Quien ama de verdad a Jesucristo no actúa con ligereza ni precipitación, sino que consulta en silencio la voluntad de Dios antes de obrar.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo IV",
    question: "Antes de tomar decisiones o actuar, ¿te detienes en oración para buscar sinceramente lo que más agrada a Dios?",
    imageQuestion: "¿Consultas a Dios antes de tomar decisiones?",
    image: "./assets/images/66-ligorio-caridad-prudente.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-ofrecimiento-misericordia",
    reading: `Ofrecerse al Amor Misericordioso es abrir de par en par el alma para que las olas de la ternura infinita de Dios la inunden y la transformen.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Quinta Conferencia",
    question: "¿Te consagras a la misericordia de Dios para que su ternura infinita sane tus heridas y transforme tu corazón?",
    imageQuestion: "¿Te consagras al Amor Misericordioso de Dios?",
    image: "./assets/images/79-teresita-ofrecimiento-misericordia.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-confianza-audaz",
    reading: `La confianza audaz es el corazón del mensaje de Teresa. Ella decía que lo que ofende a Jesús y hiere su Corazón es la falta de confianza. Cuanto más pobres y pecadores nos sintamos, mayor debe ser nuestra esperanza, porque la misericordia de Dios no tiene límites y busca precisamente la miseria para derramarse sobre ella. Si tuviéramos sobre la conciencia todos los crímenes que se pueden cometer, con el corazón roto por el arrepentimiento deberíamos arrojarnos en los brazos de Jesús, porque sabemos cuánto ama al hijo pródigo que vuelve a Él, dispuesto a cubrirlo con el manto de su perdón.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Conferencia 3",
    question: "Cuando sientes el peso de tus pecados y caídas, ¿te encierras en el desaliento, o acudes con audacia al Corazón misericordioso de Jesús?",
    imageQuestion: "¿Tienes una confianza audaz en la misericordia?",
    image: "./assets/images/31-teresita-confianza-audaz.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-reaccion-caida",
    reading: `Para saber si tenemos verdadera confianza en Dios, observemos cómo reaccionamos cuando caemos en una falta. y confiar en que su misericordia nos levantará.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 4",
    question: "Cuando tienes una debilidad o fallo, ¿te dejas llevar por la soberbia del enojo contigo mismo, o acudes humilde a la misericordia divina?",
    imageQuestion: "¿Acudes a la misericordia tras una caída?",
    image: "./assets/images/56-combate-reaccion-caida.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-cenaculos-oracion",
    reading: `«Os pido que multipliquéis los Cenáculos de oración en las familias y en las comunidades. Donde dos o tres se reúnen a orar conmigo con el Rosario en la mano, allí desciende el Espíritu Santo con sus dones de sabiduría, fortaleza y reconciliación para sanar los hogares heridos.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 8 de mayo de 1976",
    question: "¿Promueves la oración y el encuentro en tu familia, invocando la presencia de María y del Espíritu Santo en tu hogar?",
    imageQuestion: "¿Haces de tu hogar un cenáculo de oración y paz?",
    image: "./assets/images/112-sacerdotes-cenaculos-oracion.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "prueba-azul-confianza",
    reading: `«Tú no has entendido, hijo, que Yo he escogido la necedad para confundir la sabiduría y la debilidad para derrotar la fuerza.

Es mi voluntad que este pequeño volumen se propague así tal como es: éste será el medio con el que llamaré a muchos Sacerdotes a mi Movimiento y me formaré mi ejército invencible...

Tu poca fe, tu desconfianza en Mí me aflige, hijo. ¿Qué temes? ¿De qué tienes miedo? Ora y abandónate a Mí: deja que sea Yo sola la que verdaderamente obre.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 13 de octubre de 1973",
    question: "¿Qué preocupación sigues cargando tú solo, sin haberla dejado de verdad en manos de Dios?",
    imageQuestion: "Tu poca fe, tu desconfianza en Mí me aflige, hijo. ¿Qué temes? ¿De qué tienes miedo? Ora y abandónate a Mí: deja que sea Yo sola la que verdaderamente obre.",
    image: "./assets/images/03-virgen-consuela.webp",
    imageAlt: "La Virgen sostiene el rostro de un hombre arrodillado y angustiado, consolándolo con ternura.",
  },
  {
    id: "teresita-llamada-universal",
    reading: `Todos estamos llamados a la santidad, no porque seamos fuertes, sino porque Dios es infinitamente bueno.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Primera Conferencia",
    question: "¿Crees de verdad que Dios te llama a la santidad en tu vida ordinaria apoyado en su infinita bondad?",
    imageQuestion: "¿Crees en la llamada de Dios a la santidad?",
    image: "./assets/images/75-teresita-llamada-universal.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-mirada-eternidad",
    reading: `Pensar en la brevedad de esta vida nos ayuda a ordenar los afectos y a poner toda nuestra esperanza en los bienes eternos.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 44",
    question: "¿Vives con la perspectiva de la eternidad, usando los bienes temporales como medios para amar más a Dios?",
    imageQuestion: "¿Pones tu mirada en los bienes eternos?",
    image: "./assets/images/63-combate-mirada-eternidad.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-grandeza-en-pequenez",
    reading: `«En la pequeñez de vuestra entrega se manifiesta la grandeza de Dios, porque Él escoge lo débil para confundir la soberbia del mundo.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 8 de diciembre de 1981",
    question: "¿Aceptas con paz tu pequeñez para que la grandeza y la misericordia de Dios resplandezcan a través de ti?",
    imageQuestion: "¿Permites que la grandeza de Dios brille en tu pequeñez?",
    image: "./assets/images/130-sacerdotes-grandeza-en-pequenez.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-reconciliacion-comunion",
    reading: `La reconciliación con el hermano es condición indispensable para la comunión verdadera: no podemos celebrar el sacramento de la unidad si mantenemos el rencor en el corazón.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 3",
    question: "¿Buscas perdonar de corazón y reconciliarte con los demás antes de acercarte a la mesa eucarística del Señor?",
    imageQuestion: "¿Buscas la reconciliación antes de acercarte al altar?",
    image: "./assets/images/87-ratzinger-reconciliacion-comunion.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-refugio-seguro",
    reading: `«El Corazón Inmaculado de María es vuestro refugio seguro y el camino que os conducirá siempre hasta Dios.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 13 de mayo de 1987",
    question: "¿Te refugias en el Corazón de María cuando te sientes agobiado o tentado, encontrando en ella el camino hacia Dios?",
    imageQuestion: "¿Es el Corazón de María tu refugio seguro en la prueba?",
    image: "./assets/images/150-sacerdotes-refugio-seguro.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-corpus-cristi-fe",
    reading: `La procesión de Corpus Christi nos recuerda que la fe cristiana no es un asunto meramente privado. Llevamos a Cristo por las calles de nuestras ciudades para bendecir los hogares, los trabajos y los caminos de los hombres, proclamando que Él es la verdadera luz y la paz del mundo. Salir con el Señor nos compromete a ser portadores de su caridad en todos los ambientes donde vivimos.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 6",
    question: "¿Vives tu fe con coherencia y valentía en tu trabajo y vida social, llevando la bendición y paz de Cristo al mundo?",
    imageQuestion: "¿Das testimonio de Cristo en tu vida pública?",
    image: "./assets/images/44-ratzinger-corpus-cristi-fe.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-cercania-sagrario",
    reading: `La Eucaristía es el sacramento de la cercanía de Dios. En el Sagrario de nuestras iglesias late el Corazón de Cristo, esperándonos día y noche en silencio. Quien entra en una iglesia y se arrodilla ante el Señor presente en el pan consagrado, encuentra un remanso de paz en medio del torbellino del mundo. Allí experimentamos que no estamos solos, sino acompañados por el amor fiel de nuestro Redentor.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 1",
    question: "¿Acudes con frecuencia al Sagrario para encontrar la paz interior y el descanso que el mundo no te puede dar?",
    imageQuestion: "¿Buscas el silencio del Sagrario en medio del ruido?",
    image: "./assets/images/39-ratzinger-cercania-sagrario.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-mujeres-jerusalen",
    reading: `En el camino del Calvario, las mujeres de Jerusalén lloran por Jesús, y Él las invita a no lamentarse estérilmente, sino a convertir de corazón sus vidas.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 7",
    question: "¿Tu piedad cristiana se queda en sentimentalismo pasajero, o se traduce en una conversión real y obras de caridad sinceras?",
    imageQuestion: "¿Transformas tu devoción en conversión sincera?",
    image: "./assets/images/101-olaizola-mujeres-jerusalen.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-accion-de-gracias",
    reading: `«Que vuestra vida sea una continua acción de gracias a Dios por los inmensos dones de su misericordia y de su amor paternal.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 1 de enero de 1986",
    question: "¿Vives con un corazón agradecido, reconociendo y dando gracias a Dios por sus incontables bendiciones de cada día?",
    imageQuestion: "¿Vives con un corazón agradecido ante Dios?",
    image: "./assets/images/145-sacerdotes-accion-de-gracias.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "prueba-filotea-vocacion",
    reading: `En la creación, manda Dios a las plantas que lleven sus frutos, cada una según su especie; de la misma manera que a los cristianos, plantas vivas de la Iglesia, les manda que produzcan frutos de devoción, cada uno según su condición y estado. De diferente manera han de practicar la devoción el noble y el artesano, el criado y el príncipe, la viuda, la soltera y la casada; y no solamente esto, sino que es menester acomodar la práctica de la devoción a las fuerzas, a los quehaceres y a las obligaciones de cada persona en particular.`,
    source: "Filotea · Parte I, capítulo 3",
    question: "¿Qué parte concreta de tu trabajo, familia u obligaciones necesitas hoy ofrecer a Dios para vivirla como vocación y no como carga?",
    imageQuestion: "¿Cómo puedes santificar hoy tu trabajo?",
    image: "./assets/images/02-virgen-y-nino.webp",
    imageAlt: "La Virgen María sostiene al Niño Jesús mientras dos ángeles adoran en oración.",
  },
  {
    id: "sacerdotes-luz-de-la-verdad",
    reading: `«Caminad siempre en la luz de la verdad de Dios, desechando toda componenda con la mentira y el engaño del mundo.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 15 de agosto de 1985",
    question: "¿Vives en la transparencia y la verdad del Evangelio, rechazando la hipocresía y las mentiras del mundo?",
    imageQuestion: "¿Caminas siempre en la luz de la verdad de Dios?",
    image: "./assets/images/143-sacerdotes-luz-de-la-verdad.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-manto-protector",
    reading: `«Caminad con confianza y alegría bajo mi manto maternal, porque nada podrá arrebataros de mi Corazón Inmaculado.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 1 de enero de 1977",
    question: "¿Caminas en tu día a día con la serena alegría de quien se sabe protegido bajo el manto maternal de la Virgen?",
    imageQuestion: "¿Caminas con confianza bajo el manto de María?",
    image: "./assets/images/115-sacerdotes-manto-protector.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-domingo-resurreccion",
    reading: `El domingo es la fiesta semanal de la Resurrección, el día en que la comunidad se reúne para celebrar la victoria de la vida sobre la muerte.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 6",
    question: "¿Santificas el día domingo dedicándolo a Dios, a la Santa Misa y al descanso fraterno con los tuyos?",
    imageQuestion: "¿Vives el domingo como fiesta de la Resurrección?",
    image: "./assets/images/90-ratzinger-domingo-resurreccion.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-silencio-ante-sagrario",
    reading: `«La oración silenciosa ante el Sagrario es el bálsamo más dulce para vuestras almas. Allí Jesús os espera con amor infinito para renovar vuestras fuerzas y llenar vuestro corazón de su paz divina.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 13 de mayo de 1977",
    question: "¿Acudes a estar a solas con Jesús en el Sagrario para encontrar en su presencia viva el descanso que tu alma necesita?",
    imageQuestion: "¿Buscas a Jesús ante el Sagrario en el silencio?",
    image: "./assets/images/116-sacerdotes-silencio-ante-sagrario.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-caridad-no-envidiosa",
    reading: `La caridad no es envidiosa: se alegra del bien ajeno como si fuera propio, porque quien ama sólo busca la gloria de Dios.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo III",
    question: "¿Te alegras de corazón cuando ves los dones y virtudes de tus hermanos, viéndolos como gloria de Dios?",
    imageQuestion: "¿Te alegras sinceramente del bien ajeno?",
    image: "./assets/images/65-ligorio-caridad-no-envidiosa.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "mi-peso-es-mi-amor",
    reading: `El cuerpo con su peso tiende a su lugar; el peso no va solamente hacia abajo, sino a su lugar. El fuego tiende hacia arriba; la piedra, hacia abajo; por sus pesos se mueven y van a su lugar. El aceite derramado debajo del agua se levanta sobre el agua; el agua derramada encima del aceite se sumerge debajo del aceite: por sus pesos se mueven: van a su lugar. Las cosas mal ordenadas están inquietas: pónense en orden y descansan. Mi peso es mi amor: él me lleva doquiera que soy llevado.`,
    source: "Confesiones de San Agustín · Libro XIII, capítulo 9",
    question: "¿Hacia dónde te está llevando tu amor, y es ese el lugar donde de verdad quieres descansar?",
    imageQuestion: "¿Hacia dónde te lleva tu amor?",
    image: "./assets/images/174-mi-peso-es-mi-amor.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "la-devocion-cabe-en-cualquier-vocacion",
    reading: `Es un error, y aun una herejía, querer desterrar la vida devota de las compañías de los soldados, del taller de los obreros, de la corte de los príncipes y del hogar de los casados.`,
    source: "Filotea: Introducción a la Vida Devota · Primera Parte, capítulo III",
    question: "¿En qué área de tu vida diaria has pensado que la santidad simplemente no cabe?",
    imageQuestion: "¿Dónde crees que la santidad no cabe?",
    image: "./assets/images/176-la-devocion-cabe-en-cualquier-vocacion.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "dios-es-el-principe-de-la-paz",
    reading: `Como el amor sólo mora en la paz, cuidad de conservar la santa tranquilidad de corazón que os recomiendo con tanta frecuencia. Todos los pensamientos que nos causan inquietud y agitación del alma no son en absoluto de Dios, que es el Príncipe de la Paz. Son tentaciones del enemigo y, por consiguiente, hay que rechazarlas y no tomarlas en cuenta.`,
    source: "La paz interior · Los santos y la paz del alma · San Francisco de Sales, 1",
    question: "¿De dónde vienen realmente los pensamientos que hoy agitan tu alma: de Dios, o de otra fuente?",
    imageQuestion: "¿De dónde viene tu pensamiento inquieto?",
    image: "./assets/images/187-dios-es-el-principe-de-la-paz.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "maria-reina-de-la-paz",
    reading: `Sin embargo, frente a todo esto no debemos inquietarnos. Al contrario, debemos ser cada vez más niños pequeños llenos de confianza, en un total abandono, en una paz muy profunda. María es la Reina de la Paz, y cuanta más crisis hay en el mundo más debemos estar en paz, acoger la paz de Dios. Porque estamos seguros de su amor, de su fidelidad.`,
    source: "La confianza en Dios · Capítulo 3",
    question: "En medio de la crisis que estés viviendo hoy, ¿eliges acoger la paz de Dios o dejarte inquietar?",
    imageQuestion: "¿Acoges la paz en medio de la crisis?",
    image: "./assets/images/197-maria-reina-de-la-paz.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "nuestros-miedos-nos-definen",
    reading: `Nos encantaría tener un control completo de todas las situaciones difíciles que se nos presentan, sin darnos cuenta de que no somos dueños de nuestro futuro y de que hay ciertas realidades que nos superan, porque somos barro de la tierra; es más, el problema real surge cuando no tenemos capacidad de convivir con nuestros miedos y eso hace que crezcan de día en día hasta convertirse en verdaderos tiranos que limitan y dificultan nuestras tareas cotidianas. Pero nuestros miedos nos definen, ya que por medio de ellos conocemos cuáles son las cosas que más tememos perder, y por tanto dónde está puesto nuestro corazón, cuál es el tesoro que más valoramos.`,
    source: "La confianza en Dios · Prólogo",
    question: "Si tus miedos revelan lo que más temes perder, ¿qué te dicen los tuyos sobre dónde está tu corazón?",
    imageQuestion: "¿Qué tesoro temes perder de verdad?",
    image: "./assets/images/196-nuestros-miedos-nos-definen.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-caridad-no-piensa-mal",
    reading: `La caridad no piensa mal: disculpa siempre las intenciones del prójimo y cubre con el velo de la misericordia los defectos ajenos.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo IX",
    question: "¿Cuidas tus pensamientos para no juzgar con dureza a los demás, interpretando sus acciones con caridad cristiana?",
    imageQuestion: "¿Miras a tu prójimo con benevolencia y misericordia?",
    image: "./assets/images/71-ligorio-caridad-no-piensa-mal.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-fuego-del-espiritu",
    reading: `«Comenzad cada día pidiendo la asistencia del Espíritu Santo. Él es el Consolador divino que ilumina vuestras mentes y enciende en vuestro corazón el fuego del amor verdadero.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 1 de enero de 1980",
    question: "¿Invocas al Espíritu Santo al comenzar tus jornadas para que guíe tus decisiones y encienda tu amor a Dios?",
    imageQuestion: "¿Invocas al Espíritu Santo al comenzar tu día?",
    image: "./assets/images/124-sacerdotes-fuego-del-espiritu.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "sacerdotes-fidelidad-al-servicio",
    reading: `«La fidelidad a la llamada de Dios se vive en el amor humilde y en el servicio generoso. No busquéis grandezas humanas, sino sed fieles servidores del Evangelio en vuestro propio estado de vida.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 15 de agosto de 1987",
    question: "¿Sirves con humildad y generosidad en tu vocación y deberes cotidianos, viviendo con fidelidad tu llamada bautismal?",
    imageQuestion: "¿Vives tu vocación con humildad y servicio generoso?",
    image: "./assets/images/151-sacerdotes-fidelidad-al-servicio.webp",
    imageAlt: "Pintura sacra al óleo de la Santísima Virgen que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "cc-013",
    reading: `A unas manos vacías llena el Señor, al cual le agrada dar al que no tiene y reconoce que lo que tiene es de Él y se lo devuelve. Este recibir y devolver hace crecer el tesoro que el Señor derrama en el alma pobre; y mientras más recibe más devuelve, gozándose el Señor en este comercio santo.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Pobreza",
    question: "¿Qué has recibido de Dios que te invita a compartir o devolver con mayor amor?",
    imageQuestion: "¿Qué puedes devolver con amor?",
    image: "./assets/images/cc-013.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-014",
    reading: `Los pobres de espíritu son los que devuelven los dones al Dador de ellos: los que se renuncian totalmente: los que mueren a su propia voluntad, para vivir tan sólo de la Mía. De todos éstos es el Reino de los cielos. También es el Reino de los cielos de los obedientes, porque los Obedientes triunfarán desde el momento que se doblegan.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Pobreza espiritual perfecta",
    question: "¿Qué decisión estás intentando controlar y podrías poner con confianza bajo la voluntad de Dios?",
    imageQuestion: "¿Qué quieres poner en sus manos?",
    image: "./assets/images/cc-014.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-015",
    reading: `Y esto no es más que un acto de mi justicia porque el que se renuncia a sí, me tiene a Mí; y el que todo lo da, también me posee a Mí; y el que muere a sí mismo, resucita en Mí; y el que nada tiene lo tiene Todo. Este Todo soy yo mismo. Mi libertad es muy grande; ya que por un poco de tierra doy un cielo.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Pobreza espiritual perfecta",
    question: "¿Qué pequeño apego te parece demasiado costoso soltar, aunque Dios promete darte algo mucho mayor?",
    imageQuestion: "¿Qué apego puedes soltar?",
    image: "./assets/images/cc-015.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-016",
    reading: `La Penitencia es el fuego que conserva las virtudes y les da savia para su desarrollo. De ella nace el propio desprecio; de ella se produce el ansia de padecer, el hambre de crucifixión. La humildad produce esta grande virtud, conserva sus actos; mas la desarrolla el amor divino. La Penitencia atrae a la ternura y el Corazón de Dios.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Penitencia",
    question: "¿Qué renuncia pequeña, vivida con humildad y amor, puede ayudarte a no ponerte siempre en el centro?",
    imageQuestion: "¿Qué renuncia puedes ofrecer?",
    image: "./assets/images/109-sacerdotes-camino-de-la-cruz.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-017",
    reading: `La penitencia es de gran valor y procura al alma innumerables bienes. El cuerpo es como un pedernal y la penitencia es el eslabón con que se produce el fuego santo que purifica el alma y la abraza en el divino amor. La penitencia es una poderosa arma contra muchos vicios; es espuela contra la molicie y ataca directamente a todos los pecados capitales.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Penitencia",
    question: "¿Qué hábito concreto podrías ordenar para que tu vida no quede gobernada por la molicie?",
    imageQuestion: "¿Qué hábito necesitas ordenar?",
    image: "./assets/images/63-combate-mirada-eternidad.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-018",
    reading: `La virtud del sufrimiento es una parte esencial del Dolor. El sufrimiento cristiano que se acompaña siempre de la resignación y de la Paciencia, es hijo de mi Corazón, nacido y santificado en Él. El Padecimiento cristiano es también una virtud, y muy grande y de riquísimo e imponderable valor a los ojos de Dios.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Sufrimiento",
    question: "Ante una dificultad que no elegiste, ¿puedes pedir hoy la paciencia para no endurecer tu corazón?",
    imageQuestion: "¿Qué cruz puedes vivir con paciencia?",
    image: "./assets/images/73-ligorio-caridad-todo-lo-sufre.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-019",
    reading: `La Mortificación es el constante quebrantamiento de todo propio querer. Sólo está incluida en el total sacrificio de la Obediencia: sin embargo, puede el alma actuarse en todas sus operaciones, ya que la virtud de la Mortificación es el incendio del alma. Esta virtud es muy amada de mi Corazón y se desarrolla y crece practicándola.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Mortificación",
    question: "¿Qué propio querer puedes dejar de imponer hoy para responder con más libertad y caridad?",
    imageQuestion: "¿Qué propio querer puedes soltar?",
    image: "./assets/images/58-combate-elevar-corazon.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-020",
    reading: `La humildad es el cimiento, el fundamento de todas las virtudes, la sal y la vida de ellas: la tierra en donde todas se producen, el agua que las fertiliza y el sol que las hace crecer y reproducirse. Sin humildad no puede haber Obediencia, Pobreza ni Pureza que no caiga. No acostumbro dar a ninguna alma estas joyas, sin el sólido fundamento de la Humildad.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Humildad",
    question: "¿En qué situación necesitas dejar de sostenerte en tu propia imagen para volver a la verdad delante de Dios?",
    imageQuestion: "¿Dónde necesitas volver a la verdad?",
    image: "./assets/images/62-combate-humildad-verdadera.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-021",
    reading: `La Inmortificación procede de la Sensualidad y del Amor propio principalmente. La Comodidad y la Delicadeza lo alimentan y hacen crecer, ayudándole además a que llegue a su completo desarrollo, por medio de la Molicie. La vida espiritual subsiste y crece con la savia de la Mortificación; esta virtud la vigoriza y prepara el alma para grandes gracias.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Inmortificación",
    question: "¿Qué complacencia estás alimentando que después te deja más débil para hacer el bien?",
    imageQuestion: "¿Qué estás alimentando?",
    image: "./assets/images/57-combate-enemigo-principal.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-022",
    reading: `En cambio la Inmortificación mata esta vida del alma o cuando menos la hiela y seca, enervándola para todo bien; porque hay que desengañarse: la vida del espíritu, nace, crece y se desarrolla solamente en el campo doloroso de la Mortificación voluntaria, o sea de la Cruz: no existe otra vereda para llegar a ella, sino la estrechísima del Dolor.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Inmortificación",
    question: "¿Qué bien estás dejando enfriar por evitar siempre lo que te cuesta?",
    imageQuestion: "¿Qué bien se está enfriando?",
    image: "./assets/images/59-combate-vencer-distracciones.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-023",
    reading: `La Mortificación debe acompañar a todos los actos del hombre tanto interiores como exteriores en sus potencias y sentidos. ¡Oh y qué bella es la Mortificación interna y espiritual! en ella se complace el Espíritu Santo. Y de la misma manera que existe Mortificación interna, de la cual se produce la externa, igualmente hay Inmortificación interna más refinada, y de la que se produce la externa.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Inmortificación",
    question: "¿Qué desorden interior aparece después también en tus palabras, decisiones o acciones?",
    imageQuestion: "¿Qué nace dentro de ti?",
    image: "./assets/images/66-ligorio-caridad-prudente.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-024",
    reading: `La molicie es la hija de la Pereza, y muy íntima compañera del Cansancio y del Desaliento. La Molicie es la Comodidad en su más alto grado, y el depuramiento de la Sensualidad. Aborrezco a este defecto tan contrario a mi doctrina y a mi Cruz y todo cristiano debiera aborrecerla igualmente.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Molicie",
    question: "Cuando te sientes cansado o desalentado, ¿qué haces que termina alejándote todavía más de Dios?",
    imageQuestion: "¿Qué haces con tu cansancio?",
    image: "./assets/images/57-combate-enemigo-principal.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-025",
    reading: `La vida espiritual está en una completa contraposición con la Molicie porque la vida espiritual lleva consigo en sus venas la Actividad y el Sacrificio. El Dolor, es también antagonista de la Molicie, pues este defecto corroe y raía en vicio, descansando en mullido lecho de olorosas flores. ¡Desgraciada el alma de quien hacen su presa!`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Molicie",
    question: "¿Qué actividad buena has ido dejando porque se volvió más fácil quedarte en lo cómodo?",
    imageQuestion: "¿Qué bien estás dejando?",
    image: "./assets/images/68-ligorio-caridad-no-ambiciosa.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-026",
    reading: `La Penitencia y la Mortificación la hacen estremecerse: el Sacrificio, la Abnegación, el Sufrimiento y el Padecimiento voluntario, son letra muerta para la Molicie, y aún de su sombra huye. El remedio único para este pegajoso vicio, consiste en el Trabajo y Desprecio propio, unido con la Constancia, el Vencimiento y la Generosidad.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Molicie",
    question: "¿Qué tarea sencilla has postergado y podrías retomar hoy con constancia, sin esperar tener ganas?",
    imageQuestion: "¿Qué tarea puedes retomar?",
    image: "./assets/images/64-combate-perseverancia-don.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-027",
    reading: `El amor propio, es decir, el enamoramiento y cuidado de sí mismo reina en la Delicadeza, en su mayor extensión. Las almas y los cuerpos a quienes guarda el nicho dorado de la Delicadeza, merecen el Purgatorio y aún se exponen muchas veces al infierno. Y sin embargo, el mundo y aun algunas religiones están llenas de tan pernicioso mal.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Delicadeza",
    question: "¿Qué cuidado excesivo de ti mismo te está haciendo olvidar las necesidades reales de los demás?",
    imageQuestion: "¿Qué cuidado ocupa demasiado lugar?",
    image: "./assets/images/67-ligorio-caridad-no-se-engrie.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-028",
    reading: `La Delicadeza huye de la Cruz, y la vida espiritual se abraza de ella: la Delicadeza aborrece el Dolor en todas sus formas y la vida espiritual concreta en el Dolor su mayor dicha. La Delicadeza se goza en los más finos placeres; la vida espiritual los odia y se aleja de ellos. La Delicadeza ama el Descanso y la inacción.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Delicadeza",
    question: "¿Qué placer o comodidad estás protegiendo tanto que ya no dejas espacio para amar de manera activa?",
    imageQuestion: "¿Qué estás protegiendo demasiado?",
    image: "./assets/images/70-ligorio-caridad-no-se-irrita.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-029",
    reading: `Lo más consiste en exterioridades vanas y Soberbia crecida que todo lo abarca: este maldito vicio de la Soberbia lo veo claramente reinar en el mundo, en la Iglesia, en las familias, en las almas que se reputan por santas. Cunde esta Soberbia más o menos fina y espiritual, y la veo introducirse con mucha sutileza, aun en donde menos se creyera.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Soberbia",
    question: "¿En qué lugar de tu vida podrías estar buscando parecer mejor que los demás, incluso de manera muy sutil?",
    imageQuestion: "¿Qué quieres aparentar?",
    image: "./assets/images/55-combate-desconfianza-propia.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-030",
    reading: `La Soberbia es hija de Satanás, nacida de su mismo ser, y madre general de todos los vicios: a todos ellos los engendra y lleva en su seno. De la Soberbia se deriva como causa natural, todo desorden en las operaciones del alma, y aun los mismos desórdenes materiales. Ella envenena los actos del espíritu y es la principal destructora de toda virtud y de toda santidad.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Soberbia",
    question: "¿Qué acto bueno podrías estar contaminando con la necesidad de tener razón, ser visto o sentirte superior?",
    imageQuestion: "¿Qué está contaminando tu bien?",
    image: "./assets/images/56-combate-reaccion-caida.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-031",
    reading: `No consiste en caer en la pasividad o el fatalismo, sino en acoger con confianza las situaciones que atravesemos, en la certeza de que la Providencia del Padre lo dispone todo para nuestro bien. Esta última forma de obediencia tiene una importancia fundamental. Cuanto más acepto con confianza los sucesos de mi existencia, incluso los que me contrarían, más recibo la gracia del Espíritu Santo.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Providencia",
    question: "¿Qué situación que no elegiste necesitas acoger hoy confiando en que el Padre no deja de obrar para tu bien?",
    imageQuestion: "¿Qué puedes confiar al Padre?",
    image: "./assets/images/134-sacerdotes-confianza-providencia.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-032",
    reading: `Los lamentos estériles, rumiar el pasado, las inquietudes por el porvenir nos separan por el contrario de la gracia divina. Si sometemos nuestro pasado a la misericordia de Dios, confiamos nuestro porvenir a su Providencia y hacemos hoy sencillamente lo que se requiere de nosotros, dispondremos de la gracia necesaria un día tras otro.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Presente confiado",
    question: "¿Qué recuerdo necesitas entregar a la misericordia y qué preocupación necesitas confiar a la Providencia para vivir bien este día?",
    imageQuestion: "¿Qué necesitas entregar hoy?",
    image: "./assets/images/119-sacerdotes-roca-de-la-confianza.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-033",
    reading: `Lo estupendo es que, al aprender a estar presentes para Dios solo, aprendemos al mismo tiempo a estar presentes para los demás. En las personas que han tenido una larga vida de oración, se puede apreciar una especial facilidad de atención, de presencia, de escucha, de disponibilidad de la que no son con frecuencia capaces las personas que han sido absorbidas toda su vida por la actividad.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Atención al prójimo",
    question: "¿A quién puedes escuchar hoy de verdad, dejando por un momento la prisa y la distracción?",
    imageQuestion: "¿A quién puedes escuchar?",
    image: "./assets/images/69-ligorio-caridad-servidora.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-034",
    reading: `Uno de los mejores frutos de la oración es hacernos crecer en el amor al prójimo. Si nuestra oración es verdadera, nos acerca a Dios, nos une a Él, y nos hace percibir y compartir el amor infinito que tiene a cada una de sus criaturas. La oración dilata y enternece el corazón. Donde falta la oración, los corazones se endurecen y el amor se enfría.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Compasión",
    question: "¿Hay alguien hacia quien tu corazón se ha endurecido y a quien necesitas volver a mirar desde la oración?",
    imageQuestion: "¿A quién necesitas mirar con compasión?",
    image: "./assets/images/91-ratzinger-eucaristia-y-caridad.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-035",
    reading: `Con María, cuyo inmenso deseo atraerá al Verbo, deseamos que Cristo sea conocido y amado por todos, la Santa Iglesia unida y santificada, los pecadores convertidos, deseamos ardientemente que Jesús vuelva al fin en la gloria. Se pueden usar cuadernitos en los que anotemos los pasajes de la Escritura que se nos han clavado como flechas, palabras que nos ayuden luego a reavivar el deseo de Dios.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Deseo de Dios",
    question: "¿Qué palabra de la Escritura podrías guardar hoy para que vuelva a despertar en ti el deseo de Dios?",
    imageQuestion: "¿Qué palabra quieres guardar?",
    image: "./assets/images/77-teresita-audacia-esperanza.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-036",
    reading: `Tener gran confianza, porque conviene mucho no apocar los deseos, sino creer de Dios, que si nos esforzamos poco a poco, aunque no sea luego, podremos llegar a lo que muchos santos con su favor. Esta unión con Dios requiere un largo proceso, que llegará a su fin puesto que depende de Dios, pero demandará de nosotros paciencia, perseverancia y profundidad constante de nuestra confianza en el poder de su gracia.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Confianza perseverante",
    question: "¿En qué camino espiritual te estás desanimando porque quisieras ver el fruto antes de tiempo?",
    imageQuestion: "¿Puedes perseverar sin ver todo?",
    image: "./assets/images/74-ligorio-caridad-todo-lo-espera.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-037",
    reading: `Si tenemos algún talento o fortaleza, a buen seguro hay que ponerlos al servicio del Señor. Pero lo que debemos evitar a toda costa es apoyarnos en ellos y no en Dios solo. Fe, esperanza, caridad y pobreza espiritual: lo que funda la vida de oración es el ejercicio de la fe, de la esperanza, del amor. Creer es ni ver, ni sentir, ni comprender. Esperar es aguardar con confianza, pero no es aún poseer.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Pobreza espiritual",
    question: "¿En qué capacidad propia estás tentado a apoyarte más que en Dios?",
    imageQuestion: "¿En qué te estás apoyando?",
    image: "./assets/images/cc-013.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-038",
    reading: `Jesús no le reprocha a Marta su ajetreo en la cocina, sino su actitud interior de disipación reflejada en el enfado con su hermana. Algunos comentaristas han visto en ellas la imagen de una vida activa demasiado dispersa frente a la de la vida contemplativa vivida en el silencio, la escucha y la oración interior.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Silencio",
    question: "¿Qué agitación interior te está llevando a perder la escucha de Jesús en medio de tus tareas?",
    imageQuestion: "¿Qué te impide escuchar?",
    image: "./assets/images/89-ratzinger-silencio-liturgico.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-039",
    reading: `La costumbre tan extendida hoy de testimoniar en público gracias divinas concedidas en lo más íntimo del hombre, lo expone a la superficialidad, a la autoviolación de la amistad interior con Dios y a la vanidad. La discreción es el complemento intelectual de una intención pura de guardar en secreto, también para uno mismo, todo lo bueno.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Verdad",
    question: "¿Hay algo bueno que estás tentado a mostrar para recibir aprobación, en vez de guardarlo humildemente ante Dios?",
    imageQuestion: "¿Qué puedes guardar en secreto?",
    image: "./assets/images/98-olaizola-juicio-caifas.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-040",
    reading: `Todo tiene que ser, por lo tanto, puesto en mis manos. Y tú mantente en paz firme, dejando que los otros se agiten cuanto crean, y pongan agitación en torno de ellos: lo que él haya hecho y lo que haya dicho recaerá sobre él, porque, por lo que a mí se refiere, no me puede engañar.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Paz",
    question: "¿Qué agitación ajena estás cargando como si dependiera de ti, en vez de ponerla en las manos de Dios?",
    imageQuestion: "¿Qué agitación puedes entregar?",
    image: "./assets/images/114-sacerdotes-reina-de-la-paz.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-041",
    reading: `Un alma fría, generalmente, es una alma Inmortificada. Un alma con frecuentes recaídas, tiene también por causa de su debilidad la Inmortificación. Una alma que no avanza en los caminos de la perfección, es decir, de las virtudes y de la Cruz, es también sin duda, inmortificada. Una alma que no adelanta en la oración no vacilen en afirmar que le falta el indispensable apoyo de la Mortificación.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Inmortificación",
    question: "Al mirar tus recaídas, tu oración y tu deseo de avanzar, ¿qué desorden necesitas afrontar con humildad en vez de acostumbrarte a él?",
    imageQuestion: "¿Qué necesitas afrontar con humildad?",
    image: "./assets/images/58-combate-elevar-corazon.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la virtud del pasaje.",
  },
  {
    id: "cc-001",
    reading: `La Comodidad es uno de los puntos más deleznables de las comunidades religiosas, punto por donde Satanás mina a las mismas para debilitar su espíritu y hacerlas caer en la tibieza. Comienza el demonio con la astucia a poner en las Religiones lo superfluo como necesario y la tolerancia por cosa indispensable. De esta culpable Comodidad a la Delicadeza hay solamente un paso.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Comodidad · p. 42",
    question: "¿Qué cosa superflua has empezado a tratar como necesaria y está debilitando tu generosidad?",
    imageQuestion: "¿Qué superfluo parece necesario?",
    image: "./assets/images/cc-001.webp",
    imageAlt: "Pintura sacra al óleo relacionada con comodidad.",
  },
  {
    id: "cc-002",
    reading: `En todos los actos de la vida del hombre, en más o menos escala, se introduce este dañino mal, que los desvirtúa y aun los envenena. Esta serpiente de la Comodidad se introduce hasta en lo más Santo. Se le encuentra en el Templo y en la Oración, en el cuerpo y aun en el alma. La Comodidad del cuerpo se deja ver en el dormir, en el comer, en el descanso.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Comodidad · p. 42",
    question: "¿En qué momento de tu día notas que la búsqueda de descanso comienza a quitarle verdad a tu oración?",
    imageQuestion: "¿Dónde se esconde la comodidad?",
    image: "./assets/images/cc-002.webp",
    imageAlt: "Pintura sacra al óleo relacionada con comodidad.",
  },
  {
    id: "cc-003",
    reading: `Cuando el espíritu domina a la materia y llega a postergarla, a fuerza de contrariarla y vencerla, entonces el hombre está en su punto correspondiente al fin para que lo creé. La Comodidad en el espíritu camina unida con la del cuerpo: a la medida que se le concede la comodidad al cuerpo se introduce en el espíritu.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Comodidad · p. 42",
    question: "¿Qué concesión exterior está influyendo también en la disposición interior con la que buscas a Dios?",
    imageQuestion: "¿Qué alimenta tu interior?",
    image: "./assets/images/cc-003.webp",
    imageAlt: "Pintura sacra al óleo relacionada con comodidad.",
  },
  {
    id: "cc-004",
    reading: `La Comodidad del alma consiste en buscar en las oraciones, obras de piedad y de misericordia, penitencias, etc., todo lo que pueda satisfacerle. La Comodidad del espíritu está en el buscarse a sí. Esto, como se ve, está muy lejos de la Pureza de intención, la cual absorbe los actos de la criatura, santificándolos y dándoles valor en esos actos buscando solamente a Mí.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Comodidad del alma · p. 43",
    question: "Cuando rezas o haces el bien, ¿buscas a Dios o buscas sobre todo la satisfacción que eso te produce?",
    imageQuestion: "¿A quién buscas al servir?",
    image: "./assets/images/cc-004.webp",
    imageAlt: "Pintura sacra al óleo relacionada con comodidad del alma.",
  },
  {
    id: "cc-005",
    reading: `Casi nadie en el mundo lo comprende así, corriendo este vicio sin que nadie se ocupe de interceptarle el paso. ¡Oh! Sólo Yo sé el mal tan estupendo que la Comodidad causa en las almas y en la vida espiritual. Muchos, muchísimos de los que se llaman míos están abrazados, unidos y pegados a tan pernicioso mal.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Comodidad · p. 43",
    question: "¿Qué comodidad has dejado entrar sin vigilarla, hasta el punto de acostumbrarte a ella?",
    imageQuestion: "¿Qué has dejado entrar?",
    image: "./assets/images/cc-005.webp",
    imageAlt: "Pintura sacra al óleo relacionada con comodidad.",
  },
  {
    id: "cc-006",
    reading: `No sólo con fútiles pretextos admiten a la Comodidad, sino más aún, corren a buscarla, y no pueden, no, vivir sin ella. ¡Y los que tal hacen se llaman cristianos y se llaman míos! ¡Engaño funesto! «El que quiera venir en pos de Mí», que deje la Comodidad, que se niegue a sí mismo, que en nada se busque a sí y que me siga.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Comodidad · p. 43",
    question: "¿Qué excusa repites para evitar una entrega que sabes que Cristo te está pidiendo?",
    imageQuestion: "¿Qué excusa necesitas soltar?",
    image: "./assets/images/cc-006.webp",
    imageAlt: "Pintura sacra al óleo relacionada con comodidad.",
  },
  {
    id: "cc-007",
    reading: `Yo en mi paso por la tierra no tuve ni una piedra en donde reclinar mi cabeza, y millones de hombres se mecen en la más refinada y muelle Comodidad. ¡Y éstos me siguen! No, no; son más de palabra, mas en la práctica de los Hechos, al tratarse de crucifixión, reniegan de mi doctrina, y con las obras, prueban cuán lejos se hallan de Mí.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Comodidad · p. 43",
    question: "¿En qué aspecto dices seguir a Cristo, pero tus obras muestran que prefieres no salir de tu comodidad?",
    imageQuestion: "¿Qué dicen tus obras?",
    image: "./assets/images/cc-007.webp",
    imageAlt: "Pintura sacra al óleo relacionada con comodidad.",
  },
  {
    id: "cc-008",
    reading: `La Comodidad es un gran mal, un espantoso mal para la vida espiritual recta y santa; nadie comprende, repito, el veneno lento, frío pero que acaba por matar los vuelos del alma para el sacrificio, infundiéndole una espantosa inercia. La Comodidad también concluye por embotar los santos ímpetus del alma hacia la Cruz.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Comodidad · p. 44",
    question: "¿Dónde percibes una inercia lenta que te está quitando el deseo de responder a Dios con generosidad?",
    imageQuestion: "¿Dónde nace tu inercia?",
    image: "./assets/images/cc-008.webp",
    imageAlt: "Pintura sacra al óleo relacionada con comodidad.",
  },
  {
    id: "cc-009",
    reading: `Hay que desinfectar esta atmósfera venenosa de la Comodidad que se respira en todas partes: ¿y saben cómo? Con la Cruz: con el reinado del Dolor. El mundo se hunde por la comodidad: la Iglesia resiente dolorosamente este defecto capital en sus hijos. El único remedio para tan contagioso mal es el Sacrificio, es el Dolor, es la Cruz.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Comodidad · p. 44",
    question: "¿Qué cruz cotidiana estás evitando que, llevada con Cristo, podría purificar tu amor?",
    imageQuestion: "¿Qué cruz estás evitando?",
    image: "./assets/images/cc-009.webp",
    imageAlt: "Pintura sacra al óleo relacionada con comodidad.",
  },
  {
    id: "cc-010",
    reading: `Que sacuda el alma con violencia este sopor que la envuelve; que se renuncie a sí, y que me busque a Mí, por el camino del propio desprecio y se librará, Yo se lo prometo, de tan grande mal, el cual puede acarrearle funestas consecuencias para la eternidad. Mas, si dicen que no la conocen, es porque no oran y porque no me aman.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Comodidad · p. 44",
    question: "¿Qué sopor interior necesitas reconocer para volver a buscar a Dios con sinceridad?",
    imageQuestion: "¿Qué sopor debes despertar?",
    image: "./assets/images/cc-010.webp",
    imageAlt: "Pintura sacra al óleo relacionada con comodidad.",
  },
  {
    id: "cc-011",
    reading: `El despojo total de la Pobreza se efectúa en no tener, el cual es hermano del no pertenecerse. Me doy, digan los Religiosos, me entrego, me vacío, me nulifico, todo lo entrego: de todo me despojo: entrego todas las personas, todos los afectos; devuelvo al Señor todo cuanto de Él he recibido, con todos sus dones y gracias.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Pobreza · p. 24",
    question: "¿Qué afecto, posesión o seguridad te cuesta reconocer hoy como un don recibido y no como algo que te pertenece?",
    imageQuestion: "¿Qué no te pertenece?",
    image: "./assets/images/cc-011.webp",
    imageAlt: "Pintura sacra al óleo relacionada con pobreza.",
  },
  {
    id: "cc-012",
    reading: `La pobreza y la obediencia tienen un color y un aroma muy parecidos. Este aroma embalsama cuanto toca, y da valor a los actos de la criatura, hasta un punto que yo solo sé. Estas virtudes huelen a divino: las dos nacieron en mi Corazón, y son mis amadas. La pobreza es una reina cubierta de harapos: a la vista espanta a la naturaleza.`,
    source: "De las virtudes y los vicios · Concepción Cabrera de Armida, Pobreza · p. 25",
    question: "¿Qué acto humilde te parece poco atractivo, pero podría adquirir valor si lo vivieras solo por Dios?",
    imageQuestion: "¿Qué acto puedes vivir por Dios?",
    image: "./assets/images/cc-012.webp",
    imageAlt: "Pintura sacra al óleo relacionada con pobreza.",
  },
  {
    id: "letanias-humildad-01-deseo-estima",
    reading: `Jesús, manso y humilde de Corazón, escúchame.
Del deseo de ser estimado, líbrame, Jesús.
Del deseo de ser amado, líbrame, Jesús.
Del deseo de ser ensalzado, líbrame, Jesús.
Del deseo de ser honrado, líbrame, Jesús.
Líbrame, Señor, de mendigar gloria humana y enséñame a descansar en el gozo de saberme amado por Ti.`,
    source: "Letanías de la Humildad · Cardenal Merry del Val, I. Los deseos de estima",
    question: "¿En qué medida condicionas tu paz interior a la necesidad de sentirte aprobado y estimado por los demás?",
    imageQuestion: "¿Buscas la estima del mundo o la de Dios?",
    image: "./assets/images/234-letanias-01-deseo-estima.webp",
    imageAlt: "Pintura sacra al óleo de un fraile orando ante la Cruz luminosa mientras la soberbia huye en la penumbra.",
  },
  {
    id: "letanias-humildad-02-deseo-protagonismo",
    reading: `Del deseo de ser alabado, líbrame, Jesús.
Del deseo de ser preferido a otros, líbrame, Jesús.
Del deseo de ser consultado, líbrame, Jesús.
Del deseo de ser aprobado, líbrame, Jesús.
Líbrame, Jesús, de la soberbia sutil de querer ser imprescindible, de buscar que mi opinión prevalezca y de anhelar el centro de atención.`,
    source: "Letanías de la Humildad · Cardenal Merry del Val, II. Los deseos de protagonismo",
    question: "¿Te cuesta ocupar un segundo plano y alegrarte sinceramente cuando otros son consultados o preferidos antes que tú?",
    imageQuestion: "¿Necesitas ser siempre el protagonista?",
    image: "./assets/images/235-letanias-02-deseo-protagonismo.webp",
    imageAlt: "Pintura sacra al óleo de Cristo y su Sagrado Corazón con el demonio de la vanidad postrado en derrota.",
  },
  {
    id: "letanias-humildad-03-temor-humillacion",
    reading: `Del temor de ser humillado, líbrame, Jesús.
Del temor de ser despreciado, líbrame, Jesús.
Del temor de ser reprendido, líbrame, Jesús.
Del temor de ser calumniado, líbrame, Jesús.
Líbrame, Jesús, de la angustia que paraliza mi entrega cada vez que mi amor propio se siente amenazado por el juicio o la crítica ajena.`,
    source: "Letanías de la Humildad · Cardenal Merry del Val, III. Los temores al rechazo",
    question: "Cuando recibes una crítica o una corrección, ¿reaccionas defendiendo tu orgullo o buscas en paz qué verdad puede haber en ella?",
    imageQuestion: "¿Aceptas la corrección con mansedumbre?",
    image: "./assets/images/236-letanias-03-temor-humillacion.webp",
    imageAlt: "Pintura sacra al óleo de Cristo en el Ecce Homo sereno ante los demonios de la calumnia y el escarnio.",
  },
  {
    id: "letanias-humildad-04-temor-olvido",
    reading: `Del temor de ser olvidado, líbrame, Jesús.
Del temor de ser puesto en ridículo, líbrame, Jesús.
Del temor de ser injuriado, líbrame, Jesús.
Del temor de ser sospechado, líbrame, Jesús.
Líbrame, Jesús, del miedo a quedar en la sombra y a no ser comprendido, recordando que Tú viviste treinta años oculto y fuiste varón de dolores.`,
    source: "Letanías de la Humildad · Cardenal Merry del Val, IV. Los temores al olvido",
    question: "¿Temes pasar desapercibido ante el mundo, o confías en que basta que tu Padre, que ve en lo secreto, te conozca y te sostenga?",
    imageQuestion: "¿Temes ser olvidado por los hombres?",
    image: "./assets/images/237-letanias-04-temor-olvido.webp",
    imageAlt: "Pintura sacra al óleo de un monje en oración nocturna con los demonios del olvido disolviéndose.",
  },
  {
    id: "letanias-humildad-05-gracia-desear",
    reading: `Jesús, concédeme la gracia de desear:
Que otros sean más amados que yo,
Que otros sean más estimados que yo,
Que en la opinión del mundo otros crezcan y yo disminuya,
Que otros sean elegidos y yo puesto a un lado,
Que otros sean alabados y yo no tenido en cuenta,
Que otros sean preferidos a mí en todo,
Que otros sean más santos que yo, con tal de que yo sea todo lo santo que pueda. Amén.`,
    source: "Letanías de la Humildad · Cardenal Merry del Val, V. La gracia de la caridad",
    question: "¿Eres capaz de alegrarte de corazón y dar gracias a Dios cuando ves que otros reciben mayores virtudes, afecto y frutos espirituales que tú?",
    imageQuestion: "¿Deseas con gozo la santidad de los demás?",
    image: "./assets/images/238-letanias-05-gracia-desear.webp",
    imageAlt: "Pintura sacra al óleo de San Juan Bautista señalando a Cristo con la envidia desterrada en sombras.",
  },
  {
    id: "biblia-col-03-vida-escondida",
    reading: `Si, pues, habéis resucitado con Cristo, buscad las cosas de arriba, donde está Cristo sentado a la diestra de Dios. Pensad en las cosas de arriba, no en las de la tierra. Porque habéis muerto, y vuestra vida está escondida con Cristo en Dios. Cuando Cristo, vuestra vida, se manifieste, entonces también vosotros os manifestaréis con Él en gloria.`,
    source: "Carta a los Colosenses 3, 1-4 · Biblia Straubinger",
    question: "¿En qué medida tus anhelos cotidianos están anclados en las cosas de arriba y no en las seguridades pasajeras de la tierra?",
    imageQuestion: "¿Buscas las cosas de arriba?",
    image: "./assets/images/239-biblia-col-03-vida-escondida.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: La vida escondida con Cristo en Dios.",
  },
  {
    id: "biblia-flp-04-gozo-y-paz",
    reading: `Alegraos siempre en el Señor; de nuevo lo diré: alegraos. Vuestra modestia sea conocida de todos los hombres. El Señor está cerca. Por nada os inquietéis, sino que en todo, mediante la oración y la súplica con acción de gracias, sean dadas a conocer vuestras peticiones ante Dios. Y la paz de Dios, que sobrepuja todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús.`,
    source: "Carta a los Filipenses 4, 4-7 · Biblia Straubinger",
    question: "Cuando surge la inquietud en tu día, ¿acudes de inmediato a la oración agradecida o dejas que la ansiedad tome el control?",
    imageQuestion: "¿Presentas tus inquietudes a Dios?",
    image: "./assets/images/240-biblia-flp-04-gozo-y-paz.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: El gozo sobrenatural y la paz de Dios.",
  },
  {
    id: "biblia-rom-08-victoria-del-amor",
    reading: `¿Quién nos separará del amor de Cristo? ¿La tribulación, o la angustia, o la persecución, o el hambre, o la desnudez, o el peligro, o la espada? Como está escrito: Por causa de ti somos entregados a la muerte todo el día; fuimos contados como ovejas de matadero. Mas en todas estas cosas vencemos sobradamente por medio de Aquel que nos amó. Porque estoy persuadido de que ni la muerte, ni la vida, ni ángeles, ni principados, ni lo presente, ni lo porvenir, ni potestades, ni la altura, ni la profundidad, ni criatura alguna podrá separarnos del amor de Dios, que está en Cristo Jesús Señor nuestro.`,
    source: "Carta a los Romanos 8, 35-39 · Biblia Straubinger",
    question: "¿Descansas en la certeza inquebrantable de que ninguna tribulación presente puede apartarte del amor de Cristo?",
    imageQuestion: "¿Confías en el amor que todo lo vence?",
    image: "./assets/images/241-biblia-rom-08-victoria-del-amor.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: La victoria del amor de Cristo.",
  },
  {
    id: "biblia-1pe-01-fe-en-crisol",
    reading: `Por lo cual rebosáis de alegría, aunque ahora sea preciso que por algún tiempo seáis afligidos con diversas pruebas, para que la autenticidad de vuestra fe, mucho más preciosa que el oro perecedero que se acrisola al fuego, redunde en alabanza, gloria y honor en la revelación de Jesucristo; a quien amáis sin haberle visto, en quien creéis aunque ahora no le veis, y os regocijáis con gozo inefable y glorioso, alcanzando el fin de vuestra fe, la salvación de vuestras almas.`,
    source: "Primera Carta de San Pedro 1, 6-9 · Biblia Straubinger",
    question: "¿Logras mirar tus dificultades presentes no como castigos, sino como el crisol donde Dios purifica y embellece tu fe?",
    imageQuestion: "¿Ves la prueba como purificación de la fe?",
    image: "./assets/images/242-biblia-1pe-01-fe-en-crisol.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: La fe purificada en el crisol.",
  },
  {
    id: "biblia-1pe-05-descargar-agobio",
    reading: `Humillaos, pues, bajo la poderosa mano de Dios, para que a su tiempo os ensalce. Echad sobre Él todas vuestras solicitudes, porque Él cuida de vosotros. Sed sobrios y velad: vuestro adversario el diablo, como león rugiente, ronda buscando a quién devorar; al cual resistid firmes en la fe, sabiendo que los mismos padecimientos se van cumpliendo en vuestros hermanos esparcidos por el mundo. Y el Dios de toda gracia, que os llamó a su eterna gloria en Cristo Jesús, después de que hayáis padecido un poco, Él mismo os perfeccionará, afirmará, fortalecerá y consolidará.`,
    source: "Primera Carta de San Pedro 5, 6-10 · Biblia Straubinger",
    question: "¿Qué preocupación que te quita el sueño necesitas descargar hoy con humildad sobre las manos del Padre?",
    imageQuestion: "¿Descargas tus afanes en Dios?",
    image: "./assets/images/243-biblia-1pe-05-descargar-agobio.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: Echad sobre Él toda solicitud.",
  },
  {
    id: "biblia-heb-04-sumo-sacerdote",
    reading: `Teniendo, pues, un gran Sumo Sacerdote que ha traspasado los cielos, Jesús, el Hijo de Dios, mantengámonos firmes en la confesión de la fe. Porque no tenemos un Sumo Sacerdote que no pueda compadecerse de nuestras flaquezas, sino uno que fue tentado en todo a semejanza nuestra, fuera del pecado. Acerquémonos, por tanto, con confianza al trono de la gracia, a fin de alcanzar misericordia y hallar gracia para ser socorridos en el tiempo oportuno.`,
    source: "Carta a los Hebreos 4, 14-16 · Biblia Straubinger",
    question: "¿Te acercas a Jesús con la confianza de quien sabe que Él conoce tus flaquezas humanas y no te juzga con desdén?",
    imageQuestion: "¿Te acercas con confianza a la gracia?",
    image: "./assets/images/244-biblia-heb-04-sumo-sacerdote.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: El Sumo Sacerdote compasivo.",
  },
  {
    id: "biblia-heb-12-fijos-los-ojos",
    reading: `Por tanto, también nosotros, teniendo en derredor nuestro tan gran nube de testigos, despojémonos de todo peso y del pecado que nos asedia, y corramos con perseverancia la carrera que se nos abre por delante, fijos los ojos en Jesús, el autor y consumador de la fe, el cual, en vez del gozo que le estaba propuesto, soportó la cruz, sin hacer caso de la ignominia, y está sentado a la diestra del trono de Dios. Considerad, pues, a Aquel que sufrió de parte de los pecadores semejante contradicción contra su persona, para que no decaiga vuestro ánimo extenuado.`,
    source: "Carta a los Hebreos 12, 1-3 · Biblia Straubinger",
    question: "En medio del cansancio y la desgana espiritual, ¿fijas tu mirada en la Cruz de Cristo para renovar tus fuerzas?",
    imageQuestion: "¿Pones tus ojos en Jesús en la carrera?",
    image: "./assets/images/245-biblia-heb-12-fijos-los-ojos.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: Fijos los ojos en Jesús.",
  },
  {
    id: "biblia-is-49-grabado-en-palmas",
    reading: `Y dijo Sión: «Yahvé me ha abandonado; el Señor se ha olvidado de mí». ¿Acaso olvidará la mujer a su niño de pecho, y no tendrá compasión del hijo de sus entrañas? Aun cuando ellas se olvidasen, Yo no me olvidaré de ti. Mira, en las palmas de mis manos te tengo grabado; tus muros están de continuo delante de Mí.`,
    source: "Profecía de Isaías 49, 14-16 · Biblia Straubinger",
    question: "¿Has sentido alguna vez la soledad del abandono, olvidando que el amor de Dios por ti supera al amor de la madre más tierna?",
    imageQuestion: "¿Crees que Dios jamás te olvida?",
    image: "./assets/images/246-biblia-is-49-grabado-en-palmas.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: Grabado en las palmas de Dios.",
  },
  {
    id: "biblia-is-43-precioso-a-mis-ojos",
    reading: `Y ahora, así dice Yahvé, que te creó, oh Jacob, y te formó, oh Israel: «No temas, porque Yo te he redimido; te he llamado por tu nombre: mío eres tú. Cuando pasares por las aguas, Yo estaré contigo; y por los ríos, no te anegarán. Cuando anduvieres por el fuego, no te quemarás, ni la llama arderá en ti. Porque Yo soy Yahvé, tu Dios, el Santo de Israel, tu Salvador... Por cuanto eres precioso a mis ojos, de gran estima, y Yo te amo».`,
    source: "Profecía de Isaías 43, 1-4 · Biblia Straubinger",
    question: "¿Vives con el temor al futuro o te sabes sostenido por el Dios que te llama por tu propio nombre?",
    imageQuestion: "¿Sabes que eres precioso para Dios?",
    image: "./assets/images/247-biblia-is-43-precioso-a-mis-ojos.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: Precioso a mis ojos y Yo te amo.",
  },
  {
    id: "biblia-jer-29-pensamientos-paz",
    reading: `Porque Yo sé los pensamientos que tengo acerca de vosotros, dice Yahvé, pensamientos de paz y no de desdicha, para daros un porvenir y una esperanza. Entonces me invocaréis, e iréis y me suplicaréis, y Yo os oiré. Me buscaréis y me hallaréis, porque me buscaréis con todo vuestro corazón; y me dejaré hallar de vosotros, dice Yahvé, y haré volver vuestros cautivos, y os congregaré de todas las naciones.`,
    source: "Profecía de Jeremías 29, 11-14 · Biblia Straubinger",
    question: "¿Confías en que los planes de Dios para tu vida son de paz y salvación, aun cuando no entiendas el camino actual?",
    imageQuestion: "¿Confías en los planes de Dios?",
    image: "./assets/images/248-biblia-jer-29-pensamientos-paz.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: Pensamientos de paz y esperanza.",
  },
  {
    id: "biblia-ez-36-corazon-de-carne",
    reading: `Y os daré un corazón nuevo, y pondré dentro de vosotros un espíritu nuevo; y quitaré de vuestra carne el corazón de piedra, y os daré un corazón de carne. Y pondré dentro de vosotros mi Espíritu, y haré que andéis en mis estatutos, y guardéis mis preceptos y los pongáis por obra. Y habitaréis en la tierra que di a vuestros padres; y vosotros seréis mi pueblo, y Yo seré vuestro Dios.`,
    source: "Profecía de Ezequiel 36, 26-28 · Biblia Straubinger",
    question: "¿Qué dureza o resentimiento necesitas entregar hoy a Dios para que Él transforme tu corazón de piedra en un corazón compasivo?",
    imageQuestion: "¿Pides a Dios un corazón nuevo?",
    image: "./assets/images/249-biblia-ez-36-corazon-de-carne.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: El corazón nuevo de carne.",
  },
  {
    id: "biblia-os-02-hablar-al-corazon",
    reading: `Por eso, he aquí que Yo la atraeré, y la llevaré al desierto, y hablaré a su corazón. Y le daré allí sus viñas, y el valle de Acor por puerta de esperanza; y allí responderá como en los días de su juventud, y como en el día en que subió de la tierra de Egipto.`,
    source: "Profecía de Oseas 2, 14-15 · Biblia Straubinger",
    question: "¿Aceptas los silencios y desiertos de tu vida como invitaciones de Dios para hablar a solas con tu corazón?",
    imageQuestion: "¿Escuchas a Dios en el silencio del desierto?",
    image: "./assets/images/250-biblia-os-02-hablar-al-corazon.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: La llamada al desierto y puerta de esperanza.",
  },
  {
    id: "biblia-sir-02-preparar-para-prueba",
    reading: `Hijo, si te determinas a servir al Señor, prepara tu alma para la prueba. Endereza tu corazón y ten firmeza, y no te apresures en el tiempo de la calamidad. Pégate a Él y no te apartes, para que seas ensalzado al fin de tus días. Todo lo que te sobrevenga acéptalo con buena voluntad, y en los contrastes de tu humillación sé paciente. Porque en el fuego se prueba el oro, y los hombres aceptos en el horno de la humillación. Confía en Él, y Él cuidará de ti; endereza tus caminos y espera en Él.`,
    source: "Libro del Eclesiástico (Sirácida) 2, 1-6 · Biblia Straubinger",
    question: "¿Estás dispuesto a perseverar fiel al Señor cuando servirle exige paciencia, humillación y purificación?",
    imageQuestion: "¿Mantienes firme tu corazón en la prueba?",
    image: "./assets/images/251-biblia-sir-02-preparar-para-prueba.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: Preparar el alma para la prueba.",
  },
  {
    id: "biblia-ap-03-estoy-a-la-puerta",
    reading: `He aquí que estoy a la puerta y llamo; si alguno oyere mi voz y abriere la puerta, entraré en su casa y cenaré con él, y él conmigo. Al que venciere, le concederé sentarse conmigo en mi trono, así como Yo vencí y me senté con mi Padre en su trono. El que tiene oído, oiga lo que el Espíritu dice a las iglesias.`,
    source: "Apocalipsis de San Juan 3, 20-22 · Biblia Straubinger",
    question: "¿Has dejado que Jesús entre a la intimidad de tu hogar interior o lo mantienes esperando en el umbral?",
    imageQuestion: "¿Abres la puerta de tu corazón a Jesús?",
    image: "./assets/images/252-biblia-ap-03-estoy-a-la-puerta.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: He aquí que estoy a la puerta y llamo.",
  },
  {
    id: "biblia-ap-21-enjugara-lagrimas",
    reading: `Y oí una gran voz desde el trono, que decía: «He aquí el tabernáculo de Dios con los hombres, y habitará con ellos; y ellos serán su pueblo, y Dios mismo estará con ellos como su Dios. Y enjugará Dios toda lágrima de sus ojos; y no habrá más muerte, ni habrá más luto, ni clamor, ni dolor, porque las cosas primeras pasaron». Y el que estaba sentado en el trono dijo: «He aquí, Yo hago nuevas todas las cosas».`,
    source: "Apocalipsis de San Juan 21, 3-5 · Biblia Straubinger",
    question: "En tus momentos de duelo o cansancio, ¿encuentras consuelo en la promesa eterna de que Dios enjugará cada una de tus lágrimas?",
    imageQuestion: "¿Esperas el consuelo eterno de Dios?",
    image: "./assets/images/253-biblia-ap-21-enjugara-lagrimas.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: El enjugamiento de las lágrimas.",
  },
  {
    id: "biblia-prov-03-confia-de-corazon",
    reading: `Confía en Yahvé de todo tu corazón, y no te apoyes en tu propia prudencia. Reconócele en todos tus caminos, y Él allanará tus sendas. No seas sabio en tu propia opinión; teme a Yahvé y apártate del mal. Esto será medicina para tu cuerpo, y refrigerio para tus huesos.`,
    source: "Libro de los Proverbios 3, 5-8 · Biblia Straubinger",
    question: "¿Confías plenamente en la guía de Dios o sigues apoyándote en tus propios cálculos humanos?",
    imageQuestion: "¿Confías en Dios o en tus cálculos?",
    image: "./assets/images/254-biblia-prov-03-confia-de-corazon.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: Confía en Yahvé de todo tu corazón.",
  },
  {
    id: "biblia-prov-04-guarda-tu-corazon",
    reading: `Con toda diligencia guarda tu corazón, porque de él manan las fuentes de la vida. Aparta de ti la perversidad de la boca, y aleja de ti la falsedad de los labios. Miren tus ojos de frente, y diríjanse tus párpados rectamente delante de ti. Aplana la senda de tus pies, y sean seguros todos tus caminos. No te desvíes ni a derecha ni a izquierda; retira tu pie del mal.`,
    source: "Libro de los Proverbios 4, 23-27 · Biblia Straubinger",
    question: "¿Cuidas con diligencia lo que dejas entrar a tu corazón a través de tus ojos, oídos y palabras?",
    imageQuestion: "¿Cuidas la pureza de tu corazón?",
    image: "./assets/images/255-biblia-prov-04-guarda-tu-corazon.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: Guarda tu corazón, fuente de la vida.",
  },
  {
    id: "biblia-prov-15-respuesta-blanda",
    reading: `La respuesta blanda calma la ira, mas la palabra áspera excita el furor. La lengua de los sabios hace amable la ciencia, pero la boca de los necios derrama necedades. En todo lugar están los ojos de Yahvé, observando a los malos y a los buenos. Lengua apacible es árbol de vida, pero la perversidad de ella quebranta el espíritu.`,
    source: "Libro de los Proverbios 15, 1-4 · Biblia Straubinger",
    question: "Cuando alguien te habla con aspereza, ¿respondes con mansedumbre o enciendes el fuego de la discusión?",
    imageQuestion: "¿Respondes con mansedumbre ante el enojo?",
    image: "./assets/images/256-biblia-prov-15-respuesta-blanda.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: La respuesta blanda calma la ira.",
  },
  {
    id: "biblia-prov-16-encomienda-tus-obras",
    reading: `Al hombre pertenecen las disposiciones del corazón, pero de Yahvé viene la respuesta de la lengua. Todos los caminos del hombre son limpios a sus propios ojos, mas Yahvé pesa los espíritus. Encomienda a Yahvé tus obras, y tus proyectos se afirmarán.`,
    source: "Libro de los Proverbios 16, 1-3 · Biblia Straubinger",
    question: "¿Ofreces a Dios tus proyectos diarios antes de emprenderlos, o solo te acuerdas de Él cuando fracasan?",
    imageQuestion: "¿Encomiendas tus obras al Señor?",
    image: "./assets/images/257-biblia-prov-16-encomienda-tus-obras.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: Encomienda a Yahvé tus obras.",
  },
  {
    id: "biblia-prov-16-domina-tu-espiritu",
    reading: `Corona de honra es la vejez que se halla en el camino de la justicia. Más vale el que es tardo para la ira que el valiente; y el que domina su espíritu, que el que toma una ciudad. En el regazo se echa la suerte, mas de Yahvé depende toda su decisión.`,
    source: "Libro de los Proverbios 16, 31-33 · Biblia Straubinger",
    question: "¿Reconoces que la verdadera grandeza cristiana radica en dominar la propia ira y vencer el orgullo?",
    imageQuestion: "¿Dominas tu espíritu ante la ira?",
    image: "./assets/images/258-biblia-prov-16-domina-tu-espiritu.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: El que domina su espíritu es mayor que el valiente.",
  },
  {
    id: "biblia-col-03-entranas-de-perdon",
    reading: `Vestíos, pues, como elegidos de Dios, santos y amados, de entrañas de misericordia, de benignidad, de humildad, de mansedumbre, de paciencia; soportándoos mutuamente y perdonándoos unos a otros, si alguno tiene queja contra otro. Así como el Señor os perdonó, perdonad también vosotros. Y sobre todas estas cosas, vestíos de la caridad, que es el vínculo de la perfección.`,
    source: "Carta a los Colosenses 3, 12-14 · Biblia Straubinger",
    question: "¿Estás dispuesto a perdonar a quien te ofendió con la misma generosidad con que el Señor te perdonó a ti?",
    imageQuestion: "¿Perdonas como el Señor te perdonó?",
    image: "./assets/images/259-biblia-col-03-entranas-de-perdon.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: Revestirse de entrañas de perdón.",
  },
  {
    id: "biblia-efe-04-desterrar-amargura",
    reading: `Toda amargura, ira, enojo, griterío y maledicencia sea desterrada de vosotros, junto con toda malicia. Sed más bien benignos los unos para con los otros, compasivos, perdonándoos mutuamente, como también Dios os perdonó en Cristo.`,
    source: "Carta a los Efesios 4, 31-32 · Biblia Straubinger",
    question: "¿Qué resquicio de amargura o queja guardas en tu corazón que hoy necesitas soltar en manos de Dios?",
    imageQuestion: "¿Destierras la amargura de tu alma?",
    image: "./assets/images/260-biblia-efe-04-desterrar-amargura.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: Desterrar la amargura y perdonar mutuamente.",
  },
  {
    id: "biblia-mt-18-setenta-veces-siete",
    reading: `Entonces Pedro, acercándose a Él, dijo: «Señor, ¿cuántas veces pecará mi hermano contra mí y le perdonaré? ¿Hasta siete veces?». Jesús le dijo: «No te digo hasta siete veces, sino hasta setenta veces siete».`,
    source: "Evangelio según San Mateo 18, 21-22 · Biblia Straubinger",
    question: "¿Pones límites y condiciones al perdón, o estás dispuesto a perdonar una y otra vez como Cristo te enseña?",
    imageQuestion: "¿Perdonas sin poner límites?",
    image: "./assets/images/261-biblia-mt-18-setenta-veces-siete.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: La medida del perdón: Setenta veces siete.",
  },
  {
    id: "biblia-lc-06-medida-del-perdon",
    reading: `Sed misericordiosos, como también vuestro Padre es misericordioso. No juzguéis, y no seréis juzgados; no condenéis, y no seréis condenados; perdonad, y seréis perdonados. Dad, y se os dará: medida buena, apretada, remecida y rebosante se os echará en el regazo. Porque con la medida con que midáis, se os volverá a medir.`,
    source: "Evangelio según San Lucas 6, 36-38 · Biblia Straubinger",
    question: "¿Con qué medida mides las faltas ajenas: con la severidad del juicio o con la generosidad de la misericordia?",
    imageQuestion: "¿Mides a los demás con misericordia?",
    image: "./assets/images/262-biblia-lc-06-medida-del-perdon.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: Misericordia y perdón sin medida.",
  },
  {
    id: "biblia-rom-12-vence-el-mal-con-bien",
    reading: `A nadie devolváis mal por mal; procurando el bien delante de todos los hombres. Si es posible, en cuanto de vosotros dependa, estad en paz con todos los hombres. No os venguéis vosotros mismos, carísimos, sino dad lugar a la ira de Dios; porque escrito está: Mía es la venganza, Yo pagaré, dice el Señor. Antes bien, si tu enemigo tiene hambre, dale de comer; si tiene sed, dale de beber... No seas vencido de lo malo, sino vence con el bien el mal.`,
    source: "Carta a los Romanos 12, 17-21 · Biblia Straubinger",
    question: "Ante una ofensa recibida, ¿buscas el desquite o vences el rencor ofreciendo una respuesta de bien y caridad?",
    imageQuestion: "¿Vences el mal a fuerza de bien?",
    image: "./assets/images/263-biblia-rom-12-vence-el-mal-con-bien.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: Vencer el mal con el bien.",
  },
  {
    id: "biblia-lc-23-padre-perdonales",
    reading: `Y cuando llegaron al lugar llamado Calvario, le crucificaron allí, y a los malhechores, uno a la derecha y otro a la izquierda. Y Jesús decía: «Padre, perdónalos, porque no saben lo que hacen». Y repartieron sus vestidos, echando suertes.`,
    source: "Evangelio según San Lucas 23, 33-34 · Biblia Straubinger",
    question: "Al mirar a Jesús en la Cruz excusando a sus propios verdugos, ¿encuentras la fuerza para perdonar a quien te ha herido?",
    imageQuestion: "¿Perdonas mirando a Cristo en la Cruz?",
    image: "./assets/images/264-biblia-lc-23-padre-perdonales.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: El perdón supremo en la Cruz.",
  },
  {
    id: "biblia-gen-50-jose-perdona-hermanos",
    reading: `Y les dijo José: «No temáis; ¿acaso estoy yo en el lugar de Dios? Vosotros tramasteis mal contra mí; mas Dios lo encaminó para bien, para hacer lo que hoy se ve, para conservar la vida de un pueblo numeroso. Ahora, pues, no temáis; yo os sustentaré a vosotros y a vuestros niños». Y los consoló, y les habló al corazón.`,
    source: "Libro del Génesis 50, 19-21 · Biblia Straubinger",
    question: "¿Eres capaz de ver cómo Dios puede transformar incluso el daño que otros te causaron en una bendición de gracia y reconciliación?",
    imageQuestion: "¿Ves la mano de Dios en el perdón?",
    image: "./assets/images/265-biblia-gen-50-jose-perdona-hermanos.webp",
    imageAlt: "Pintura sacra al óleo que ilustra el pasaje bíblico: José consuela y perdona a sus hermanos.",
  },
  {
    id: "codex-cx-001-paz-y-espiritu",
    reading: `Jesús, en la Última Cena, dio a sus apóstoles la paz con el mismo aliento con el que comunicaba su Espíritu: «La paz esté con vosotros. Recibid el Espíritu Santo» (Jn 20, 21-22). Necesitamos al Espíritu Santo para recibir la paz, pero también necesitamos la paz para recibir el Espíritu Santo.`,
    source: "RANIERO CANTALAMESA Os doy mi paz · I. Os doy mi paz, p. 5",
    question: "¿Qué necesitas recibir hoy del Espíritu Santo para que la paz de Cristo eche raíces en tu corazón?",
    imageQuestion: "¿Qué paz necesitas recibir?",
    image: "./assets/images/155-cx-001-paz-y-espiritu.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-002-cristo-nuestra-paz",
    reading: `Hablando del Mesías que nacería en Belén de Judá, el profeta Miqueas había prenunciado: «¡Y él mismo será la paz!» (Mi 5, 4); exactamente lo que la Carta a los Efesios afirmaba de Cristo: «Porque Él es nuestra paz» (Ef 2, 14). «El Nacimiento del Señor –dice san León Magno– es el nacimiento de la paz».`,
    source: "RANIERO CANTALAMESA Os doy mi paz · I. Os doy mi paz, p. 9",
    question: "¿Dejas que Cristo sea verdaderamente tu paz, o buscas paz primero en aquello que cambia?",
    imageQuestion: "¿Quién es tu paz?",
    image: "./assets/images/156-cx-002-cristo-nuestra-paz.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-003-imagen-del-padre",
    reading: `Una restauración más urgente de la imagen de Dios Padre debe tener lugar en los corazones de los hombres, incluidos nosotros los creyentes. ¿Cuál es de hecho la imagen «predefinida» de Dios en el inconsciente humano colectivo? Es suficiente, para averiguarlo, hacerse esta pregunta y presentarla también a los demás: «¿Qué ideas, qué palabras, qué realidades surgen espontáneamente en ti, antes de cada reflexión, cuando dices: Padre nuestro que estás en los cielos… hágase tu voluntad?».`,
    source: "RANIERO CANTALAMESA Os doy mi paz · I. Os doy mi paz, p. 13",
    question: "Cuando te diriges al Padre, ¿qué imagen de Él aparece primero en tu corazón y necesita ser sanada?",
    imageQuestion: "¿Cómo miras al Padre?",
    image: "./assets/images/157-cx-003-imagen-del-padre.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-004-fruto-del-espiritu",
    reading: `San Pablo pone la paz en el tercer lugar entre los frutos del Espíritu: «El fruto del Espíritu, dice, es amor, alegría y paz, magnanimidad, afabilidad, bondad y confianza, mansedumbre y temperancia» (Ga 5, 22). Qué son «los frutos del Espíritu», lo descubrimos precisamente analizando el contexto en el que tal idea aparece.`,
    source: "RANIERO CANTALAMESA Os doy mi paz · III. La paz de Cristo reine en vuestros corazones, p. 28",
    question: "¿Qué fruto del Espíritu necesita crecer hoy para que tu paz no dependa solo de las circunstancias?",
    imageQuestion: "¿Qué fruto debe crecer?",
    image: "./assets/images/158-cx-004-fruto-del-espiritu.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-005-discernimiento-y-paz",
    reading: `Consiste en ponerse en un estado de disposición total a aceptar la voluntad de Dios, renunciando, desde el principio, a cualquier preferencia personal, al igual que una balanza dispuesta a inclinarse del lado donde el peso será mayor. La experiencia de paz interior se convierte así en el principal criterio en todo discernimiento. Hay que considerar que es conforme a la voluntad de Dios la elección que, después de una prolongada ponderación y oración, viene acompañada por una mayor paz del corazón.`,
    source: "RANIERO CANTALAMESA Os doy mi paz · III. La paz de Cristo reine en vuestros corazones, p. 31",
    question: "En la decisión que tienes delante, ¿has dejado espacio a la oración y a la paz del corazón antes de imponer tu preferencia?",
    imageQuestion: "¿Qué te dice la paz?",
    image: "./assets/images/159-cx-005-discernimiento-y-paz.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-006-confianza-cada-dia",
    reading: `Sin pretender sustituir estos medios ascéticos tradicionales, la espiritualidad moderna pone su acento en otros medios más positivos para conservar la paz interior. El primero es la confianza y el abandono en Dios. «Tú le asegurarás la paz, paz porque en ti tiene confianza», se lee en Isaías. Jesús en el Evangelio motiva su invitación a no temer y a no estar en ansia por el mañana, con el hecho de que el Padre celeste conoce lo que necesitamos, él que nutre a los pájaros del cielo y viste a los lirios del campo.`,
    source: "RANIERO CANTALAMESA Os doy mi paz · III. La paz de Cristo reine en vuestros corazones, p. 33",
    question: "¿Qué ansiedad por el mañana necesitas poner hoy en las manos del Padre que ya conoce lo que necesitas?",
    imageQuestion: "¿Entregas el mañana al Padre?",
    image: "./assets/images/160-cx-006-confianza-cada-dia.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-007-fidelidad-en-la-oracion",
    reading: `Renovarse en la oración es ser renovado en todos los aspectos de nuestra vida, es encontrar una nueva juventud. Más que nunca, el Padre busca adoradores en Espíritu y en verdad (Jn 4, 24). Es evidente que no todos tenemos en este asunto la misma llamada y las mismas posibilidades. Pero si hacemos lo que podemos, Dios es fiel. Conozco a laicos, muy ocupados por sus obligaciones profesionales y familiares, que reciben en veinte minutos de oración diaria tantas gracias como algunos monjes que dedican a la oración cinco horas al día.`,
    source: "Jacques Philippe - La oración, camino de amor · Introducción, p. 8",
    question: "¿Qué tiempo concreto puedes ofrecer hoy al Señor con sencillez, confiando en que Él es fiel?",
    imageQuestion: "¿Qué tiempo das al Señor?",
    image: "./assets/images/161-cx-007-fidelidad-en-la-oracion.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-008-esperanza-en-la-oracion",
    reading: `Es muy justa y muy importante también esta afirmación del Papa según la cual la oración es el secreto de un cristianismo realmente vital, que no tiene motivos para temer el futuro. La oración permite encontrar en Dios una vida siempre nueva, y dejarse regenerar y renovar continuamente. Cualesquiera que sean las pruebas, las desilusiones, el peso de las situaciones, los fracasos y las faltas, en la oración encontraremos la fuerza y la esperanza para asumir la existencia con una total confianza en el porvenir.`,
    source: "Jacques Philippe - La oración, camino de amor · I. Los motivos de la oración, p. 11",
    question: "Ante lo que hoy te preocupa, ¿te acercas a la oración como al lugar donde Dios renueva tu esperanza?",
    imageQuestion: "¿Dónde renuevas tu esperanza?",
    image: "./assets/images/162-cx-008-esperanza-en-la-oracion.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-009-amor-gratuito",
    reading: `Dios sabe lo que es bueno para nosotros, y eso nos debe bastar. No podemos tener una visión utilitarista de la oración, encerrarnos en una lógica de la eficacia, de rentabilidad, que lo pervertiría todo. No tenemos que justificarnos ante nadie por el tiempo que dedicamos a la oración. Dios nos invita, por decirlo así, a «perder el tiempo» con él, eso basta. Será una «pérdida fecunda», diremos con palabras de Teresa de Lisieux. Hay una dimensión de gratuidad que es fundamental en la vida de oración. Paradójicamente, cuanto más gratuita es la oración, más fruto reporta.`,
    source: "Jacques Philippe - La oración, camino de amor · I. Los motivos de la oración · 2. La prioridad de Dios en nuestra vida, p. 13",
    question: "¿Puedes quedarte hoy un momento con Dios sin medir resultados, solo por amor a estar con Él?",
    imageQuestion: "¿Puedes estar con Dios?",
    image: "./assets/images/163-cx-009-amor-gratuito.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-010-presencia-amorosa",
    reading: `Orar es pasar gratuitamente tiempo con Dios, por la alegría de estar juntos. Es amar, porque dar uno su tiempo es dar su vida. El amor no es ante todo hacer algo por el otro, es tenerle presente. La oración nos educa en tener presente a Dios, en una simple atención amorosa.`,
    source: "Jacques Philippe - La oración, camino de amor · I. Los motivos de la oración · 3. Amar gratuitamente, p. 15",
    question: "¿Puedes volver tu atención al Señor ahora mismo y permanecer un instante con Él?",
    imageQuestion: "¿Estás presente para Dios?",
    image: "./assets/images/164-cx-010-presencia-amorosa.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-011-libertad-para-amar",
    reading: `La experiencia lo muestra: la fidelidad a la oración, aunque pase a veces por fases difíciles, momentos de aridez y de prueba, nos conduce progresivamente a encontrar en Dios una paz profunda, una seguridad, una felicidad que nos hacen libres respecto a los demás. Si encuentro mi felicidad y mi paz en Dios, seré capaz de dar mucho a mi prójimo, y también de aceptarlo tal como es, sin distanciarme de él cuando no responde a mis expectativas. Dios basta.`,
    source: "Jacques Philippe - La oración, camino de amor · I. Los motivos de la oración · 7. La oración, camino de libertad, p. 22",
    question: "¿Qué expectativa sobre otra persona necesitas devolver a Dios para poder amarla con mayor libertad?",
    imageQuestion: "¿Esperas todo de Dios?",
    image: "./assets/images/165-cx-011-libertad-para-amar.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-012-todo-en-la-gracia",
    reading: `Gracias al encuentro regular con Dios en la oración, todo se convierte en positivo: nuestros deseos, nuestra buena voluntad, nuestros esfuerzos, pero también nuestra pobreza, nuestros errores, nuestros pecados. Las circunstancias felices o desgraciadas, las elecciones buenas o malas, todo queda como «recapitulado» en Cristo, y se abre a la gracia. Todo acaba por cobrar sentido e integrarse en un camino de crecimiento en el amor. «El amor es tan poderoso en obras que sabe sacar provecho de todo, del bien y del mal que encuentra en mí», dice santa Teresa del Niño Jesús comentando a san Juan de la Cruz.`,
    source: "Jacques Philippe - La oración, camino de amor · I. Los motivos de la oración · 8. La oración construye nuestra unidad de vida, p. 23",
    question: "¿Qué parte de tu historia puedes presentar hoy a Cristo para que Él la abra de nuevo a su gracia?",
    imageQuestion: "¿Qué quieres entregar a Cristo?",
    image: "./assets/images/166-cx-012-todo-en-la-gracia.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-013-oracion-simple-y-pobre",
    reading: `Un cristiano que es fiel a encontrarse con Dios en la oración —tanto comunitaria como personal, aunque esta oración sea simple y pobre— tendrá siempre la gracia necesaria para vivir positivamente aquello a lo que se enfrente. Que esta obra anime a los lectores en este hermoso camino de unión con Dios, por Cristo y en el Espíritu Santo, al que todos somos llamados. Que la perseverancia en la oración nos permita gustar y ver «qué bueno es el Señor» (Sal 34, 9), en la espera de vivir un día una total comunión con él y entre nosotros en su Reino.`,
    source: "Jacques_Philippe_El_tesoro_de_la_oración_116_págs_pdf_·_versión · Introducción, p. 7",
    question: "¿Puedes presentarte hoy ante Dios con una oración sencilla y pobre, confiando en la gracia que Él quiere darte?",
    imageQuestion: "¿Vienes a Dios tal como eres?",
    image: "./assets/images/167-cx-013-oracion-simple-y-pobre.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-014-reavivar-el-don",
    reading: `Sin embargo, el Santo deseo (el Espíritu) gime en el fondo de nuestro ser. No espera sino nuestra pequeña buena voluntad para mostrarse. Pablo exhortaba a Timoteo a reanimar la llama: «Te recuerdo que tienes que reavivar el don de Dios que recibiste por la imposición de mis manos» (2 Tm 1, 6). Necesitamos colaborar con Dios por la paciencia, reactivar nuestra pobre fe. El Espíritu nos ayudará a romper el espíritu de pereza.`,
    source: "Jacques_Philippe_El_tesoro_de_la_oración_116_págs_pdf_·_versión · 2. El deseo de Dios, p. 16",
    question: "¿Qué pequeño acto de fidelidad puede reavivar hoy tu deseo de buscar a Dios?",
    imageQuestion: "¿Qué llama quieres reavivar?",
    image: "./assets/images/168-cx-014-reavivar-el-don.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-015-deseo-purificado",
    reading: `San Agustín nos dice: Dios, haciendo esperar, aumenta el deseo; haciendo desear, ensancha el alma; ensanchándola, aumenta su capacidad de recibir […]. Supón que Dios quiere llenarte de miel: si tú estás lleno de vinagre, ¿dónde pondrás esa miel? Hay que vaciar el contenido del vaso, hay que limpiar el vaso, hay que limpiarlo a fuerza de trabajar, a fuerza de frotar, para que sea capaz de recibir otra cosa. Dios te ha hecho un ser de deseo y tu deseo es él, Dios.`,
    source: "Jacques_Philippe_El_tesoro_de_la_oración_116_págs_pdf_·_versión · 2. El deseo de Dios, p. 17",
    question: "¿Qué necesitas vaciar de tu corazón para recibir con mayor libertad lo que Dios quiere darte?",
    imageQuestion: "¿Qué necesita vaciar tu corazón?",
    image: "./assets/images/169-cx-015-deseo-purificado.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-016-maria-sostiene-el-camino",
    reading: `Dios sabrá siempre adaptarse a nosotros, a nuestra particularidad, a nuestro ritmo. No tenemos nada que temer de él. Lo importante es que hoy, tal como somos y ahí donde estamos, elijamos resueltamente seguirle. Y si nos falta confianza y determinación para eso, no bajemos los brazos, sino mendiguemos su gracia y confiémonos a la intercesión de la Virgen María y de la Madre.`,
    source: "Jacques_Philippe_El_tesoro_de_la_oración_116_págs_pdf_·_versión · 3. La determinación, pp. 21–22",
    question: "Tal como estás hoy, ¿puedes volver a elegir seguir al Señor y pedir a María que te sostenga?",
    imageQuestion: "¿Vuelves a elegir seguirle?",
    image: "./assets/images/170-cx-016-maria-sostiene-el-camino.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-017-confiar-en-el-padre",
    reading: `Según el relato de Adán y Eva, se puede considerar que la raíz del pecado está ligada a un cierto miedo de Dios que engendra la desconfianza. Esta última puede venir de imágenes falsas que habitan nuestra imaginación, nuestro inconsciente o nuestro corazón herido.`,
    source: "Jacques_Philippe_El_tesoro_de_la_oración_116_págs_pdf_·_versión · 5. Conocimiento de Dios y conocimiento de sí, p. 29",
    question: "¿Hay alguna imagen falsa de Dios que esté alimentando tu miedo en vez de ayudarte a confiar en Él?",
    imageQuestion: "¿Qué imagen de Dios llevas?",
    image: "./assets/images/171-cx-017-confiar-en-el-padre.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-018-el-dia-del-senor",
    reading: `Mientras que el shabbat hace memoria de la creación, el domingo evoca la nueva creación obtenida por Jesús: «El domingo es pues el día en el cual, más que en ningún otro, el cristiano está llamado a recordar la salvación que, ofrecida en el bautismo, le hace hombre nuevo en Cristo».`,
    source: "Jacques_Philippe_El_tesoro_de_la_oración_116_págs_pdf_·_versión · 9. Santificar el espacio, p. 54",
    question: "¿Cómo puedes cuidar el domingo para recordar con gratitud que Cristo te hace nuevo?",
    imageQuestion: "¿Cómo vivirás el día del Señor?",
    image: "./assets/images/172-cx-018-el-dia-del-senor.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-019-el-don-de-dios",
    reading: `Lo que proporciona unidad a estos capítulos es la visión de que la existencia cristiana no consiste ante todo en un esfuerzo humano inquieto y tenso, sino en la acogida del don de Dios. «¡Si conocieras el don de Dios!», dice Jesús a la mujer de Samaría en el Evangelio de Juan (Jn 4, 10).`,
    source: "Si_conocieras_el_don_de_Dios_Aprender_a_recibir_Jacques_Philippe · Presentación, p. 5",
    question: "¿Qué pasaría si hoy recibieras tu vida espiritual primero como un don de Dios y no como una carga?",
    imageQuestion: "¿Recibes el don de Dios?",
    image: "./assets/images/173-cx-019-el-don-de-dios.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-020-la-gracia-transforma",
    reading: `El cristianismo no es una religión del esfuerzo humano, sino una religión de la gracia divina; cuando la Iglesia canoniza a uno de sus hijos, celebra sin duda la respuesta de una persona a la llamada de Dios, pero sobre todo glorifica la misericordia del Padre, la fuerza que tiene esa misericordia para transformar una vida. «Por gracia habéis sido salvados mediante la fe; y esto no procede de vosotros, puesto que es un don de Dios», afirma san Pablo en la carta a los Efesios (2, 8).`,
    source: "Si_conocieras_el_don_de_Dios_Aprender_a_recibir_Jacques_Philippe · Presentación, p. 5",
    question: "¿En qué parte de tu vida necesitas dejar de confiar solo en tu esfuerzo y abrirte a la misericordia del Padre?",
    imageQuestion: "¿Dónde necesitas recibir gracia?",
    image: "./assets/images/174-cx-020-la-gracia-transforma.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-021-pedid-y-se-os-dara",
    reading: `Pues si vosotros, siendo malos, sabéis dar a vuestros hijos cosas buenas, ¿cuánto más el Padre del cielo dará el Espíritu Santo a los que se lo pidan?» (Lc 11, 9-13). La primera condición para recibir el Espíritu Santo es pedirlo en la oración, sencillamente. Por supuesto, es necesario que esta oración esté animada por un gran deseo y que sea perseverante... Pero nos permitirá obtener lo que necesitamos para vivir nuestra vocación cristiana. Me parece que estas palabras de Jesús: «Pedid y se os dará...» son quizá las más consoladoras de toda la Escritura.`,
    source: "Si_conocieras_el_don_de_Dios_Aprender_a_recibir_Jacques_Philippe · 1. La receptividad espiritual · La perseverancia en la oración, p. 9",
    question: "¿Qué gracia concreta necesitas pedir hoy al Padre con perseverancia y sencillez?",
    imageQuestion: "¿Qué quieres pedir al Padre?",
    image: "./assets/images/175-cx-021-pedid-y-se-os-dara.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-022-confianza-y-misericordia",
    reading: `Se es acogedor, receptivo, con quien se tiene confianza. Por el contrario, la incredulidad, la duda, la sospecha, la desconfianza son actitudes de cerrazón. Lo primero que Dios nos pide no es que seamos perfectos, es que confiemos en él. Lo que más le desagrada no son nuestras caídas, sino nuestras faltas de confianza. Cuanto más confiamos en él, más recibimos el Espíritu. Veamos unas palabras de Jesús a santa Faustina: «Las gracias de mi misericordia se obtienen con la ayuda de un único medio que es la confianza. Cuanto mayor es su confianza, más recibe el alma.»`,
    source: "Si_conocieras_el_don_de_Dios_Aprender_a_recibir_Jacques_Philippe · 1. La receptividad espiritual · La confianza, p. 10",
    question: "¿Puedes acercarte hoy a Dios sin fingir perfección y simplemente confiar en su misericordia?",
    imageQuestion: "¿Confías en su misericordia?",
    image: "./assets/images/176-cx-022-confianza-y-misericordia.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-023-humildad-que-recibe",
    reading: `Eso es aún más cierto en la relación con Dios: cuanto más reconocemos que no somos nada por nosotros mismos y que dependemos totalmente de la bondad de Dios, más estamos en condiciones de recibir su gracia.`,
    source: "Si_conocieras_el_don_de_Dios_Aprender_a_recibir_Jacques_Philippe · 1. La receptividad espiritual · La humildad, p. 11",
    question: "¿Puedes reconocer hoy con paz que todo bien que tienes es recibido de la bondad de Dios?",
    imageQuestion: "¿Todo lo recibes de Dios?",
    image: "./assets/images/177-cx-023-humildad-que-recibe.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-024-la-paz-para-discernir",
    reading: `«Vuestra salvación está en convertiros y en tener calma, vuestra fuerza está en confiar y estar tranquilos», dice el profeta Isaías (Is 30, 15). Estemos atentos a este punto importante: solo cuando estamos en paz tenemos buen discernimiento, vemos claro en las diferentes situaciones a que nos enfrentamos y encontramos buenos remedios a nuestros problemas. Es inevitable pasar por momentos de tempestad, de turbación e inquietud, pero debemos ser bien conscientes de que nuestra percepción de la realidad está entonces condicionada por nuestras emociones negativas; hay que esperar que la paz vuelva antes de cambiar cualquier cosa en nuestras resoluciones fundamentales.`,
    source: "Si_conocieras_el_don_de_Dios_Aprender_a_recibir_Jacques_Philippe · 1. La receptividad espiritual · La paz interior, p. 14",
    question: "Cuando tu corazón está agitado, ¿puedes esperar a recuperar la paz antes de tomar una decisión importante?",
    imageQuestion: "¿Puedes esperar a que vuelva la paz?",
    image: "./assets/images/178-cx-024-la-paz-para-discernir.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-025-el-silencio-manifiesta-a-dios",
    reading: `El silencio es más importante que cualquier otra obra humana. Porque manifiesta a Dios. La verdadera revolución procede del silencio: nos conduce hacia Dios y hacia los demás para ponernos humilde y generosamente a su servicio.`,
    source: "La fuerza del silencio - Cardenal Robert Sarah · Prólogo, p. 14",
    question: "¿Qué ruido puedes dejar hoy para volver a Dios y servir mejor a los demás?",
    imageQuestion: "¿Qué ruido puedes dejar?",
    image: "./assets/images/179-cx-025-el-silencio-manifiesta-a-dios.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-026-la-palabra-en-el-corazon",
    reading: `Quiero recordar la importancia de cultivar el silencio para estar realmente con Él. Citando el libro del Deuteronomio, san Pablo explica que no encontraremos a Dios atravesando los mares, porque Él está en nuestro corazón: «No digas en tu corazón: ¿quién subirá al Cielo? –esto es, para bajar a Cristo–; o ¿quién bajará al abismo?, esto es, para subir a Cristo de entre los muertos. ¿Qué dice, en cambio? Cerca de ti está la palabra, en tu boca y en tu corazón. Se refiere a la palabra de la fe que predicamos.»`,
    source: "La fuerza del silencio - Cardenal Robert Sarah · I. Dios y el silencio, p. 18",
    question: "¿Puedes hacer silencio hoy para recordar que Cristo y su Palabra están cerca de ti?",
    imageQuestion: "¿Recuerdas que Cristo está cerca?",
    image: "./assets/images/180-cx-026-la-palabra-en-el-corazon.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-027-la-vida-del-bautismo",
    reading: `Si nos fijamos en las grandes obras, en las acciones más poderosas, en las transformaciones interiores más extraordinarias y espléndidas que Dios obra en el hombre, no cabe sino constatar que trabaja en silencio. El bautismo obra una maravillosa creación en el alma del niño o del adulto que recibe este sacramento en el nombre del Padre, del Hijo y del Espíritu Santo. Al nuevo bautizado se le sumerge dentro del nombre de la Trinidad, se le inserta en el Dios Trinitario. Se le concede una nueva vida que le permite llevar a cabo los actos divinos de los hijos de Dios.`,
    source: "La fuerza del silencio - Cardenal Robert Sarah · I. Dios y el silencio, p. 21",
    question: "¿Recuerdas que por tu bautismo perteneces al Padre, al Hijo y al Espíritu Santo?",
    imageQuestion: "¿Vives como hijo de Dios?",
    image: "./assets/images/181-cx-027-la-vida-del-bautismo.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-028-silencio-y-presencia",
    reading: `El silencio no es una ausencia; al contrario: se trata de la manifestación de una presencia, la presencia más intensa que existe. El descrédito que la sociedad moderna atribuye al silencio es el síntoma de una enfermedad grave e inquietante. En esta vida lo verdaderamente importante ocurre en silencio.`,
    source: "La fuerza del silencio - Cardenal Robert Sarah · I. Dios y el silencio, p. 22",
    question: "¿Puedes recibir un momento de silencio no como vacío, sino como una ocasión para estar ante Dios?",
    imageQuestion: "¿Puedes habitar el silencio?",
    image: "./assets/images/182-cx-028-silencio-y-presencia.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-029-marta-y-maria",
    reading: `Jesús no le reprocha a Marta su ajetreo en la cocina –había que comer–, sino su actitud interior de disipación reflejada en el enfado con su hermana. Desde Orígenes, algunos comentaristas han tenido tendencia a intensificar el contraste entre las dos mujeres, hasta el punto de ver en ellas la imagen de una vida activa demasiado dispersa frente a la de la vida contemplativa vivida en el silencio, la escucha y la oración interior.`,
    source: "La fuerza del silencio - Cardenal Robert Sarah · I. Dios y el silencio, p. 23",
    question: "En medio de tus tareas, ¿qué te ayudaría a dejar la dispersión y volver a escuchar al Señor?",
    imageQuestion: "¿Qué te devuelve a la escucha?",
    image: "./assets/images/183-cx-029-marta-y-maria.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-030-el-espacio-del-silencio",
    reading: `El silencio es amistad y es amor, es armonía interior y paz. El silencio y la paz laten con un solo corazón. El ruido de la cotidianeidad siempre despierta en el hombre cierta agitación. Nunca es sereno ni lleva a comprender al otro. ¡Cuánta razón tenía Pascal cuando escribió: «Toda la desdicha de los hombres proviene de una sola causa: no saben permanecer en reposo, en un cuarto»! En el nivel exclusivamente físico, el hombre solo puede hallar reposo en el silencio. Las cosas más hermosas de la vida tienen lugar en el silencio. Somos capaces de leer o escribir cuando tenemos silencio.`,
    source: "La fuerza del silencio - Cardenal Robert Sarah · I. Dios y el silencio, p. 27",
    question: "¿Qué espacio concreto puedes proteger hoy para que el silencio te devuelva la paz y te haga más atento a los demás?",
    imageQuestion: "¿Qué espacio protegerás para Dios?",
    image: "./assets/images/184-cx-030-el-espacio-del-silencio.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-031-la-paz-con-dios",
    reading: `La palabra de Dios nos enseña que la primera y más esencial paz es, en cambio, vertical, entre el cielo y la tierra, entre Dios y la humanidad. De esta dependen todas las otras formas de la paz. Así lo vemos en la historia de la creación. Mientras Adán y Eva están en paz con Dios, hay paz dentro de cada uno de ellos, entre la carne y el espíritu, hay paz entre el hombre y la mujer, entre el ser humano y el resto de la creación.`,
    source: "RANIERO CANTALAMESA Os doy mi paz · I. Os doy mi paz, p. 4",
    question: "¿Qué cambia en tu manera de vivir cuando vuelves primero a estar en paz con Dios?",
    imageQuestion: "¿Vuelves primero a Dios?",
    image: "./assets/images/185-cx-031-la-paz-con-dios.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-032-cristo-carga-nuestros-pecados",
    reading: `No ha puesto sus pecados sobre los hombros de los otros –hombres o animales–; ha puesto los pecados de los otros en sus propios hombros: «Él llevó nuestros pecados en su cuerpo en el madero de la cruz» (1 P 2, 24).`,
    source: "RANIERO CANTALAMESA Os doy mi paz · I. Os doy mi paz, p. 11",
    question: "Al mirar la cruz, ¿puedes dejar de cargar culpas ajenas y agradecer a Cristo que ha cargado con tus pecados?",
    imageQuestion: "¿Qué puso Cristo sobre sus hombros?",
    image: "./assets/images/186-cx-032-cristo-carga-nuestros-pecados.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-033-la-paz-del-espiritu",
    reading: `Esta consiste en relaciones bellas, en relaciones de amor, y la Trinidad es justamente esta belleza y perfección de relaciones. La cosa que más impresiona cuando se contempla el icono de la Trinidad de Rublev, es el sentido de paz sobrehumana que emana del mismo. Cuando por lo tanto Jesús dice: «¡Shalon!» y «Recibid el Espíritu Santo», él comunica a los discípulos algo de la «paz de Dios que supera toda comprensión» (Flp 4, 7).`,
    source: "RANIERO CANTALAMESA Os doy mi paz · I. Os doy mi paz, p. 12",
    question: "¿Puedes pedir hoy al Espíritu Santo una paz que haga más verdaderas y amorosas tus relaciones?",
    imageQuestion: "¿Qué paz quieres recibir?",
    image: "./assets/images/187-cx-033-la-paz-del-espiritu.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-034-rezar-por-la-paz",
    reading: `¡Con la ayuda de Dios, podemos y debemos siempre renovar la valentía de la paz! Un modo –a menudo el único que permanece– de ser trabajadores de paz es rezar por la paz. Cuando ya no es posible actuar sobre las causas secundarias, podemos siempre, con la oración, «actuar sobre la Causa primera». La Iglesia no se cansa de hacerlo cada día en la Misa con esa ardiente invocación: «Concédenos, Señor, la paz en nuestros días».`,
    source: "RANIERO CANTALAMESA Os doy mi paz · II. Bienaventurados los que trabajan por la paz, pp. 17–18",
    question: "Cuando no puedes resolver una situación, ¿recuerdas que aún puedes pedir al Señor la paz?",
    imageQuestion: "¿Por quién puedes pedir paz?",
    image: "./assets/images/188-cx-034-rezar-por-la-paz.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-035-paz-del-corazon",
    reading: `El alcance de la paz interior o del corazón ha ocupado a lo largo de los siglos a todos los grandes buscadores de Dios. En Oriente, comenzando por los Padres del desierto, esto se ha concretado en el ideal de la hesychia, del hesicasmo o de la tranquilidad.`,
    source: "RANIERO CANTALAMESA Os doy mi paz · III. La paz, fruto del Espíritu Santo, p. 29",
    question: "¿Qué te ayudaría hoy a buscar una paz del corazón que te acerque realmente a Dios?",
    imageQuestion: "¿Qué aquieta tu corazón ante Dios?",
    image: "./assets/images/189-cx-035-paz-del-corazon.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-036-la-vision-de-paz",
    reading: `Expresiones como «Pax», «In pace Christi», «Requiescat in pace» son las más frecuentes en las tumbas de los cristianos y en las oraciones de la Iglesia. La Jerusalén celeste, con alusión a la etimología del nombre, es definitiva «beata pacis visio», beata visión de paz.`,
    source: "RANIERO CANTALAMESA Os doy mi paz · III. La paz, fruto del Espíritu Santo, p. 30",
    question: "¿Puedes mirar hoy hacia la paz definitiva que Cristo prepara para quienes le aman?",
    imageQuestion: "¿Hacia qué paz caminas?",
    image: "./assets/images/190-cx-036-la-vision-de-paz.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-037-jesus-revela-al-padre",
    reading: `El objeto principal de esta revelación personal de Dios, fruto esencial de la oración, es que le conozcamos en cuanto Padre. Por Jesucristo, en la luz del Espíritu, Dios se revela como Padre. El pasaje de Lucas que hemos citado más arriba, en que Jesús exulta de alegría por la revelación escondida a los sabios e inteligentes y manifestada a los pequeños, prosigue con estas palabras: «Todo me lo ha entregado mi Padre, y nadie conoce quién es el Hijo sino el Padre, ni quién es el Padre sino el Hijo, y aquel a quien el Hijo quiera revelarlo». Está bien claro que el objeto de esta revelación es el misterio de Dios como Padre.`,
    source: "Jacques Philippe - La oración, camino de amor · I. Los motivos de la oración · 5. Conocimiento de Dios y conocimiento de sí, p. 17",
    question: "¿Le pides hoy a Jesús que te revele con más verdad el corazón del Padre?",
    imageQuestion: "¿Quieres conocer al Padre?",
    image: "./assets/images/191-cx-037-jesus-revela-al-padre.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-038-hijo-amado-de-dios",
    reading: `Más hondo y más esencial que nuestra limitación humana y el mal que nos afecta, hay como un núcleo intacto, nuestra identidad de hijos de Dios. Él nos ama tal como somos, con un amor absolutamente incondicional, y es ese amor lo que nos constituye en nuestra identidad más profunda.`,
    source: "Jacques Philippe - La oración, camino de amor · I. Los motivos de la oración · 5. Conocimiento de Dios y conocimiento de sí, p. 18",
    question: "¿Puedes recibir hoy que tu identidad más profunda no es tu fracaso, sino ser hijo amado de Dios?",
    imageQuestion: "¿Quién eres ante Dios?",
    image: "./assets/images/192-cx-038-hijo-amado-de-dios.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-039-releer-la-vida-con-dios",
    reading: `La relectura es preciosa para conocer la manera en que Dios se ha manifestado. Se trata de recordar los beneficios recibidos de él. El objetivo es buscar cómo me conduce Dios, cómo se me revela de manera absolutamente única. Esto permite percibir mejor su voluntad, discernir con más claridad a qué me llama y cómo, y así disponer mi vida con él. Se puede releer la propia vida en su totalidad en acontecimientos clave, por ejemplo, con ocasión de un jubileo o en un momento de discernimiento importante.`,
    source: "Jacques_Philippe_El_tesoro_de_la_oración_116_págs_pdf_·_versión · 7. La relectura de vida, p. 38",
    question: "¿Qué acontecimiento reciente puedes mirar hoy con Dios para descubrir cómo te ha acompañado?",
    imageQuestion: "¿Cómo te ha acompañado Dios?",
    image: "./assets/images/193-cx-039-releer-la-vida-con-dios.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-040-amar-con-libertad",
    reading: `Amar es también una pobreza: es no vivir ya para sí mismo sino para el otro. El amor verdadero supone una renuncia a toda forma de propiedad. Amar al otro es acogerle y respetarle sin ninguna tentativa de apoderarse, de manipulación, de posesión.`,
    source: "Jacques_Philippe_El_tesoro_de_la_oración_116_págs_pdf_·_versión · 6. Pobreza y libertad, p. 36",
    question: "¿Puedes amar hoy a alguien respetando su libertad, sin intentar poseerlo ni controlar su respuesta?",
    imageQuestion: "¿Amas con libertad?",
    image: "./assets/images/194-cx-040-amar-con-libertad.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-041-mirar-con-los-ojos-de-jesus",
    reading: `Una simple mirada puede dar la vida, pero puede también dar la muerte. Pidamos la gracia de mirar a cada persona con los mismos ojos de Jesús, para que nuestros ojos sepan comunicar la vida y la esperanza a quienes encontremos.`,
    source: "Si_conocieras_el_don_de_Dios_Aprender_a_recibir_Jacques_Philippe · 2. Vivir bajo la mirada de Dios con Teresa de Lisieux, p. 26",
    question: "¿A quién puedes mirar hoy con la paciencia y la esperanza con que Jesús te mira?",
    imageQuestion: "¿Cómo mirarías con Jesús?",
    image: "./assets/images/195-cx-041-mirar-con-los-ojos-de-jesus.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-042-dejar-el-ruido",
    reading: `Para muchos –concluye el trapense– abandonar esas fuentes de ruido sería la manifestación de una importante renuncia y de una hermosa disciplina: comprenden que necesitan silencio, pero no se atreven a sumergirse en él por miedo a quienes tienen al lado.`,
    source: "La fuerza del silencio - Cardenal Robert Sarah · I. Dios y el silencio, p. 27",
    question: "¿Qué fuente de ruido podrías dejar por un momento para recuperar la libertad de estar ante Dios?",
    imageQuestion: "¿Qué ruido puedes soltar?",
    image: "./assets/images/196-cx-042-dejar-el-ruido.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-043-la-mirada-del-amado",
    reading: `«Sin saber cómo, mi deseo me puso en los carros de Aminadib» (Ct 6, 12), canta la esposa del Cantar de los Cantares. Es el encuentro del amor que va a revelarle quién es ella en verdad, pues se descubre a través de los ojos del amado.`,
    source: "Jacques_Philippe_El_tesoro_de_la_oración_116_págs_pdf_·_versión · 5. Conocimiento de Dios y conocimiento de sí, p. 31",
    question: "¿Puedes dejar que el amor de Dios te muestre hoy quién eres, en vez de definirte solo por tus temores?",
    imageQuestion: "¿Quién eres bajo su mirada?",
    image: "./assets/images/197-cx-043-la-mirada-del-amado.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-044-la-paz-nace-en-el-corazon",
    reading: `El título del mensaje del papa Juan Pablo II para la Jornada mundial de la paz de 1984 decía: «La paz nace de un corazón nuevo» y Francisco de Asís, mandando a sus hermanos por el mundo, les aconsejaba: «La paz que anunciáis con la boca, tenedla sobre todo en vuestros corazones».`,
    source: "RANIERO CANTALAMESA Os doy mi paz · III. La paz, fruto del Espíritu Santo, p. 28",
    question: "¿Qué necesitas entregar al Señor para que la paz que deseas comunicar nazca primero en tu corazón?",
    imageQuestion: "¿Nace la paz en tu corazón?",
    image: "./assets/images/198-cx-044-la-paz-nace-en-el-corazon.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-045-la-mirada-de-misericordia",
    reading: `Dios no llama a los que son dignos, sino a los que quiere, por pura misericordia: «La mirada inefable de vuestro hijo se ha dignado abajarse sobre mi pobre alma. He buscado su rostro adorable y en él quiero esconderme». Ella quiere esconderse, refugiarse en esta gracia de la elección misericordiosa de Dios. Quedarse en este rostro donde se encuentra la fuente de su vocación y de toda gracia.`,
    source: "Si_conocieras_el_don_de_Dios_Aprender_a_recibir_Jacques_Philippe · 2. Vivir bajo la mirada de Dios con Teresa de Lisieux, p. 19",
    question: "¿Puedes presentarte hoy ante la mirada de Jesús sin esconderte, confiando en su compasión?",
    imageQuestion: "¿Te dejas mirar por Jesús?",
    image: "./assets/images/199-cx-045-la-mirada-de-misericordia.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "codex-cx-046-el-cara-a-cara-con-dios",
    reading: `Todos corremos el peligro de dejarnos monopolizar por los asuntos y los afanes mundanos si descuidamos la vida interior, la oración, la meditación, el cara a cara diario con Dios, la ascesis que necesitan todo contemplativo y toda persona que quiera ver al Padre Eterno y vivir con Él. Recordemos lo que escribía san Gregorio Magno en una carta dirigida a Teoctista, hermana del emperador bizantino Flavio Mauricio Tiberio, que aparece recogida en el Registrum Epistolarum.`,
    source: "La fuerza del silencio - Cardenal Robert Sarah · I. Dios y el silencio, p. 24",
    question: "¿Qué afán necesita hoy volver a su lugar para que puedas reservar un momento de cara a cara con Dios?",
    imageQuestion: "¿Qué afán debe volver a su lugar?",
    image: "./assets/images/200-cx-046-el-cara-a-cara-con-dios.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "escriva-01-santificar-lo-ordinario",
    reading: `Allí donde están vuestros hermanos los hombres, allí donde están vuestras aspiraciones, vuestro trabajo, vuestros amores, allí está el sitio de vuestro encuentro cotidiano con Cristo. Es en medio de las cosas más materiales de la tierra donde debemos santificarnos, sirviendo a Dios y a todos los hombres. Sabedlo bien: hay un algo santo, divino, escondido en las situaciones más comunes, que toca a cada uno de vosotros descubrir.`,
    source: "Camino · San Josemaría Escrivá, Punto 359",
    question: "¿Descubres la presencia viva de Dios en el trabajo y en las tareas ordinarias de tu jornada?",
    imageQuestion: "¿Encuentras a Dios en lo ordinario?",
    image: "./assets/images/escriva-01-santificar-lo-ordinario.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Camino · San Josemaría Escrivá, Punto 359.",
  },
  {
    id: "escriva-02-hacer-y-callar",
    reading: `Haz lo que debes y está en lo que haces. Cuántas cosas que parecían indispensables dejan de serlo cuando se pone la mirada en Dios. No busques el aplauso ni el reconocimiento humano; ocúltate para que solo Jesús brille en tus obras. El trabajo ofrecido en silencio con pureza de intención tiene un valor infinito ante los ojos del Padre.`,
    source: "Camino · San Josemaría Escrivá, Punto 639",
    question: "¿Haces tus deberes buscando agradar a Dios en el silencio, sin mendigar la aprobación ajena?",
    imageQuestion: "¿Trabajas para agradar solo a Dios?",
    image: "./assets/images/escriva-02-hacer-y-callar.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Camino · San Josemaría Escrivá, Punto 639.",
  },
  {
    id: "escriva-03-oracion-continua",
    reading: `¿Me preguntas qué es orar? Es un trato de amistad, tratando muchas veces a solas con quien sabemos nos ama. La oración no es cosa de momentos aislados; ha de ser como el latido del corazón, un diálogo ininterrumpido que acompaña tus pasos, tus alegrías y tus fatigas a lo largo de todo el día.`,
    source: "Camino · San Josemaría Escrivá, Punto 91",
    question: "¿Mantienes un diálogo continuo de amor con Jesús a lo largo de tus quehaceres diarios?",
    imageQuestion: "¿Tu oración es diálogo constante con Cristo?",
    image: "./assets/images/escriva-03-oracion-continua.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Camino · San Josemaría Escrivá, Punto 91.",
  },
  {
    id: "escriva-04-las-pequenas-cosas",
    reading: `¿Has visto cómo levantaron aquel edificio de grandeza imponente? Piedra a piedra, ladrillo a ladrillo. No desprecies las cosas pequeñas: un detalle de delicadeza, una sonrisa cuando estás cansado, un minuto de puntualidad. En la fidelidad a lo pequeño se forja la verdadera santidad de los hijos de Dios.`,
    source: "Camino · San Josemaría Escrivá, Punto 814",
    question: "¿Cuidas los pequeños detalles por amor a Dios y servicio a los que te rodean?",
    imageQuestion: "¿Amas a Dios en los pequeños detalles?",
    image: "./assets/images/escriva-04-las-pequenas-cosas.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Camino · San Josemaría Escrivá, Punto 814.",
  },
  {
    id: "escriva-05-filiacion-divina",
    reading: `Hijo mío, descansa en la filiación divina. Dios es un Padre lleno de ternura, de infinito amor. Llámale Padre muchas veces al día, y dile a solas en tu corazón que le quieres, que le amas con locura, y que te sientes orgulloso y fuerte por ser su hijo pequeño.`,
    source: "Camino · San Josemaría Escrivá, Punto 267",
    question: "¿Vives con la seguridad serena y alegre de saberte hijo amadísimo de Dios Padre?",
    imageQuestion: "¿Descansas en los brazos de tu Padre Dios?",
    image: "./assets/images/escriva-05-filiacion-divina.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Camino · San Josemaría Escrivá, Punto 267.",
  },
  {
    id: "escriva-06-abrazar-la-cruz-con-alegria",
    reading: `Cuando aceptes la Cruz con amor, la Cruz dejará de ser una carga pesada y se convertirá en un madero dulce y luminoso. No la lleves a rastras con quejas ni desgana; abrázala fuertemente junto a Cristo, y experimentarás una paz honda que nada ni nadie en el mundo te podrá arrebatar.`,
    source: "Camino · San Josemaría Escrivá, Punto 178",
    question: "¿Abrazas con fe las contradicciones de tu día, uniéndote a Jesús en la Cruz?",
    imageQuestion: "¿Abrazas tu cruz cotidiana con paz?",
    image: "./assets/images/escriva-06-abrazar-la-cruz-con-alegria.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Camino · San Josemaría Escrivá, Punto 178.",
  },
  {
    id: "escriva-07-presencia-de-dios",
    reading: `Acostúmbrate a elevar el corazón a Dios en jaculatorias muchas veces al día. En medio de la calle, en la oficina, al entrar a una habitación: 'Jesús, te amo', 'Madre mía, ayúdame'. Esta presencia habitual de Dios mantiene el alma encendida y limpia del polvo del camino.`,
    source: "Camino · San Josemaría Escrivá, Punto 269",
    question: "¿Recurres a jaculatorias breves durante el día para mantener viva la presencia de Dios?",
    imageQuestion: "¿Vives en continua presencia de Dios?",
    image: "./assets/images/escriva-07-presencia-de-dios.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Camino · San Josemaría Escrivá, Punto 269.",
  },
  {
    id: "escriva-08-caridad-y-comprension",
    reading: `La caridad no consiste tanto en dar como en comprender. Disculpa siempre los defectos de los demás, calla cuando sientas deseos de criticar, y busca excusar con benevolencia las faltas ajenas antes de juzgarlas con severidad. Mira a cada alma como a un hermano redimido por la Sangre de Cristo.`,
    source: "Camino · San Josemaría Escrivá, Punto 463",
    question: "¿Miras los defectos del prójimo con mirada de misericordia y perdón sincero?",
    imageQuestion: "¿Comprendes y perdonas a tu prójimo?",
    image: "./assets/images/escriva-08-caridad-y-comprension.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Camino · San Josemaría Escrivá, Punto 463.",
  },
  {
    id: "escriva-09-comenzar-y-recomenzar",
    reading: `La santidad no consiste en no caer nunca, sino en levantarse siempre sin desaliento. Comenzar y recomenzar: esta es la vida interior del alma humilde. Cuando experimentes tu flaqueza, corre de nuevo a los brazos de Jesús en el sacramento del perdón y reanuda el camino con renovada esperanza.`,
    source: "Camino · San Josemaría Escrivá, Punto 984",
    question: "Tras una debilidad o tropiezo, ¿acudes con humildad a Dios para recomenzar?",
    imageQuestion: "¿Te levantas con humildad para recomenzar?",
    image: "./assets/images/escriva-09-comenzar-y-recomenzar.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Camino · San Josemaría Escrivá, Punto 984.",
  },
  {
    id: "escriva-10-santa-maria-esperanza",
    reading: `A Jesús siempre se va y se 'vuelve' por María. Acude a la Santísima Virgen con el cariño y la sencillez de un niño pequeño. Ella arreglará tus torpezas, presentará tus obras a su Hijo y te alcanzará la gracia de ser fiel hasta el final de tu jornada terrena.`,
    source: "Camino · San Josemaría Escrivá, Punto 495",
    question: "¿Acudes a la Virgen María con confianza infantil para llegar al Corazón de Jesús?",
    imageQuestion: "¿Vas a Jesús de la mano de María?",
    image: "./assets/images/escriva-10-santa-maria-esperanza.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Camino · San Josemaría Escrivá, Punto 495.",
  },
  {
    id: "faustina-01-confianza-en-la-misericordia",
    reading: `«Hija mía, escribe que cuanto mayor es la miseria de un alma, tanto mayor es su derecho a mi misericordia. Las almas que confían en mi bondad no quedarán defraudadas; los mayores pecadores, si confían en mí, encontrarán en mi Corazón un refugio inexpugnable y una fuente inagotable de perdón y paz».`,
    source: "Diario de Santa Faustina · Cuaderno I, n. 148",
    question: "¿Confías plenamente en el perdón y la misericordia infinita de Jesús sobre tus miserias?",
    imageQuestion: "¿Confías en la infinita misericordia de Jesús?",
    image: "./assets/images/faustina-01-confianza-en-la-misericordia.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Diario de Santa Faustina · Cuaderno I, n. 148.",
  },
  {
    id: "faustina-02-el-vaso-de-la-confianza",
    reading: `«Las gracias de mi misericordia se toman con un solo recipiente, y este es la confianza. Cuanto más confía un alma, tanto más recibe. Me complacen grandemente las almas que confían sin límites, porque a tales almas me veo obligado a colmar con todos los tesoros de mis gracias divinas».`,
    source: "Diario de Santa Faustina · Cuaderno I, n. 327",
    question: "¿Te acercas a Dios con un corazón abierto y lleno de confianza para recibir su gracia?",
    imageQuestion: "¿Te acercas a Dios con total confianza?",
    image: "./assets/images/faustina-02-el-vaso-de-la-confianza.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Diario de Santa Faustina · Cuaderno I, n. 327.",
  },
  {
    id: "faustina-03-misericordia-hacia-los-hermanos",
    reading: `«Debes mostrar misericordia al prójimo siempre y en todas partes. Te exijo tres formas de ejercer la misericordia: la primera, la obra; la segunda, la palabra; la tercera, la oración. Si un alma no practica la misericordia de alguna de estas maneras, no alcanzará mi misericordia en el día del juicio».`,
    source: "Diario de Santa Faustina · Cuaderno II, n. 742",
    question: "¿De qué manera concreta puedes ejercer hoy la misericordia con obras, palabras u oración?",
    imageQuestion: "¿Practicas la misericordia con tu prójimo?",
    image: "./assets/images/faustina-03-misericordia-hacia-los-hermanos.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Diario de Santa Faustina · Cuaderno II, n. 742.",
  },
  {
    id: "faustina-04-paz-en-la-tribulacion",
    reading: `Oh Jesús mío, cuando el sufrimiento oprime mi corazón y la prueba se hace densa, sé que no me abandonas. En la cruz escondes tus más hermosos dones de gracia. Enséñame a callar ante las humillaciones y a descansar con serenidad sobre tu pecho herido de amor por mí.`,
    source: "Diario de Santa Faustina · Cuaderno III, n. 1074",
    question: "¿Encuentras refugio y consuelo en el Corazón de Jesús cuando llega el dolor?",
    imageQuestion: "¿Descansas en el Corazón herido de Jesús?",
    image: "./assets/images/faustina-04-paz-en-la-tribulacion.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Diario de Santa Faustina · Cuaderno III, n. 1074.",
  },
  {
    id: "faustina-05-la-oracion-en-el-silencio",
    reading: `El silencio es una espada en la lucha espiritual. Un alma habladora nunca alcanzará la santidad. En el silencio el alma escucha la voz dulce de Dios, que habla suavemente en lo hondo del corazón. Quien guarda su lengua protege la paz interior y la presencia del Espíritu Santo.`,
    source: "Diario de Santa Faustina · Cuaderno I, n. 477",
    question: "¿Cultivas momentos de silencio interior para escuchar la voz de Dios en tu corazón?",
    imageQuestion: "¿Guardas silencio para escuchar a Dios?",
    image: "./assets/images/faustina-05-la-oracion-en-el-silencio.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Diario de Santa Faustina · Cuaderno I, n. 477.",
  },
  {
    id: "faustina-06-eucaristia-fuente-de-vida",
    reading: `Toda mi fuerza brota de la Eucaristía. En este Pan de Vida encuentro luz para mis pasos, fortaleza en la debilidad y consuelo en mis noches oscuras. Jesús Hostia, Tú eres mi cielo en la tierra; en Ti mi corazón halla su único y verdadero reposo.`,
    source: "Diario de Santa Faustina · Cuaderno IV, n. 1392",
    question: "¿Es la Eucaristía el centro y la fuente de tu fortaleza en los momentos de debilidad?",
    imageQuestion: "¿Encuentras tu fortaleza en Jesús Eucaristía?",
    image: "./assets/images/faustina-06-eucaristia-fuente-de-vida.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Diario de Santa Faustina · Cuaderno IV, n. 1392.",
  },
  {
    id: "faustina-07-abandono-en-la-voluntad-divina",
    reading: `«Jesús mío, haz de mí lo que te agrade. Sé que tu Santa Voluntad es el amor y la misericordia misma. No temo nada, ni la oscuridad ni la muerte, porque estoy resguardada en tus manos paternales y nada ocurre sin que Tú lo permitas para mi bien eterno».`,
    source: "Diario de Santa Faustina · Cuaderno II, n. 650",
    question: "¿Te abandonas con serenidad en la Santa Voluntad de Dios sabiendo que todo es para tu bien?",
    imageQuestion: "¿Te abandonas en la Santa Voluntad de Dios?",
    image: "./assets/images/faustina-07-abandono-en-la-voluntad-divina.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Diario de Santa Faustina · Cuaderno II, n. 650.",
  },
  {
    id: "faustina-08-humildad-que-atrae-la-gracia",
    reading: `«El alma humilde no confía en sí misma, sino que pone toda su confianza en Dios. El orgullo mantiene al alma en la oscuridad, mientras que la humildad atrae torrentes de luz y misericordia celestial. Dios nunca rechaza al corazón contrito y humillado».`,
    source: "Diario de Santa Faustina · Cuaderno V, n. 1563",
    question: "¿Reconoces tu pequeñez ante Dios para que su gracia habite en tu corazón?",
    imageQuestion: "¿Reconoces tu pequeñez ante Dios?",
    image: "./assets/images/faustina-08-humildad-que-atrae-la-gracia.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Diario de Santa Faustina · Cuaderno V, n. 1563.",
  },
  {
    id: "faustina-09-la-mirada-de-jesus",
    reading: `«Mi mirada en esta imagen es igual a la mirada que tuve desde la Cruz». Jesús me hizo comprender que su mirar no es de reproche ni de castigo, sino de ternura infinita, buscando rescatar con amor a toda alma que levante los ojos hacia Él.`,
    source: "Diario de Santa Faustina · Cuaderno I, n. 326",
    question: "¿Te dejas mirar por Jesús con su mirada de compasión y ternura desde la Cruz?",
    imageQuestion: "¿Te dejas mirar con amor por Jesús?",
    image: "./assets/images/faustina-09-la-mirada-de-jesus.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Diario de Santa Faustina · Cuaderno I, n. 326.",
  },
  {
    id: "faustina-10-la-esperanza-eterna",
    reading: `Oh Jesús, Rey de Misericordia, mi vida es un suspiro continuo hacia Ti. Aunque el mundo pase y las cosas terrenas se desvanezcan, tu amor permanece para siempre. En la hora de mi partida, sé Tú mi defensor y mi recompensa eterna.`,
    source: "Diario de Santa Faustina · Cuaderno VI, n. 1784",
    question: "¿Vives con el corazón puesto en la promesa eterna de contemplar a Dios cara a cara?",
    imageQuestion: "¿Pones tu esperanza en la vida eterna?",
    image: "./assets/images/faustina-10-la-esperanza-eterna.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Diario de Santa Faustina · Cuaderno VI, n. 1784.",
  },
  {
    id: "historia-01-las-florcitas-del-senor",
    reading: `Jesús se complace en mostrarme el libro de la naturaleza. Comprendí que todas las flores que ha creado son hermosas: el esplendor de la rosa y la blancura del lirio no le quitan su perfume a la pequeña violeta ni su encanto sencillo a la margarita. Si todas las florecillas quisieran ser rosas, la naturaleza perdería su gala primaveral. Así sucede en el mundo de las almas.`,
    source: "Historia de un alma · Manuscrito A, Cap. I",
    question: "¿Aceptas con gozo el lugar y la vocación sencilla que Dios te ha concedido?",
    imageQuestion: "¿Aceptas con gozo tu vocación en Dios?",
    image: "./assets/images/historia-01-las-florcitas-del-senor.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Historia de un alma · Manuscrito A, Cap. I.",
  },
  {
    id: "historia-02-el-ascensor-divino",
    reading: `Vivimos en un siglo de inventos. Ya no vale la pena subir los peldaños de una escalera. Yo quise buscar también un ascensor para elevarme hasta Jesús, porque soy demasiado pequeña para subir la ruda escalera de la perfección. El ascensor que ha de elevarme hasta el cielo son tus brazos, ¡oh Jesús mío! Para eso no necesito crecer, sino al contrario, permanecer pequeña.`,
    source: "Historia de un alma · Manuscrito C, Cap. X",
    question: "¿Dejas que los brazos de Jesús te sostengan y eleven en tu pequeñez?",
    imageQuestion: "¿Confías en que los brazos de Jesús te elevan?",
    image: "./assets/images/historia-02-el-ascensor-divino.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Historia de un alma · Manuscrito C, Cap. X.",
  },
  {
    id: "historia-03-mi-vocacion-es-el-amor",
    reading: `Comprendí que la Iglesia tenía un Corazón, y que este Corazón estaba ardiendo de Amor. Comprendí que sólo el Amor hacía obrar a los miembros de la Iglesia; que si el Amor llegara a apagarse, los apóstoles ya no anunciarían el Evangelio y los mártires se negarían a derramar su sangre. ¡Por fin he encontrado mi vocación! ¡En el corazón de la Iglesia, mi Madre, yo seré el Amor!`,
    source: "Historia de un alma · Manuscrito B, Cap. IX",
    question: "¿Buscas ser testimonio vivo del amor de Cristo en el seno de tu familia e Iglesia?",
    imageQuestion: "¿Vives el amor como tu verdadera vocación?",
    image: "./assets/images/historia-03-mi-vocacion-es-el-amor.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Historia de un alma · Manuscrito B, Cap. IX.",
  },
  {
    id: "historia-04-el-pajarito-de-dios",
    reading: `Me considero como un débil pajarito cubierto sólo de un ligero plumón. Yo no soy un águila, sólo tengo de ella los ojos y el corazón. A pesar de mi pequeñez extrema, me atrevo a mirar fijamente al Sol divino, al Sol del Amor, y mi corazón siente todas las audacias del águila. Cuando las nubes ocultan mi Sol, yo no me desaliento: sigo fija en Él.`,
    source: "Historia de un alma · Manuscrito B, Cap. IX",
    question: "¿Mantienes tu mirada fija en Dios aun cuando las nubes de la prueba oscurezcan tu día?",
    imageQuestion: "¿Miras a Dios con confianza en medio de la prueba?",
    image: "./assets/images/historia-04-el-pajarito-de-dios.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Historia de un alma · Manuscrito B, Cap. IX.",
  },
  {
    id: "historia-05-la-caridad-oculta",
    reading: `La verdadera caridad consiste en soportar todos los defectos del prójimo, en no asombrarse de sus debilidades y en edificarse de sus menores virtudes. Pero sobre todo he aprendido que la caridad no debe quedarse encerrada en el fondo del corazón: Jesús dijo que la lámpara no se enciende para ponerla debajo del celemín, sino sobre el candelero.`,
    source: "Historia de un alma · Manuscrito C, Cap. X",
    question: "¿Soportas con paciencia y delicadeza los defectos de quienes conviven contigo?",
    imageQuestion: "¿Vives la caridad paciente con los demás?",
    image: "./assets/images/historia-05-la-caridad-oculta.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Historia de un alma · Manuscrito C, Cap. X.",
  },
  {
    id: "historia-06-manos-vacias-ante-dios",
    reading: `Al atardecer de esta vida, compareceré delante de Ti con las manos vacías, pues no te pido, Señor, que lleves cuenta de mis obras. Todas nuestras justicias tienen manchas ante tus ojos. Por eso quiero revestirme de tu propia Justicia y recibir de tu Amor la posesión eterna de Ti mismo. No quiero otro trono ni otra corona que Tú, ¡Amado mío!`,
    source: "Historia de un alma · Ofrecimiento al Amor Misericordioso",
    question: "¿Pones tu seguridad en la misericordia de Dios y no en tus propios méritos?",
    imageQuestion: "¿Esperas todo del Amor de Dios?",
    image: "./assets/images/historia-06-manos-vacias-ante-dios.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Historia de un alma · Ofrecimiento al Amor Misericordioso.",
  },
  {
    id: "historia-07-la-noche-de-la-fe",
    reading: `Jesús permitió que mi alma fuese invadida por las más densas tinieblas. El pensamiento del cielo, tan dulce para mí, se convirtió en motivo de combate. Pero mientras dura la prueba, canto lo que quiero creer. Hago más actos de fe desde hace un año que en toda mi vida pasada. Cada combate es una oportunidad de probar mi amor.`,
    source: "Historia de un alma · Manuscrito C, Cap. IX",
    question: "¿Renuevas tu acto de fe con serenidad cuando experimentas oscuridad espiritual?",
    imageQuestion: "¿Cantas tu fe en medio de la oscuridad?",
    image: "./assets/images/historia-07-la-noche-de-la-fe.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Historia de un alma · Manuscrito C, Cap. IX.",
  },
  {
    id: "historia-08-el-caminito-de-la-infancia",
    reading: `El caminito es el camino de la infancia espiritual, el camino de la confianza y del abandono total. Ser pequeño significa reconocer la propia nada, esperarlo todo del buen Dios como un niño pequeño lo espera todo de su padre; no inquietarse por nada, no buscar labrarse una fortuna terrena ni atribuirse las virtudes recibidas.`,
    source: "Historia de un alma · Manuscrito C, Cap. XI",
    question: "¿Vives con la sencillez y el abandono de un niño en los brazos de su Padre celestial?",
    imageQuestion: "¿Vives la infancia espiritual en Dios?",
    image: "./assets/images/historia-08-el-caminito-de-la-infancia.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Historia de un alma · Manuscrito C, Cap. XI.",
  },
  {
    id: "historia-09-la-oracion-mirada-al-cielo",
    reading: `Para mí, la oración es un impulso del corazón, una simple mirada dirigida al cielo, un grito de agradecimiento y de amor, tanto en medio de la prueba como en el seno del gozo. Es algo grande, sobrenatural, que me dilata el alma y me une a Jesús. No necesito fórmulas complicadas: como una niña le digo sencillamente al buen Dios lo que quiero.`,
    source: "Historia de un alma · Manuscrito C, Cap. XI",
    question: "¿Es tu oración un trato filial y espontáneo con Jesús en todo momento?",
    imageQuestion: "¿Miras al cielo con agradecimiento y amor?",
    image: "./assets/images/historia-09-la-oracion-mirada-al-cielo.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Historia de un alma · Manuscrito C, Cap. XI.",
  },
  {
    id: "historia-10-lluvia-de-rosas",
    reading: `Siento que mi misión va a comenzar: mi misión de hacer amar a Dios como yo le amo, de enseñar a las almas mi caminito. Pasaré mi cielo haciendo el bien sobre la tierra. No podré descansar hasta el fin del mundo, mientras haya almas que salvar. Cuando la prueba sea dura, confiad: derramaré una lluvia de rosas sobre vosotros.`,
    source: "Historia de un alma · Últimas conversaciones",
    question: "¿Confías en la intercesión de los santos y en el amor protector de Dios sobre tu vida?",
    imageQuestion: "¿Confías en el auxilio maternal del cielo?",
    image: "./assets/images/historia-10-lluvia-de-rosas.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Historia de un alma · Últimas conversaciones.",
  },
  {
    id: "caussade-01-sacramento-momento-presente",
    reading: `El momento presente es siempre como un embajador que declara la orden de Dios. El corazón debe responder siempre con un 'fíat' sumiso y alegre. Cada instante nos trae a Dios mismo encubierto bajo las apariencias más sencillas: una ocupación cotidiana, una conversación, un contratiempo. Quien sabe reconocer a Dios en el deber del momento presente vive en continua santidad.`,
    source: "El abandono en la Divina Providencia · Libro I, Cap. II",
    question: "¿Acoges lo que cada instante te presenta como una ocasión enviada por Dios para amarle?",
    imageQuestion: "¿Vives el sacramento del momento presente?",
    image: "./assets/images/caussade-01-sacramento-momento-presente.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: El abandono en la Divina Providencia · Libro I, Cap. II.",
  },
  {
    id: "caussade-02-la-voluntad-de-dios-nuestro-alimento",
    reading: `La santidad consiste en querer lo que Dios quiere y en recibir con paz lo que su mano dispone. No se trata de multiplicar obras extraordinarias, sino de realizar con fidelidad y amor lo que el deber de estado nos exige. La voluntad de Dios es el verdadero pan del alma; en ella encontramos nuestra paz y nuestra plenitud.`,
    source: "El abandono en la Divina Providencia · Libro I, Cap. I",
    question: "¿Buscas conformar tus deseos a lo que Dios dispone para ti cada día?",
    imageQuestion: "¿Te alimentas de la Santa Voluntad de Dios?",
    image: "./assets/images/caussade-02-la-voluntad-de-dios-nuestro-alimento.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: El abandono en la Divina Providencia · Libro I, Cap. I.",
  },
  {
    id: "caussade-03-paz-en-la-oscuridad",
    reading: `Dios conduce a las almas por caminos que ellas no comprenden. Cuando todo parece tiniebla y fracaso a los ojos del mundo, la Providencia está tejiendo en silencio las más admirables victorias de la gracia. No intentes ver el camino por adelantado; camina apoyado en la fe pura, seguro de que la mano de Dios nunca suelta a quien confía en Él.`,
    source: "El abandono en la Divina Providencia · Libro II, Cap. I",
    question: "¿Mantienes la calma cuando los acontecimientos no se desarrollan como esperabas?",
    imageQuestion: "¿Caminas en fe cuando no comprendes el camino?",
    image: "./assets/images/caussade-03-paz-en-la-oscuridad.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: El abandono en la Divina Providencia · Libro II, Cap. I.",
  },
  {
    id: "caussade-04-desasimiento-propia-prudencia",
    reading: `Nuestra gran miseria consiste en querer gobernarnos por nuestra propia prudencia. Calculamos, nos angustiamos por el mañana y pretendemos controlar lo que escapa a nuestras fuerzas. El alma que se abandona a Dios renuncia a sus vanos temores y deja el timón de su vida en manos del Capitán divino.`,
    source: "El abandono en la Divina Providencia · Libro I, Cap. III",
    question: "¿Entregas a Dios la ansiedad por el futuro, renunciando a querer controlarlo todo?",
    imageQuestion: "¿Dejas el timón de tu vida en manos de Dios?",
    image: "./assets/images/caussade-04-desasimiento-propia-prudencia.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: El abandono en la Divina Providencia · Libro I, Cap. III.",
  },
  {
    id: "caussade-05-la-accion-divina-oculta",
    reading: `La acción divina llena todo el universo. No hay creatura, suceso o circunstancia que no sea instrumento de su amor para purificarnos y santificarnos. Si tuviéramos ojos de fe, veríamos a Dios actuando continuamente en torno a nosotros, invitándonos a unirnos a Él en cada respiración y en cada latido.`,
    source: "El abandono en la Divina Providencia · Libro I, Cap. II",
    question: "¿Miras los acontecimientos diarios con ojos de fe para descubrir la mano amorosa de Dios?",
    imageQuestion: "¿Descubres la acción divina en tu alrededor?",
    image: "./assets/images/caussade-05-la-accion-divina-oculta.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: El abandono en la Divina Providencia · Libro I, Cap. II.",
  },
  {
    id: "caussade-06-fidelidad-en-lo-ordinario",
    reading: `¡Oh almas, que buscáis senderos elevados y extraordinarios para uniros a Dios! Sabed que el camino real es sencillo y está al alcance de todos: consiste en cumplir con amor lo que la Providencia os pide en este mismo instante. En las acciones más sencillas se esconde el tesoro de la santidad divina.`,
    source: "El abandono en la Divina Providencia · Libro I, Cap. I",
    question: "¿Pones todo tu amor en las tareas cotidianas que Dios te encomienda hoy?",
    imageQuestion: "¿Santificas tus actos más sencillos por amor?",
    image: "./assets/images/caussade-06-fidelidad-en-lo-ordinario.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: El abandono en la Divina Providencia · Libro I, Cap. I.",
  },
  {
    id: "caussade-07-el-orden-de-la-providencia",
    reading: `Todo lo que sucede en el mundo o es ordenado o es permitido por Dios para la salvación de los elegidos. Cuando comprendemos esta verdad, cesan las quejas, se acallan las murmuraciones y el alma entra en un reposo inquebrantable. Nada turba al que ha hecho de la voluntad divina su único refugio.`,
    source: "El abandono en la Divina Providencia · Libro II, Cap. II",
    question: "¿Aceptas con paciencia las contrariedades sabiendo que Dios las permite para tu bien?",
    imageQuestion: "¿Descansas en la sabia Providencia divina?",
    image: "./assets/images/caussade-07-el-orden-de-la-providencia.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: El abandono en la Divina Providencia · Libro II, Cap. II.",
  },
  {
    id: "caussade-08-la-fe-en-medio-de-la-prueba",
    reading: `La fe viva no se guía por los sentidos ni por los consuelos sensibles. Cree firmemente que Dios está más cerca cuando menos se le siente. En medio de la tempestad, Jesús duerme en la barca para probar nuestra confianza; basta una sola palabra suya para que renazca la más perfecta bonanza.`,
    source: "El abandono en la Divina Providencia · Libro II, Cap. III",
    question: "¿Confías en la cercanía del Señor incluso cuando sientes aridez o soledad interior?",
    imageQuestion: "¿Crees en Dios aun cuando no sientes su consuelo?",
    image: "./assets/images/caussade-08-la-fe-en-medio-de-la-prueba.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: El abandono en la Divina Providencia · Libro II, Cap. III.",
  },
  {
    id: "caussade-09-rendicion-sin-reservas",
    reading: `El abandono verdadero no pone condiciones ni reservas. No le dice a Dios: 'Acepto esto, pero no aquello'. Se entrega ciegamente en sus manos amorosas, como el barro en manos del alfarero, dispuesto a ser moldeado según el designio del Padre.`,
    source: "El abandono en la Divina Providencia · Libro I, Cap. IV",
    question: "¿Estás dispuesto a entregarte a Dios sin poner condiciones ni límites a su gracia?",
    imageQuestion: "¿Te entregas a Dios sin condiciones?",
    image: "./assets/images/caussade-09-rendicion-sin-reservas.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: El abandono en la Divina Providencia · Libro I, Cap. IV.",
  },
  {
    id: "caussade-10-paz-que-el-mundo-no-da",
    reading: `El fruto supremo del abandono es una paz inalterable. El alma que mora en la voluntad de Dios se asemeja a una roca en medio del océano: las olas rompen con furia contra ella, pero permanece firme e inconmovible, sostenida por la fuerza del Omnipotente.`,
    source: "El abandono en la Divina Providencia · Libro II, Cap. IV",
    question: "¿Buscas la paz profunda que solo nace de confiar enteramente en Dios?",
    imageQuestion: "¿Permanece tu alma firme y en paz en Dios?",
    image: "./assets/images/caussade-10-paz-que-el-mundo-no-da.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: El abandono en la Divina Providencia · Libro II, Cap. IV.",
  },
  {
    id: "montfort-01-a-jesus-por-maria",
    reading: `Por medio de la Santísima Virgen vino Jesucristo al mundo, y por medio de Ella debe también reinar en el mundo. María fue el camino escogido por el Padre para darnos a su Hijo único; del mismo modo, Ella es el camino más fácil, seguro, corto y perfecto para llegar a la perfecta unión con Jesús.`,
    source: "Tratado de la Verdadera Devoción · San Luis de Montfort, n. 1",
    question: "¿Acudes filialmente a María como el camino seguro para unirte íntimamente a Jesús?",
    imageQuestion: "¿Caminas hacia Jesús de la mano de María?",
    image: "./assets/images/montfort-01-a-jesus-por-maria.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Tratado de la Verdadera Devoción · San Luis de Montfort, n. 1.",
  },
  {
    id: "montfort-02-la-obra-maestra-de-dios",
    reading: `Dios ha reunido todas las aguas y las ha llamado mar; ha reunido todas sus gracias y las ha llamado María. El Todopoderoso ha hecho en Ella maravillas de santidad y pureza, haciéndola tesoro y dispensadora de los dones celestiales para todos sus hijos en la tierra.`,
    source: "Tratado de la Verdadera Devoción · San Luis de Montfort, n. 5",
    question: "¿Reconoces la grandeza de las gracias que Dios derrama a través del Corazón de María?",
    imageQuestion: "¿Admiras las maravillas de Dios en María?",
    image: "./assets/images/montfort-02-la-obra-maestra-de-dios.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Tratado de la Verdadera Devoción · San Luis de Montfort, n. 5.",
  },
  {
    id: "montfort-03-consagracion-total-de-amor",
    reading: `Esta devoción consiste en entregarse enteramente a la Santísima Virgen, para ser enteramente de Jesucristo por medio de Ella. Le entregamos nuestro cuerpo con todos sus sentidos, nuestra alma con todas sus potencias, nuestros bienes exteriores y el valor de todas nuestras buenas obras pasadas, presentes y futuras.`,
    source: "Tratado de la Verdadera Devoción · San Luis de Montfort, n. 121",
    question: "¿Renuevas tu entrega filial entregándole a la Virgen tus obras, pensamientos y afectos?",
    imageQuestion: "¿Te entregas por entero a María para ser de Cristo?",
    image: "./assets/images/montfort-03-consagracion-total-de-amor.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Tratado de la Verdadera Devoción · San Luis de Montfort, n. 121.",
  },
  {
    id: "montfort-04-el-molde-de-dios",
    reading: `María es el gran molde de Dios, fabricado por el Espíritu Santo para formar al Hombre-Dios por la Encarnación, y para formar a los hombres en dioses por la gracia. Quien se arroja en este molde maternal y se deja fundir en él, adquiere pronto los rasgos, virtudes y sentimientos de Jesucristo.`,
    source: "Tratado de la Verdadera Devoción · San Luis de Montfort, n. 219",
    question: "¿Permites que la Virgen María moldee tu corazón a semejanza del Corazón de Jesús?",
    imageQuestion: "¿Te dejas moldear por las virtudes de María?",
    image: "./assets/images/montfort-04-el-molde-de-dios.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Tratado de la Verdadera Devoción · San Luis de Montfort, n. 219.",
  },
  {
    id: "montfort-05-camino-facil-y-seguro",
    reading: `Es un camino fácil, porque donde está María, la gracia abunda y las cruces se vuelven suaves y llevaderas. Es un camino seguro, porque la Virgen Santísima aplasta la cabeza de la serpiente infernal y libra a sus siervos de las ilusiones y caídas del enemigo.`,
    source: "Tratado de la Verdadera Devoción · San Luis de Montfort, n. 152",
    question: "¿Buscas el auxilio de la Virgen en las tentaciones y momentos de combate espiritual?",
    imageQuestion: "¿Te refugias en María en la tentación?",
    image: "./assets/images/montfort-05-camino-facil-y-seguro.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Tratado de la Verdadera Devoción · San Luis de Montfort, n. 152.",
  },
  {
    id: "montfort-06-obrar-con-maria",
    reading: `Hay que hacer todas las cosas con María: es decir, tomar a la Virgen Santísima por modelo acabado de todo lo que se ha de hacer. Antes de emprender cualquier acción, renunciemos a nuestro propio espíritu y miremos cómo María la haría para la mayor gloria de Dios.`,
    source: "Tratado de la Verdadera Devoción · San Luis de Montfort, n. 257",
    question: "¿Te preguntas cómo actuaría María con amor y humildad antes de tomar decisiones?",
    imageQuestion: "¿Miras a María como modelo de tus obras?",
    image: "./assets/images/montfort-06-obrar-con-maria.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Tratado de la Verdadera Devoción · San Luis de Montfort, n. 257.",
  },
  {
    id: "montfort-07-obrar-en-maria",
    reading: `Hay que hacer todas las cosas en María: acostumbrarse a recogerse dentro de su Corazón inmaculado, como en un santuario hermosísimo donde el alma habla a solas con Jesús, protegida de todo el ruido y la vanidad del mundo exterior.`,
    source: "Tratado de la Verdadera Devoción · San Luis de Montfort, n. 261",
    question: "¿Buscas refugio en el Corazón Inmaculado de María para orar y estar a solas con Jesús?",
    imageQuestion: "¿Oras en el santuario del Corazón de María?",
    image: "./assets/images/montfort-07-obrar-en-maria.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Tratado de la Verdadera Devoción · San Luis de Montfort, n. 261.",
  },
  {
    id: "montfort-08-el-secreto-de-santidad",
    reading: `He aquí un secreto que me ha enseñado el Altísimo: quien encuentra a María, encuentra la vida, es decir, encuentra a Jesucristo, que es el Camino, la Verdad y la Vida. Nadie puede poseer a María si no es por una gracia especial de amor y fidelidad.`,
    source: "Tratado de la Verdadera Devoción · San Luis de Montfort, n. 119",
    question: "¿Valoras el don de tener a María como verdadera Madre espiritual en tu vida cotidiana?",
    imageQuestion: "¿Acoges a María como tu Madre espiritual?",
    image: "./assets/images/montfort-08-el-secreto-de-santidad.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Tratado de la Verdadera Devoción · San Luis de Montfort, n. 119.",
  },
  {
    id: "montfort-09-la-cadena-de-amor",
    reading: `Dichoso el que lleva las cadenas de amor de Jesús y de María. Esas cadenas no son de hierro ni de servidumbre, sino de caridad y libertad verdadera. Rompen los lazos del pecado y unen el alma indisolublemente al Rey de la Gloria.`,
    source: "Tratado de la Verdadera Devoción · San Luis de Montfort, n. 236",
    question: "¿Sientes la libertad verdadera que da entregarse enteramente por amor a Cristo?",
    imageQuestion: "¿Vives con gozo los lazos del amor de Dios?",
    image: "./assets/images/montfort-09-la-cadena-de-amor.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Tratado de la Verdadera Devoción · San Luis de Montfort, n. 236.",
  },
  {
    id: "montfort-10-victoria-final-del-corazon-de-maria",
    reading: `Al final de los tiempos, María brillará con mayor fulgor en misericordia, poder y gracia: en misericordia, para acoger y perdonar a los pecadores; en poder, contra los enemigos de Dios; y en gracia, para sostener a los apóstoles valientes de Jesucristo.`,
    source: "Tratado de la Verdadera Devoción · San Luis de Montfort, n. 59",
    question: "¿Te pones al servicio de Dios bajo el manto protector y victorioso de la Santísima Virgen?",
    imageQuestion: "¿Confías en el triunfo del amor de María?",
    image: "./assets/images/montfort-10-victoria-final-del-corazon-de-maria.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Tratado de la Verdadera Devoción · San Luis de Montfort, n. 59.",
  },
  {
    id: "hildegarda-01-humildad-contra-soberbia",
    reading: `Escuché la voz de la Humildad que decía: 'Yo soy la columna que sostiene la creación. Habito en las alturas con el Altísimo y desciendo a los valles con los pequeños. La soberbia construye torres de humo que el viento desvanece; yo planto mis raíces en la roca de Dios, y nadie podrá derribarme'.`,
    source: "Vicios y Virtudes · Santa Hildegarda de Bingen, Visión I",
    question: "¿Cimentas tu vida en la verdad humilde de Dios o en la vana estima de ti mismo?",
    imageQuestion: "¿Cimentas tu vida en la santa humildad?",
    image: "./assets/images/hildegarda-01-humildad-contra-soberbia.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Vicios y Virtudes · Santa Hildegarda de Bingen, Visión I.",
  },
  {
    id: "hildegarda-02-paciencia-frente-a-la-ira",
    reading: `La Paciencia se presentó vestida con un manto sereno y luminoso. 'Yo miro con dulzura las tempestades y no me turbo por las injurias. La ira quema el alma como fuego devorador; yo vierto el bálsamo de la paz y apago las llamas de la discordia con el rocío del Espíritu'.`,
    source: "Vicios y Virtudes · Santa Hildegarda de Bingen, Visión II",
    question: "¿Respondes con serenidad y paciencia ante las ofensas y los momentos de tensión?",
    imageQuestion: "¿Apagas la ira con el bálsamo de la paciencia?",
    image: "./assets/images/hildegarda-02-paciencia-frente-a-la-ira.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Vicios y Virtudes · Santa Hildegarda de Bingen, Visión II.",
  },
  {
    id: "hildegarda-03-misericordia-contra-dureza",
    reading: `La Misericordia extendió sus manos maternales sobre los heridos del camino. 'Yo soy el reflejo de las entrañas de Dios. La dureza de corazón cierra las puertas de la gracia; yo abro las fuentes del perdón y sano las llagas de los que sufren con el aceite del consuelo divino'.`,
    source: "Vicios y Virtudes · Santa Hildegarda de Bingen, Visión III",
    question: "¿Tienes un corazón compasivo y abierto al dolor de quienes sufren a tu alrededor?",
    imageQuestion: "¿Abres tu corazón con entrañas de misericordia?",
    image: "./assets/images/hildegarda-03-misericordia-contra-dureza.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Vicios y Virtudes · Santa Hildegarda de Bingen, Visión III.",
  },
  {
    id: "hildegarda-04-amor-celestial-frente-al-odio",
    reading: `El Amor de Dios resplandecía como el sol en el mediodía. 'Yo uno lo que estaba separado y enciendo la caridad en los corazones gélidos. El odio engendra tinieblas y muerte; yo soy la llama viva que brota del Trono de Dios y renueva toda la faz de la tierra'.`,
    source: "Vicios y Virtudes · Santa Hildegarda de Bingen, Visión IV",
    question: "¿Dejas que el amor de Dios purifique tu corazón de todo rencor o resentimiento?",
    imageQuestion: "¿Enciendes la llama del amor divino en tu alma?",
    image: "./assets/images/hildegarda-04-amor-celestial-frente-al-odio.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Vicios y Virtudes · Santa Hildegarda de Bingen, Visión IV.",
  },
  {
    id: "hildegarda-05-esperanza-vence-desesperacion",
    reading: `La Esperanza se alzó con ojos fijos en la eternidad. 'Aunque el abismo parezca profundo y el dolor insoportable, sé en quién he puesto mi confianza. La desesperación hunde al alma en el fango; yo le doy alas de águila para volar hacia las moradas eternas del Padre'.`,
    source: "Vicios y Virtudes · Santa Hildegarda de Bingen, Visión V",
    question: "¿Mantienes viva la esperanza en Dios cuando todo parece adverso a tu alrededor?",
    imageQuestion: "¿Vuelas hacia Dios con las alas de la esperanza?",
    image: "./assets/images/hildegarda-05-esperanza-vence-desesperacion.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Vicios y Virtudes · Santa Hildegarda de Bingen, Visión V.",
  },
  {
    id: "hildegarda-06-templanza-contra-la-avidez",
    reading: `La Templanza sostenía una balanza dorada en sus manos. 'Yo ordeno los afectos y pongo freno a los apetitos desordenados. La gula y la avidez nunca se sacian; yo encuentro mi delicia en la sobriedad y en la libertad de los hijos de Dios, que no se dejan esclavizar por nada perecedero'.`,
    source: "Vicios y Virtudes · Santa Hildegarda de Bingen, Visión VI",
    question: "¿Vives con sobriedad y libertad frente a los deseos de las cosas pasajeras?",
    imageQuestion: "¿Vives con sobriedad y libertad interior?",
    image: "./assets/images/hildegarda-06-templanza-contra-la-avidez.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Vicios y Virtudes · Santa Hildegarda de Bingen, Visión VI.",
  },
  {
    id: "hildegarda-07-silencio-frente-a-la-chafarderia",
    reading: `El Silencio Santo cubría su rostro con reverencia. 'En el murmullo continuo se disipa el alma y se pierde la unción de la gracia. Yo guardo las puertas de mi ciudad interior para que el Rey de reyes pueda habitar en ella en perfecta paz y contemplación'.`,
    source: "Vicios y Virtudes · Santa Hildegarda de Bingen, Visión VII",
    question: "¿Guardas la puerta de tus palabras para que Dios habite en la paz de tu alma?",
    imageQuestion: "¿Guardas el silencio santo para acoger a Dios?",
    image: "./assets/images/hildegarda-07-silencio-frente-a-la-chafarderia.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Vicios y Virtudes · Santa Hildegarda de Bingen, Visión VII.",
  },
  {
    id: "hildegarda-08-pureza-del-corazon",
    reading: `La Pureza brillaba como cristal transparente atravesado por la luz del alba. 'Bienaventurados los limpios de corazón, porque ellos verán a Dios. Las pasiones ciegas enturbian la vista del alma; la castidad y la santa pureza le devuelven la claridad para contemplar los misterios celestes'.`,
    source: "Vicios y Virtudes · Santa Hildegarda de Bingen, Visión VIII",
    question: "¿Cultivas la pureza de pensamientos y afectos para ver con claridad la voluntad de Dios?",
    imageQuestion: "¿Buscas la pureza de corazón para ver a Dios?",
    image: "./assets/images/hildegarda-08-pureza-del-corazon.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Vicios y Virtudes · Santa Hildegarda de Bingen, Visión VIII.",
  },
  {
    id: "hildegarda-09-la-fe-viva",
    reading: `La Fe portaba un escudo resplandeciente grabado con la Cruz de Cristo. 'Yo creo firmemente en lo que no veo y espero con certeza lo prometido. La duda vacilante se deja arrastrar por cualquier viento de doctrina; la fe verdadera permanece inamovible como una torre fortificada'.`,
    source: "Vicios y Virtudes · Santa Hildegarda de Bingen, Visión IX",
    question: "¿Se apoya tu fe en la verdad eterna de Dios por encima de las modas del mundo?",
    imageQuestion: "¿Te apoyas con fe inquebrantable en la Cruz?",
    image: "./assets/images/hildegarda-09-la-fe-viva.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Vicios y Virtudes · Santa Hildegarda de Bingen, Visión IX.",
  },
  {
    id: "hildegarda-10-la-paz-que-corona-las-virtudes",
    reading: `Al final del combate vi descender a la Paz Divina con una corona de doce estrellas. 'Donde reinan las virtudes, allí habito yo. La discordia y la inquietud son hijas del orgullo; la paz es la hija primogénita de Dios y el anticipo de la bienaventuranza eterna en el Reino de los cielos'.`,
    source: "Vicios y Virtudes · Santa Hildegarda de Bingen, Visión X",
    question: "¿Permites que la paz de Cristo reine en tu corazón por encima de toda turbación?",
    imageQuestion: "¿Dejas que la Paz de Dios corone tu vida?",
    image: "./assets/images/hildegarda-10-la-paz-que-corona-las-virtudes.webp",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura: Vicios y Virtudes · Santa Hildegarda de Bingen, Visión X.",
  },
];

const feed = document.querySelector("#feed");
feed.className = "feed";

// --- MOTOR DE FLUJO RÍTMICO DINÁMICO (CADENCIA TIKTOK ESPIRITUAL + ROTACIÓN DE AUTORES) ---
const classifyDimension = (exp) => {
  if (!exp) return "general";
  const s = (exp.source || "").toLowerCase();
  if (s.includes("sacerdotes") || s.includes("virgen") || s.includes("maría") || s.includes("maria") || s.includes("montfort")) return "mariana";
  if (s.includes("combate") || s.includes("scúpoli") || s.includes("scupoli")) return "combate";
  if (s.includes("eucaristía") || s.includes("eucaristia") || s.includes("ratzinger")) return "eucaristia";
  if (s.includes("amor a jesucristo") || s.includes("ligorio")) return "amor";
  if (s.includes("faustina") || s.includes("misericordia")) return "misericordia";
  if (s.includes("teresita") || s.includes("historia de un alma") || s.includes("confianza") || s.includes("paz interior") || s.includes("philippe")) return "confianza";
  if (s.includes("caussade") || s.includes("abandono")) return "abandono";
  if (s.includes("josemaría") || s.includes("josemaria") || s.includes("escrivá") || s.includes("escriva") || s.includes("camino")) return "josemaria";
  if (s.includes("hildegarda") || s.includes("vicios y virtudes")) return "hildegarda";
  if (s.includes("cantalamessa") || s.includes("cantalamesa") || s.includes("os doy mi paz")) return "paz";
  if (s.includes("sarah") || s.includes("silencio")) return "silencio";
  if (s.includes("pasión") || s.includes("pasion") || s.includes("olaizola")) return "pasion";
  if (s.includes("imitación") || s.includes("imitacion") || s.includes("kempis")) return "kempis";
  if (s.includes("confesiones") || s.includes("agustín") || s.includes("agustin")) return "agustin";
  if (s.includes("filotea") || s.includes("sales")) return "sales";
  if (s.includes("concepción") || s.includes("concepcion") || s.includes("cabrera")) return "concepcion";
  if (s.includes("letanías") || s.includes("letanias") || s.includes("humildad") || s.includes("merry del val")) return "humildad";
  if (s.includes("straubinger") || s.includes("carta") || s.includes("profecía") || s.includes("profecia") || s.includes("proverbios") || s.includes("apocalipsis") || s.includes("génesis") || s.includes("genesis") || s.includes("evangelio") || s.includes("salmo")) return "escritura";
  return "general";
};

const classifyTier = (exp) => {
  if (!exp || !exp.reading) return "short";
  const wc = exp.reading.trim().split(/\s+/).length;
  if (wc <= 65) return "short";
  if (wc <= 100) return "medium";
  return "deep";
};

const buildRhythmicStream = (rawExperiences) => {
  const validExperiences = (rawExperiences || []).filter((e) => e && e.reading && e.source);
  if (validExperiences.length <= 3) return validExperiences;

  const shorts = [];
  const mediums = [];
  const deeps = [];

  for (const exp of validExperiences) {
    const tier = classifyTier(exp);
    if (tier === "short") shorts.push(exp);
    else if (tier === "medium") mediums.push(exp);
    else deeps.push(exp);
  }

  // Barajado determinista con semilla fija (LCG) para estabilidad de sesión
  let seed = 19730513;
  const pseudoRandom = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(pseudoRandom() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };
  shuffle(shorts);
  shuffle(mediums);
  shuffle(deeps);

  const stream = [];
  const cadence = ["short", "medium", "short", "deep", "medium", "short", "medium"];
  let lastDim = null;

  while (shorts.length > 0 || mediums.length > 0 || deeps.length > 0) {
    for (const targetTier of cadence) {
      let pool = null;
      if (targetTier === "short" && shorts.length > 0) pool = shorts;
      else if (targetTier === "medium" && mediums.length > 0) pool = mediums;
      else if (targetTier === "deep" && deeps.length > 0) pool = deeps;
      else if (shorts.length > 0) pool = shorts;
      else if (mediums.length > 0) pool = mediums;
      else if (deeps.length > 0) pool = deeps;
      else break;

      let chosenIdx = 0;
      for (let i = 0; i < pool.length; i++) {
        if (classifyDimension(pool[i]) !== lastDim) {
          chosenIdx = i;
          break;
        }
      }

      const item = pool.splice(chosenIdx, 1)[0];
      if (item) {
        lastDim = classifyDimension(item);
        stream.push(item);
      }
    }
  }

  return stream;
};

// Generación por lotes secuenciales: 
// 1. Mantiene el orden exacto de los primeros 277 temas para los usuarios actuales.
// 2. Encola los 106 nuevos temas al final (posiciones 278 a 383) para que los descubran de forma natural.
const INITIAL_PUBLISHED_COUNT = 277;
const initialStream = buildRhythmicStream(experiences.slice(0, INITIAL_PUBLISHED_COUNT));
const expansionStream = buildRhythmicStream(experiences.slice(INITIAL_PUBLISHED_COUNT));
const dynamicExperiences = [...initialStream, ...expansionStream];

const RESUME_STORAGE_KEY = "nutre-tu-alma:resume-v3";
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
  value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#039;",
    '"': "&quot;",
  })[character]);

const readingCard = (experience, topicNumber) => `
  <article class="card reading-card" data-content-id="${experience.id}" data-phase="reading" aria-label="Lectura ${topicNumber}">
    <div class="topline"><span class="brand">Nutre tu Alma</span><span>Pausa espiritual</span></div>
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

// Reintento automático de imágenes en caso de parpadeo o micro-corte de red móvil
window.handleImageError = (img) => {
  if (!img) return;
  const retries = parseInt(img.dataset.retries || "0", 10);
  if (retries < 4) {
    img.dataset.retries = String(retries + 1);
    const baseSrc = img.dataset.originalSrc || img.src.split("?")[0];
    img.dataset.originalSrc = baseSrc;
    const delay = 350 * Math.pow(1.8, retries);
    setTimeout(() => {
      img.src = `${baseSrc}?r=${Date.now()}`;
    }, delay);
  }
};

const imageCard = (experience, topicNumber) => `
  <article class="card image-card" data-content-id="${experience.id}" data-phase="image" aria-label="Imagen de contemplación ${topicNumber}">
    <img src="${experience.image}" alt="${escapeHtml(experience.imageAlt)}" decoding="async" loading="lazy" onload="this.classList.add('loaded')" onerror="handleImageError(this)" />
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

const completionCard = () => `
  <article class="card completion-card" data-content-id="fin-del-ciclo" data-phase="complete" aria-label="Fin del ciclo contemplativo">
    <div class="topline"><span class="brand">Nutre tu Alma</span><span>Ciclo completado</span></div>
    <div class="card-main completion-main">
      <div class="completion-icon">🕊️</div>
      <h2 class="completion-title">Has recorrido el ciclo contemplativo</h2>
      <p class="completion-text">«Yo soy la vid, vosotros los sarmientos; el que permanece en Mí, y Yo en él, éste lleva mucho fruto».<br><br>Vuelve a comenzar para seguir nutriendo tu oración y meditación diaria.</p>
      <button class="restart-btn" onclick="restartCycle()">Comenzar de nuevo</button>
    </div>
    <div class="swipe-hint" onclick="restartCycle()" style="cursor: pointer;">Toca o desliza para volver al inicio</div>
  </article>`;

window.restartCycle = () => {
  try {
    localStorage.removeItem(RESUME_STORAGE_KEY);
  } catch {}
  goToCard(0, true);
};

feed.innerHTML = [
  ...dynamicExperiences.flatMap((experience, index) => [
    readingCard(experience, index + 1),
    questionCard(experience, index + 1),
    imageCard(experience, index + 1),
  ]),
  completionCard(),
].join("");

const cards = [...feed.querySelectorAll(".card")];

const loadResume = () => {
  try {
    localStorage.removeItem("nutre-tu-alma:resume-v1");
    localStorage.removeItem("nutre-tu-alma:resume-v2");
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

  return dynamicExperiences.length >= FULL_CYCLE_SIZE ? 0 : savedIndex;
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

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let lastWheelAt = 0;
let mouseGesture = null;

feed.tabIndex = 0;

// --- SISTEMA DE PRECARGA Y BUFFER LOCAL DE 20 TARJETAS POR ADELANTADO ---
const CACHE_NAME = "nutre-tu-alma-runtime-v15";
const BUFFER_AHEAD_COUNT = 6;
let isBuffering = false;
let lastBufferedIndex = -1;

const preloadedImages = new Set();
const preloadImage = (src) => {
  if (!src || preloadedImages.has(src)) return;
  preloadedImages.add(src);
  const img = new Image();
  img.decoding = "async";
  img.src = src;
};

// Precarga inmediata de texturas en GPU para las 3 tarjetas siguientes y 2 anteriores
const preloadAdjacentImages = (centerIndex) => {
  const indices = [centerIndex, centerIndex + 1, centerIndex + 2, centerIndex + 3, centerIndex - 1, centerIndex - 2];
  for (const idx of indices) {
    if (idx >= 0 && idx < cards.length) {
      const imgEl = cards[idx].querySelector("img");
      const src = imgEl?.getAttribute("src");
      if (src) preloadImage(src);
    }
  }
};

// Buffer de descarga local en segundo plano: descarga y guarda en disco las siguientes 20 imágenes
const bufferUpcomingImages = (currentIndex) => {
  if (isBuffering && Math.abs(currentIndex - lastBufferedIndex) < 5) return;
  lastBufferedIndex = currentIndex;
  isBuffering = true;

  const targetUrls = [];
  // 3 anteriores por si el usuario retrocede
  for (let i = currentIndex - 1; i >= 0 && targetUrls.length < 3; i--) {
    const src = cards[i]?.querySelector("img")?.getAttribute("src");
    if (src && !targetUrls.includes(src)) targetUrls.push(src);
  }
  // Próximas 20 imágenes por adelantado
  for (let i = currentIndex; i < cards.length && targetUrls.length < BUFFER_AHEAD_COUNT + 3; i++) {
    const src = cards[i]?.querySelector("img")?.getAttribute("src");
    if (src && !targetUrls.includes(src)) targetUrls.push(src);
  }

  const runQueue = async () => {
    try {
      let cache = null;
      if ("caches" in window) {
        cache = await caches.open(CACHE_NAME);
      }

      for (const url of targetUrls) {
        try {
          if (cache) {
            const alreadyCached = await cache.match(url);
            if (alreadyCached) continue;
            const response = await fetch(url, { priority: "low" });
            if (response && response.status === 200) {
              await cache.put(url, response.clone());
            }
          } else {
            await fetch(url, { priority: "low" });
          }
        } catch {
          // Ignorar silenciosamente errores de red transitorios
        }
        // Pequeña pausa entre descargas para no saturar la red móvil ni la CPU
        await new Promise((resolve) => setTimeout(resolve, 90));
      }
    } finally {
      isBuffering = false;
    }
  };

  if ("requestIdleCallback" in window) {
    requestIdleCallback(() => runQueue());
  } else {
    setTimeout(runQueue, 150);
  }
};

const goToCard = (requestedIndex, smooth = true) => {
  let targetIndex = requestedIndex;
  if (targetIndex >= cards.length) {
    targetIndex = 0;
  } else if (targetIndex < 0) {
    targetIndex = 0;
  }

  activeCardIndex = targetIndex;
  cards[targetIndex]?.scrollIntoView({
    behavior: smooth && !reduceMotion ? "smooth" : "auto",
    block: "start",
  });
  preloadAdjacentImages(targetIndex);
  if (Math.abs(targetIndex - lastBufferedIndex) >= 4) {
    bufferUpcomingImages(targetIndex);
  }
};

// Rueda del ratón en escritorio
feed.addEventListener(
  "wheel",
  (event) => {
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    event.preventDefault();

    const now = performance.now();
    if (now - lastWheelAt < 260) return;
    lastWheelAt = now;
    goToCard(activeCardIndex + (event.deltaY > 0 ? 1 : -1));
  },
  { passive: false },
);

// Arrastre con ratón en escritorio (los dedos en móvil usan scroll táctil nativo pan-y a 120Hz)
feed.addEventListener("pointerdown", (event) => {
  if (event.pointerType !== "mouse" || event.button !== 0) return;
  feed.focus({ preventScroll: true });
  mouseGesture = { startY: event.clientY, startedAt: performance.now() };
});

window.addEventListener("pointerup", (event) => {
  if (!mouseGesture || event.pointerType !== "mouse") return;
  const distance = event.clientY - mouseGesture.startY;
  const elapsed = Math.max(1, performance.now() - mouseGesture.startedAt);
  const velocity = Math.abs(distance) / elapsed;
  if (Math.abs(distance) >= 40 || velocity >= 0.3) {
    goToCard(activeCardIndex + (distance < 0 ? 1 : -1));
  }
  mouseGesture = null;
});

feed.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown" || event.key === "PageDown" || event.key === " ") {
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
  preloadAdjacentImages(restoreIndex);
  bufferUpcomingImages(restoreIndex);
  requestAnimationFrame(() => {
    resumeRestored = true;
  });
});

let saveResumeTimeout = null;
const debouncedSaveResume = (card) => {
  if (saveResumeTimeout) clearTimeout(saveResumeTimeout);
  saveResumeTimeout = setTimeout(() => {
    saveResume(card);
  }, 180);
};

const resumeObserver = new IntersectionObserver(
  (entries) => {
    if (!resumeRestored) return;
    const activeCard = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]?.target;
    if (activeCard) {
      activeCardIndex = cards.indexOf(activeCard);
      debouncedSaveResume(activeCard);
      preloadAdjacentImages(activeCardIndex);
      if (Math.abs(activeCardIndex - lastBufferedIndex) >= 5) {
        bufferUpcomingImages(activeCardIndex);
      }
    }
  },
  { root: feed, threshold: 0.6 },
);

cards.forEach((card) => resumeObserver.observe(card));

// Detección de deslizamiento al final del feed para reiniciar ciclo automáticamente
let touchStartY = 0;
let touchStartX = 0;
feed.addEventListener("touchstart", (e) => {
  if (e.touches && e.touches.length === 1) {
    touchStartY = e.touches[0].clientY;
    touchStartX = e.touches[0].clientX;
  }
}, { passive: true });

feed.addEventListener("touchend", (e) => {
  if (e.changedTouches && e.changedTouches.length === 1) {
    const deltaY = touchStartY - e.changedTouches[0].clientY;
    const deltaX = Math.abs(touchStartX - e.changedTouches[0].clientX);
    // Si estamos en la última tarjeta y el usuario desliza hacia arriba para seguir
    if (activeCardIndex >= cards.length - 1 && deltaY > 35 && deltaY > deltaX) {
      restartCycle();
    }
  }
}, { passive: true });


// Mantiene la pantalla encendida únicamente mientras Nutre tu Alma está visible.
let screenWakeLock = null;

const keepScreenAwake = async () => {
  if (!("wakeLock" in navigator) || document.visibilityState !== "visible" || screenWakeLock) return;

  try {
    screenWakeLock = await navigator.wakeLock.request("screen");
    screenWakeLock.addEventListener("release", () => {
      screenWakeLock = null;
    });
  } catch {
    // El sistema decide no concederlo en ahorro de batería
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
