<script>
import Header from "../components/SubHeader.vue";
import { sesionStore } from "@/stores/sesionStore";
import { mapStores } from "pinia";

export default {
  components: {
    Header,
  },

  computed: {
    ...mapStores(sesionStore),
  },

  mounted() {
    this.sesionStore.setRutaActual(this.$route.name);
  },

  methods: {
    articulo1() {
      let articulos = document.getElementById("lista-articulos");
      let articulo = document.getElementById("articulo1");
      articulos.style.display = "none";
      articulo.style.display = "block";
    },

    articulo2() {
      let articulos = document.getElementById("lista-articulos");
      let articulo = document.getElementById("articulo2");
      articulos.style.display = "none";
      articulo.style.display = "block";
    },

    articulo3() {
      let articulos = document.getElementById("lista-articulos");
      let articulo = document.getElementById("articulo3");
      articulos.style.display = "none";
      articulo.style.display = "block";
    },

    articulo4() {
      let articulos = document.getElementById("lista-articulos");
      let articulo = document.getElementById("articulo4");
      articulos.style.display = "none";
      articulo.style.display = "block";
    },

    retroceder() {
      let articulos = document.getElementById("lista-articulos");
      let articulo1 = document.getElementById("articulo1");
      let articulo2 = document.getElementById("articulo2");
      let articulo3 = document.getElementById("articulo3");
      let articulo4 = document.getElementById("articulo4");
      articulos.style.display = "block";
      articulo1.style.display = "none";
      articulo2.style.display = "none";
      articulo3.style.display = "none";
      articulo4.style.display = "none";
    },
  },
};
</script>

<template>
  <div>
    <div>
      <Header />
    </div>
    <section id="lista-articulos" class="articulos">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
            <div class="lista">
              <ol>
                <li>
                  <div class="card card-html">
                    <div class="card-header">
                      <i class="fab fa-html5">¿Por qué soñamos?</i>
                    </div>
                    <div class="card-body">
                      Los sueños constituyen una parte irremplazable de la
                      riqueza de ser humanos. Podemos acordarnos o no, pueden
                      ser agradables o terroríficos, pero lo cierto es que todos
                      soñamos, sin excepciones. Es por ello que los sueños son
                      una constante en los textos históricos, como parte en la
                      mitología y en la religión. Pero, ¿son los sueños una
                      parte sin importancia de nuestra existencia o trascienden
                      realmente a lo anecdótico?
                    </div>
                    <div class="card-footer">
                      <div class="clearfix">
                        <div id="enlace" class="float-right">
                          <button @click="articulo1()" class="btn btn-success">
                            <span>Click per saber més</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="card card-html">
                    <div class="card-header">
                      <i class="fab fa-html5">Los beneficios de dormir</i>
                    </div>
                    <div class="card-body">
                      Tenemos demasiadas exigencias en cuanto a nuestro tiempo
                      (trabajo, familia, mandados), sin contar que queremos
                      encontrar tiempo para relajarnos. Para que todo encaje, a
                      veces sacrificamos el sueño. Sin embargo, el sueño afecta
                      tanto la salud física como la mental. Es fundamental para
                      nuestro bienestar.
                    </div>
                    <div class="card-footer">
                      <div class="clearfix">
                        <div id="enlace" class="float-right">
                          <button @click="articulo2()" class="btn btn-success">
                            <span>Click per saber més</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="card card-html">
                    <div class="card-header">
                      <i class="fab fa-html5">Las etapas del sueño</i>
                    </div>
                    <div class="card-body">
                      Mientras dormimos se suceden una serie de procesos
                      regenerativos del músculo y hormonales que nos preparan
                      para afrontar descansados el día siguiente. Se puede decir
                      que nuestro sueño es cíclico y pasa por una serie de fases
                      que se van repitiendo a lo largo de toda la noche. Las dos
                      principales fases del sueño en adultos que conocemos son
                      dos: el sueño REM y el sueño no REM.
                    </div>
                    <div class="card-footer">
                      <div class="clearfix">
                        <div id="enlace" class="float-right">
                          <button @click="articulo3()" class="btn btn-success">
                            <span>Click per saber més</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="card card-html">
                    <div class="card-header">
                      <i class="fab fa-html5"
                        >¿Qué es y cómo reconocer si hay un problema de salud
                        mental?</i
                      >
                    </div>
                    <div class="card-body">
                      Las personas que tienen problemas de salud mental, a
                      menudo, se sienten aisladas, frustradas y abrumadas. Todas
                      las áreas de su vida se ven afectadas por ese problema, la
                      forma de pensar, sentir y actuar también. Tener un
                      problema de salud mental y tener una enfermedad de salud
                      mental no son lo mismo, aunque se tiende a utilizar como
                      si fueran sinónimos.
                    </div>
                    <div class="card-footer">
                      <div class="clearfix">
                        <div id="enlace" class="float-right">
                          <button @click="articulo4()" class="btn btn-success">
                            <span>Click per saber més</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="articulo1" class="articulos">
      <section class="container">
        <br /><br />
        <article class="jumbotron">
          <div class="row">
            <div class="col-12 retroceder">
              <a @click="retroceder()">
                <span id="btn-articulo" class="material-symbols-outlined">
                  arrow_back
                </span>
              </a>
            </div>
            <div class="col-xs-12">
              <h1 class="text-center">¿Por qué soñamos?</h1>
              <section class="thumbnail text-center">
                <img
                  id="img-article"
                  class=""
                  src="https://cope-cdnmed.agilecontent.com/resources/jpg/8/1/1568796999118.jpg"
                  alt="Porque soñamos"
                />
              </section>
              <div>
                <h3 class="text-center">
                  A continuación, abordamos una de las preguntas más
                  interesantes e inquietantes, ¿Por qué soñamos?
                </h3>
                <hr />
                <ul>
                  <li>
                    Los sueños constituyen una parte irremplazable de la riqueza
                    de ser humanos. Podemos acordarnos o no, pueden ser
                    agradables o terroríficos, pero lo cierto es que todos
                    soñamos, sin excepciones. Es por ello que los sueños son una
                    constante en los textos históricos, como parte en la
                    mitología y en la religión. Pero, ¿son los sueños una parte
                    sin importancia de nuestra existencia o trascienden
                    realmente a lo anecdótico?
                  </li>
                  <br />
                  <li class="blockquote text-center">
                    <strong
                      >“Somos del mismo material del que se tejen los sueños,
                      nuestra pequeña vida está rodeada de sueños”</strong
                    >
                  </li>
                  <li class="blockquote-footer text-center">
                    <strong>William Shakespeare</strong>
                  </li>
                  <br />
                  <h4><strong>¿Cuando soñamos?</strong></h4>
                  <li>
                    Pasamos una tercera parte de nuestra vida durmiendo. Sin
                    embargo, solo soñamos en fases de pocos minutos. Si
                    calculamos un promedio, según las investigaciones, se
                    calcula que, a lo largo de nuestra vida, soñamos cerca de 6
                    años enteros.
                  </li>
                  <br />
                  <li>
                    Durante este proceso, el cerebro se activa necesitando para
                    ello que el flujo de sangre en el mismo sea el doble que el
                    necesario durante el estado de vigilia. Solo una parte del
                    cerebro deja de funcionar mientras dormimos: el centro
                    lógico. Es por esta razón por la que los sueños adquieren
                    muchas veces matices de irrealidad. Además, el cerebro envía
                    señales a la médula espinal con el fin de que no se active
                    el sistema musculoesquelético y nos mantengamos quietos. Lo
                    único que movemos siempre mientras soñamos son nuestros
                    ojos. Es algo que sucede durante la fase conocida como REM
                    (Rapid Eyes Movement, movimientos oculares rápidos).
                  </li>
                  <br />
                  <li class="blockquote text-center">
                    <strong
                      >“¿Acaso el sueño no es el testimonio del ser perdido, de
                      un ser que se pierde, de un ser que huye de nuestro ser,
                      incluso si podemos repetirlo, volver a encontrarlo en su
                      extraña transformación?”</strong
                    >
                  </li>
                  <li class="blockquote-footer text-center">
                    <strong>Gastón Bachelard</strong>
                  </li>
                  <br />
                  <h4><strong>¿Cuál es la función de los sueños?</strong></h4>
                  <li>
                    Una función importante que cumple el cerebro durante el
                    sueño es la de desechar y seleccionar los recuerdos. Por
                    eso, antes de un examen es preferible no pasarnos la noche
                    estudiando, sino descansar la mente y consolidar la memoria.
                    Y eso se consigue solamente si dormimos el tiempo necesario.
                  </li>
                  <br />
                  <li>
                    Cuando soñamos, nuestro cerebro intenta solucionar los
                    problemas que nos ocupan durante el día. Por eso, dormir
                    puede ser la solución a un problema que no conseguimos
                    resolver.
                  </li>
                  <li>
                    Asimismo, un sueño puede ser un reflejo fiel o, en la
                    mayoría de los casos, simbólico de lo que ocupa nuestra
                    mente, de nuestros miedos y de nuestros deseos. De ahí que
                    sean comunes las pesadillas que evocan temores, tales como
                    la falta de confianza en uno mismo, que se puede reflejar,
                    por ejemplo, en un sueño en el que la persona se encuentra
                    desnuda en un lugar público.
                  </li>
                  <br />
                  <li>
                    Pero a veces, es el sueño el que ayuda a eliminar esos
                    temores. Es, al menos lo que señalan algunas teorías. Al
                    soñar con eso que nos da miedo en un contexto diferente lo
                    que ocurre es que se rebaja ese temor. No siempre ocurre, es
                    cierto, pero puede servir como una vía de escape.
                  </li>
                  <br />
                  <h4>
                    <strong
                      >Investigación sobre los sueños y las emociones</strong
                    >
                  </h4>
                  <li>
                    Las teorías que defienden el sueño como un proceso para
                    disminuir el temor pueden fundamentarse en un estudio
                    coordinado por el neurólogo Matthew Walker, de la
                    universidad de Berkeley. En dicha investigación, un grupo de
                    34 jóvenes sanos fue separado en dos grupos. Luego, les
                    hicieron ver un total de 150 imágenes en intervalos de 12
                    horas, mientras que los investigadores observaban su
                    actividad cerebral con un escáner.
                  </li>
                  <br />
                  <li>
                    Las imágenes presentadas reflejaban desde objetos insulsos
                    hasta retratos perturbadores de accidentes. En este caso, el
                    primer grupo veía las fotografías una vez por la mañana y
                    otra vez por la noche, sin haber dormido en el intervalo.
                    Por su parte, el segundo grupo las veía una vez antes de
                    acostarse y otra por la mañana cuando se levantaban.
                  </li>
                  <li>
                    Los resultados arrojan que los participantes que habían
                    dormido entre las visualizaciones tenían una reacción
                    emocional significativamente más suave respecto a la primera
                    visualización. En este caso, los resultados de los escaneos
                    cerebrales durante la fase REM, mostraban como la actividad
                    cerebral en la amígdala (estructura cerebral encargada de
                    las emociones), y el córtex pre frontal (estructura racional
                    del cerebro) procesaban el impacto de las imágenes
                    minimizándolo.
                  </li>
                  <br />
                  <li>
                    De esta forma, se concluye que el sueño REM puede ayudarnos
                    a superar situaciones emocionales difíciles en nuestra vida.
                    Entre ellas, disminuir el miedo de aquellas situaciones que
                    percibimos como amenazantes. Aunque, como muy bien dice el
                    experto en sueño David Kuhlmann, el sueño no es la cura para
                    todos los problemas emocionales.
                  </li>
                  <br />
                  <li class="blockquote text-center">
                    <strong
                      >“La mente es como un iceberg, flota con una séptima parte
                      de su volumen sobre el agua.”</strong
                    >
                  </li>
                  <li class="blockquote-footer text-center">
                    <strong>Sigmund Freud</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
        <br /><br />
      </section>
    </section>

    <section id="articulo2" class="articulos">
      <section class="container">
        <br /><br />
        <article class="jumbotron">
          <div class="row">
            <div class="col-12 retroceder">
              <a @click="retroceder()">
                <span id="btn-articulo" class="material-symbols-outlined">
                  arrow_back
                </span>
              </a>
            </div>
            <div class="col-xs-12">
              <h1 class="text-center">Los beneficios de dormir</h1>
              <section class="thumbnail text-center">
                <img
                  id="img-article"
                  class=""
                  src="https://i.ytimg.com/vi/wO6laYdutZQ/maxresdefault.jpg"
                  alt="Los beneficios de dormir"
                />
              </section>
              <div>
                <h3 class="text-center">
                  ¿Por qué siempre se dice que hay que descansar bien durante la
                  noche?
                </h3>
                <hr />
                <ul>
                  <li>
                    Por supuesto que dormir hace que uno se sienta descansado
                    todos los días. Sin embargo, mientras uno duerme, no
                    solamente la mente y el cuerpo se apagan. Durante la noche,
                    los órganos y los procesos internos trabajan arduamente.
                  </li>
                  <br />
                  <li class="blockquote text-center">
                    <strong
                      >"El dormir mantiene todos los aspectos del cuerpo de una
                      forma u otra: el equilibrio energético y molecular, así
                      como también la función intelectual, el estado de alerta y
                      el humor"</strong
                    >
                  </li>
                  <li class="blockquote-footer text-center">
                    <strong>Dr. Merrill Mitler</strong>
                  </li>
                  <br />
                  <li>
                    Cuando uno está cansado, no tiene el mejor rendimiento
                    posible. El dormir ayuda a pensar con más claridad, a tener
                    mejores reflejos y a concentrarse mejor.
                  </li>
                  <br />
                  <li>
                    Las personas que están cansadas tienden a ser menos
                    productivas en el trabajo. Tienen más posibilidades de
                    sufrir accidentes de tránsito. La falta de sueño también
                    influye sobre el humor, que puede afectar la manera en que
                    uno interactúa con otros. El déficit de sueño, con el paso
                    del tiempo, incluso puede incrementar el riesgo de sufrir
                    depresión.
                  </li>
                  <br />
                  <li class="blockquote text-center">
                    <strong
                      >"La pérdida de sueño daña los niveles superiores de
                      razonamiento, resolución de problemas y atención a los
                      detalles"</strong
                    >
                  </li>
                  <li class="blockquote-footer text-center">
                    <strong>Dr. Merrill Mitler</strong>
                  </li>
                  <br />
                  <li>
                    La investigación demuestra que la falta de sueño aumenta el
                    riesgo de padecer obesidad, enfermedades del corazón e
                    infecciones. Durante la noche, la frecuencia cardíaca, la
                    frecuencia de respiración y la presión arterial suben y
                    bajan, un proceso que puede ser importante para la salud
                    cardiovascular. Mientras duerme, el cuerpo libera hormonas
                    que ayudan a reparar las células y a controlar el uso de la
                    energía que hace el cuerpo. Estos cambios hormonales pueden
                    afectar su peso corporal.
                  </li>
                  <br />
                  <li class="blockquote text-center">
                    <strong
                      >"Investigaciones actuales demuestran que una falta de
                      sueño puede producir condiciones parecidas a la diabetes
                      en personas que de otro modo son saludables"</strong
                    >
                  </li>
                  <li class="blockquote-footer text-center">
                    <strong>Dr. Merrill Mitler</strong>
                  </li>
                  <br />
                  <li>
                    En estudios recientes se ha descubierto que el sueño puede
                    afectar la eficacia de las vacunaciones. Twery describió
                    investigaciones que demuestran que las personas que
                    descansaban bien y recibían la vacuna contra la gripe
                    desarrollaban una protección más fuerte contra la
                    enfermedad.
                  </li>
                  <li>
                    Una buena noche de sueño consiste en 4 o 5 ciclos de sueño.
                    Cada ciclo incluye períodos de sueño profundo y movimientos
                    oculares rápidos (MOR) o sueño desincronizado, cuando
                    soñamos
                  </li>
                  <br />
                  <li class="blockquote text-center">
                    <strong
                      >"A medida que avanza la noche, la porción de ese ciclo
                      que se encuentra en sueño desincronizado aumenta. Resulta
                      que este patrón de ciclos y progresión es fundamental para
                      la biología del sueño"</strong
                    >
                  </li>
                  <li class="blockquote-footer text-center">
                    <strong>Twery</strong>
                  </li>
                  <br />
                  <li>
                    Si bien las necesidades personales varían, en promedio, un
                    adulto necesita entre 7 y 8 horas de sueño por noche. Los
                    bebés generalmente duermen unas 16 horas diarias. Los niños
                    pequeños necesitan unas 10 horas de sueño, mientras que los
                    adolescentes necesitan, al menos, 9 horas. Para lograr el
                    máximo de los beneficios restauradores del sueño, es
                    importante lograr una noche completa de sueño de calidad,
                    dice Twery.
                  </li>
                  <br />
                  <li>
                    Muchas cosas pueden interrumpir el sueño. Los estimulantes
                    tales como la cafeína o algunos medicamentos pueden
                    mantenerlo activo. Las distracciones como aparatos
                    electrónicos (en especial la luz de televisores, teléfonos
                    celulares, tablets y lectores electrónicos) pueden evitar
                    que uno tenga se duerma.
                  </li>
                  <br />
                  <li>
                    A medida que una persona envejece, es posible que no duerma
                    lo suficiente debido a una enfermedad, medicamentos o
                    trastornos en el sueño. Según ciertos cálculos, alrededor de
                    70 millones de estadounidenses de todas las edades padecen
                    problemas crónicos de sueño. Los dos trastornos más comunes
                    relacionados con el sueño son el insomnio y la apnea del
                    sueño.
                  </li>
                  <br />
                  <li>
                    Las personas que padecen insomnio tienen problemas para
                    quedarse dormidos o permanecer dormidos. Por lo general, la
                    ansiedad por querer dormirse empeora la situación. La
                    mayoría de las personas tienen insomnio ocasionalmente. Sin
                    embargo, el insomnio crónico (que dura al menos 3 noches por
                    semana durante más de un mes) puede desencadenar graves
                    problemas durante el día, como agotamiento, irritabilidad y
                    dificultad para concentrarse.
                  </li>
                  <li>
                    Entre los tratamientos más comunes se encuentran la
                    relajación y las técnicas de respiración profunda. A veces
                    se puede recetar un medicamento, pero debe consultar con un
                    médico antes de probar con algún somnífero de venta libre,
                    ya que es posible que este tipo de fármacos lo dejen poco
                    revitalizado por la mañana.
                  </li>
                  <br />
                  <li class="blockquote text-center">
                    <strong
                      >“Descansar bien es fundamental para la salud. Para que
                      cada día sea seguro y productivo.”</strong
                    >
                  </li>
                  <li class="blockquote-footer text-center">
                    <strong>Dr. Merrill Mitler</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
        <br /><br />
      </section>
    </section>

    <section id="articulo3" class="articulos">
      <section class="container">
        <br /><br />
        <article class="jumbotron">
          <div class="row">
            <div class="col-12 retroceder">
              <a @click="retroceder()">
                <span id="btn-articulo" class="material-symbols-outlined">
                  arrow_back
                </span>
              </a>
            </div>
            <div class="col-xs-12">
              <h1 class="text-center">Las etapas del sueño</h1>
              <section class="thumbnail text-center">
                <img
                  id="img-article"
                  class=""
                  src="https://liroon.com/wp-content/uploads/2020/05/fases-del-sue%C3%B1o.jpg"
                  alt="Las etapas del sueño"
                />
              </section>
              <div>
                <h3 class="text-center">
                  ¿Cuáles son las fases del sueño y cuánto duran?
                </h3>
                <hr />
                <ul>
                  <li>
                    Mientras dormimos se suceden una serie de procesos
                    regenerativos del músculo y hormonales que nos preparan para
                    afrontar descansados el día siguiente. Se puede decir que
                    nuestro sueño es cíclico y pasa por una serie de fases que
                    se van repitiendo a lo largo de toda la noche. Las dos
                    principales fases del sueño en adultos que conocemos son
                    dos: el sueño REM y el sueño no REM.
                  </li>
                  <br />
                  <li>
                    El cerebro necesita que durmamos para llevar a cabo una
                    serie de procesos. El primero es recuperar energía, pero
                    también requiere reorganizar la información, llevar a la
                    memoria a largo plazo determinados datos, borrar otros que
                    considera inservibles, llevar a cabo diferentes tareas, etc.
                  </li>
                  <br />
                  <h4>
                    <strong
                      >Cómo identificar y medir las fases del sueño</strong
                    >
                  </h4>
                  <li>
                    Durante el periodo del sueño existen dos etapas principales:
                    la del sueño lento o no REM y la del sueño rápido o REM
                    (Rapid Eye Movement). El sueño no REM se concentra
                    mayoritariamente en el primer tercio de la noche, mientras
                    que el sueño REM se intensifica en el último tercio de la
                    misma.
                  </li>
                  <br />
                  <h5><strong>El sueño de ondas lentas</strong></h5>
                  <li>
                    La fase no REM es una fase de transición de la vigilia al
                    sueño. Apenas dura 15 minutos desde que cerramos los ojos,
                    pero solo tiene 5 minutos de sueño real. Dentro de esta fase
                    se suceden 4 etapas diferentes:
                  </li>
                  <br />
                  <ul>
                    <li>
                      <strong>Etapa 1 (Adormecimiento):</strong> dura unos 10
                      minutos y, aunque en ella todavía somos capaces de
                      percibir la mayoría de los estímulos, ya disminuye el tono
                      muscular y aparecen los primeros movimientos oculares
                      lentos (a nivel fisiológico, nos encontramos con unas
                      ondas cerebrales theta)
                    </li>
                    <br />
                    <li>
                      <strong>Etapa 2 (Sueño ligero):</strong> disminuyen el
                      ritmo cardíaco y respiratorio, por lo que comienza a
                      producirse un sueño más reparador, pero aún no suficiente;
                      es el momento en el que desaparecen ya los movimientos
                      oculares (si a la persona se le despierta en esta fase, no
                      recordará haber dormido)
                    </li>
                    <br />
                    <li>
                      <strong
                        >Etapa 3 (Transición hacia el sueño profundo):</strong
                      >
                      apenas dura 2-3 minutos, una fase en la que el sueño
                      comienza a ser más profundo y el bloqueo sensorial se
                      intensifica (aún no llegamos a soñar); si nos despertamos
                      en esta fase, lo haremos algo aturdidos y confusos, ya que
                      el sueño comienza a ser más reparador
                    </li>
                    <br />
                    <li>
                      <strong>Etapa 4 (Sueño Delta):</strong> dura unos 20
                      minutos (seguimos sin soñar) y es la fase en la que se
                      determina la eficiencia del sueño, por lo que resulta
                      vital para la recuperación física y mental
                    </li>
                  </ul>
                  <br />
                  <h5><strong>La fase de sueño REM</strong></h5>
                  <li>
                    Es una fase del sueño en la que el cerebro está muy activo.
                    El término REM viene de Rapid Eye Movement (los ojos de la
                    persona se mueven rápidamente en todas direcciones), una
                    fase en la que ya sí que soñamos. La primera aparición de
                    esta fase es de 10 minutos de duración, mientras que el
                    último sueño ya es de 30-40 minutos.
                  </li>
                  <br />
                  <li>
                    Durante los primeros 10 minutos, la respiración es rápida e
                    irregular. En los 30 minutos restantes, se produce un estado
                    de sueño profundo y en el cerebro se suceden de forma más
                    real los sueños. Sin ir más lejos, la mayoría de las
                    personas que se despiertan en esta fase son capaces de
                    recordar lo que estaban soñando.
                  </li>
                  <br />
                  <li>
                    Esta fase es fundamental para regenerar el cerebro, la
                    actividad de los genes y la reparación de las moléculas.
                    Suele durar unas dos horas en total y en ella el cerebro
                    está activo y el cuerpo inactivo. Los músculos se hallan
                    paralizados, a excepción de los oculares, los respiratorios
                    y los del oído interno. Precisamente, las frecuencias
                    respiratorias y cardíacas son más rápidas.
                  </li>
                  <br />
                  <li>
                    Se trata pues de una fase totalmente opuesta a las
                    anteriores. La actividad cerebral se halla desincronizada y
                    acelerada. Y, curiosamente, a pesar de ser difícil despertar
                    a una persona en esta fase, un estímulo significativo lo
                    puede despertar. Una fase del sueño en la que se aprecia una
                    pérdida del tono muscular, ya que es el momento en el que
                    aparecen las ensoñaciones. La desconexión de los músculos se
                    produce para que la persona no imite lo que está haciendo en
                    sueños.
                  </li>
                  <br />
                  <h4>
                    <strong>En qué fases del sueño soñamos</strong>
                  </h4>
                  <li>
                    La etapa o fase de sueño REM es en la que soñamos en forma
                    de historia. Es el momento en el que ni tan siquiera existe
                    el tono muscular, de ahí que, por ejemplo, no podamos gritar
                    en un sueño cuando queremos hacerlo. La fase REM es la que,
                    por tanto, acoge esas experiencias ilusorias que llamamos
                    sueños. Muchos de ellos se pueden recordar y otros no.
                  </li>
                  <br />
                  <li>
                    En la fase del sueño REM es cuando se dan también las
                    pesadillas y los sueños más complejos e impactantes. Incluso
                    hay personas que logran soñar mientras sueñan, lo que se
                    conoce como sueños lúcidos.
                  </li>
                  <li>
                    Los sueños que se dan cuando uno se despierta en la fase REM
                    son, por lo general, más largos, más nítidos
                    perceptivamente, más cargados emocionalmente y menos
                    relacionados con nuestra vida normal. Los sueños REM
                    contienen percepciones alucinatorias, imágenes raras que
                    cambian contínuamente y son sueños tan vívidos que a veces
                    nos hacen dudar si estamos despiertos o dormidos.
                  </li>
                  <br />
                  <li>
                    Por el contrario, los que surgen al despertar en la fase no
                    REM cuentan con más representaciones de nuestras
                    preocupaciones cotidianas y son más de tipo pensamiento y
                    menos como imágenes. Los sueños a veces tienen poca relación
                    con lo que pensamos o hacemos antes de dormir.
                  </li>
                  <br />
                  <li>
                    En los estadios 4 de las fases del sueño no REM pueden darse
                    una serie de fenómenos relacionados con el sueño. Es aquí
                    donde se producen las alucinaciones hipnagógicas auditivas o
                    visuales, que no recordamos al despertar y que se hallan
                    relacionadas con vivencias que pueden habernos afectado.
                  </li>
                  <br />
                  <h4>
                    <strong>Conclusiones</strong>
                  </h4>
                  <li>
                    Dormir es algo imprescindible para el organismo, pero no es
                    suficiente con dormir, sino que hay que dormir bien para que
                    el sueño sea completamente reparador. Mientras dormimos, el
                    cuerpo entra en un estado de desconexión física y mental. Es
                    el momento en el que transcurren las fases del sueño, que se
                    repiten durante las horas que dormimos, hasta el punto de
                    poder encadenar entre cuatro y seis ciclos seguidos.
                  </li>
                  <br />
                  <li>
                    Calcular el momento en el que acaba un ciclo para
                    despertarse es la mejor manera de poder estar descansados al
                    día siguiente. Lo que importa al final es la calidad del
                    sueño más que la cantidad.
                  </li>
                  <br />
                  <li class="blockquote text-center">
                    <strong
                      >“El cuerpo por la noche necesita realizar unos procesos
                      regenerativos del músculo y procesos hormonales. De ahí
                      que el sueño sea una actividad y una necesidad básica para
                      el cuerpo.”</strong
                    >
                  </li>
                  <li class="blockquote-footer text-center">
                    <strong>La ciencia</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
        <br /><br />
      </section>
    </section>

    <section id="articulo4" class="articulos">
      <section class="container">
        <br /><br />
        <article class="jumbotron">
          <div class="row">
            <div class="col-12 retroceder">
              <a @click="retroceder()">
                <span id="btn-articulo" class="material-symbols-outlined">
                  arrow_back
                </span>
              </a>
            </div>
            <div class="col-xs-12">
              <h1 class="text-center">
                Salud Mental: Qué es y cómo reconocer si hay un problema
              </h1>
              <section class="thumbnail text-center">
                <img
                  id="img-article"
                  class=""
                  src="https://manuelcassinello.com/wp-content/uploads/2021/10/salud-mental-1024x576.jpg"
                  alt="Las etapas del sueño"
                />
              </section>
              <div>
                <h3 class="text-center">
                  ¿Qué es la Salud Mental y qué son las enfermedades o
                  trastornos mentales?
                </h3>
                <hr />
                <ul>
                  <li>
                    Las enfermedades o trastornos mentales son afecciones graves
                    que afectan y alteran la forma de pensar de una persona, su
                    comportamiento y estado de ánimo. Pueden ser ocasionales o
                    permanentes, llegando a afectar de forma considerable a su
                    capacidad para relacionarse con los demás y la habilidad de
                    funcionar día a día. Las personas que sufren algún trastorno
                    de salud mental pueden mejorar, incluso recuperarse por
                    completo gracias a tratamientos y la atención de un
                    especialista en psiquiatría. Quienes tienen una enfermedad
                    mental pueden experimentar periodos de estabilidad emocional
                    y bienestar social. Las más conocidas son la depresión, la
                    esquizofrenia y el trastorno bipolar.
                  </li>
                  <br />
                  <li>
                    La salud mental, por el contrario, incluye el bienestar
                    emocional, psicológico y social de una persona. Afecta a la
                    forma de pensar, los sentimientos, cómo manejamos el estrés,
                    las relaciones con los demás, toma de decisiones y cómo
                    enfrentamos la vida en general. La salud mental es
                    importante en cada una de las etapas de nuestra vida, desde
                    la niñez y adolescencia, hasta la adultez y vejez. Y ésta
                    puede estar seriamente afectada en algún periodo o momento
                    de nuestra vida, pero no significa que se tenga o vaya a
                    desarrollar una enfermedad o trastorno mental.
                  </li>
                  <br />
                  <li>
                    Nuestra salud mental puede verse afectada y cambiar con el
                    tiempo, determinadas situaciones pueden llevar a agotar o
                    abrumar nuestra capacidad de lidiar con ellas. Esto puede
                    provocar que nuestra salud mental empeore, pero, con la
                    ayuda de un psiquiatra y sesiones de terapia podemos
                    conseguir mejorarla.
                  </li>
                  <br />
                  <h5>
                    <strong
                      >Existen varios factores que pueden afectar a nuestra
                      salud mental:</strong
                    >
                  </h5>
                  <br />
                  <ul class="lista-normal">
                    <li>
                      <strong>Factores biológicos como:</strong> la genética,
                      antecedentes familiares o la química del cerebro.
                    </li>
                    <br />
                    <li>
                      <strong>Experiencias traumáticas o abusos.</strong>
                    </li>
                    <br />
                    <li>
                      <strong
                        >Estilo de vida, alimentación, actividades, consumo de
                        sustancias, etc.</strong
                      >
                    </li>
                    <br />
                  </ul>
                  <br />
                  <li>
                    En ocasiones, al no tratarse de una enfermedad o trastorno
                    como tal, no se le da la importancia necesaria. Esto es un
                    error importante, ya que si nuestra salud mental se ve
                    afectada en algún momento de nuestra vida debemos buscar la
                    forma de mejorarla ya sea a través de la meditación o
                    técnicas de relajación, como con la ayuda de un profesional.
                    La salud mental es importante porque nos ayuda a enfrentar
                    adecuadamente determinadas situaciones. Nos ayuda a
                    enfrentar el estrés diario, estar físicamente saludable,
                    tener relaciones sanas, ser más productivos y alcanzar
                    nuestras metas y sueños. Y es que si nuestra salud mental
                    está afectada de alguna forma, esto afecta directamente a la
                    salud física.
                  </li>
                  <br />
                  <h4>
                    <strong
                      >Cómo reconocer si hay un problema de salud mental</strong
                    >
                  </h4>
                  <li>
                    Existen advertencias o señales que nos indican que podríamos
                    tener un problema de salud mental. Debemos ser capaces de
                    identificar estas señales para poder actuar con antelación y
                    buscar la ayuda necesaria. Estas señales son:
                  </li>
                  <br />
                  <ul class="lista-normal">
                    <li>Cambios en los hábitos de alimentación y sueño.</li>
                    <br />
                    <li>Niveles de energía muy bajos.</li>
                    <br />
                    <li>
                      Aislarse de personas o situaciones que antes disfrutabas.
                    </li>
                    <br />
                    <li>Sentirse vacío.</li>
                    <br />
                    <li>Tener dolores y molestias inexplicables.</li>
                    <br />
                    <li>Fumar, beber o tomar drogas de forma recurrente.</li>
                    <br />
                    <li>Impotencia y falta de esperanza.</li>
                    <br />
                    <li>
                      Sentirse confundido, olvidadizo, enojado, molesto,
                      preocupado o asustado.
                    </li>
                    <br />
                    <li>
                      ACambios de humor severos que causan problemas en las
                      relaciones.
                    </li>
                    <br />
                    <li>Pensamiento de autolesionarse o lesionar a otros.</li>
                    <br />
                    <li>
                      Imposibilidad a la hora de realizar tareas diarias como
                      cuidar a los hijos, ir al trabajo, etc.
                    </li>
                    <br />
                    <li>Sentirse como si nada importara.</li>
                  </ul>
                  <br />
                  <li>
                    Si crees que puedes tener un problema de salud mental, lo
                    más recomendable es buscar ayuda en un profesional. La
                    terapia de conversación y/o los medicamentos prescritos por
                    un profesional pueden ayudar a mejorar nuestra salud mental
                    y trastornos mentales.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
        <br /><br />
      </section>
    </section>
  </div>
</template>

<style scoped>
.articulos {
  min-height: 82.7vh;
  background-image: url("../../../public/img/fondo_saludmental.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.container {
  max-width: 1000px;
}
#articulo1,
#articulo2,
#articulo3 {
  display: none;
}
.jumbotron {
  background-color: white;
  border-bottom: gray groove 1px;
  border-right: gray groove 1px;
  border-left: gray groove 1px;
  border-top: gray groove 1px;
}
.lista {
  justify-content: center;
}
.lista ol {
  list-style: none;
  counter-reset: my-counter;
  margin: 0rem;
  padding: 0rem 0rem 0rem 1.5rem;
}
.lista li {
  counter-increment: my-counter;
  border-left: solid 2px #cdcdcd;
  padding-top: 2rem;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-template-areas: "icon:text";
  align-items: start;
}
.lista li:before {
  content: counter(my-counter);
  font-weight: bold;
  background-color: #cdcdcd;
  border: 3px solid #f5f6f1;
  border-radius: 50px;
  font-size: 20px;
  padding: 0.8rem 1.4rem;
  color: #fff;
  margin-left: -2rem;
  margin-right: auto;
  grid-area: icon;
}
.card {
  grid-area: text;
  margin-left: 4rem;
  border-radius: 0px;
  box-shadow: 0 0 5px 1px #ddd;
  margin-top: 0.5rem;
}

.card .card-header {
  background-color: #5cb8e6;
  color: #fff;
  font-size: 22px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
.btn-success {
  background-color: #5cb8e6;
  color: #fff;
  border-color: #5cb8e6;
  border-radius: 0px;
}
#btn-articulo {
  cursor: pointer;
}
#btn-articulo:hover {
  background-color: lightgray;
}
.card-footer {
  background-color: white;
}
#enlace {
  text-align: right;
}
a {
  color: white;
  text-decoration: none;
}
button:hover {
  background-color: white;
}
button:hover span {
  color: #5cb8e6;
}
#img-article {
  max-width: 921px;
  max-height: 560px;
}
ul {
  list-style: none;
}
.lista-normal {
  list-style: initial;
}
.blockquote {
  max-width: 75%;
  margin-left: auto;
  margin-right: auto;
}
.retroceder {
  margin-top: 10px;
  margin-left: 10px;
}
hr {
  margin-left: 10%;
  margin-right: 10%;
}
h4 {
  color: lightblue;
}

@media only screen and (max-width: 1000px) {
  #img-article {
    width: 700px;
    height: 400px;
  }
}

@media only screen and (max-width: 800px) {
  #img-article {
    width: 550px;
    height: 290px;
  }
}

@media only screen and (max-width: 650px) {
  #img-article {
    width: 420px;
    height: 200px;
  }
}

@media only screen and (max-width: 480px) {
  #img-article {
    width: 320px;
    height: 140px;
  }
}

@media only screen and (max-width: 390px) {
  #img-article {
    width: 250px;
    height: 130px;
  }
}
</style>
