/* ===== DATOS (editar aquí o mover a archivos .json) ===== */
const CATS=["Construcción y diseño","Salud y bienestar","Ciencia y tecnología","Educación y sociedad","Negocios y comunicación","Arte y creatividad","Naturaleza y animales"];
// [id, nombre, índice de categoría, descripción breve, relacionadas]
// Descripciones breves de las tarjetas: agregar "id":"texto". Si falta, la tarjeta muestra el marcador de c[3].
const DESCS={
"arquitectura":"Diseña casas, edificios y espacios donde las personas viven, trabajan y conviven.",
"ingenieria-civil":"Utiliza la ciencia y las matemáticas para resolver problemas y crear soluciones útiles.",
"carpinteria":"Fabrica y repara muebles, puertas y otros objetos de madera.",
"medicina":"Cuida la salud de las personas, identifica enfermedades y ayuda a tratarlas.",
"veterinaria":"Cuida la salud de los animales, previene enfermedades y los ayuda a recuperarse.",
"nutricion":"Enseña cómo alimentarse de forma saludable y cómo los alimentos ayudan al cuerpo.",
"docencia":"Enseña conocimientos y habilidades para ayudar a otras personas a aprender.",
"derecho":"Ayuda a las personas a conocer y defender sus derechos, siguiendo las leyes.",
"programacion":"Crea instrucciones para que las computadoras realicen tareas, como ejecutar videojuegos y aplicaciones.",
"ingenieria-mecanica":"Diseña, construye y repara máquinas, motores y otros mecanismos.",
"diseno-de-moda":"Crea ropa, accesorios y nuevos estilos combinando telas, colores y formas.",
"musica":"Crea, interpreta o produce canciones y melodías usando la voz o instrumentos.",
"administracion-de-empresas":"Organiza los recursos, el dinero y las actividades de una empresa para que funcione bien.",
"marketing-y-publicidad":"Crea ideas y campañas para dar a conocer productos, servicios o marcas.",
"emprendimiento":"Crea y desarrolla un negocio a partir de una idea.",
"gastronomia":"Prepara alimentos y crea platillos combinando ingredientes, sabores y técnicas de cocina.",
"reposteria-y-panaderia":"Prepara pasteles, panes, galletas y otros productos dulces o salados.",
"biologia":"Estudia los seres vivos, cómo funcionan y cómo se relacionan con su entorno.",
"agricultura":"Cultiva plantas y alimentos, cuidando la tierra, el agua y los cultivos.",
"aviacion":"Se dedica a pilotar aeronaves o a realizar trabajos que permiten que los vuelos sean seguros.",
"atleta":"Entrena y participa en competencias deportivas para desarrollar sus habilidades y mejorar su rendimiento.",
"maquillaje":"Crea looks para eventos, fotografías, películas y otras ocasiones utilizando colores y técnicas.",
"quimica":"Estudia de qué están hechas las cosas y cómo cambian al mezclarse o reaccionar.",
"fisica":"Estudia cómo funciona el universo, incluyendo el movimiento, la luz, la energía y la gravedad."};
const CAREERS=[
// Categorías asignadas como PROPUESTA: confirmar con el equipo. Descripciones: marcador de posición.
["arquitectura","Arquitectura",0,"[Descripción breve]",["ingenieria-civil","carpinteria"]],
["ingenieria-civil","Ingeniería civil",0,"[Descripción breve]",["arquitectura","ingenieria-mecanica"]],
["carpinteria","Carpintería",0,"[Descripción breve]",["arquitectura","diseno-de-moda"]],
["medicina","Medicina",1,"[Descripción breve]",["nutricion","biologia"]],
["nutricion","Nutrición",1,"[Descripción breve]",["medicina","gastronomia"]],
["atleta","Atleta",1,"[Descripción breve]",["nutricion","medicina"]],
["programacion","Programación",2,"[Descripción breve]",["ingenieria-mecanica","fisica"]],
["ingenieria-mecanica","Ingeniería mecánica",2,"[Descripción breve]",["ingenieria-civil","aviacion"]],
["aviacion","Aviación",2,"[Descripción breve]",["ingenieria-mecanica","fisica"]],
["quimica","Química",2,"[Descripción breve]",["fisica","biologia"]],
["fisica","Física",2,"[Descripción breve]",["quimica","aviacion"]],
["docencia","Docencia",3,"[Descripción breve]",["derecho"]],
["derecho","Derecho",3,"[Descripción breve]",["docencia","administracion-de-empresas"]],
["administracion-de-empresas","Administración de empresas",4,"[Descripción breve]",["emprendimiento","marketing-y-publicidad"]],
["marketing-y-publicidad","Marketing y publicidad",4,"[Descripción breve]",["emprendimiento","administracion-de-empresas"]],
["emprendimiento","Emprendimiento",4,"[Descripción breve]",["administracion-de-empresas","marketing-y-publicidad"]],
["musica","Música",5,"[Descripción breve]",["diseno-de-moda"]],
["diseno-de-moda","Diseño de moda",5,"[Descripción breve]",["maquillaje","musica"]],
["maquillaje","Maquillista profesional",5,"[Descripción breve]",["diseno-de-moda"]],
["gastronomia","Gastronomía",5,"[Descripción breve]",["reposteria-y-panaderia","nutricion"]],
["reposteria-y-panaderia","Repostería y panadería",5,"[Descripción breve]",["gastronomia"]],
["veterinaria","Veterinaria",6,"[Descripción breve]",["biologia","medicina"]],
["biologia","Biología",6,"[Descripción breve]",["veterinaria","agricultura"]],
["agricultura","Agricultura",6,"[Descripción breve]",["biologia","quimica"]]
];
const NOT_CONFUSE={
"arquitectura":"Arquitectura diseña cómo se ve y se usa un edificio o un espacio; Ingeniería Civil calcula y construye para que sea resistente y seguro.",
"ingenieria-civil":"Ingeniería Civil calcula y construye puentes, carreteras y estructuras; Arquitectura diseña el aspecto y el uso de los espacios.",
"carpinteria":"Carpintería fabrica y repara objetos de madera con las manos; Arquitectura diseña edificios y espacios completos.",
"medicina":"Medicina cuida la salud de las personas; Veterinaria cuida la salud de los animales.",
"veterinaria":"Veterinaria previene, diagnostica y trata enfermedades de los animales; Biología estudia a los seres vivos y cómo funcionan.",
"nutricion":"Nutrición estudia cómo la alimentación influye en la salud y las necesidades del cuerpo; Gastronomía prepara alimentos y crea platillos.",
"programacion":"Programación crea instrucciones para computadoras y aplicaciones; Ingeniería Mecánica diseña y construye máquinas y motores.",
"ingenieria-mecanica":"Ingeniería Mecánica diseña y mejora máquinas y motores; Ingeniería Civil diseña y construye puentes, carreteras y edificios.",
"aviacion":"Aviación pilota aeronaves y cuida que los vuelos sean seguros; Ingeniería Mecánica diseña y construye máquinas y motores, también los de los aviones.",
"diseno-de-moda":"Diseño de Moda crea prendas, accesorios y colecciones; Marketing y Publicidad promociona productos y marcas.",
"maquillaje":"Maquillista profesional crea looks con colores y técnicas; Diseño de Moda crea prendas, accesorios y colecciones.",
"administracion-de-empresas":"Administración de Empresas organiza y gestiona los recursos de una organización; Emprendimiento crea y desarrolla proyectos nuevos.",
"marketing-y-publicidad":"Marketing y Publicidad promociona productos y marcas; Diseño de Moda crea prendas, accesorios y colecciones.",
"emprendimiento":"Emprendimiento crea y desarrolla proyectos nuevos; Administración de Empresas organiza y gestiona los recursos de una organización.",
"gastronomia":"Gastronomía prepara alimentos y crea platillos; Nutrición estudia cómo la alimentación influye en la salud y las necesidades del cuerpo.",
"reposteria-y-panaderia":"Repostería y Panadería se especializa en pasteles, panes y postres; Gastronomía abarca la preparación de todo tipo de alimentos y platillos.",
"biologia":"Biología estudia a los seres vivos y sus procesos; Veterinaria se enfoca en prevenir, diagnosticar y tratar enfermedades de los animales.",
"agricultura":"Agricultura cultiva plantas y alimentos cuidando la tierra y el agua; Biología estudia a los seres vivos en general.",
"quimica":"Química estudia de qué están hechas las cosas y cómo se transforman; Física estudia el movimiento, la luz, la energía y la gravedad.",
"fisica":"Física estudia el movimiento, la luz, la energía y la gravedad; Química estudia de qué están hechas las cosas y cómo se transforman.",
"docencia":"Docencia se enfoca en cómo enseñar y ayudar a aprender; Física, Música y otras carreras se enfocan en dominar un tema, y quienes las estudian también pueden dedicarse a enseñarlo.",
"derecho":"Derecho estudia las leyes y ayuda a defender derechos y resolver conflictos; Administración de Empresas puede conocer leyes de negocios, pero se enfoca en organizar y dirigir una empresa.",
"musica":"Música crea e interpreta sonidos y canciones; Diseño de Moda crea prendas y colecciones. Las dos son carreras creativas, pero con materiales muy diferentes.",
"atleta":"Atleta entrena y compite para mejorar su rendimiento deportivo; Nutrición estudia cómo la alimentación influye en la salud, también la de las personas deportistas."};
// Conoce a un profesional: id -> [nombre, perfil, dato curioso]. Completo (24 carreras)
const PERFILES={
"arquitectura":["Luis Barragán","Fue un arquitecto mexicano famoso por sus colores y jardines. ¡En 1980 ganó el Premio Pritzker, el más importante de arquitectura!","¡Sus edificios parecen obras de arte gracias a sus colores y formas!"],
"ingenieria-civil":["Ángela Alessio Robles","Fue una ingeniera civil mexicana que ayudó a planear el crecimiento de la Ciudad de México y participó en proyectos urbanos como la Macroplaza de Monterrey.","En 1965 fue reconocida como Mujer del Año por su trayectoria profesional."],
"programacion":["Gabriela Salas Cabrera","Es una ingeniera y programadora mexicana que colaboró para incorporar el náhuatl a Google Translate, ayudando a preservar una lengua indígena.","¡En 2024 fue incluida en la lista de las 100 mujeres del año de la BBC!"],
"ingenieria-mecanica":["Guillermo González Camarena","Fue un inventor e ingeniero mexicano que creó un sistema para transmitir imágenes a color en la televisión.","¡A los 17 años construyó su propia cámara de televisión usando piezas de aparatos viejos!"],
"diseno-de-moda":["Carla Fernández","Reconocida por reinterpretar técnicas artesanales indígenas y preservar la herencia de comunidades de México.","¡Trabaja con más de 175 artesanas y artesanos de México para crear ropa moderna inspirada en las tradiciones textiles del país!"],
"musica":["Juan Gabriel","Fue un cantante y compositor mexicano que escribió canciones famosas como Amor eterno y Querida.","¡Compuso más de 1,800 canciones y vendió millones de discos durante su carrera!"],
"administracion-de-empresas":["Xavier López Ancona","Estudió Administración de Empresas y creó KidZania, ¡una ciudad donde los niños aprenden jugando a tener diferentes profesiones!","¡Su proyecto nació de la idea de enseñar a los niños cómo funciona el mundo de los adultos!"],
"reposteria-y-panaderia":["Gris Verduzco","Es una repostera mexicana que comparte recetas en YouTube. Crea postres con diseños divertidos y coloridos.","¡Publicó sus propios libros de recetas y actividades, llevando su marca más allá de YouTube!"],
"marketing-y-publicidad":["Edson Noyola","Estudió Mercadotecnia y dirigió campañas de marcas como Coca-Cola y Corona. Después, creó su propia agencia de publicidad.","¡Su trabajo consiste en crear ideas para que las marcas se queden en la memoria de las personas!"],
"emprendimiento":["Arturo Elías Ayub","Es un empresario mexicano que ha participado en proyectos de emprendimiento. También fue inversionista en el programa Shark Tank México.","¡Es conocido por ayudar a emprendedores a convertir sus ideas en negocios!"],
"gastronomia":["Enrique Olvera","Nacido en CDMX, ha sido reconocido como uno de los mejores chefs del mundo.","¡Abrió su famoso restaurante Pujol en la Ciudad de México cuando tenía solo 24 años!"],
"biologia":["Julia Carabias","Es una bióloga mexicana que protege selvas y ayuda a recuperar la naturaleza.","¡Ayudó a crear áreas naturales protegidas en México para cuidar animales y plantas!"],
"agricultura":["Antonio Narro","Dejó su hacienda en Saltillo para crear una escuela de agricultura.","¡Hoy es la universidad que lleva su nombre!"],
"aviacion":["Emilio Carranza","Fue un piloto de Ramos Arizpe. En 1927 voló de Ciudad de México a Ciudad Juárez sin escalas.","¡Su avión se llamaba Coahuila!"],
"maquillaje":["Luis Torres","Es un maquillista mexicano famoso por crear looks creativos para celebridades y trabajar en el mundo de la belleza.","¡Ha maquillado a estrellas como Kendall Jenner y Salma Hayek, e incluso trabajó en la famosa Met Gala!"],
"fisica":["Margaret Domínguez","Es una científica mexicana que trabaja en tecnología óptica para telescopios espaciales, ayudando a los científicos a estudiar el universo.","¡Trabajó en proyectos de la NASA!"]};
const GLOSS=[["Beca","Ayuda económica que permite estudiar y que puede cubrir una parte o todos los gastos escolares."],["Campo laboral","Conjunto de trabajos y lugares donde una persona puede trabajar según lo que estudió o sabe hacer."],["Carrera","Conjunto de estudios y materias que una persona realiza para prepararse para un trabajo o profesión."],["Especialidad","Área específica de una carrera o profesión en la que una persona decide enfocarse y aprender más."],["Habilidad","Capacidad para hacer algo bien, como dibujar, resolver problemas, cocinar o trabajar en equipo."],["Oficio","Trabajo que se aprende principalmente mediante la práctica y que requiere habilidades específicas, como la carpintería, la panadería o la plomería."],["Profesión","Trabajo que generalmente requiere estudios o preparación especializada, como la medicina, la arquitectura o la docencia."],["Universidad","Institución educativa donde las personas pueden estudiar una carrera y obtener un título profesional."],["Vocación","Interés o inclinación por realizar cierto tipo de trabajo o actividad que te gusta y te motiva."]];
const MAG_PAGES=12; // reemplazar por imágenes/PDF de la revista

/* ===== UTILIDADES ===== */
const $=(s,r=document)=>r.querySelector(s), esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const norm=t=>t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
const byId=id=>CAREERS.find(c=>c[0]===id);
const ph=(t,h)=>`<div class="ph" role="img" aria-label="Espacio para ${esc(t)}" ${h?`style="min-height:${h}px"`:""}>${esc(t)}<br>(espacio reservado)</div>`;

/* ===== COMPONENTES ===== */
// Letras de colores como en la portada (sin el amarillo, que no se lee sobre crema)
const LOGO="logo.svg";
// Fotos de las carreras: id -> texto alternativo. Archivos en img/<id>.webp (1200 px) e img/<id>-sm.webp (600 px, para tarjetas)
const IMGS={
"arquitectura":"Edificio moderno de formas triangulares iluminado al anochecer",
"ingenieria-civil":"Ingeniero con casco y planos supervisando una obra en construcción",
"carpinteria":"Martillo, clavos, regla y cinta métrica sobre tablas de madera",
"medicina":"Médica con estetoscopio dibujando sobre una pantalla con el esqueleto y los órganos del cuerpo",
"veterinaria":"Veterinaria revisando con estetoscopio a un perro labrador",
"nutricion":"Nutrióloga sonriente anotando junto a frutas y verduras",
"docencia":"Maestro con un grupo de niñas y niños señalando un globo terráqueo en una biblioteca",
"derecho":"Balanza de la justicia y mazo sobre una mesa de madera",
"programacion":"Manos escribiendo código en una computadora",
"ingenieria-mecanica":"Trabajador con casco y lentes usando una máquina en una fábrica",
"diseno-de-moda":"Escritorio de diseñadora con boceto de vestido, telas y muestras de color",
"musica":"Guitarras, teclado y micrófono en un cuarto de música",
"administracion-de-empresas":"Equipo en una sala de juntas viendo gráficas en una pantalla",
"marketing-y-publicidad":"Calle con pantallas de publicidad y anuncios luminosos",
"emprendimiento":"Joven emprendedora trabajando en una laptop en su taller de ropa",
"gastronomia":"Chef agregando el toque final a un platillo",
"reposteria-y-panaderia":"Manos con guantes decorando un pastel con fresas y moras",
"biologia":"Mano con guante sosteniendo un tubo con líquido verde junto a plantas",
"agricultura":"Manos con guantes cuidando lechugas en un huerto",
"aviacion":"Avión volando sobre las nubes al atardecer",
"atleta":"Atleta en pleno salto en una competencia",
"maquillaje":"Maquillista aplicando máscara de pestañas a una modelo",
"quimica":"Dos científicos observando un matraz en un laboratorio",
"fisica":"Persona escribiendo fórmulas en un pizarrón"};
const imgSrc=(id,sm)=>(window.IMGDATA&&IMGDATA[id+(sm?"-sm":"")])||"img/"+id+(sm?"-sm":"")+".webp";
const imgTag=(id,sm)=>IMGS[id]?`<img class="${sm?"cthumb":"cphoto"}" src="${imgSrc(id,sm)}" alt="${IMGS[id]}" loading="lazy">`:"";

const PAL=["#8153A4","#EB5C24","#F39202","#2DB989","#E63172"];
const rb=t=>{let n=0;return [...t].map(l=>l===" "?" ":`<span aria-hidden="true" style="color:${PAL[n++%5]}">${l}</span>`).join("")};
const careerCard=c=>`<article class="card">${imgTag(c[0],true)||ph("ilustración",110)}<span class="tag">${CATS[c[2]]}</span><h3>${c[1]}</h3><p class="brief">${DESCS[c[0]]||c[3]}</p><a class="btn alt" href="#carrera-${c[0]}">Conocer más</a></article>`;

/* ===== ACTIVIDADES "EN ACCIÓN" (ejemplos; reemplazar con las reales) ===== */
const ACT=[
["arquitectura","Arquitectura","Diseña tu propia casa","Hoja, lápiz, colores y regla.",["Dibuja una casa vista desde arriba, sin techo.","Agrega cuartos, cocina, baño y sala.","Dibuja puertas, ventanas y un jardín o patio.","Ponle un nombre a tu casa."]],
["ingenieria-civil","Ingeniería","¡Construye un puente resistente!","2 hojas de papel, 2 libros y monedas.",["Coloca una hoja plana entre dos libros separados.","Agrega monedas poco a poco y observa cuánto soporta.","Dobla la otra hoja en forma de acordeón y colócala entre los mismos libros.","Agrega monedas y compara los resultados.","Piensa como ingeniero: ¿Qué puente resistió más y por qué?"]],
["carpinteria","Carpintería","¡Diseña tu propio mueble!","Hoja, lápiz y colores.",["Imagina que vas a construir una mesa, una silla o un mueble diferente.","Dibuja tu mueble en una hoja y coloréalo.","Inventa un nombre para tu creación.","Completa la información.","Nombre de mi mueble:","¿Para qué sirve?","¿De qué color será?"]],
["medicina","Medicina","¡Conviértete en detective de la salud!","Hoja, lápiz y colores.",["Imagina que un personaje se siente cansado y tiene dolor de garganta.","Escribe tres preguntas que le harías para conocer sus síntomas.","Dibuja tres hábitos que podrían ayudarle a cuidar su salud.","Escribe por qué es importante consultar a un médico cuando nos sentimos mal.","Piensa como médico: ¿Por qué es importante escuchar al paciente antes de recomendar un tratamiento?"]],
["veterinaria","Veterinaria","¡Crea una ficha para una mascota!","Hoja, lápiz y colores.",["Elige un animal que pueda ser una mascota.","Dibújalo y escribe su nombre, edad y especie.","Anota tres cosas que necesita para estar saludable.","Dibuja un lugar seguro y cómodo para vivir.","Piensa como veterinario: ¿Cómo puedes saber si un animal necesita ayuda?"]],
["nutricion","Nutrición","¡Arma un plato equilibrado!","Hoja, lápiz y colores.",["Dibuja un plato grande.","Divídelo en secciones para incluir frutas, verduras, cereales y alimentos con proteínas.","Dibuja tus alimentos favoritos en cada sección.","Ponle un nombre a tu plato.","Piensa como nutriólogo: ¿Por qué es bueno comer alimentos variados?"]],
["docencia","Docencia","¡Conviértete en maestro por un día!","Hoja, lápiz y colores.",["Elige algo que te gustaría enseñar, como dibujar, sumar o cuidar plantas.","Escribe tres pasos para enseñar esa habilidad.","Dibuja un pizarrón con tu explicación.","Inventa una pregunta o un juego para comprobar si tus alumnos aprendieron.","Piensa como maestro: ¿Cómo explicarías tu tema de otra manera si alguien no lo entiende?"]],
["derecho","Derecho","¡Resuelve el caso!","Hoja y lápiz.",["Imagina que le prestaste un plumón a un amigo y se le rompió la tapa. Tú quieres que te compre un paquete nuevo, pero él no quiere pagar porque fue un accidente.","Hechos: Anota lo que pasó sin enojarte ni exagerar.","Analiza: ¿Es justo exigir un paquete entero si solo se dañó una pieza?","Veredicto: Propón una solución justa para ambos.","Escribe por qué elegiste esa solución.","Piensa como abogado: ¿Cómo defenderías tu propuesta con argumentos?"]],
["programacion","Programación","¡Programa al robot!","Hoja, lápiz y regla.",["Dibuja una cuadrícula de 5 × 5 cuadros.","Coloca un robot en una esquina y una estrella en la esquina opuesta.","Agrega tres obstáculos en diferentes cuadros.","Escribe instrucciones para llevar al robot hasta la estrella sin tocar los obstáculos.","Piensa como programador: ¿Puedes encontrar otra ruta para llegar a la estrella?"]],
["ingenieria-mecanica","Ingeniería mecánica","¡Pon a prueba tu carrito!","Carrito de juguete, libros pequeños y superficie plana.",["Prepara una pista para tu carrito sobre una superficie plana.","Empújalo suavemente y mide la distancia que recorre.","Coloca un objeto pequeño encima del carrito y repite la prueba.","Compara las distancias de ambos intentos.","Dibuja una mejora que le harías al carrito.","Piensa como ingeniero mecánico: ¿Cómo cambió el movimiento al agregar peso?"]],
["diseno-de-moda","Diseño de moda","¡Crea tu propia colección!","Hojas, lápiz, regla, colores y telas opcionales.",["Elige un tema para tu colección de ropa.","Diseña tres prendas diferentes.","Decide sus colores, telas y estampados.","Ponle un nombre a tu colección.","Escribe para quién está diseñada y qué la hace especial.","Piensa como diseñador: ¿Cómo reflejan tus prendas el tema que elegiste?"]],
["musica","Música","¡Crea tu propio ritmo!","Hoja, lápiz y objetos que puedan producir sonidos, como lápices y recipientes.",["Elige tres sonidos diferentes que puedas hacer con tu voz, tus manos u objetos.","Asigna un símbolo a cada sonido.","Dibuja una secuencia de símbolos para crear un ritmo.","Interpreta tu secuencia siguiendo el orden que dibujaste.","Cambia el orden de los sonidos y crea otro ritmo.","Piensa como músico: ¿Cómo cambia la música cuando modificas el orden de los sonidos?"]],
["administracion-de-empresas","Administración de empresas","¡Administra tu propio negocio!","Hoja, lápiz, colores y 100 monedas de papel o dibujadas.",["Elige un negocio e inventa su nombre.","Dibuja su logotipo.","Escribe tres productos que venderías.","Reparte tus 100 monedas entre materiales, decoración y publicidad.","Completa la información.","Mi negocio:","Mis productos:","¿Cómo atraeré clientes?","Piensa como administrador: ¿Cómo organizarías tu dinero para que el negocio funcione?"]],
["marketing-y-publicidad","Marketing y publicidad","¡Haz que todos conozcan tu producto!","Hoja, lápiz y colores.",["Imagina un producto nuevo y ponle nombre.","Diseña un logotipo para tu producto.","Crea una frase publicitaria corta y llamativa.","Dibuja un anuncio para promocionarlo.","Explica a quién va dirigido y por qué podría interesarle.","Piensa como especialista en marketing: ¿Qué harías para llamar la atención de más personas?"]],
["emprendimiento","Emprendimiento","¡Convierte tu idea en un proyecto!","Hoja, lápiz y colores.",["Piensa en un problema cotidiano que te gustaría resolver.","Inventa un producto o servicio que pueda ayudar.","Dibuja tu idea y ponle un nombre.","Escribe qué materiales necesitarías y quiénes podrían utilizarlo.","Explica cómo tu idea ayudaría a otras personas.","Piensa como emprendedor: ¿Qué hace que tu idea sea útil y diferente?"]],
["gastronomia","Gastronomía","¡Inventa un platillo!","Hoja, lápiz y colores.",["Imagina un platillo que nunca hayas visto.","Dibuja cómo se vería al servirlo.","Escribe cinco ingredientes que utilizarías.","Inventa un nombre para tu platillo.","Describe su sabor y explica para quién lo prepararías.","Piensa como chef: ¿Qué combinación de ingredientes haría especial tu platillo?"]],
["reposteria-y-panaderia","Repostería y panadería","¡Diseña un pan divertido!","Hoja, lápiz y colores.",["Elige un animal.","Dibuja un pan con la forma de ese animal, utilizando hasta cinco piezas.","Señala las partes de tu creación.","Inventa un nombre y un sabor para tu pan.","Piensa como panadero: ¿Qué ingredientes utilizarías para darle ese sabor?"]],
["biologia","Biología","¡Explora el mundo de las plantas!","Papel, lápiz y dos plantas para observar.",["Observa dos plantas diferentes sin dañarlas.","Dibuja una hoja de cada planta.","Anota dos semejanzas y dos diferencias.","Escribe una pregunta sobre algo que te haya llamado la atención.","Piensa como biólogo: ¿Qué descubriste al comparar las plantas?"]],
["agricultura","Agricultura","¡Planea tu propio huerto!","Hoja, lápiz y colores.",["Imagina que tienes un pequeño terreno para cultivar alimentos.","Dibuja cómo organizarías tu huerto.","Elige tres plantas o alimentos que te gustaría cultivar.","Escribe qué necesita cada uno para crecer.","Dibuja cómo lo protegerías de las plagas y cómo lo regarías.","Piensa como agricultor: ¿Por qué es importante cuidar el agua y el suelo?"]],
["aviacion","Aviación","¡Diseña tu ruta de vuelo!","Hoja, lápiz, regla y colores.",["Dibuja un mapa sencillo con un aeropuerto de salida y otro de llegada.","Agrega montañas, ciudades, ríos u otros elementos.","Traza una ruta para un avión entre los dos aeropuertos.","Marca los lugares que el avión debe evitar.","Inventa un nombre para tu vuelo.","Piensa como profesional de la aviación: ¿Por qué es importante planear una ruta antes de volar?"]],
["atleta","Atletismo","¡Supera tu salto!","Pared, notas adhesivas y regla.",["Pega una nota adhesiva en la pared a la altura que alcances con el brazo extendido.","Da un salto e intenta colocar otra nota más arriba.","Mide la diferencia entre ambas alturas.","Repite el intento hasta tres veces y registra tus resultados.","Piensa como atleta: ¿Qué puedes hacer para mejorar tu técnica de salto? Recuerda realizar la actividad en un lugar seguro y con espacio suficiente."]],
["maquillaje","Maquillaje artístico","¡Crea el maquillaje de un personaje!","Hoja, lápiz y colores.",["Imagina un personaje: una sirena, un robot, una mariposa o un héroe.","Elige tres colores para su maquillaje.","Dibuja un diseño con líneas, figuras o patrones.","Ponle un nombre a tu personaje.","Explica qué representan los colores y las formas que elegiste.","Piensa como maquillista: ¿Cómo puedes usar el maquillaje para expresar la personalidad de tu personaje?"]],
["quimica","Química","¡Infla un globo sin soplar!","Botella de plástico, globo, vinagre y bicarbonato de sodio.",["Pide ayuda a un adulto y coloca aproximadamente un tercio de taza de vinagre dentro de la botella.","Con un embudo, agrega dos cucharadas de bicarbonato dentro del globo.","Ajusta la boca del globo al cuello de la botella sin dejar caer todavía el bicarbonato.","Levanta el globo para que el bicarbonato caiga dentro de la botella.","Observa cómo se infla el globo.","Piensa como químico: ¿Qué gas hizo que el globo se inflara?","Precaución: realiza el experimento con supervisión de un adulto y no cierres la botella con una tapa rígida."]],
["fisica","Física","¡Descubre cómo caen los objetos!","Dos hojas de papel y una mesa.",["Deja una hoja extendida y haz una bolita con la otra.","Sostén ambas a la misma altura.","Suéltalas al mismo tiempo.","Observa cuál llega primero al suelo.","Repite el experimento y compara los resultados.","Piensa como físico: ¿Cómo influye la resistencia del aire en la caída de los objetos?"]]
].map(([c,cn,t,m,p])=>({c,cn:byId(c)[1],t,m,p})); // c = id de la carrera, cn = nombre tal como aparece en la actividad
/* ===== TESTS "¿TE IDENTIFICAS?" (ejemplos). tipo "abc": gana la letra más elegida. tipo "check": se cuentan las palomitas ===== */
// Tests por carrera. c = id de la carrera. Con "i": lista de frases (se marcan con ✓) y "fin" = mensaje si marcan varias.
// Con "q": preguntas a/b/c ([pregunta,[a,b,c]]) y "r" = resultado según la letra con más respuestas. "h" = título opcional.
const TESTS=[
{c:"arquitectura",h:"¿Imaginas espacios increíbles?",i:["Me gusta imaginar espacios nuevos.","Disfruto trabajar en equipo.","Me interesan el arte y el diseño.","Me gusta resolver problemas.","Disfruto crear cosas nuevas."],fin:"¡la arquitectura podría ser para ti!"},
{c:"derecho",h:"¿Cómo defenderías la justicia?",q:[["En un problema:",["Defiendo mi postura.","Busco hacer las paces.","Investigo lo que pasó."]],["Tu fuerte:",["Convencer.","Negociar.","Analizar."]],["Tu superpoder:",["Hablar en público.","Resolver conflictos.","Buscar la verdad."]]],r:["¡Litigante! Defiendes causas y convences.","¡Mediador! Logras acuerdos.","¡Jurista! Analizas reglas y buscas la verdad."]},
{c:"medicina",h:"¿Te gustaría cuidar la salud?",i:["Cuido a mis amigos cuando se sienten mal.","Me da curiosidad saber cómo funciona el cuerpo.","Me gusta escuchar y saber cómo están los demás.","Me interesa aprender sobre salud y alimentación.","Me gusta investigar y resolver problemas.","Quiero ayudar a otros a mantenerse sanos."],fin:"¡la medicina podría ser para ti!"},
{c:"ingenieria-civil",h:"¿Eres constructor/a de ideas?",i:["Me gusta construir cosas y descubrir cómo funcionan.","Disfruto resolver problemas.","Me interesa diseñar casas, puentes y edificios.","Me gusta trabajar en equipo.","Me interesa crear construcciones resistentes."],fin:"¡la ingeniería civil podría ser para ti!"},
{c:"programacion",h:"¿Qué programador/a serías?",q:[["¿Qué te gustaría crear?",["Un videojuego.","Una aplicación útil.","Una herramienta de diseño."]],["Si una aplicación no funciona:",["Busco el error.","Pruebo otra idea.","Investigo cómo funciona."]],["¿Qué disfrutas más?",["Resolver acertijos.","Inventar juegos e historias.","Descubrir cómo funciona la tecnología."]]],r:["¡Detective del código!","¡Programador creativo!","¡Explorador tecnológico!"]},
{c:"ingenieria-mecanica",h:"¿Te fascinan las máquinas?",i:["Me gusta saber cómo funcionan las máquinas.","Disfruto armar, desarmar y reparar objetos.","Me gusta resolver problemas y encontrar soluciones."],fin:"¡la ingeniería mecánica podría ser para ti!"},
{c:"administracion-de-empresas",h:"¿Naciste para organizar y liderar?",i:["Soy una persona creativa.","Me gusta trabajar en equipo.","Se me facilita resolver problemas.","Me gusta tomar decisiones.","Me gusta administrar mi dinero.","Me gusta liderar grupos.","Me interesa crear mi propio negocio.","Me gusta encontrar nuevas ideas."],fin:"¡la administración de empresas podría ser para ti!"},
{c:"reposteria-y-panaderia",h:"¿Te gusta hornear y decorar?",i:["Me gusta crear cosas con mis manos.","Me interesa preparar postres.","Disfruto decorar.","Me gusta seguir instrucciones.","Tengo paciencia.","Me gusta trabajar con limpieza.","Disfruto probar nuevas ideas.","Aprendo de mis errores."],fin:"¡la repostería y panadería podrían ser para ti!"},
{c:"marketing-y-publicidad",h:"¿Se te dan las ideas llamativas?",i:["Me gusta crear ideas.","Disfruto diseñar.","Me interesa conocer los gustos de las personas.","Me gusta organizar eventos.","Disfruto crear contenido.","Me gusta convencer.","Me gusta inventar frases.","Me interesa crear marcas."],fin:"¡el marketing y la publicidad podrían ser para ti!"},
{c:"atleta",h:"¿Qué atleta eres?",q:[["En el recreo:",["Correr.","Jugar en equipo.","Hacer piruetas."]],["Tu meta:",["Ser el más rápido.","Divertirte con amigos.","Dominar trucos."]],["Si pierdes:",["Pides revancha.","Animas al equipo.","Mejoras tu técnica."]]],r:["⚡ ¡Velocista! Amas la velocidad y competir.","⚽ ¡De equipo! Te encanta jugar en grupo.","🎯 ¡Técnico! Buscas el control y la precisión."]},
{c:"biologia",h:"¿Eres explorador/a de la vida?",i:["Me interesa la naturaleza.","Me gusta observar animales.","Siento curiosidad por las plantas.","Me gusta hacer preguntas.","Disfruto investigar.","Tengo paciencia.","Me gusta anotar mis descubrimientos.","Disfruto trabajar en equipo."],fin:"¡la biología podría ser para ti!"},
{c:"maquillaje",h:"¿Qué tipo de maquillista serías?",q:[["¿En qué te gustaría trabajar?",["Bodas y fiestas.","Películas y personajes.","Fotos y anuncios."]],["¿Qué te gustaría crear?",["Un look elegante.","Un maquillaje de fantasía.","Un look para una revista."]],["¿Qué disfrutas más?",["Preparar a alguien para un evento.","Transformar actores en personajes.","Combinar maquillaje, ropa y colores."]]],r:["¡Maquillista social!","¡Maquillista de cine!","¡Maquillista de moda!"]},
{c:"quimica",h:"¿Qué químico eres?",q:[["Al experimentar:",["Observo reacciones y colores.","Creo mezclas e inventos.","Mido con precisión."]],["Tu superpoder:",["Transformar la materia.","Inventar materiales.","Descubrir lo invisible."]],["En el laboratorio prefieres:",["Observar reacciones.","Diseñar experimentos.","Analizar muestras."]]],r:["💥 ¡Experto en reacciones! Te fascinan los cambios.","🧬 ¡Inventor! Te encanta crear cosas útiles.","🔬 ¡Detective científico! Buscas precisión y nuevos descubrimientos."]},
{c:"fisica",h:"¿Qué parte de la física te llama?",ins:"Marca con una ✓ las actividades que más te gusten.",i:["Observar las estrellas y los planetas.","Hacer experimentos y crear cosas.","Descubrir por qué se mueven los objetos.","Resolver problemas matemáticos.","Investigar cómo funciona la energía.","Descubrir cómo funcionan las cosas."],tm:["Espacio: ¡Explorador del universo!","Experimentos: ¡Científico creativo!","Movimiento: ¡Investigador curioso!"],map:[0,1,2,0,2,1]},
{c:"carpinteria",h:"¿Eres artesano/a de la madera?",i:["Me gusta construir cosas con mis manos.","Disfruto dibujar e imaginar juguetes o muebles.","Me gusta armar bloques o rompecabezas.","Disfruto medir cosas y descubrir sus tamaños.","Me gusta reparar o arreglar cosas rotas."],fin:"¡la carpintería podría ser para ti!"},
{c:"veterinaria",h:"¿Eres amigo/a de los animales?",i:["Me emociona convivir y jugar con las mascotas.","Me preocupa cuando un animal está triste o lastimado.","Me da curiosidad saber cómo viven los animales.","Quiero aprender a curar animales.","Me interesa proteger a los animales y defender sus derechos."],fin:"¡la veterinaria podría ser para ti!"},
{c:"nutricion",h:"¿Qué tipo de nutriólogo/a serías?",q:[["A la hora de comer:",["Me fijo en cómo se ve la comida.","Pregunto qué ingredientes tiene.","Me gusta probar cosas nuevas."]],["En casa:",["Me gusta ayudar a preparar la mesa.","Me interesa saber qué alimentos aportan energía.","Propongo opciones de comida saludable."]],["Cuando juegas o haces deporte:",["Me da curiosidad saber qué comer para tener energía.","Me interesa aprender sobre la hidratación.","Me gusta compartir mi lunch con mis amigos."]]],r:["¡Creativo! Te interesa la presentación de los alimentos.","¡Curioso! Te gusta aprender sobre nutrición y salud.","¡Compartido! Disfrutas probar y compartir alimentos."]},
{c:"docencia",h:"¿Qué tipo de maestro/a serías?",q:[["Cuando juegas a la escuela:",["Prefiero ser el maestro que explica.","Me gusta revisar los trabajos.","Invento juegos para aprender."]],["Si un compañero no entiende un tema:",["Se lo explico con otras palabras.","Le presto mis apuntes organizados.","Le enseño un truco para recordarlo."]],["Lo que más me gusta de mis maestros es:",["Que me enseñen cosas nuevas.","Que tengan paciencia cuando me equivoco.","Que hagan actividades divertidas."]]],r:["¡Explicador! Te gusta ayudar a otros a entender.","¡Organizado! Disfrutas ordenar información.","¡Dinámico! Te gusta enseñar de forma divertida."]},
{c:"musica",h:"¿Llevas la música por dentro?",i:["Me gusta cantar o tocar instrumentos musicales.","Disfruto escuchar y descubrir música nueva.","Me gusta crear canciones o melodías.","Disfruto expresar emociones a través de la música."],fin:"¡la música podría ser para ti!"},
{c:"emprendimiento",h:"¿Qué emprendedor eres?",q:[["¿Qué negocio crearías?",["Un producto innovador.","Un negocio rentable.","Un proyecto que ayude a otros."]],["¿Qué disfrutas más?",["Imaginar ideas nuevas.","Organizar y administrar.","Trabajar en equipo."]],["Si tu negocio enfrenta un problema:",["Pruebo nuevas ideas.","Reviso los gastos y las ventas.","Escucho a los clientes."]]],r:["¡Creativo e innovador!","¡Buen estratega!","¡Colaborador!"]},
{c:"agricultura",h:"¿Tienes mano para las plantas?",i:["Me gusta cuidar plantas.","Disfruto estar en el campo.","Quiero cultivar alimentos.","Me gusta observar detalles.","Tengo paciencia.","Soy constante.","Disfruto buscar soluciones.","Me gusta investigar."],fin:"¡la agronomía podría ser para ti!"},
{c:"diseno-de-moda",h:"¿Qué diseñador/a eres?",q:[["¿Qué te gusta más?",["Crear diseños originales.","Medir y elaborar prendas.","Combinar colores y accesorios."]],["¿Qué harías si una prenda no queda bien?",["Cambiaría su diseño.","Corregiría las medidas.","Probaría otros colores o telas."]],["¿Qué proyecto elegirías?",["Diseñar una colección.","Crear una prenda con patrones.","Combinar ropa para una ocasión."]]],r:["¡Diseñador creativo! Te gusta imaginar diseños originales.","¡Experto en confección! Te interesan las medidas y las técnicas.","¡Estilista! Disfrutas combinar colores, prendas y accesorios."]},
{c:"aviacion",h:"¿Te ves en la cabina de un avión?",i:["Me interesan los aviones.","Me gusta seguir mapas.","Me fijo en los detalles.","Me gusta seguir instrucciones.","Reviso todo antes de empezar.","Me gusta tomar decisiones con calma.","Me comunico con claridad.","Disfruto trabajar en equipo."],fin:"¡la aviación podría ser para ti!"},
{c:"gastronomia",h:"¿Eres chef en potencia?",i:["Me gusta cocinar.","Disfruto probar nuevos sabores.","Me gusta decorar platillos.","Me interesa aprender técnicas de cocina.","Disfruto compartir comida con los demás."],fin:"¡la Gastronomía podría ser para ti!"}];
// "varias" = al menos la mitad de las frases (cambiar VARIAS si se quiere otro criterio)
const VARIAS=n=>Math.ceil(n/2);
function testHTML(t,tag=true){const n=byId(t.c)[1];
const body=t.q?t.q.map((q,i)=>`<fieldset><legend>${i+1}. ${q[0]}</legend>${q[1].map((o,j)=>`<label><input type="radio" name="${t.c}q${i}" value="${j}"> <b>${"ABC"[j]})</b> ${o}</label>`).join("")}</fieldset>`).join(""):`<p>${t.ins||"Marca con una ✓ las frases que te describan."}</p><ul class="checks">${t.i.map((s,j)=>`<li><label><input type="checkbox" data-n="${j}"> ${s}</label></li>`).join("")}</ul>`;
return `<div class="box" data-c="${t.c}"><h2>${t.h||"¿Te identificas con "+n+"?"}</h2>${tag?`<span class="tag">Carrera: ${n}</span>`:""}${body}<p class="btns"><button class="btn go" type="button">Ver mi resultado</button><button class="btn alt clr" type="button">Borrar respuestas</button></p><div class="res" aria-live="polite"></div></div>`}
function runTest(t,box){const out=box.querySelector(".res");let h="";
const link=location.hash==="#carrera-"+t.c?"":`<p><a class="btn" href="#carrera-${t.c}">Ver carrera</a></p>`;
if(t.q){const n=[0,0,0];let d=0;t.q.forEach((q,i)=>{const s=box.querySelector('input[name="'+t.c+'q'+i+'"]:checked');if(s){n[+s.value]++;d++}});
if(d<t.q.length){out.textContent="Responde todas las preguntas para ver tu resultado.";return}
const m=Math.max(...n);n.forEach((v,i)=>{if(v===m)h+=`<p><b>Mayoría ${"ABC"[i]}:</b> ${t.r[i]}</p>`})}
else{const on=[...box.querySelectorAll("input:checked")],c=on.length;
if(!c){out.textContent="Marca al menos una opción para ver tu resultado.";return}
if(t.tm){if(t.map){const z=[0,0,0];on.forEach(x=>z[t.map[+x.dataset.n]]++);const m=Math.max(...z);h=z.map((v,i)=>v===m?`<p>${t.tm[i]}</p>`:"").join("")}
else h=`<p>Tu resultado puede ser:</p><ul>${t.tm.map(x=>`<li>${x}</li>`).join("")}</ul>`}
else h=c>=VARIAS(t.i.length)?`<p><b>Marcaste ${c} de ${t.i.length}.</b> ${t.fin.replace(/^¡./,m=>m.toUpperCase())}</p>`:`<p>Marcaste ${c} de ${t.i.length}. Aun así, ¡explora la carrera para ver si te interesa!</p>`}
out.innerHTML=h+link}
function bindTests(root){if(!root)return;root.onclick=e=>{const b=e.target.closest(".go,.clr");if(!b)return;const box=b.closest(".box"),t=TESTS.find(x=>x.c===box.dataset.c);
if(b.classList.contains("clr")){box.querySelectorAll("input").forEach(i=>i.checked=false);box.querySelector(".res").innerHTML="";return}runTest(t,box)}}

//HAB-START
const SKILL_CATS=[
["Creatividad y diseño",["Creatividad","Dibujo y diseño","Uso y combinación de colores","Sentido del ritmo"]],
["Pensamiento y ciencia",["Pensamiento lógico y analítico","Pensamiento crítico","Pensamiento científico","Matemáticas y cálculo","Investigación","Curiosidad","Observación","Resolución de problemas","Medición y precisión"]],
["Comunicación y relaciones",["Comunicación y expresión de ideas","Empatía","Escucha activa","Sentido de justicia","Trabajo en equipo","Liderazgo"]],
["Organización y responsabilidad",["Organización","Responsabilidad","Higiene y orden","Toma de decisiones","Adaptabilidad"]],
["Paciencia, disciplina y concentración",["Paciencia","Atención al detalle","Disciplina y constancia","Concentración"]],
["Habilidades prácticas",["Destreza manual"]]];
// habilidades por carrera (id del catálogo). Editar aquí para cambiar el filtro.
const CS={
"arquitectura":["Creatividad","Dibujo y diseño","Matemáticas y cálculo","Resolución de problemas"],
"ingenieria-civil":["Creatividad","Matemáticas y cálculo","Resolución de problemas","Trabajo en equipo","Pensamiento lógico y analítico","Medición y precisión"],
"carpinteria":["Creatividad","Medición y precisión","Destreza manual","Resolución de problemas","Atención al detalle","Paciencia"],
"medicina":["Empatía","Pensamiento crítico","Comunicación y expresión de ideas","Responsabilidad","Observación","Investigación"],
"veterinaria":["Empatía","Paciencia","Observación","Responsabilidad","Investigación"],
"nutricion":["Comunicación y expresión de ideas","Empatía","Organización","Pensamiento crítico","Investigación"],
"docencia":["Comunicación y expresión de ideas","Paciencia","Empatía","Creatividad","Organización","Trabajo en equipo"],
"derecho":["Pensamiento crítico","Comunicación y expresión de ideas","Investigación","Sentido de justicia","Pensamiento lógico y analítico"],
"programacion":["Pensamiento lógico y analítico","Creatividad","Resolución de problemas","Atención al detalle","Paciencia"],
"ingenieria-mecanica":["Pensamiento lógico y analítico","Matemáticas y cálculo","Creatividad","Resolución de problemas","Medición y precisión"],
"diseno-de-moda":["Creatividad","Dibujo y diseño","Uso y combinación de colores","Medición y precisión"],
"musica":["Creatividad","Sentido del ritmo","Escucha activa","Paciencia","Disciplina y constancia"],
"administracion-de-empresas":["Organización","Liderazgo","Comunicación y expresión de ideas","Resolución de problemas","Toma de decisiones","Trabajo en equipo"],
"marketing-y-publicidad":["Creatividad","Dibujo y diseño","Comunicación y expresión de ideas","Organización","Pensamiento lógico y analítico","Uso y combinación de colores"],
"emprendimiento":["Creatividad","Organización","Liderazgo","Comunicación y expresión de ideas","Resolución de problemas","Toma de decisiones","Adaptabilidad"],
"gastronomia":["Creatividad","Medición y precisión","Paciencia","Organización","Trabajo en equipo","Resolución de problemas"],
"reposteria-y-panaderia":["Creatividad","Medición y precisión","Paciencia","Organización","Atención al detalle"],
"biologia":["Curiosidad","Pensamiento científico","Observación","Investigación","Paciencia","Trabajo en equipo"],
"agricultura":["Observación","Paciencia","Pensamiento científico","Resolución de problemas","Investigación","Organización"],
"aviacion":["Atención al detalle","Responsabilidad","Comunicación y expresión de ideas","Toma de decisiones","Pensamiento lógico y analítico","Trabajo en equipo"],
"atleta":["Disciplina y constancia","Concentración","Trabajo en equipo","Adaptabilidad","Observación","Paciencia"],
"maquillaje":["Creatividad","Medición y precisión","Uso y combinación de colores","Higiene y orden","Destreza manual"],
"quimica":["Curiosidad","Pensamiento lógico y analítico","Medición y precisión","Paciencia","Pensamiento científico","Investigación"],
"fisica":["Curiosidad","Pensamiento lógico y analítico","Observación","Resolución de problemas","Matemáticas y cálculo","Pensamiento científico","Investigación"]};
//HAB-END
function skillsPage(){return `<div id="habilidades"><div class="sk-head k0"><h2>¿Qué habilidades van contigo?</h2><p>Elige las que te gustan. Después descubre carreras que las ponen en acción.</p></div><div class="sk-cols"><aside class="sk-side k1"><div class="sk-top"><h3>Elige tus habilidades</h3><span id="sk-n" aria-live="polite">0 seleccionadas</span></div>${SKILL_CATS.map(c=>`<details class="sk-cat"><summary><span class="pm" aria-hidden="true"></span><span class="nm">${c[0]}</span><span class="ct">${c[1].length} ${c[1].length===1?"habilidad":"habilidades"}</span></summary><div class="skills">${c[1].map(s=>`<label><input type="checkbox" value="${s}"> ${s}</label>`).join("")}</div></details>`).join("")}<button class="btn wide" id="sk-go" type="button">Encontrar carreras</button><button class="btn alt wide" id="sk-clr" type="button">Limpiar selección</button></aside><div id="sk-out" aria-live="polite"></div></div></div>`}
function initSkills(){const q=s=>document.querySelector(s),bx=[...document.querySelectorAll("#habilidades input")],out=q("#sk-out");
const sel=()=>bx.filter(b=>b.checked).map(b=>b.value);
const draw=()=>{const s=sel(),n=s.length;q("#sk-n").textContent=n+(n===1?" seleccionada":" seleccionadas");
document.querySelectorAll(".sk-cat").forEach(d=>{const k=d.querySelectorAll("input:checked").length,t=d.querySelectorAll("input").length;d.querySelector(".ct").textContent=k?k+(k===1?" elegida":" elegidas"):t+(t===1?" habilidad":" habilidades")});
const rows=CAREERS.map(c=>({c,m:(CS[c[0]]||[]).filter(k=>s.includes(k))})).sort((a,b)=>b.m.length-a.m.length);
let eb="Todas las posibilidades",h="Carreras para explorar",r=rows;
if(n){const full=rows.filter(x=>x.m.length===n);if(full.length){eb="Coincidencia completa";h="¡Encajan todas tus habilidades!";r=full}else{eb="Tus mejores coincidencias";h="Mira estas opciones cercanas"}}
const cnt=n?r.length+(r.length===1?" carrera encontrada":" carreras encontradas"):r.length+" carreras para descubrir";
out.innerHTML=`<p class="eyebrow">${eb}</p><h2>${h}</h2><p class="cnt">${cnt}</p><div class="sk-list">${r.map((x,i)=>{const c=x.c,m=x.m.length;return `<article class="sk-card k${i%5}"><span class="num">${String(i+1).padStart(2,"0")}</span><div><p class="eyebrow">${CATS[c[2]]}</p><h3>${c[1]}</h3>${n?`<p class="sc">${m} de ${n} habilidad${n===1?"":"es"} · ${Math.round(m/n*100)}%</p>${m?`<div class="chips">${x.m.map(k=>`<span class="chip2">${k}</span>`).join("")}</div>`:""}`:`<p class="sc">Elige habilidades para ver qué tienen en común.</p>`}</div><a class="btn alt see" href="#carrera-${c[0]}">Conocer carrera →</a></article>`}).join("")}</div>${n?`<p class="note">Esto es una orientación inicial para explorar, no un resultado definitivo ni una garantía de que una carrera sea la indicada para ti. ¡Sigue explorando!</p>`:""}`};
bx.forEach(b=>b.onchange=draw);
q("#sk-go").onclick=()=>{draw();out.scrollIntoView({behavior:"smooth",block:"start"})};
q("#sk-clr").onclick=()=>{bx.forEach(b=>b.checked=false);draw()};draw()}

// Fichas: [id, frase creativa, de qué trata, estudios, qué hacen (lista), campo laboral, dato curioso, frase final]
const FICHAS={};
[["arquitectura","¡Imagina, diseña y construye el mundo!","Los arquitectos diseñan edificios y espacios para que sean útiles, seguros y agradables. Crean planos y maquetas para imaginar lugares como casas, escuelas, hospitales y parques.","4 a 5 años aproximadamente.",["Diseñar casas y edificios.","Dibujar planos y crear maquetas.","Elegir materiales y distribuir espacios."],"Despachos de arquitectura, constructoras, empresas inmobiliarias y proyectos urbanos.","¡Algunos arquitectos diseñan edificios que aprovechan la luz del sol y el agua de lluvia para cuidar el planeta!","¡Tus ideas pueden convertirse en lugares increíbles!"],
["ingenieria-civil","¡Diseña, construye y transforma el mundo!","Los ingenieros civiles diseñan y construyen estructuras que usamos todos los días, como puentes, carreteras y edificios. Utilizan las matemáticas y la ciencia para lograr que sean seguras y resistentes.","4 a 5 años aproximadamente.",["Diseñar puentes y carreteras.","Revisar planos y medidas.","Comprobar que las estructuras sean resistentes."],"Constructoras, oficinas de ingeniería y proyectos de infraestructura.","¡Los puentes pueden tener formas especiales que ayudan a distribuir el peso y soportar grandes cargas!","¡Piensa en grande y construye tus ideas!"],
["carpinteria","¡Imagina, crea y construye con tus propias manos!","La carpintería es un oficio en el que se trabaja con madera para fabricar y reparar objetos. Los carpinteros crean muebles y otros productos útiles para la vida diaria.","Desde algunos meses hasta varios años, según la formación.",["Fabricar mesas, sillas y estantes.","Instalar puertas y ventanas.","Reparar y restaurar muebles."],"Talleres de carpintería, fábricas de muebles, constructoras y negocios propios.","¡Algunos carpinteros diseñan muebles personalizados para aprovechar mejor los espacios pequeños!","¡Con creatividad y paciencia puedes construir grandes ideas!"],
["medicina","¡Aprende, cuida y salva vidas!","La medicina enseña a cuidar la salud, prevenir enfermedades y atender a las personas cuando se sienten mal. Los médicos identifican problemas de salud y ayudan a sus pacientes a recibir el tratamiento adecuado.","Aproximadamente 6 a 7 años en México, según el programa. Las especialidades requieren más tiempo.",["Revisar pacientes y sus síntomas.","Detectar enfermedades.","Recomendar tratamientos y cuidados."],"Hospitales, clínicas, consultorios, universidades y centros de investigación.","¡El corazón late miles de veces al día para mantener la sangre circulando por todo el cuerpo!","¡Tu conocimiento y empatía pueden cambiar vidas!"],
["veterinaria","¡Cuida, protege y ayuda a nuestros amigos animales!","La veterinaria se dedica a cuidar la salud de los animales y prevenir enfermedades. Los veterinarios revisan animales, aplican vacunas y ayudan a que reciban los cuidados que necesitan.","Aproximadamente 5 años de universidad en México, según el programa.",["Revisar perros, gatos y otros animales.","Aplicar vacunas y tratar enfermedades.","Ayudar a animales de granja o silvestres."],"Clínicas veterinarias, zoológicos, ranchos, refugios y centros de conservación.","¡Los veterinarios también pueden trabajar para proteger especies silvestres y conservar la biodiversidad!","¡Cada animal merece cuidado, respeto y protección!"],
["nutricion","¡Descubre cómo los alimentos ayudan a tu cuerpo!","La nutrición estudia cómo los alimentos ayudan al cuerpo a crecer y mantenerse saludable. Los nutriólogos orientan a las personas para desarrollar hábitos alimenticios adecuados a sus necesidades.","Aproximadamente 4 a 5 años de universidad en México, según el programa.",["Planear menús variados.","Orientar sobre hábitos alimenticios.","Adaptar la alimentación a distintas necesidades."],"Hospitales, consultorios, escuelas, centros deportivos y empresas de alimentos.","¡El cuerpo necesita distintos nutrientes porque cada uno cumple funciones diferentes para mantenernos saludables!","¡Aprende a cuidar tu cuerpo y comparte hábitos que ayudan a los demás!"],
["docencia","¡Enseña, inspira y transforma el futuro!","La docencia consiste en enseñar y ayudar a otras personas a aprender. Los docentes preparan clases, explican temas y crean actividades para que sus estudiantes desarrollen nuevas habilidades.","Aproximadamente 4 a 5 años de universidad.",["Preparar clases y actividades.","Explicar temas y resolver dudas.","Crear juegos y materiales educativos."],"Escuelas, centros educativos, instituciones de apoyo escolar y proyectos educativos.","¡Los maestros también aprenden de sus estudiantes y descubren nuevas formas de enseñar!","¡Enseñar es ayudar a otros a descubrir todo lo que pueden lograr!"],
["derecho","¡Defiende la justicia y haz valer tus ideas!","El Derecho estudia las leyes y los derechos de las personas. Los profesionales de esta área ayudan a resolver conflictos, defender derechos y encontrar soluciones justas.","Aproximadamente 4 a 5 años de universidad en México.",["Analizar leyes y documentos.","Defender personas en juicios.","Negociar acuerdos y resolver conflictos."],"Despachos jurídicos, tribunales, empresas, instituciones públicas y organizaciones sociales.","¡Los abogados pueden especializarse en áreas muy diferentes, como los derechos humanos, el medio ambiente o la tecnología!","¡Usa tus ideas y conocimientos para construir una sociedad más justa!"],
["programacion","¡Imagina una idea, escribe el código y hazla realidad!","La programación consiste en crear instrucciones para que las computadoras y otros dispositivos realicen tareas. Los programadores desarrollan aplicaciones, videojuegos y páginas web que ayudan a resolver problemas.","Aproximadamente 3 a 5 años, según la carrera y la universidad.",["Crear aplicaciones y videojuegos.","Programar páginas web.","Encontrar y corregir errores en el código."],"Empresas tecnológicas, estudios de videojuegos, bancos, hospitales y proyectos propios.","¡Un videojuego puede necesitar miles de instrucciones de código para que sus personajes se muevan y reaccionen!","¡Cada gran invento digital comienza con una idea!"],
["ingenieria-mecanica","¡Diseña, construye y pon el mundo en movimiento!","La ingeniería mecánica utiliza la ciencia y las matemáticas para diseñar y mejorar máquinas, motores y mecanismos. Sus profesionales crean soluciones que facilitan el trabajo, mejoran el transporte y aprovechan mejor la energía.","Aproximadamente 4 a 5 años de universidad.",["Diseñar máquinas y motores.","Crear y probar piezas mecánicas.","Mejorar robots y vehículos."],"Fábricas, empresas automotrices, industrias de energía, talleres especializados y centros de investigación.","¡Los ingenieros mecánicos pueden diseñar desde pequeños mecanismos hasta motores para aviones y máquinas industriales!","¡Transforma tu curiosidad en máquinas que cambien el mundo!"]
].forEach(a=>FICHAS[a[0]]={f:a[1],t:a[2],e:a[3],q:a[4],l:a[5],d:a[6],z:a[7]});
Object.assign(FICHAS,{
"marketing-y-publicidad":{f:"¡Crea ideas que todos quieran conocer!",t:"Combina la creatividad y la comunicación para promocionar productos, servicios e ideas mediante anuncios, campañas y redes sociales.",e:"3–4 años.",q:"Crean anuncios, campañas y contenido; investigan al público y promocionan marcas.",w:"Agencias de publicidad, empresas, tiendas, medios de comunicación o proyectos propios.",w2:"Agencias, empresas, medios digitales y organizaciones.",l:"Marketing digital, publicidad, redes sociales, imagen de marca, investigación de mercados y relaciones públicas.",d:"Las campañas pueden combinar imágenes, frases, música y videos para llamar la atención.",r:["diseno-de-moda","emprendimiento","administracion-de-empresas","programacion"],z:"¡Una gran idea sabe cómo hacerse escuchar!"},
"emprendimiento":{f:"¡Convierte tus ideas en proyectos que ayudan!",t:"Consiste en crear, organizar y desarrollar negocios o proyectos a partir de ideas que buscan resolver necesidades o problemas.",e:"3–4 años.",q:"Desarrollan ideas de negocio, planean proyectos, calculan costos, buscan clientes y organizan equipos.",w:"Empresas, negocios nuevos, proyectos de innovación, organizaciones sociales o su propio negocio.",w2:"Empresas, startups, organizaciones y negocios propios.",l:"Creación de negocios, innovación, comercio electrónico, ventas, consultoría y emprendimientos sociales.",d:"No todos los emprendimientos buscan ganar dinero; algunos buscan resolver problemas sociales o ambientales.",r:["administracion-de-empresas","marketing-y-publicidad","gastronomia","programacion"],z:"¡Atrévete a empezar: tu idea puede crecer!"},
"gastronomia":{f:"¡Mezcla sabores, crea platillos y comparte tus ideas!",t:"Se enfoca en la preparación de alimentos y bebidas, las técnicas de cocina, los sabores, la presentación de los platillos y las tradiciones culinarias.",e:"3–4 años.",q:"Preparan alimentos, crean recetas, organizan la cocina y cuidan la presentación y calidad de los platillos.",w:"Restaurantes, hoteles, cafeterías, panaderías, pastelerías, empresas de alimentos o negocios propios.",w2:"Restaurantes, hoteles, cafeterías, servicios de eventos y empresas de alimentos.",l:"Cocina nacional e internacional, repostería, panadería, cocina creativa y administración de restaurantes.",d:"La cultura y las tradiciones de cada lugar influyen en los ingredientes y platillos que se consumen.",r:["reposteria-y-panaderia","nutricion","emprendimiento","administracion-de-empresas"],z:"¡Cocinar es compartir creatividad y cariño!"},
"biologia":{f:"¡Explora la vida y descubre cómo funciona la naturaleza!",t:"Estudia a los seres vivos, como animales, plantas, hongos y microorganismos, así como su funcionamiento y relación con el ambiente.",e:"4–4.5 años.",q:"Observan organismos, realizan experimentos, analizan muestras, registran datos e investigan procesos naturales.",w:"Laboratorios, universidades, centros de investigación, museos, áreas naturales protegidas y organizaciones de conservación.",w2:"Laboratorios, centros de investigación, universidades y áreas naturales.",l:"Zoología, botánica, microbiología, genética, ecología, biología marina y conservación.",d:"Algunos organismos pueden vivir en ambientes extremos, como aguas termales o lugares con altas concentraciones de sal.",r:["veterinaria","medicina","quimica","agricultura","fisica"],z:"¡Cada pregunta sobre la vida te lleva a un nuevo descubrimiento!"}});
[["diseno-de-moda","¡Imagina, crea y viste tus ideas!","Aprende a diseñar ropa y accesorios usando colores, telas y estilos. Los diseñadores crean prendas que expresan personalidad y combinan creatividad con comodidad.","3 a 4 años, según el programa.",["Dibujar prendas y colecciones.","Elegir telas, colores y estampados.","Crear patrones y diseñar accesorios."],"Marcas de ropa, casas de moda, empresas textiles, cine, televisión o negocio propio.","Algunos diseñadores crean vestuarios para películas, obras de teatro y videojuegos.","¡Convierte tu imaginación en diseños únicos!"],
["musica","¡Crea, interpreta y llena el mundo de melodías!","La carrera de Música enseña a crear, interpretar y compartir sonidos. Los músicos pueden cantar, tocar instrumentos, componer canciones o producir música para diferentes medios.","4 a 6 años, según la especialidad y el programa.",["Cantar o tocar instrumentos.","Componer canciones y melodías.","Grabar y producir música."],"Bandas, orquestas, escuelas, estudios de grabación, teatros y empresas de entretenimiento.","La música también se crea para películas, videojuegos y anuncios.","¡Descubre tu ritmo y comparte tu música con el mundo!"],
["administracion-de-empresas","¡Organiza ideas, lidera equipos y convierte proyectos en realidad!","Esta carrera enseña a organizar y dirigir negocios para que funcionen bien. Los administradores planean proyectos, organizan equipos y toman decisiones para alcanzar objetivos.","4 a 5 años, generalmente.",["Organizar proyectos y equipos.","Planear presupuestos.","Mejorar el funcionamiento de un negocio."],"Empresas, bancos, tiendas, hoteles, organizaciones públicas o negocios propios.","¡Puedes estudiar Administración y después crear tu propia empresa!","¡Toda gran empresa comienza con una idea y un buen plan!"],
["reposteria-y-panaderia","¡Transforma tus ideas en creaciones que se pueden saborear!","Aprende a preparar panes, pasteles, galletas y postres. Esta profesión combina creatividad y precisión para crear alimentos deliciosos y compartir tradiciones.","Depende del programa; algunas opciones duran 3 años y otras, como Gastronomía, alrededor de 4.",["Preparar masas y hornear pan.","Decorar pasteles y galletas.","Inventar sabores y nuevas recetas."],"Panaderías, pastelerías, cafeterías, restaurantes, hoteles o negocio propio.","En México, panes como la rosca de Reyes y el pan de muerto forman parte de nuestras tradiciones.","¡Tus ideas son el primer ingrediente para crear algo extraordinario!"],
["agricultura","¡Siembra curiosidad, cultiva ideas y cosecha un mejor futuro!","La agronomía estudia cómo cultivar plantas y producir alimentos. Los agrónomos cuidan los cultivos, mejoran el uso del agua y del suelo, y buscan formas de proteger el ambiente.","4 años y medio a 5 años, según la universidad.",["Revisar el crecimiento de los cultivos.","Elegir semillas y planear siembras.","Mejorar el riego y cuidar el suelo."],"Campos agrícolas, invernaderos, viveros, empresas de semillas y centros de investigación.","Los agrónomos pueden usar tecnología para medir la humedad del suelo y saber cuándo regar los cultivos.","¡Cada gran cosecha comienza con una pequeña semilla!"],
["aviacion","¡Tu curiosidad es el comienzo de un gran despegue!","La aviación prepara a las personas para pilotar aeronaves y realizar vuelos de manera segura. Los pilotos revisan instrumentos, planean rutas y se coordinan con la tripulación y el control aéreo para transportar personas o productos.","Depende de la escuela y del programa; la formación incluye teoría y práctica de vuelo.",["Revisar instrumentos y rutas.","Comprobar las condiciones del tiempo.","Pilotar aviones y coordinar vuelos."],"Aerolíneas, transporte de carga, aviación ejecutiva y escuelas de vuelo.","Los pilotos estudian meteorología para comprender cómo el clima puede afectar un vuelo.","¡Cada cosa que aprendes te prepara para llegar más lejos!"],
["atleta","¡Convierte tu esfuerzo en grandes logros!","Esta área combina el entrenamiento físico, la estrategia y la preparación mental para mejorar el rendimiento deportivo. Los atletas entrenan y compiten, mientras que los especialistas en ciencias del deporte estudian cómo funciona el cuerpo y cómo entrenar de forma segura.","4 a 5 años para carreras universitarias relacionadas. Ser atleta profesional no requiere una duración universitaria fija.",["Entrenar y participar en competencias.","Analizar técnicas y estrategias.","Planear entrenamientos y evaluar avances."],"Clubes deportivos, selecciones, gimnasios, academias y centros de alto rendimiento.","Las grabaciones de competencias ayudan a los atletas a analizar sus movimientos y mejorar su técnica.","¡La constancia te ayuda a descubrir todo lo que puedes lograr!"],
["maquillaje","¡Combina colores, crea looks y deja volar tu imaginación!","El maquillaje combina colores y técnicas para crear diferentes estilos. Los maquillistas preparan looks para eventos, fotografía, moda, cine y teatro, ayudando a expresar ideas y crear personajes.","Desde algunas semanas hasta varios meses; los programas especializados pueden durar más.",["Crear maquillajes para eventos.","Diseñar looks para sesiones fotográficas.","Transformar actores en personajes."],"Salones de belleza, estudios fotográficos, agencias de moda, teatros y producciones audiovisuales.","En el cine, el maquillaje puede ayudar a transformar a un actor en un personaje fantástico.","¡Tu creatividad es tu mejor herramienta para crear algo único!"],
["quimica","¡Descubre los secretos invisibles de todo lo que existe!","La química estudia de qué están hechas las cosas y cómo se transforman. Los químicos realizan experimentos, analizan sustancias y ayudan a desarrollar productos como medicamentos, cosméticos y materiales más sostenibles.","Generalmente de 4 a 5 años, según la carrera.",["Analizar sustancias en laboratorios.","Realizar experimentos y registrar resultados.","Desarrollar y probar nuevos materiales."],"Laboratorios, industria farmacéutica, empresas de alimentos, cosmética, centros de investigación e industrias químicas.","¡La química está presente en cosas cotidianas como cocinar, limpiar y cargar una batería!","¡Haz preguntas, experimenta y descubre nuevas posibilidades!"],
["fisica","¡Descubre las reglas del universo y explora lo imposible!","La física estudia cómo funciona el universo, desde la gravedad hasta la luz, el sonido y la energía. Los físicos realizan experimentos y analizan datos para explicar fenómenos y desarrollar nuevas tecnologías.","Generalmente de 4 a 5 años de universidad.",["Realizar experimentos científicos.","Analizar datos y fenómenos naturales.","Investigar energía, materiales o el espacio."],"Universidades, laboratorios, hospitales, observatorios, centros de investigación y empresas tecnológicas.","La física ayuda a explicar cómo viaja la luz y cómo se mantienen los planetas en sus órbitas.","¡Haz preguntas, busca respuestas y descubre los secretos del universo!"]
].forEach(a=>FICHAS[a[0]]={f:a[1],t:a[2],e:a[3],q:a[4],l:a[5],d:a[6],z:a[7]});

Object.assign(PERFILES,{
"carpinteria":["José Guadalupe Velázquez Galván","Es un maestro carpintero mexicano que ganó el Galardón Nacional de Arte Popular. Es un experto diseñando y tallando la madera para crear piezas únicas.","¡Transforma simples bloques de madera en obras de arte usando solo sus herramientas e imaginación!"],
"medicina":["Carlos Canseco González","Fue un famoso médico cirujano mexicano que ganó la Medalla Belisario Domínguez. Lideró una campaña mundial de vacunación para proteger a millones de niños contra enfermedades graves.","¡Su trabajo con las vacunas ayudó a salvar la vida de miles de niñas y niños en todo el mundo!"],
"veterinaria":["Moisés Vargas Terán","Es un veterinario mexicano con el Premio Nacional de Sanidad Animal. Es un experto internacional que protege a las vacas, ovejas y mascotas combatiendo plagas y insectos en los campos de América.","¡Su trabajo ha salvado a millones de animales de enfermarse en todo el continente!"],
"nutricion":["Elena Zambrano González","Es una investigadora y nutrióloga mexicana que ganó la Medalla David Barker. Estudia cómo los alimentos que comemos desde bebés nos ayudan a crecer fuertes y prevenir enfermedades.","¡Sus descubrimientos enseñan a las familias a comer rico y sano para vivir mejor!"],
"docencia":["Diana Lorena Rubio Navarro","Es una maestra mexicana nominada entre las 10 mejores docentes del mundo en el Global Teacher Prize. Enseña ciencias a niños con experimentos divertidos para descubrir sus talentos.","¡Sus clases de ciencia son tan creativas que inspiran a sus alumnos a convertirse en grandes inventores!"]});

Object.assign(PERFILES,{
"derecho":["Sergio García Ramírez","Es un eminente jurista mexicano. Fue Presidente de la Corte Interamericana de Derechos Humanos. Sus sentencias protegieron la dignidad de personas en toda América.","¡Sus decisiones legales se estudian en todo el mundo y ayudan a crear leyes más justas!"],
"atleta":["Saúl “Canelo” Álvarez","Es un boxeador mexicano legendario. Ha sido campeón mundial en múltiples divisiones de peso, ¡un logro increíble!","¡Es el primer boxeador de la historia en ser campeón indiscutible de peso supermediano!"],
"quimica":["Mario Molina","Fue un gran químico mexicano que descubrió por qué la capa de ozono se dañaba. ¡Por su investigación, ganó el Premio Nobel de Química!","¡Gracias a su trabajo, el mundo se unió para proteger el medio ambiente prohibiendo sustancias dañinas!"]});
// Actividades destacadas del Patronato (agregar aquí las siguientes): [foto, título, texto, texto alternativo, posición de la foto]
const ACTD=[
["act-mural","Mural colectivo","Trabajamos juntos para crear un mural lleno de color y creatividad.","Niña pintando con un pincel un mural sobre papel kraft","35% 55%"],
["act-piano","Descubriendo el piano","Aprendimos a reconocer y leer las notas musicales para poder tocar el piano.","Manos de una niña tocando un teclado con etiquetas de notas musicales sobre las teclas","50% 50%"],
["act-cupcakes","Pequeños chefs","Decoramos cupcakes con diferentes diseños y dejamos volar nuestra imaginación.","Mano de un niño decorando un cupcake con betún verde y una galleta","50% 50%"]];
const destacadas=()=>`<div class="grid">${ACTD.map(a=>`<article class="card"><img class="cthumb dest" style="object-position:${a[4]}" src="${imgSrc(a[0])}" alt="${a[3]}" loading="lazy"><h3>${a[1]}</h3><p>${a[2]}</p></article>`).join("")}</div>`;

// Revista digital: 51 páginas en revista/p01.webp … p51.webp. Portada sola; después, pliegos de dos páginas (2-3, 4-5, …)
const REV_N=51,REV_PDF="";/* poner aquí la ruta del PDF (ej. "revista/DESCUBRE.pdf") para mostrar el botón de descarga */
const REV_ORDER=["arquitectura","ingenieria-civil","carpinteria","medicina","veterinaria","nutricion","docencia","derecho","programacion","ingenieria-mecanica","diseno-de-moda","musica","administracion-de-empresas","reposteria-y-panaderia","marketing-y-publicidad","emprendimiento","gastronomia","biologia","agricultura","aviacion","atleta","maquillaje","quimica","fisica"];
const revSrc=n=>(window.IMGDATA&&IMGDATA["rev"+n])||"revista/p"+String(n).padStart(2,"0")+".webp";

// Fotos de las personas destacadas: id de carrera -> texto alternativo de la foto grande.
// Archivos: img/persona-<id>-cara.webp (cuadrada, va en círculo) e img/persona-<id>-grande.webp (va en arco, a la derecha)
const PFOTOS={
"arquitectura":"Patio con muros de colores morado, rosa y blanco, un árbol grande, cactus y vasijas de barro",
"ingenieria-civil":"Plaza con una gran bandera de México y un edificio histórico de cantera",
"carpinteria":"Figuras de madera talladas y pintadas de dos jugadores de futbol dentro de un marco decorado",
"medicina":"Mano con guante azul aplicando una vacuna en un brazo",
"nutricion":"Mujer sonriente sosteniendo una medalla dorada en una caja negra",
"programacion":"Mujer con un vestido bordado de flores frente a un edificio con el letrero de Google",
"ingenieria-mecanica":"Dos hombres trabajando con equipo electrónico en una fotografía en blanco y negro",
"aviacion":"Portada antigua de una revista con un piloto de pie frente a su avión",
"fisica":"Cohete despegando entre nubes de humo y fuego al atardecer",
"docencia":"Maestra sonriente mostrando un experimento con una botella en un salón",
"agricultura":"Edificio de la universidad con el nombre Antonio Narro en la fachada, rodeado de jardines",
"biologia":"Mujer con gorra y camisa de campo entre las hojas de una selva",
"veterinaria":"Hombre sosteniendo un diploma enmarcado y un trofeo en una ceremonia de premiación frente a un mural de animales",
"reposteria-y-panaderia":"Mesa con el nombre Mis Pastelitos en una cafetería decorada con donas, helados y macarons gigantes",
"gastronomia":"Portada de un libro de recetas mexicanas con chiles rellenos en un plato de barro",
"maquillaje":"Un hombre ajusta el vestido de una modelo durante la preparación de un desfile",
"diseno-de-moda":"Modelo con sombrero negro y un poncho rosa bordado con figuras de colores en una pasarela",
"musica":"Cantante con micrófono en un concierto, con los ojos cerrados",
"emprendimiento":"Hombre sonriente sentado frente a una pantalla morada en un programa de televisión",
"marketing-y-publicidad":"Hombre de playera negra dando una conferencia con micrófono y señalando hacia un lado",
"derecho":"Hombre sonriente sosteniendo varios libros sobre una mesa, frente a un escudo en la pared",
"atleta":"Boxeador con varios cinturones de campeonato sobre un fondo oscuro",
"quimica":"Hombre de traje gris de pie frente a un fondo dorado",
"administracion-de-empresas":"Réplica de un avión dentro de un centro de actividades para niños, con el letrero de KidZania"};
const avatar=id=>PFOTOS[id]?`<img class="avatar" src="${imgSrc("persona-"+id+"-cara")}" alt="Retrato de ${PERFILES[id][0]}" loading="lazy">`:`<div class="ph round" role="img" aria-label="Espacio para foto de la persona destacada"></div>`;
const grande=id=>PFOTOS[id]?`<img class="arch" src="${imgSrc("persona-"+id+"-grande")}" alt="${PFOTOS[id]}" loading="lazy">`:`<div class="ph arch" role="img" aria-label="Espacio para foto grande"></div>`;

// Créditos de imágenes: [sección, [[título, [líneas]]]]. Las líneas que empiezan con "Créditos:", "Fuente:" o "Fuentes:" se muestran con la etiqueta en negritas.
const CRED=[
["Ciencia, tecnología e ingeniería",[
["Dra. Diana Lorena Rubio Navarro",["Retrato y fotografía realizando experimentos en un laboratorio o aula.","Créditos: cortesía de Diana Lorena Rubio Navarro, Movimiento STEAM / Global Teacher Prize."]],
["Dra. Elena Zambrano González",["Retrato institucional.","Fotografía con la Medalla David Barker 2025.","Créditos: INCMNSZ / Facultad de Química de la UNAM / International DOHaD Society."]],
["Emilio Carranza Rodríguez",["Fotografías históricas junto a sus aeronaves.","Portada del semanario Jueves de Excélsior, del 14 de junio de 1928.","Fuentes: Archivo Histórico de Excélsior / Fototeca Nacional del INAH / Library of Congress."]],
["Guillermo González Camarena",["Fotografías históricas del inventor trabajando en su laboratorio con equipos y circuitos electrónicos.","Fuente: Archivo Histórico de la Televisión Mexicana."]],
["Gabriela Salas Cabrera",["Retrato de divulgación científica.","Fotografía en instalaciones de Google.","Fuentes: Tec Review / Agencia EFE / Forbes México / Google México."]],
["J. Guadalupe Velázquez Galván",["Retrato durante una entrega de reconocimientos.","Retablo futbolístico de madera policromada.","Créditos: J. Guadalupe Velázquez Galván / Secretaría de Cultura de México / FONART / Fomento Cultural Banamex."]],
["Dr. Carlos Canseco González",["Retrato relacionado con su trayectoria médica y su participación en la lucha mundial contra la poliomielitis.","Fuente: Rotary International / campaña End Polio Now."]],
["Ing. Ángela Alessio Robles",["Fotografía documental frente al Zócalo y la Catedral de la Ciudad de México.","Fuentes: Fototeca Nacional del INAH / Archivo Histórico de la Ciudad de México."]],
["Dra. Margaret Dominguez",["Retrato profesional relacionado con su trabajo en ingeniería óptica e investigación espacial.","Fuente: NASA / materiales institucionales de divulgación científica."]]]],
["Arquitectura y espacios urbanos",[
["Luis Barragán Morfín",["Retrato histórico del arquitecto.","Créditos: Fundación de Arquitectura Luis Barragán / Barragan Foundation."]],
["Casa Gilardi",["Fotografía del patio interior con jacaranda y muros de colores.","Créditos: Fundación de Arquitectura Luis Barragán / Barragan Foundation."]],
["Plaza Zaragoza, Palacio de Gobierno y Macroplaza de Monterrey",["Fotografía panorámica del espacio urbano.","Fuentes: archivos turísticos de Monterrey / Filma Nuevo León."]],
["Campus de la Universidad Autónoma Agraria Antonio Narro",["Fotografía de la fachada del edificio de Rectoría en Saltillo, Coahuila.","Créditos: Universidad Autónoma Agraria Antonio Narro (UAAAN)."]]]],
["Medicina y salud",[
["Fotografía de vacunación",["Imagen de un profesional de la salud aplicando una vacuna.","Fuente: banco de imágenes Freepik / Adobe Stock / Shutterstock."]],
["Cohete Falcon Heavy y proyecto Nancy Grace Roman Space Telescope",["Fotografía relacionada con el lanzamiento de cohetes y la exploración espacial.","Créditos: NASA / SpaceX."]]]],
["Gastronomía",[
["Enrique Olvera",["Retrato profesional del chef.","Fuentes: Grupo Olvera / Pujol."]],
["Libro Tu Casa Mi Casa",["Portada del libro de cocina mexicana.","Créditos editoriales: Phaidon Press.","Autores: Enrique Olvera, Luis Arellano, Gonzalo Goût y Daniela Soto-Innes."]],
["Gris Verduzco — Mis Pastelitos",["Retrato promocional de la creadora de contenido.","Fotografía de un espacio temático o evento de Mis Pastelitos.","Créditos: Gris Verduzco / Mis Pastelitos / Sisters On Trend."]]]],
["Diseño, moda y belleza",[
["Carla Fernández",["Retrato de la diseñadora.","Fotografía de pasarela con prendas inspiradas en técnicas textiles tradicionales.","Fuentes: Carla Fernández / Mercedes-Benz Fashion Week México."]],
["Luis Torres",["Retrato profesional del maquillador.","Fotografía maquillando a Kendall Jenner.","Fuentes: Luis Torres Beauty / Vogue."]]]],
["Administración, negocios y emprendimiento",[
["Arturo Elías Ayub",["Retrato corporativo.","Fotografía en el set de Shark Tank México.","Fuentes: Grupo Carso / América Móvil / Sony Pictures Television."]],
["Edson Noyola",["Retrato profesional.","Fotografía durante una conferencia de mercadotecnia.","Fuente: Tecnológico de Monterrey / EXATEC."]]]],
["Música y entretenimiento",[
["Juan Gabriel",["Retrato de estudio.","Fotografía durante una presentación en vivo.","Fuentes: Agencia EFE / Getty Images / archivos musicales."]]]],
["Agricultura, medio ambiente e historia regional",[
["Antonio Narro Rodríguez",["Retrato histórico del agrónomo y benefactor coahuilense.","Fuente: archivo histórico regional / Universidad Autónoma Agraria Antonio Narro."]],
["Dr. Moisés Vargas Terán",["Retrato relacionado con su trayectoria médica y académica.","Fuente: archivo de divulgación médica y académica."]],
["Julia Carabias Lillo",["Retrato institucional.","Fotografía en una selva o reserva natural.","Fuentes: SEMARNAT / UNAM / Fundación Natura y Ecosistemas Mexicanos."]]]],
["Educación y experiencias profesionales",[
["Instalaciones de KidZania Surabaya",["Fotografía de una réplica de avión patrocinada por tiket.com.","Fuentes: KidZania / tiket.com."]],
["Xavier López Ancona",["Retrato corporativo del fundador de KidZania.","Fuente: KidZania."]]]]];
const CRED3=[
["1. Dr. Mario Molina","Ingeniero químico, científico y académico mexicano, ganador del Premio Nobel de Química en 1995 por sus investigaciones sobre la capa de ozono.","© Centro Mario Molina / Archivo Fotográfico Institucional.","Retrato institucional utilizado con fines informativos y biográficos."],
["2. Saúl “Canelo” Álvarez","Boxeador profesional mexicano y campeón mundial en múltiples divisiones de peso.","© Getty Images / Matchroom Boxing.","Fotografía deportiva de carácter promocional o editorial, sujeta a los derechos de sus respectivos titulares."],
["3. Dr. Sergio García Ramírez","Jurista, investigador, escritor y magistrado mexicano, reconocido por su trayectoria en derecho penal y derechos humanos.","© UNAM, Instituto de Investigaciones Jurídicas / Archivo Académico.","Retrato institucional y académico utilizado con fines informativos y de divulgación jurídica."]];
const credLine=l=>/^(Créditos editoriales|Créditos|Fuentes?|Autores):/.test(l)?`<p><b>${l.slice(0,l.indexOf(":")+1)}</b>${l.slice(l.indexOf(":")+1)}</p>`:`<p>${l}</p>`;

/* ===== VISTAS ===== */
const views={
inicio(){const feat=CAREERS.slice(0,4);return `<section class="hero"><div><h1 aria-label="¡Descubre tu talento, diseña tu futuro!">${rb("¡Descubre tu talento, diseña tu futuro!")}</h1><p>¡Explora el mundo de las carreras! Descubre qué hacen las personas en diferentes profesiones, conoce nuevas opciones y prueba actividades para descubrir cuáles te interesan más. ¡Hay todo un mundo de carreras por conocer!</p><p><a class="btn" href="#carreras">Explorar carreras</a> <a class="btn alt" href="#actividades">Descubrir actividades</a></p></div></section>
<section><h2>Carreras destacadas</h2><div class="grid">${feat.map(careerCard).join("")}</div></section>
<section><h2>Actividades destacadas</h2><p>Lo que hemos hecho en el Patronato de la Casa de los Niños.</p>${destacadas()}</section>
<section class="two"><div class="box hl"><h2>Conoce a un profesional</h2><p>¡Conoce a personas increíbles que han convertido sus ideas y talentos en grandes logros!</p><a class="btn" href="#profesionales">Ver perfiles</a></div><div class="box hl"><h2>Diccionario de carreras</h2><p>¡Descubre qué significan palabras como beca, carrera y profesión, y aprende nuevas palabras que te ayudarán a explorar tu futuro!</p><a class="btn" href="#diccionario">Abrir diccionario</a></div></section>
<section class="box"><h2>Un proyecto solidario</h2><p>Explora diferentes carreras, descubre tus intereses y conoce nuevas posibilidades para tu futuro. ¡Aprender sobre las profesiones también es parte de una educación de calidad para todos!</p><a class="btn alt" href="#sobre">Sobre el proyecto</a></section>`},
carreras(){return `<section><h2>Carreras</h2><p>¿Cómo quieres explorar?</p><div class="two"><div class="box"><h3>Ver todas las carreras</h3><p>Busca por nombre o por categoría y descubre cuál te llama la atención.</p><a class="btn" href="#carreras-lista">Ver carreras</a></div><div class="box"><h3>Poner mis habilidades</h3><p>Marca lo que se te da bien y te mostramos las carreras que coinciden contigo.</p><a class="btn" href="#carreras-habilidades">Elegir habilidades</a></div></div></section>`},
"carreras-habilidades"(){return `<section><a class="crumb" href="#carreras">← Elegir otra forma de explorar</a>${skillsPage()}</section>`},
"carreras-lista"(){return `<section><a class="crumb" href="#carreras">← Elegir otra forma de explorar</a><h2>Todas las carreras</h2><div class="tools"><input id="q" type="search" placeholder="Busca una profesión…" aria-label="Buscar carreras"><button class="btn alt" id="rnd" type="button">🎲 Sorpréndeme</button></div><div class="tools" id="chips"></div><p id="count" aria-live="polite"></p><div class="grid" id="list"></div></section>`},
carrera(id){const c=byId(id);if(!c)return views.nf();const F=FICHAS[id]||{},P=PERFILES[id],T=s=>`[${s}: texto de ejemplo]`,ix=CAREERS.indexOf(c);
const rel=(F.r||c[4]).map(byId).filter(Boolean),a=ACT.find(x=>x.c===id)||ACT[0],ts=TESTS.find(t=>t.c===id);
return `<section class="cr"><a class="crumb" href="#carreras-lista">← Todas las carreras</a><span class="tag">${CATS[c[2]]}</span><h1 style="color:${PAL[ix%5]}">${c[1]}</h1>${F.f?`<p class="frase">${F.f}</p>`:`<span class="sample">Contenido de ejemplo</span>`}<p><a class="btn alt" href="#revista-${id}">Ver esta carrera en la revista</a></p>
<div class="two" style="margin-top:18px">${imgTag(id)||ph("ilustración de "+c[1],220)}<div class="box"><h2>¿De qué trata?</h2><p>${F.t||c[3]+" "+T("Descripción ampliada")}</p></div></div>
${NOT_CONFUSE[id]?`<div class="box hl" style="margin-top:18px"><h3>¡No las confundas!</h3><p>${NOT_CONFUSE[id]}</p></div>`:""}
<div class="two" style="margin-top:18px"><div class="box"><h2>Habilidades clave</h2><ul class="pills">${(CS[id]||[]).map(k=>`<li>${k}</li>`).join("")}</ul></div><div class="box hl"><h2>Datos rápidos</h2><div class="fact"><span>🎓</span><div><b>Estudios:</b> ${F.e||T("Estudios")}</div></div><div class="fact"><span>💼</span><div><b>¿Qué hacen en el trabajo?</b>${F.q?(Array.isArray(F.q)?`<ul class="steps">${F.q.map(x=>`<li>${x}</li>`).join("")}</ul>`:" "+F.q):" "+T("Trabajo")}</div></div>${F.w2?`<div class="fact"><span>📍</span><div><b>¿Dónde pueden trabajar?</b> ${F.w2}</div></div>`:""}<div class="fact"><span>🧭</span><div><b>Campo laboral:</b> ${F.l||T("Campo laboral")}</div></div></div></div>
${F.w?`<div class="box" style="margin-top:18px"><h2>¿Dónde puede trabajar?</h2><p>${F.w}</p></div>`:""}
<div class="two" style="margin-top:18px"><div class="box"><h2>Conoce a un profesional</h2><div class="prof">${P?avatar(id):`<div class="ph round" role="img" aria-label="Espacio para foto del profesional"></div>`}<div><span class="brush">${P?P[0]:"[Nombre]"}</span></div></div>${P?`<p>${P[1]}</p><p><b>Dato curioso:</b> ${P[2]}</p>`:`<p>${T("Perfil de una persona destacada")}</p>`}<a href="#profesionales">Ver más perfiles</a></div><div class="box"><h2>En acción</h2><span class="tag">Carrera: ${a.cn}</span><h3>${a.t}</h3><p><b>Necesitas:</b> ${a.m}</p><ol class="steps">${a.p.map(s=>`<li>${s}</li>`).join("")}</ol><a href="#enaccion">Más actividades</a></div></div>
${ts?testHTML(ts,false):""}
<div class="box hl" style="margin-top:18px"><h2>Dato curioso</h2><p>${F.d||T("Dato")}</p></div>
${F.z?`<p class="cierre" style="color:${PAL[(ix+2)%5]}">${F.z}</p>`:""}
<h2 style="margin-top:28px">Profesiones relacionadas</h2><div class="grid">${rel.map(careerCard).join("")}</div></section>`},
profesionales(){return `<section><h2>Conoce a un profesional</h2><p>Personas destacadas de México en distintas profesiones.</p>${CAREERS.filter(c=>PERFILES[c[0]]).map(c=>{const p=PERFILES[c[0]];return `<article class="pro"><div><div class="prof">${avatar(c[0])}<div><span class="brush">${esc(p[0])}</span><br><span class="tag">${c[1]}</span></div></div><p>${esc(p[1])}</p><div class="box"><h3>Dato curioso</h3><p>${esc(p[2])}</p></div><a href="#carrera-${c[0]}">Ver la carrera</a></div>${grande(c[0])}</article>`}).join("")}</section>`},
diccionario(){return `<section><h2>Diccionario de carreras</h2><div class="tools"><input id="gq" type="search" placeholder="Busca una palabra…" aria-label="Buscar palabra"></div><div class="az" id="az"></div><div class="grid" id="gl" style="margin-top:16px"></div></section>`},
actividades(){return `<section><h2>Actividades y tests</h2><div class="two"><div class="box"><h3>Conoce a un profesional</h3><p>Perfiles de personas destacadas de México.</p><a class="btn" href="#profesionales">Entrar</a></div><div class="box"><h3>En acción</h3><p>Actividades con hoja, lápiz y otros materiales.</p><a class="btn" href="#enaccion">Entrar</a></div><div class="box"><h3>¿Te identificas?</h3><p>Tests para descubrir tus intereses.</p><a class="btn" href="#tests">Entrar</a></div><div class="box"><h3>Diccionario de carreras</h3><p>Palabras explicadas fácil.</p><a class="btn" href="#diccionario">Entrar</a></div></div></section>`},
revista(){return `<section class="rvs"><div class="rvtop"><h2>Revista digital</h2><label>Ir a: <select id="rv-go"></select></label><span id="rv-n" aria-live="polite"></span></div><div class="rv-stage"><button class="rv-nav" id="rv-prev" type="button" aria-label="Página anterior">‹</button><div class="rv-book" id="rv-book"></div><button class="rv-nav" id="rv-next" type="button" aria-label="Página siguiente">›</button></div><p id="rv-link" style="text-align:center"></p>${REV_PDF?`<p style="text-align:center"><a class="btn" href="${REV_PDF}" download>Descargar o imprimir la revista (PDF)</a></p>`:""}</section>`},
sobre(){return `<section><h2>Sobre el proyecto</h2><div class="two"><div class="box"><h3>Por qué surgió</h3><p>DESCUBRE nació de la idea de acercar el mundo de las profesiones a más personas y ayudarlas a descubrir nuevas posibilidades para su futuro. Forma parte de un proyecto solidario que incluye actividades en el Patronato de la Casa de los Niños, donde buscamos despertar la curiosidad de los niños y ayudarlos a explorar sus intereses, habilidades y posibles vocaciones.</p></div><div class="box"><h3>Qué busca lograr</h3><p>Buscamos despertar la curiosidad, ampliar la visión que las personas tienen sobre las profesiones y ayudarles a reconocer sus propios intereses y habilidades. Queremos mostrar que existen muchos caminos diferentes y que conocerlos puede ayudar a imaginar un futuro con más posibilidades, sin tener que decidirlo todo desde pequeños.</p></div><div class="box"><h3>Para quién es</h3><p>DESCUBRE está pensado para niños, adolescentes, jóvenes y cualquier persona que quiera conocer más sobre las profesiones y descubrir nuevas posibilidades. También es una herramienta para maestros, familias y educadores que buscan acompañar a otros en la exploración de sus intereses y habilidades.</p></div><div class="box"><h3>ODS 4: Educación de calidad</h3><p>DESCUBRE se relaciona con el Objetivo de Desarrollo Sostenible 4 de las Naciones Unidas, que busca garantizar una educación inclusiva, equitativa y de calidad. A través de información accesible y actividades educativas, queremos acercar nuevas oportunidades de aprendizaje a distintas personas y contribuir a que conozcan más opciones para su desarrollo y futuro.</p></div><div class="box"><h3>Úsalo en talleres</h3><p>DESCUBRE puede utilizarse en talleres, escuelas y actividades grupales para explorar distintas profesiones de una manera dinámica. Su contenido permite conocer carreras, identificar habilidades personales y realizar actividades que ayuden a descubrir intereses y nuevas opciones para el futuro.</p></div><div class="box"><h3>Agradecimientos</h3><p>Agradecemos al Patronato de la Casa de los Niños por permitirnos desarrollar actividades que promueven el aprendizaje y la exploración vocacional. También agradecemos a todas las personas que colaboraron en la creación de DESCUBRE y que hicieron posible esta iniciativa, cuyo propósito es compartir conocimientos, despertar la curiosidad y acercar nuevas oportunidades a más personas.</p></div></div><h2 style="margin-top:30px">Actividades destacadas</h2>${destacadas()}</section>`},
enaccion(){return `<section><h2>En acción</h2><p>Actividades para hacer con hoja, lápiz y otros materiales.</p><div class="tools"><input id="aq" type="search" placeholder="Busca una actividad o material…" aria-label="Buscar actividades"></div><div class="grid" id="al"></div></section>`},
tests(){return `<section><h2>¿Te identificas?</h2><p>Tus respuestas no se guardan ni se envían a ningún lado.</p><div class="grid" id="tl"></div></section>`},
creditos(){return `<section id="creditos"><h2>Créditos y fuentes de imágenes</h2><p>En DESCUBRE reconocemos el trabajo de fotógrafos, artistas, instituciones, medios de comunicación y organizaciones cuyas imágenes ayudan a mostrar diferentes profesiones y trayectorias. Los créditos identifican las fuentes y los titulares correspondientes a las imágenes utilizadas.</p>${CRED.map(s=>`<h2 class="cs">${s[0]}</h2><div class="grid">${s[1].map(e=>`<article class="card"><h3>${e[0]}</h3>${e[1].map(credLine).join("")}</article>`).join("")}</div>`).join("")}<h2 class="cs">Fichas de crédito</h2><div class="grid">${CRED3.map(c=>`<article class="card"><h3>${c[0]}</h3><p><b>Identificación:</b> ${c[1]}</p><p><b>Créditos y derechos de autor:</b> ${c[2]}</p><p><b>Uso:</b> ${c[3]}</p></article>`).join("")}</div><div class="box" style="margin-top:34px"><h3>Nota de créditos</h3><p>DESCUBRE reconoce la autoría de las fotografías, ilustraciones y demás materiales visuales utilizados en el proyecto. Los derechos de cada imagen pertenecen a sus respectivos autores o titulares, de acuerdo con las condiciones aplicables a cada obra.</p></div></section>`},
nf(){return `<section><div class="empty"><h2>Página no encontrada</h2><a class="btn" href="#inicio">Volver al inicio</a></div></section>`}
};

/* ===== INTERACCIONES ===== */
const after={
enaccion(){const draw=q=>{const r=ACT.filter(x=>!q||norm(x.t+" "+x.m+" "+x.cn).includes(q));
$("#al").innerHTML=r.length?r.map(x=>`<article class="card"><span class="tag">Carrera: ${x.cn}</span><h3>${x.t}</h3><p><b>Necesitas:</b> ${x.m}</p><ol class="steps">${x.p.map(s=>`<li>${s}</li>`).join("")}</ol><a class="btn alt" href="#carrera-${x.c}">Ver carrera</a></article>`).join(""):`<div class="empty" style="grid-column:1/-1">No encontramos esa actividad.</div>`};
$("#aq").oninput=e=>draw(norm(e.target.value.trim()));draw("")},
tests(){$("#tl").innerHTML=TESTS.map(t=>testHTML(t)).join("");bindTests($("#tl"))},
carrera(){bindTests(document.querySelector(".cr"));const o=Math.max(0,CAREERS.findIndex(c=>c[0]===location.hash.slice(9)));document.querySelectorAll(".cr .box").forEach((b,i)=>b.className="box k"+((i+o)%5))},
"carreras-lista"(){let cat=-1,q="";const chips=$("#chips");
const all=[["Todas",-1],...CATS.map((c,i)=>[c,i])];
chips.innerHTML=all.map(a=>`<button class="chip" type="button" data-c="${a[1]}" aria-pressed="${a[1]===-1}">${a[0]}</button>`).join("");
const draw=()=>{const r=CAREERS.filter(c=>(cat<0||c[2]===cat)&&(!q||norm(c[1]+" "+c[0].replace(/-/g," ")+" "+(DESCS[c[0]]||c[3])).includes(q)));
$("#list").innerHTML=r.length?r.map(careerCard).join(""):`<div class="empty" style="grid-column:1/-1">No encontramos esa profesión. Prueba con otra palabra o elige “Todas”.</div>`;
$("#count").textContent=r.length+" resultado"+(r.length===1?"":"s");
chips.querySelectorAll(".chip").forEach(b=>b.setAttribute("aria-pressed",+b.dataset.c===cat));};
chips.onclick=e=>{const b=e.target.closest(".chip");if(b){cat=+b.dataset.c;draw()}};
$("#q").oninput=e=>{q=norm(e.target.value.trim());draw()};
$("#rnd").onclick=()=>{location.hash="carrera-"+CAREERS[Math.floor(Math.random()*CAREERS.length)][0]};draw()},
diccionario(){let L="",q="";const sorted=[...GLOSS].sort((a,b)=>a[0].localeCompare(b[0],"es"));
const letters=[...new Set(sorted.map(g=>g[0][0].toUpperCase()))];
$("#az").innerHTML=letters.map(l=>`<button type="button" data-l="${l}" aria-pressed="false">${l}</button>`).join("");
const draw=()=>{const r=sorted.filter(g=>(!L||g[0][0].toUpperCase()===L)&&(!q||norm(g[0]+g[1]).includes(q)));
$("#gl").innerHTML=r.length?r.map(g=>`<article class="card"><h3>${g[0]}</h3><p>${g[1]}</p></article>`).join(""):`<div class="empty" style="grid-column:1/-1">No encontramos esa palabra.</div>`;
$("#az").querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l===L))};
$("#az").onclick=e=>{const b=e.target.closest("button");if(b){L=L===b.dataset.l?"":b.dataset.l;draw()}};
$("#gq").oninput=e=>{q=norm(e.target.value.trim());draw()};draw()},
revista(arg){const SP=[[1]];for(let i=2;i<=REV_N;i+=2)SP.push(i+1<=REV_N?[i,i+1]:[i]);
const mq=matchMedia("(max-width:700px)"),book=$("#rv-book"),sel=$("#rv-go"),prev=$("#rv-prev"),next=$("#rv-next");let pg=1;
const k0=REV_ORDER.indexOf(arg);if(k0>=0&&SP[k0+2])pg=SP[k0+2][0];
const spOf=n=>SP.findIndex(s=>s.includes(n)),lab=i=>i===0?"Portada":i===1?"Bienvenida e índice":(byId(REV_ORDER[i-2])||[0,"Carrera"])[1];
sel.innerHTML=SP.map((s,i)=>`<option value="${s[0]}">${lab(i)} (${s.length>1?"págs. "+s[0]+"–"+s[1]:"pág. "+s[0]})</option>`).join("");
const draw=()=>{const nw=mq.matches,i=spOf(pg),show=nw?[pg]:SP[i];if(!nw)pg=SP[i][0];
book.style.minHeight=book.offsetHeight+"px";/* evita que la página se encoja y salte hacia arriba al cambiar de pliego */
book.className="rv-book"+(show.length===1?" single":"");
book.innerHTML=show.map(n=>`<img width="900" height="1200" src="${revSrc(n)}" alt="Página ${n} de la revista DESCUBRE: ${lab(spOf(n))}">`).join("");
Promise.all([...book.querySelectorAll("img")].map(m=>m.decode?m.decode().catch(()=>0):0)).then(()=>{book.style.minHeight=""});
$("#rv-n").textContent=(show.length>1?"Páginas "+show[0]+" y "+show[1]:"Página "+show[0])+" de "+REV_N;
sel.value=SP[i][0];prev.disabled=nw?pg<=1:i===0;next.disabled=nw?pg>=REV_N:i===SP.length-1;
const id=i>=2?REV_ORDER[i-2]:"";$("#rv-link").innerHTML=id?`<a class="btn alt" href="#carrera-${id}">Ver la ficha de ${byId(id)[1]} en el sitio</a>`:""};
const step=d=>{if(mq.matches)pg=Math.min(REV_N,Math.max(1,pg+d));else pg=SP[Math.min(SP.length-1,Math.max(0,spOf(pg)+d))][0];draw()};
prev.onclick=()=>step(-1);next.onclick=()=>step(1);sel.onchange=()=>{pg=+sel.value;draw()};mq.onchange=draw;
document.onkeydown=e=>{if(!$("#rv-book"))return;if(e.key==="ArrowRight")step(1);if(e.key==="ArrowLeft")step(-1)};draw()}
};

/* ===== ROUTER (#inicio, #carreras, #carrera-<id>, ...) ===== */
const NAV=[["inicio","Inicio"],["carreras","Carreras"],["actividades","Actividades"],["revista","Revista"],["sobre","Sobre el proyecto"]];
function route(){const h=(location.hash.slice(1)||"inicio");let name=h,arg;
if(h.startsWith("carrera-")){name="carrera";arg=h.slice(8)}if(h.startsWith("revista-")){name="revista";arg=h.slice(8)}
const v=views[name]||views.nf;
$("#app").innerHTML=v(arg);if(after[name])after[name](arg);if(name==="carreras-habilidades")initSkills();
const sec=["profesionales","diccionario","enaccion","tests"].includes(name)?"actividades":(name==="carrera"||name.startsWith("carreras-")?"carreras":name);
$("#nav").innerHTML=NAV.map(n=>`<a href="#${n[0]}" ${n[0]===sec?'class="on" aria-current="page"':""}>${n[1]}</a>`).join("");
window.scrollTo(0,0);document.title=(name==="carrera"&&byId(arg)?byId(arg)[1]+" · ":"")+"DESCUBRE · Versión de prueba"}
$(".logo").setAttribute("aria-label","DESCUBRE, inicio");$(".logo").innerHTML=`<img class="logoimg" src="${LOGO}" alt="DESCUBRE">`;
addEventListener("hashchange",route);route();
