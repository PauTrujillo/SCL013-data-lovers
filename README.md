
![imagen a mostrar](src/Images_proyect/Banner.png)


:zap: MAGIC MATCH :zap:

### INDICE

* [1. INTRODUCCIÓN A MAGIC MATCH](#introduccion)
* [2. MAGIC MATCH: TODO LO QUE NECESITAS SABER](#informacion)	
* [3. PLANIFICACIÓN](#construccion)	
* [4. DISEÑO UX](#diseno)	
* [5. CONCLUSIONES Y REFLEXIONES](#conclusiones)	
* [6. AGRADECIMIENTOS](#agradecimientos)	



<a id="introduccion"> :sparkles: 1. INTRODUCCIÓN A MAGIC MATCH :sparkles: </a>

Magic Match es una plataforma web basada en el imaginario de Harry Potter, que ofrece a sus usuarios la oportunidad de jugar dos tests, donde podrán encontrar su alma gemela mágica y su enemigo mágico, dentro de los personajes de la Saga.

Adicionalmente, el usuario tiene acceso a la información técnica de cada uno de los personajes disponibles. 

***

<a id="informacion">  :boom: 2. Magic Match: Todo lo que necesitas saber	:boom: </a>

***Magic Match*** nace como respuesta ante la necesidad de nuestro cliente, por mejorar la experiencia de usuario de los jugadores de la plataforma: "Harry Potter: Wizards Unite". 

Luego de sus propios estudios en usuarios, se dieron cuenta que había ciertos elementos que podrían ser útiles de implementar, ya que aportarían a mejorar la experiencia  de aquellos usuarios. 

Estos elementos son:

-Poder filtrar personajes por sus características, particularmente: 

*Patronus 
*Varita Mágica 
*Casa Mágica
*Profesión

-Poder acceder a la información de los personajes disponibles en la base de datos. 

Bajo este concepto se concibe ***Magic Match***, cuyo objetivo principal es complementar la experiencia de usuario de los jugadores de "Harry Potter: Wizards Unite", a través de una plataforma web, que les permita participar de dos experiencias de estilo test. Como recompensa obtendrán sus Match Mágicos dentro de la gama de personajes disponibles, tanto en categoría Pareja,como Enemigo. 

El usuario además puede acceder a una sección de Personajes, donde encontrará las fichas técnicas de cada uno de los personajes que forman parte de la base de datos dispuesta por nuestro cliente. 

La plataforma ***Magic Match*** también permite el acceso a usuarios que no son participantes de "Harry Potter: Wizards Unite", pero que si se sienten atraídos por las experiencias relacionadas al mundo de Harry Potter. 

**¿Cómo funciona?**

El usuario entra a la Plataforma de ***Magic Match***, escoge entre Descubrir su Pareja Mágica, su Enemigo Mágico o Conocer más sobre los personajes disponibles. 
No es necesario registrarse, ni estar vinculado a ninguna otra plataforma para acceder. 

Una vez que accede a cualquiera de los dos juegos disponibles, se le presenta un set de 5 preguntas, donde el usuario debe escoger su respuesta. 
Este set de preguntas está creado a partir de los elementos que desea implementar nuestro cliente, por tanto hay preguntas relacionadas con las varitas, los Patronus y las casas mágicas de los personajes. 

El mecanismo por el cuál se obtiene el match mágico del usuario es a través del filtrado, por tanto, el usuario efectivamente cumple con el objetivo técnico de filtrar, y lo hace a través de las respuestas que va entregando en cada pregunta, pero este es un filtrado intuitivo que entrega un resultado en función del instinto del usuario, y no un filtrado racional que solo arroja un orden predeterminado. 

Por otra parte, cuando el usuario ingresa a la categoría para conocer más sobre los personajes, puede ver las fotos de cada uno de ellos en la pagina web, las cuales puede ordenar bajo distintos criterios, como alfabéticamente y por relevancia. 
Al hacer click en cualquiera de las fotos disponibles, el usuario accede a una ficha técnica con información del personaje seleccionado. 


***	


<a id="construccion"> :dizzy: 3. CONSTRUCCIÓN DEL PROYECTO :dizzy: </a>

Te invitamos a acceder nuestra plataforma de trabajo, donde podrás ver gráficamente todo el proceso de este Proyecto. 

[Ingresa aquí a nuestro Board en Miro](https://miro.com/welcomeonboard/5Yy90mCtve1ddMJERFMiUXw5wQrPaYKfvtROmuIpzWqNOF85IgoVaKUB2NicW6vB)



### El comienzo 


Todo empieza cuando nuestro cliente plantea la necesidad de crear una plataforma que potenciara la experiencia de los usuarios de "Harry Potter: Wizards Unite", implementando soluciones a las necesidades descubiertas luego de investigaciones UX. 

Si bien lo esencial era implementar el mecanismo de filtrado, y desplegar las fichas de los diferentes personajes, no queríamos simplemente ser un apéndice enciclopédico para el juego, sino estimular al usuario a partir de una experiencia interactiva, intiutiva y con recompensas.

Ideamos un primer Diagrama de Flujo de la aplicación, donde se refleja la primera aproximación a nuestra propuesta.

![imagen a mostrar](Images_readme/Diagrama1.png)

Con este primer paso teníamos un punto de partida, pero luego de ir trabajando en nuestra propuesta y recibiendo feedback, se concibió la idea de lo que hoy es ***Magic Match***: Una aplicación que no solo muestra al usuario su afín de pareja en el mundo de Harry Potter, sino también su enemigo. 
Con esto, ***Magic Match*** se convirtió en una idea ganadora para nuestro equipo. 

Luego de tener claro hacia donde nos dirigíamos, comenzamos nuestra planificación, para llevar a cabo el proyecto. 


### Organización del Proyecto

Nuestra forma de trabajo se basa en la metodología SCRUM de Metodologías Ágiles. 

Comenzamos nuestro proceso de planificación desglosando cada diferente tarea y objetivo en un tablero de trabajo. 

[Visita acá nuestro Desglose del Proyecto](https://trello.com/b/uGPxOAaF/harry-potter)

Con una aproximación más clara de nuestras misiones y objetivos, creamos una calendarización de nuestro proyecto, en la misma plataforma.

[Visita acá nuestro Calendario](https://trello.com/b/x3gtxXLE/calendario-planificaci%C3%B3n-data-lovers)


El proceso de planificación se dividió en 4 Sprint: 

-Planificación e Investigación
-Desarrollo
-Codeo
-Testeo y Afinamiento. 

La idea general de nuestra planificación fue setear tareas diarias, para ir resolviendo en equipo.

Cada día realizamos un Daily Meeting, que nos sirvió para ir poniéndonos al tanto como equipo, e ir avanzando en conjunto hacia los objetivos diarios. 

Al final de cada Sprint tuvimos una Retrospectiva de la semana, donde preparamos el tablero de Actividades para el siguiente Sprint. 

Con la planificación clara, procedimos a trabajar en nuestro proyecto. 


### Desarrollo

SPRINT :one:

Comenzamos el Sprint tomando dos lineas principales de trabajo. La primera fue Investigación, donde se estudió constantemente las distintas temáticas a aplicarse en nuestro proyecto, desde las diferentes perspectivas desde donde debe ser construido. 

En paralelo, tuvimos el proceso de búsqueda para definir y redefinir la aplicación, y setearla como lo que actualmente proponemos como Magic Match. 

Creamos un nuevo diagrama de flujo, el cuál marca el flujo real con que se desarrolla la aplicación actualmente. 

![imagen a mostrar](Images_readme/Diagrama_Final.png)

Tambien definimos a nuestros Usuarios y sus necesidades. 

Hicimos Sketchs del proyecto y creamos protitpos de baja, los cuales fueron probados e hicimos iteraciones, según el feedback obtenido. 

Se creó un prototipo de Alta en Figma.

Se escribieron Pruebas de usuario y Criterios de Aceptación. 

Se hicieron pruebas de usuario con el protipo en Alta. 

En paralelo, estuvimos investigando y practicando Java Script para aplicar en la plataforma. 

Finalmente, integramos en la plataforma Miro, todos los documentos de nuestro proyecto, que es el link presentado el inicio de esta Categoría. 

Terminamos la semana con una retrospectiva, y reformulamos el Tablero de Actividades del Sprint 2, incluyendo las historias de Usuarios. 

Sprint 2. 


Sprint 3. 



ACA TENEMOS QUE DESCRIBIR BIEN. DE MANERA CLARA Y SIN ALARGARSE TANTO, TOMANDO EN CUENTA QUE TENEMOS QUE DESCRIBIR BIEN EL PROCESO UX. 




***
 
<a id="diseno">  first_quarter_moon: 4. DISEÑO UX first_quarter_moon: </a>


El eje central de nuestro trabajo fue el diseño UX. 

Nuestro proceso de construcción del proyecto tiene como objetivo principal exponenciar la experiencia de los usuarios de "Harry Potter: Wizards Unite", bajo la implementación de mecanismos solicitados como requisito técnico fundamental. 

A continuación detallamos paso a paso, toda la construcción del diseño UX de la plataforma Magic Match. 

### Usuarios Plataforma 


Podemos identificar 2 perfiles de usuario predominantes en nuestra aplicación.



:black_medium_small_square:	Usuario que juega "Harry Potter: Wizards Unite". 

:black_medium_small_square:	Usuario que no juega "Harry Potter: Wizards Unite", pero que gusta de involucrarse con el mundo de Harry Potter. 


**Perfil Usuario A:** 

Hombres y mujeres. 
Mayores de 10 años.
Usuarios de "Harry Potter: Wizards Unite".
Con acceso a plataforma web. 


Usuario A, es un hombre o mujer, mayor de 10 años, con acceso a plataforma web. 
Este usuario juega activamente el juego "Harry Potter: Wizards Unite". 
Este usuario disfruta de utilizar plataformas que lo involucren en el mundo de Harry Potter, especialmente si esa experiencia va a ser un aporte para su experiencia en otras instancias, por ejemplo, al momento de elegir algunas características de su perfil en la plataforma donde juega. 

Necesidades Usuario A:

* Acceso a plataforma relacionada con el mundo Harry Potter
* Plataforma que potencie su experiencia en relación a "Harry Potter: Wizards Unite". 
* Poder obtener información sobre los personajes del juego 
* Conocer información sobre las varitas de los personajes 
* Poder hacer filtrado de los personajes con distintas categorías, entre ellas: Varita Mágica,    Patronus y Casa Mágica. 
* Acceder a una interfaz amigable que se representa la identidad visual de Harry Potter. 



***Perfil Usuario B***

Hombres y mujeres. 
Sin rango etario
Gustan del mundo Harry Potter. 
Con acceso a una plataforma web


Usuario B, es un hombre o mujer, sin rango etario, con acceso a plataforma web. 
Este usuario gusta del mundo Harry Potter, por tanto disfruta y tiene interés en las instancias que lo relacionen a este. 

Necesidades Usuario B:

* Acceso a plataforma relacionada con el mundo Harry Potter y que esta sea interesante. 
* Navegar en una aplicación divertida, que lo identifique con el mundo de Harry Potter. 
* Acceder a una interfaz amigable que se represente la identidad visual de Harry Potter. 


![imagen a mostrar](Images_readme/Usuarios-clientes.jpg)




### Interfaz y Prototipado :memo: :computer:

Para la construcción de la interfaz de la aplicación, trabajamos en continuas iteraciones de prototipos en baja y alta, con el fin de tener un feedback nutrido gracias a las pruebas de usarios. 

Comenzamos realizando sketchs en lápiz y papel, para luego digitalizarlos y construir un primer prototipo en baja. 

La idea era testear si el concepto de nuestra aplicación era bien acogido, y si funcionaba el flujo de la aplicación. 

![imagen a mostrar](Images_readme/Sketchs/1.png)
![imagen a mostrar](Images_readme/Sketchs/2.png)
![imagen a mostrar](Images_readme/Sketchs/3.png)
![imagen a mostrar](Images_readme/Sketchs/4.png)


Luego de estos primeros testeos, pudimos validar que nuestra aplicación tenía buena acogida, pero que era fundamental darle la visualidad de la aplicación. 

Realizamos una iteración en baja, con un primer acercamiento visual. El objetivo era obtener feedback sobre la estética de la aplicación, y revalidar el concepto de esta misma. 
Gracias al feedback recibido, decidimos trasladar el proceso a Figma, para realizar nuestro primer Prototipo en Alta. 

![imagen a mostrar](Images_readme/Sketchs/5.png)

Con este prototipo en Alta listo, hicimos una ronda de feedback, donde aplicamos algunos cambios menores y comenzamos a probar nuestra prueba a mayor escala, a través de entrevistas grabadas y pautadas con guión. 


![imagen a mostrar](Images_readme/GUION.jpg)

Links para revisar entrevistas a Usuarios:

[Video Entrevista 1](https://drive.google.com/file/d/11MZlOLxsLa-VkMGXeKXGdflFkwX8qnmx/view)
[Video Entrevista 2](https://drive.google.com/file/d/1cU3r69QLSarrMsbWBaNo1wlmIoBlWi-x/view)
[Video Entrevista 3](https://drive.google.com/file/d/1HsBQL7ww3gaurUcJOdQYaGdWNRkHDOk9/view)
[Video Entrevista 4](https://drive.google.com/file/d/1Js4NyYOjZX99aLpa1UTmV7DEBiIzf141/view)
[Video Entrevista 5](https://drive.google.com/file/d/1PB58zlhh5eSOttcKoR1hffN3Kukv-H5d/view)

Como resultado de estas entrevistas, pudimos inferir lo siguiente:

:black_circle: Usuarios aprueban la aplicación en general. :+1:
:black_circle: Usuarios disfrutan de los juegos de la aplicación. :+1:
:black_circle: Usuarios prefieren las preguntas técnicas que los relacionan a los personajes. :+1:
:black_circle: Usuarios encuentran incongruencias en Data. :-1:
:black_circle: Usuarios necesitan una mejora en la visualidad, que sea más cercana a Harry Potter. :-1:
:black_circle: Usuarios no disfrutan de preguntas relacionadas a rasgos físicos de los personajes. :-1:



CONCLUSIONES 

COMO DEFINIMOS INTERFAZ USUSARIO 

:o: Existen los usuarios perfilados. 

:o: El usuario siempre está en búsqueda de una mejor experiencia de usuario. 

:o: El usuario disfruta la plataforma. 

:o: etc

:o: resolvemos necesidades de Cliente? 

:o: resolvemos necesidades de ususario? 

:o: 
¡
NUEVO PROTOTIPO EN ALTA IMPLEMENTADO EN MAZE 


!
ANALISIS Y RESULTADO 


PRODUCTO FINAL  + LINK EN GIT HUB PAGES 




***	

<a id="conclusiones"> :first_quarter_moon_with_face:  5. CONCLUSIONES Y REFLEXIONES :first_quarter_moon_with_face:</a>


COMENTAR COMO FUE NUESTRO PROCESO. COMO SE AFRONTÓ Y COMO SE DESARROLLO. 

VER LAS COSAS QUE SE NOS HICIERON DIFICILES

VER LAS COSAS QUE SE NOS HICIERON FACILES O DISFRUTAMOS MAS



COMENTAR SI CUMPLIMOS CON OBJETIVOS DEL PROYECTO. REFLEXION AL RESPECTO 


COMO PODEMOS MEJORAR EN EL FUTURO. 

FIN DE CONCLUSIONES. REFLEXION FINAL

***	


<a id="agradecimientos"> :sun_with_face: 6. AGRADECIMIENTOS  :sun_with_face: </a>


Se Escribirá esta parte en la semana final del proyecto. 




Copyright by Yosliana Aguilar y Paula Trujillo, 2020 | Laboratoria 013





