const experiences = [
  {
    id: "olaizola-beso-judas",
    reading: `Judas se acerca a Jesús en la oscuridad y lo saluda con un beso: el signo del afecto convertido en contraseña de traición. Y Jesús, mirándolo a los ojos con infinita tristeza y misericordia, le responde: «Amigo, ¿a qué has venido?». Hasta el último instante, el Señor no cierra la puerta al perdón, no responde con odio ni desprecio, sino que ofrece a su traidor el título de amigo para intentar conmover su corazón endurecido. Cuántas veces también nosotros traicionamos el amor de Dios con nuestras cobardías cotidianas, y Él sigue mirándonos con ternura y llamándonos amigos para rescatarnos del abismo.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 3: La Traición",
    question: "¿Reconoces cuántas veces Jesús sale a tu encuentro con misericordia para ofrecerte su amistad y perdón tras tus caídas?",
    imageQuestion: "¿Reconoces que Cristo te sigue llamando amigo?",
    image: "./assets/images/49-olaizola-beso-judas.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-costado-abierto",
    reading: `Del costado abierto de Cristo en la cruz brotó sangre y agua: los sacramentos de la Iglesia. De su herida nace nuestra vida, y de su entrega total recibimos la gracia que nos sana, nos purifica y nos alimenta en el camino hacia la patria celestial.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 3",
    question: "¿Acudes a los sacramentos con veneración y sed viva de recibir la gracia sanadora que brota del Corazón de Jesús?",
    imageQuestion: "¿Acudes a los sacramentos con sed de Dios?",
    image: "./assets/images/41-ratzinger-costado-abierto.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
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
    id: "combate-crecimiento-paciente",
    reading: `Es necesario contentarse con ir creciendo poquito a poco en la perfección. Así crecen las plantas, los animales y los seres humanos: casi sin que nadie se dé cuenta, pero si ese crecer es continuo se llega a resultados muy satisfactorios. Los que perseveren, esos serán los triunfadores.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 32",
    question: "¿Tienes paciencia con tus lentos progresos espirituales, confiando en que Dios hace crecer la gracia día tras día?",
    imageQuestion: "¿Tienes paciencia con tus progresos espirituales?",
    image: "./assets/images/16-combate-crecimiento-paciente.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-perseverancia-final",
    reading: `Quien ama a Jesucristo con amor verdadero, persevera en su gracia hasta la muerte. No basta haber empezado bien: la corona del cielo no se da a quien comenzó, sino a quien persevera fielmente hasta el fin en la amistad divina.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo XIII",
    question: "¿Pides cada día a Dios la gracia insustituible de la perseverancia final para mantenerte fiel en su amor hasta el último suspiro?",
    imageQuestion: "¿Pides la gracia de perseverar hasta el fin?",
    image: "./assets/images/28-ligorio-perseverancia-final.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-amor-misericordioso",
    reading: `El amor misericordioso de Dios no busca personas perfectas para amarlas, sino que su amor hace perfectas a las almas que se reconocen necesitadas de su perdón. Lo que atrae la ternura de Dios hacia nosotros no son nuestras supuestas grandezas, sino el vacío de nuestro corazón esperando ser llenado de su amor. Dios no puede resistirse al alma que se humilla y confía en Él.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Conferencia 5",
    question: "¿Presentas a Dios tus vacíos y pobrezas para que Él los llene de su gracia, o intentas disimular tus miserias ante su presencia?",
    imageQuestion: "¿Abres tu corazón vacío para que Dios lo llene?",
    image: "./assets/images/33-teresita-amor-misericordioso.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-silencio-pilato",
    reading: `Pilato le pregunta: «¿Qué es la verdad?», teniendo la Verdad encarnada de pie frente a él. Jesús calla ante el cinismo del poder terrenal. Su silencio es más elocuente que cualquier discurso: la verdad no se defiende con gritos ni soberbia, sino con la entrega de la propia vida en fidelidad al Padre, mostrando que el reino de Dios no se apoya en componendas mundanas sino en la luz.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 6: El Silencio ante Pilato",
    question: "¿Buscas la verdad de Dios en el silencio y la fidelidad interior, o te dejas arrastrar por las opiniones y respetos humanos?",
    imageQuestion: "¿Vives en la verdad de Dios ante las presiones del mundo?",
    image: "./assets/images/51-olaizola-silencio-pilato.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-paciencia-getsemani",
    reading: `La paciencia, según santo Tomás, es la virtud por la cual ante la presencia del mal no nos dejamos vencer por la tristeza o el disgusto. Jesús puso como condición para seguirlo el llevar con paciencia la cruz de sufrimientos de cada día. Y éstos nunca faltarán a nadie. Unas veces será una enfermedad, otras una grave situación económica, o un accidente, o la muerte de un ser querido, o una persona que nos trata sin caridad o con dureza o humillándonos. Ante estas contrariedades podemos tomar la actitud de Jesús en el huerto de los Olivos: clamar: "Padre, si no es posible que se aleje de mi este cáliz de amargura, que se haga tu santa voluntad".`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 24",
    question: "Ante las contrariedades y asperezas de tu día, ¿te dejas vencer por la tristeza y la queja, o te unes a Jesús aceptando con paciencia su voluntad?",
    imageQuestion: "¿Aceptas tu cruz con la paz de Getsemaní?",
    image: "./assets/images/13-combate-paciencia-getsemani.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-mansedumbre-injurias",
    reading: `La caridad no se irrita. Cuando recibimos alguna injuria o desprecio, el amor propio nos incita a la ira y a la venganza; pero el alma que ama a Jesús procura guardar silencio y encomendar la causa a Dios, acordándose de cómo Jesús, cuando era ultrajado, no respondía con ultrajes, sino que oraba con misericordia por sus mismos perseguidores, ofreciendo su mansedumbre como escudo frente al mal.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo IX",
    question: "Cuando alguien te ofende o contradice, ¿te dejas arrastrar por la cólera, o buscas imitar el silencio y perdón de Jesús en su Pasión?",
    imageQuestion: "¿Frenas la ira imitando el silencio de Cristo?",
    image: "./assets/images/27-ligorio-mansedumbre-injurias.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-hora-redentor",
    reading: `Sabiendo Jesús que era llegada su hora de pasar de este mundo al Padre, como hubiese amado a los suyos, los amó hasta el extremo. El Redentor llamaba aquella hora la suya, porque entonces quería dar a los hombres la postrer prueba de su amor, muriendo por ellos en una cruz.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo I",
    question: "¿Te detienes en silencio a contemplar que Jesús entregó su vida hasta el extremo en la cruz por amor a ti?",
    imageQuestion: "¿Contemplas el amor de Cristo en la cruz?",
    image: "./assets/images/20-ligorio-hora-redentor.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-mirada-pedro",
    reading: `Cantó el gallo y el Señor se volvió y miró a Pedro. No fue una mirada de reproche o condena, sino de amor herido y perdón entrañable. Y Pedro, saliendo fuera, lloró amargamente, dejando que esa mirada sanara su corazón quebrantado.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 5: El Llanto de Pedro",
    question: "¿Permites que la mirada misericordiosa de Jesús toque tu interior para suscitar en ti un dolor sincero de tus pecados?",
    imageQuestion: "¿Dejas que la mirada de Jesús renueve tu corazón?",
    image: "./assets/images/50-olaizola-mirada-pedro.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-caridad-benigna",
    reading: `La caridad es benigna. Quien ama a Jesucristo procura ser afable y manso con todos, principalmente con los que le son molestos o le han ofendido, pagando el mal con el bien y la aspereza con la dulzura de un corazón que imita al Salvador.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo III",
    question: "¿Respondes con mansedumbre a quienes te tratan con dureza, o te dejas llevar por la aspereza y el resentimiento?",
    imageQuestion: "¿Respondes a la aspereza con dulzura y caridad?",
    image: "./assets/images/23-ligorio-caridad-benigna.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-gracia-origen",
    reading: `Tenemos que convencernos que no hay virtud, ni cualidad, ni buen proceder en nosotros que no proceda de la bondad y misericordia de Dios, porque nosotros mismos como dice san Pablo, ni siquiera podemos decir por propia cuenta que Jesús es Dios. Toda nuestra capacidad viene de Dios. Pues Dios es el que obra en nosotros el querer y el obrar.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 2",
    question: "¿Reconoces que todo el bien y la virtud que hay en ti es gracia de Dios, o te atribuyes en secreto el mérito de tus obras?",
    imageQuestion: "¿Reconoces que todo bien viene de Dios?",
    image: "./assets/images/11-combate-gracia-origen.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-todo-cumplido",
    reading: `«Todo está cumplido». No es un grito de derrota, sino de triunfo y plenitud: el amor ha ido hasta el extremo, la fidelidad se ha mantenido intacta y la reconciliación del mundo está sellada. Inclinando la cabeza, Jesús entregó el espíritu en las manos amorosas de su Padre, dejándonos el testimonio supremo de que la entrega confiada vence a la muerte y abre para siempre las puertas de la vida eterna.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 8: Todo está cumplido",
    question: "¿Vives cada jornada con el anhelo santo de poder decir ante Dios que cumpliste por amor la misión que Él te encomendó?",
    imageQuestion: "¿Vives con el deseo de cumplir la voluntad de Dios?",
    image: "./assets/images/54-olaizola-todo-cumplido.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-milagro-transustanciacion",
    reading: `En la Misa se realiza el milagro de la transustanciación: lo que parecía pan y vino se convierte verdaderamente en el Cuerpo y la Sangre de Cristo. Ante este misterio sobrecogedor, la razón humana se inclina con humildad y la fe responde con adoración y agradecimiento sin fin. El Dios inabarcable se pone enteramente en nuestras manos para alimentarnos en nuestro peregrinar terreno hacia el Reino eterno.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 7",
    question: "¿Participas en la Santa Misa con santo asombro y gratitud, o la vives como una rutina exterior sin hondura?",
    imageQuestion: "¿Vives el misterio de la Misa con santo asombro?",
    image: "./assets/images/45-ratzinger-milagro-transustanciacion.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-comunidad-unidad",
    reading: `La Eucaristía crea la verdadera comunidad cristiana. Porque todos comemos del mismo Pan único, llegamos a ser un solo cuerpo en Cristo, llamados a vivir en unidad, perdón fraterno y comunión sincera, derribando los muros de la indiferencia y del egoísmo. Así, el sacramento del altar se convierte en el principio visible de la paz y de la reconciliación entre todos los hombres que buscan a Dios con corazón sincero.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 8",
    question: "¿Fomentas la reconciliación y la unidad entre tus hermanos, viviendo la Eucaristía como vínculo de caridad fraterna?",
    imageQuestion: "¿Construyes unidad y fraternidad con los demás?",
    image: "./assets/images/46-ratzinger-comunidad-unidad.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-desprendimiento-puro",
    reading: `La caridad no busca sus propios intereses, sino sólo el agrado de Dios. El alma desprendida no busca consuelos propios en la devoción, sino dar gusto a su Señor. Si Dios la colma de consuelos, se los agradece; si la deja en sequedad y tinieblas, permanece igualmente fiel y sumisa, porque no ama los dones de Dios, sino al Dios de los dones, sirviéndole con generosa fidelidad en toda circunstancia.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo VIII",
    question: "¿Sirves a Dios por amor a su Persona, o te desanimas en cuanto desaparecen los consuelos sensibles de la oración?",
    imageQuestion: "¿Amas a Dios o solo a sus dones?",
    image: "./assets/images/26-ligorio-desprendimiento-puro.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-confianza-medios",
    reading: `Cuatro son los medios para lograr progresar en la confianza en Dios. El primero: pedirla muchas veces y con humildad, en nuestra oración. Jesús prometió: "Todo el que pide recibe. Mi Padre dará el buen espíritu a quien se lo pida". El segundo medio es: pensar en el gran poder de Dios y en su infinita bondad, que lo mueve a conceder siempre mucho más de lo que se le suplica. Recordar lo que el ángel le dijo a la Virgen María: "ninguna cosa es imposible para Dios".`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 3",
    question: "¿Acudes a la oración recordando el poder y la bondad de Dios, o rezas como si dudaras de que Él realmente escucha tus súplicas?",
    imageQuestion: "¿Confías en que para Dios nada es imposible?",
    image: "./assets/images/12-combate-confianza-medios.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
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
    id: "teresita-ascensor-brazos",
    reading: `Teresa comprendió que el ascensor que debía elevarla hasta el cielo eran los mismos brazos de Jesús. Para eso no necesitaba hacerse grande, sino al contrario, permanecer pequeña, haciéndose cada vez más pequeña. La santidad no consiste en acumular méritos con orgullo, sino en reconocer con gozo nuestra impotencia y abandonarnos totalmente en los brazos del Padre celestial, como un niño que descansa seguro en el regazo de su madre.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Conferencia 2",
    question: "¿Pretendes alcanzar la santidad apoyado en tus propias fuerzas, o te abandonas con humildad filial en los brazos de Jesús?",
    imageQuestion: "¿Te abandonas como un niño en los brazos de Dios?",
    image: "./assets/images/30-teresita-ascensor-brazos.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-guardar-lengua",
    reading: `Del modo de gobernar la lengua. Hablar poco y sólo lo necesario es una gran virtud. Quien habla mucho, peca mucho. El que guarda su boca guarda su alma. En el mucho hablar nunca falta pecado, pero el que refrena sus labios es prudente. El silencio prudente conserva la paz del alma.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 23",
    question: "¿Guardas silencio prudente en tus conversaciones, o dejas que el descontrol de las palabras robe la paz de tu alma?",
    imageQuestion: "¿Guardas silencio para proteger tu alma?",
    image: "./assets/images/14-combate-guardar-lengua.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-comunion-transformacion",
    reading: `Comulgar no es simplemente recibir un símbolo, sino entrar en comunión íntima con la Persona viva de Jesucristo. Al asimilar el Pan del cielo, no transformamos nosotros a Cristo en nosotros, sino que Él nos transforma a nosotros en Él, haciéndonos partícipes de su propia vida divina y de su amor. Quien comulga con fe se une a la vida del Resucitado y se abre a la santidad.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 4",
    question: "¿Permites que la Comunión transforme tus criterios y afectos para que vivas y ames con los mismos sentimientos de Cristo?",
    imageQuestion: "¿Permites que Cristo te transforme en la Comunión?",
    image: "./assets/images/42-ratzinger-comunion-transformacion.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-llave-oracion",
    reading: `Por la mañana la oración es la llave que nos abre los tesoros de Dios y por la noche es el manto que nos coloca bajo su Divina Protección. Los milagros más maravillosos y los cambios más portentosos han sido preparados por muchas oraciones. Para que la oración tenga efecto es necesario que la hagamos con mucha confianza en el poder y la bondad de Nuestro Señor. Cuanto más confiemos en Él, más seremos ayudados por su bondad y por su infinito poder.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 42",
    question: "¿Es tu oración de cada mañana la llave con que abres tu corazón a Dios, o comienzas tus tareas fiándote solo de tus fuerzas?",
    imageQuestion: "¿Empiezas tu día abriendo el corazón a Dios?",
    image: "./assets/images/17-combate-llave-oracion.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-confianza-audaz",
    reading: `La confianza audaz es el corazón del mensaje de Teresa. Ella decía que lo que ofende a Jesús y hiere su Corazón es la falta de confianza. Cuanto más pobres y pecadores nos sintamos, mayor debe ser nuestra esperanza, porque la misericordia de Dios no tiene límites y busca precisamente la miseria para derramarse sobre ella. Si tuviéramos sobre la conciencia todos los crímenes que se pueden cometer, con el corazón roto por el arrepentimiento deberíamos arrojarnos en los brazos de Jesús, porque sabemos cuánto ama al hijo pródigo que vuelve a Él, dispuesto a cubrirlo con el manto de su perdón.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Conferencia 3",
    question: "Cuando sientes el peso de tus pecados y caídas, ¿te encierras en el desaliento, o acudes con audacia al Corazón misericordioso de Jesús?",
    imageQuestion: "¿Tienes una confianza audaz en la misericordia?",
    image: "./assets/images/31-teresita-confianza-audaz.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-oracion-impulso",
    reading: `Para mí, la oración es un impulso del corazón, una simple mirada dirigida al cielo, un grito de agradecimiento y de amor, tanto en medio de la prueba como en el seno del gozo. Es algo grande, sobrenatural, que me dilata el alma.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Conferencia 6",
    question: "¿Es tu oración un diálogo espontáneo y agradecido de corazón a corazón con Dios en cualquier circunstancia de tu día?",
    imageQuestion: "¿Es tu oración un impulso de amor hacia Dios?",
    image: "./assets/images/34-teresita-oracion-impulso.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-aceptar-flaqueza",
    reading: `Aceptar nuestra flaqueza no significa cruzarse de brazos ni ceder al desaliento, sino dejar de pretender justificarnos por nuestras propias obras para esperar todo de la sola gracia de Jesucristo, cuya fuerza se manifiesta plenamente en nuestra debilidad.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Conferencia 4",
    question: "¿Aceptas humildemente tus flaquezas para que en ellas resplandezca el poder y la gracia de Jesucristo?",
    imageQuestion: "¿Esperas todo de la gracia de Jesucristo?",
    image: "./assets/images/32-teresita-aceptar-flaqueza.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-union-eucaristia",
    reading: `Hablando San Lorenzo Justiniano con Jesús, le dice: «¡Oh Dios!, enamorado de nuestras almas, por medio de este sacramento dispusiste que tu corazón y el nuestro fueran un solo corazón inseparablemente unido». Y San Bernardino de Siena añade que «el dársenos Jesucristo en alimento fue el último grado del amor, porque unión más cabal y completa no puede darse cual la que hay entre el manjar y quien lo come». Jesús quiso unirse a nosotros para no ser más que una sola cosa.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo II",
    question: "Cuando recibes la Sagrada Comunión, ¿acudes con la reverencia de quien sabe que Cristo viene a fundir su corazón con el tuyo?",
    imageQuestion: "¿Recibes la Eucaristía con amor ardiente?",
    image: "./assets/images/21-ligorio-union-eucaristia.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "prueba-azul-confianza",
    reading: `«Tú no has entendido, hijo, que Yo he escogido la necedad para confundir la sabiduría y la debilidad para derrotar la fuerza.

Es mi voluntad que este pequeño volumen se propague así tal como es: éste será el medio con el que llamaré a muchos Sacerdotes a mi Movimiento y me formaré mi ejército invencible...

Tu poca fe, tu desconfianza en Mí me aflige, hijo. ¿Qué temes? ¿De qué tienes miedo? Ora y abandónate a Mí: deja que sea Yo sola la que verdaderamente obre.»`,
    source: "A los Sacerdotes, hijos predilectos de la Santísima Virgen · 13 de octubre de 1973",
    question: "¿Qué preocupación sigues cargando tú solo, sin haberla dejado de verdad en manos de Dios?",
    imageQuestion: "Tu poca fe, tu desconfianza en Mí me aflige, hijo. ¿Qué temes? ¿De qué tienes miedo? Ora y abandónate a Mí: deja que sea Yo sola la que verdaderamente obre.",
    image: "./assets/images/03-virgen-consuela.png",
    imageAlt: "La Virgen sostiene el rostro de un hombre arrodillado y angustiado, consolándolo con ternura.",
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
    id: "ratzinger-corpus-cristi-fe",
    reading: `La procesión de Corpus Christi nos recuerda que la fe cristiana no es un asunto meramente privado. Llevamos a Cristo por las calles de nuestras ciudades para bendecir los hogares, los trabajos y los caminos de los hombres, proclamando que Él es la verdadera luz y la paz del mundo. Salir con el Señor nos compromete a ser portadores de su caridad en todos los ambientes donde vivimos.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 6",
    question: "¿Vives tu fe con coherencia y valentía en tu trabajo y vida social, llevando la bendición y paz de Cristo al mundo?",
    imageQuestion: "¿Das testimonio de Cristo en tu vida pública?",
    image: "./assets/images/44-ratzinger-corpus-cristi-fe.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
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
  {
    id: "olaizola-lavatorio-pies",
    reading: `Jesús se arrodilla ante los discípulos con una jofaina y una toalla. El Maestro se hace siervo. Lavar los pies es tocar la parte más polvorienta y gastada del hermano, para limpiarla con amor entrañable y enseñarnos a servir con profunda humildad.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 1: El Lavatorio",
    question: "¿Estás dispuesto a servir con sencillez en lo oculto, inclinándote para aliviar las fragilidades y cansancios del prójimo?",
    imageQuestion: "¿Te inclinas para servir con humildad al prójimo?",
    image: "./assets/images/47-olaizola-lavatorio-pies.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
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
    id: "prueba-philippe-mana",
    reading: `La gracia de Dios se da al momento, día a día. A veces nos gustaría poder reservarla, crear «almacenes» de fuerza. Pero no es posible. Observad la imagen del maná que alimentó a los hebreos en el desierto; cuando pretendieron almacenarlo se pudría. Dios lo daba cada día, en la justa medida, ni más ni menos, y tenía el mejor sabor que a cada uno le convenía. Cuando decimos «pan nuestro», lo que pedimos no son grandes reservas (¿qué haríamos con ellas?), sino que simplemente pedimos el pan de este día, y Dios nos lo da, por lo que no es necesario preocuparse.`,
    source: "La confianza en Dios · Jacques Philippe, Capítulo 5",
    question: "¿En qué área de tu vida te cuesta confiar en que Dios te dará, día a día, exactamente lo que necesitas?",
    imageQuestion: "¿Confías en el pan de hoy?",
    image: "./assets/images/06-mana-desierto.png",
    imageAlt: "Una familia bíblica recoge el maná del suelo al amanecer en el desierto, con gratitud.",
  },
  {
    id: "olaizola-getsemani-oracion",
    reading: `En Getsemaní, Jesús experimenta la soledad más desgarradora. Los amigos se duermen mientras Él suda sangre en la lucha interior. Sin embargo, en medio del pavor y la angustia, brota la oración más pura: «Padre, no se haga mi voluntad, sino la tuya». Ahí se gana la redención del mundo, cuando la libertad humana del Hijo se entrega por entero a los designios salvíficos del Padre celestial.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 2: Getsemaní",
    question: "En tus momentos de soledad, angustia o prueba, ¿perseveras en la oración humilde repitiendo «hágase tu voluntad»?",
    imageQuestion: "¿Perseveras en la oración en tus horas difíciles?",
    image: "./assets/images/48-olaizola-getsemani-oracion.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
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
    id: "ratzinger-presencia-viva",
    reading: `Dios no es una hipótesis lejana sobre el origen del mundo, sino una presencia viva que ha plantado su tienda entre nosotros. En la Eucaristía, el Dios eterno se hace cercano y alcanzable para cada hombre, invitándonos a compartir su misma vida divina.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 1",
    question: "¿Reconoces y agradeces la cercanía real y viva de Dios que te espera en el Sagrario de cada iglesia?",
    imageQuestion: "¿Reconoces la presencia viva de Dios en el Sagrario?",
    image: "./assets/images/38-ratzinger-presencia-viva.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
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
    id: "combate-dios-dulzuras",
    reading: `Cuando una persona empieza su vida espiritual, por lo general siente al principio muchos consuelos y gozos en el alma. Pero si estos gozos son muy grandes, hay que tener cuidado porque puede suceder que el espíritu se entusiasme por las dulzuras de Dios y no por el Dios de las dulzuras.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 54",
    question: "Cuando oras, ¿buscas la satisfacción sensible que te produce el consuelo, o buscas amar a Dios con pureza aun en la aridez?",
    imageQuestion: "¿Buscas a Dios por Él mismo o por sus consuelos?",
    image: "./assets/images/19-combate-dios-dulzuras.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-cercania-sagrario",
    reading: `La Eucaristía es el sacramento de la cercanía de Dios. En el Sagrario de nuestras iglesias late el Corazón de Cristo, esperándonos día y noche en silencio. Quien entra en una iglesia y se arrodilla ante el Señor presente en el pan consagrado, encuentra un remanso de paz en medio del torbellino del mundo. Allí experimentamos que no estamos solos, sino acompañados por el amor fiel de nuestro Redentor.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 1",
    question: "¿Acudes con frecuencia al Sagrario para encontrar la paz interior y el descanso que el mundo no te puede dar?",
    imageQuestion: "¿Buscas el silencio del Sagrario en medio del ruido?",
    image: "./assets/images/39-ratzinger-cercania-sagrario.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-humildad-oculta",
    reading: `Quien ama a Jesucristo no se engríe de sus buenas obras ni busca la alabanza de los hombres, sino que procura ocultarse a los ojos del mundo para no ser visto sino de Dios solo. La verdadera virtud ama el rincón escondido.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo V",
    question: "¿Buscas el reconocimiento y el aplauso humano en tus buenas obras, o te basta saber que tu Padre del cielo te ve en lo secreto?",
    imageQuestion: "¿Haces el bien para ser visto por Dios solo?",
    image: "./assets/images/25-ligorio-humildad-oculta.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-caridad-hermano",
    reading: `La verdadera caridad consiste en soportar todos los defectos del prójimo, no extrañarse de sus debilidades y edificarse de sus más pequeñas virtudes. Amar al hermano no es sentir afecto natural, sino querer su bien y servirle con paciencia por amor a Jesús. Cuando somos pacientes con los demás, atraemos sobre nuestra propia vida la misericordia del Padre celestial que nunca nos abandona y que nos llena de su paz.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Conferencia 8",
    question: "¿Soportas con paciencia y disculpas con amor los defectos ajenos, reconociendo cuánto te perdona Dios a ti cada día?",
    imageQuestion: "¿Miras a los demás con la paciencia de Cristo?",
    image: "./assets/images/36-teresita-caridad-hermano.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-amor-fuerte-muerte",
    reading: `La Eucaristía nos enseña que el amor de Dios es más fuerte que la muerte. En la Última Cena, Jesús no huyó ante la traición ni ante el sufrimiento inminente, sino que transformó su muerte violenta en un acto libre de entrega y amor supremo. Al darnos su Cuerpo entregado y su Sangre derramada, convirtió la mayor injusticia de la historia humana en la fuente inagotable de la reconciliación y de la vida eterna. Por eso, en cada Misa participamos de esa victoria definitiva del amor sobre el pecado, aprendiendo a confiar en que la fidelidad de Dios sostiene nuestra existencia aun en las horas más oscuras.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 2",
    question: "En medio de tus pruebas y temores, ¿te refugias en el amor vencedor de Cristo que se renueva en cada Eucaristía?",
    imageQuestion: "¿Crees que el amor de Cristo vence toda muerte?",
    image: "./assets/images/40-ratzinger-amor-fuerte-muerte.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ratzinger-adoracion-eucaristica",
    reading: `La adoración no es un lujo ni un añadido a la comunión: es su prolongación natural. No se puede comulgar verdaderamente si antes y después no se adora con reverencia al Señor, guardando silencio en su presencia para escuchar su voz en el interior del corazón.`,
    source: "La Eucaristía - Centro de la Vida · Joseph Ratzinger, Capítulo 5",
    question: "¿Adoras en silencio y recogimiento a Jesús Sacramentado para preparar y prolongar los frutos de tu comunión?",
    imageQuestion: "¿Adoras con reverencia al Señor eucarístico?",
    image: "./assets/images/43-ratzinger-adoracion-eucaristica.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-simon-cirineo",
    reading: `Simón de Cirene volvía cansado del campo cuando los soldados lo forzaron a cargar con la cruz de un condenado. Al principio cargó el madero con disgusto y resistencia; pero al caminar junto a Jesús y cruzar su mirada con la de aquel Hombre destrozado que no maldecía, el madero forzado se convirtió en el mayor honor de su vida. Cargar con la cruz del prójimo que sufre nunca es una pérdida de tiempo: es la senda misteriosa donde nos encontramos cara a cara con el Redentor, descubriendo que al sostener al hermano dolorido estamos aliviando el paso del mismo Cristo camino del Calvario.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 7: El Cirineo",
    question: "Cuando las necesidades y sufrimientos de los demás alteran tus planes, ¿te quejas del contratiempo, o descubres en ellos la cruz bendita de Jesús?",
    imageQuestion: "¿Ayudas a cargar la cruz del prójimo con amor?",
    image: "./assets/images/52-olaizola-simon-cirineo.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
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
    id: "teresita-momento-presente",
    reading: `No tenemos más que el momento presente para amar a Dios. El pasado ya está en la misericordia divina y el futuro en su providencia. Angustiarse por lo que vendrá mañana es perder la gracia que Dios nos tiene reservada para la hora presente. Vivamos el hoy con amor y confianza, sabiendo que cada instante bien vivido basta para complacer al Señor y santificar el alma.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Conferencia 7",
    question: "¿Vives el presente con paz y abandono en la providencia, o dejas que las preocupaciones del futuro te roben la gracia de hoy?",
    imageQuestion: "¿Vives el momento presente confiado en Dios?",
    image: "./assets/images/35-teresita-momento-presente.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-amar-padecer",
    reading: `Quien ama a Jesucristo ama el padecer. El que ama de veras a Jesucristo siente grandísimo gozo en verse tratado como lo fue Jesucristo: pobre, perseguido y despreciado. Todas las penas que se sufren por amor de Jesucristo son perlas preciosas con que se engalana el alma para presentarse un día en el cielo. No hay señal más segura de amor que padecer de buena gana por el Amado. Por eso los santos, no sólo sufrían con paciencia las enfermedades y las persecuciones, sino que las recibían con alegría, considerándose dichosos de parecerse a Jesús paciente en medio de las pruebas de esta vida presente.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo II",
    question: "¿Aceptas las molestias, dolores e incomprensiones cotidianas con paz, descubriendo en ellas la ocasión de parecerte a Jesús paciente?",
    imageQuestion: "¿Aceptas las molestias diarias por amor a Cristo?",
    image: "./assets/images/22-ligorio-amar-padecer.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-ofrecimiento-obras",
    reading: `Es sumamente conveniente que le ofrezcamos con frecuencia a Dios lo que hacemos, decimos, pensamos y sufrimos, lo que poseemos y todos nuestros buenos deseos. Pero para que este ofrecimiento sea totalmente del agrado del Señor es conveniente que lo unamos a los ofrecimientos que Jesucristo hizo al Padre Celestial durante su vida mortal, de todo lo que hacía, pensaba, hablaba y sufría. Esto le da un valor inmenso a lo poquito que en nuestra pobreza podemos ofrecer.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 53",
    question: "¿Ofreces a Dios tus cansancios y trabajos uniéndolos a la entrega de Jesús, para que adquieran valor eterno ante el Padre?",
    imageQuestion: "¿Ofreces tu jornada unido al sacrificio de Cristo?",
    image: "./assets/images/18-combate-ofrecimiento-obras.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-ser-el-amor",
    reading: `Comprendí que el amor encerraba todas las vocaciones, que el amor lo era todo, que abarcaba todos los tiempos y todos los lugares... En fin, ¡que el amor es eterno! En el corazón de la Iglesia, mi Madre, yo seré el amor. Así lo seré todo.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Conferencia 8",
    question: "¿Procuras que el amor a Dios y al prójimo sea el alma y el sentido más profundo de todas tus acciones?",
    imageQuestion: "¿Vives el amor como el centro de tu vida?",
    image: "./assets/images/37-teresita-ser-el-amor.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "ligorio-gozo-bien-ajeno",
    reading: `El alma que ama a Dios no envidia la prosperidad de los demás, sino que se goza del bien ajeno como del propio. Quien de veras ama a Dios, no tiene más deseo que ver a Dios amado y glorificado por todos; por lo cual, cuando ve que otro adelanta en la virtud o hace más bien que él, se alegra grandemente y da gracias al Señor con corazón humilde y sincero.`,
    source: "Práctica del Amor a Jesucristo · San Alfonso María de Ligorio, Capítulo IV",
    question: "¿Te alegras con sinceridad de corazón por las virtudes y éxitos del prójimo, o sientes la secreta amargura de la envidia?",
    imageQuestion: "¿Te alegras con el bien del prójimo?",
    image: "./assets/images/24-ligorio-gozo-bien-ajeno.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "olaizola-pie-de-la-cruz",
    reading: `Junto a la cruz de Jesús estaban su madre y el discípulo a quien amaba. Jesús, viendo a su madre y al discípulo, dijo: «Mujer, ahí tienes a tu hijo». Luego dijo al discípulo: «Ahí tienes a tu madre». Y desde aquella hora el discípulo la acogió en su casa.`,
    source: "La Pasión en Contemplaciones de Papel · José María Rodríguez Olaizola, Capítulo 8: Al Pie de la Cruz",
    question: "¿Acoges a María en tu vida diaria como verdadera Madre espiritual, confiándole tus luchas, trabajos y decisiones?",
    imageQuestion: "¿Acudes a María como Madre al pie de la Cruz?",
    image: "./assets/images/53-olaizola-pie-de-la-cruz.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "teresita-santidad-pequenez",
    reading: `La santidad no es una meta inalcanzable reservada a gigantes espirituales; es simplemente acoger la misericordia de Dios y dejarse amar por Él en nuestra pequeñez cotidiana, confiando enteramente en su bondad paternal sin desanimarnos jamás.`,
    source: "El camino de la confianza y el amor · Santa Teresita, Conferencia 1",
    question: "¿Crees de verdad que Dios te llama a la santidad hoy mismo, en medio de tus límites, debilidades y tareas cotidianas?",
    imageQuestion: "¿Te dejas amar por Dios en tu pequeñez?",
    image: "./assets/images/29-teresita-santidad-pequenez.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
  },
  {
    id: "combate-remar-constancia",
    reading: `En el combate contra las malas tendencias es necesario no dejar un sólo día sin hacer algo por progresar en la virtud, porque en esto sucede como a los que van remando río arriba: si sueltan por un momento los remos se los lleva la corriente. No creer jamás que ya hemos llegado. Si alguien se imagina que ya llegó al grado de perfección y santidad que Dios desea de cada uno, se equivoca totalmente. Esto llevaría a no aprovechar las nuevas ocasiones de practicar la virtud.`,
    source: "El Combate Espiritual · P. Lorenzo Scúpoli, Capítulo 31",
    question: "¿Te esfuerzas cada día con constancia en la vida de oración, o has soltado los remos creyendo que ya no necesitas mejorar?",
    imageQuestion: "¿Mantienes el esfuerzo diario en la oración?",
    image: "./assets/images/15-combate-remar-constancia.png",
    imageAlt: "Pintura sacra al óleo que ilustra la lectura y meditación del pasaje.",
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
