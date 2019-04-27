<template>
  <div>
    <div class="GContainer">
      <ul class="FirstList">
        <li class="Item1">
          <img
            :src="LogoColombiaVScorrupcion"
            alt="Colombia contra la corrupcion logo"
            class="iconcorr"
            id="CorruptionIcon"
          >
        </li>
        <li class="Item1 TextItem1" id="FirstMenu">
          <p class="Intro">
            <span class="ColTittle">Colombia contra la Corrupción</span> es un sitio web informativo orientado a la pedagogía ciudadana para la
            <span
              class="ielow2"
            >lucha contra la corrupción.</span> Aquí encontrarás información útil acerca del que es este fenomeno que ha azotado a Colombia y a muchos otros paises latinoamericanos en los tiempos modernos. En este sitio:
          </p>

          <ul class="itemsdalist">
            <li>
              <ul class="InterMinilis">
                <li>
                  <img :src="chkbx" alt="checkbox" class="checkbox">
                </li>
                <li
                  class="interlitoltext"
                >Hallarás consejos de como, desde la posición de ciudadano colombiano común y corriente, puedes ayudar identificar la corrupción y combatirla efectivamente.</li>
              </ul>
            </li>

            <li>
              <ul class="InterMinilis">
                <li>
                  <img :src="chkbx" alt="checkbox" class="checkbox">
                </li>
                <li
                  class="interlitoltext"
                >Se te ofrece la posibilidad de denunciar ante la comunidad del sitio, cualquier acto de corrupción que hayas presenciado en tu barrio, localidad o sitio de trabajo a través de un blog público de denucias.</li>
              </ul>
            </li>

            <h3 class="finalinfo">
              <span class="ielow2">Por ultimo, pero no menos importante...</span> este sitio web esta desarrollado y administrado por
              <img
                :src="SimulLogoBlanco"
                alt="logo simulmedios white"
                class="littlelogo"
              >, una micro empresa enteramente formada por estudiantes universitarios de
              <span
                class="ColTittle"
              >Ingeniería en Multimedia</span> bajo la cobija de un proyecto de simulación empresarial impulsado por la Universidad Militar Nueva Grandada.
            </h3>
          </ul>
        </li>
      </ul>

      <div class="secondItem">
        <div></div>
        <div>
          <ul class="secondList">
            <li class="Item2">
              <ul class="InternListDef">
                <li>
                  <h2 class="Tatol">¿Quiénes Somos?</h2>
                  <div class="blueline"></div>
                </li>

                <li>
                  Simulmedios es una pequeña empresa
                  <span class="ielow">Col</span>
                  <span class="blu">ombi</span>
                  <span class="ret">ana</span> orientada al desarrollo y los servicios Web. Se encuentra enteramente conformada por estudiantes de
                  <span
                    class="IngMult"
                  >Ingeniería en Multimedia</span> de la Universidad Militar Nueva Granada.
                </li>
                <li class="InternItem3">
                  <ul class="LogosList">
                    <li class="multlogopart">
                      <img :src="LogoMult" alt="LogoMultimedia" class="logolittle">
                      <h2 class="Namesss">Ingeniería en Multimedia</h2>
                    </li>
                    <li>
                      <ul class="InternFooterList">
                        <li class="ImgItemFooter">
                          <img :src="LogoUni" alt="LogoUMNG" class="logolittle">
                        </li>
                        <li>
                          <h2 class="Namesss">Universidad Militar Nueva Granada</h2>
                          <h2 class="Namesss">
                            <span class="bold">2019 Copyright ©</span>Todos los derechos reservados
                          </h2>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="Item2">
              <img :src="LogoSimulmedios" alt="SimulmediosLogo" class="logomed">
            </li>
          </ul>
        </div>
      </div>

      <div class="dabg">
        <div class="MembersPart">
          <h2 class="TeamTittle">Nuestro equipo de trabajo</h2>
          <div class="whiteline2"></div>
          <ul class="MembersList">
            <li class="MemberItem">
              <ul class="InternMemberList">
                <li class="InternMemberItem">
                  <img :src="IconAndres" alt="IconAndres" id="ICandres" class="ninjaicon">
                </li>
                <li class="InternMemberItemText" id="textandres">
                  <ul class="MemberInfoList">
                    <li class="Tittle">
                      <span class="blutitol">CEO & Director en Jefe:</span> Carlos Andrés Mendieta
                    </li>
                    <div class="whiteline"></div>
                    <li class="dainfo">
                      Estudiante de Decímo Semestre de Ingeniería en Multimedia. Cuenta con amplia experiencia en gestión de proyectos , liderazgo de equipos de trabajo y aplicación de Metodologia Scrum para Desarrollo Agíl en proyectos orientados a la Ingeniería del Software. Ingeniero Full-Stack con habilidades en tecnologias de Internet Core como Html, CSS y Javascript para desarrollo de Frontend asi como conocimientos en PHP para implementación Backend. Actualmente se encuentra realizando pasantias en
                      <a
                        href="#"
                      >
                        <img :src="Endava" alt="endava logo">
                      </a>
                      Empresa Internacional reconocida de Desarrollo de Software. Nivel de Ingles: C1 certificado.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li class="MemberItem">
              <ul class="InternMemberList">
                <li class="InternMemberItem">
                  <img :src="IconAlejandro" alt="IconAlejandro" id="ICalejandro" class="ninjaicon">
                </li>
                <li class="InternMemberItemText" id="textalejandro">
                  <ul class="MemberInfoList">
                    <li class="Tittle">
                      <span class="blutitol">Desarrollador Frontend y Diseñador Web:</span> Alejandro Camacho
                    </li>
                    <div class="whiteline"></div>
                    <li
                      class="dainfo"
                    >Estudiante de Septímo Semestre de Ingeniería en Multimedia. Actual Primer Promedio Académico de Ingeniería en Multimedia. Cuenta con vasto conocimiento en multiples areas de la programación, el desarrollo de software y el diseño en general, siendo su fuerte el desarrollo de aplicaciones de escritorio en JAVA. Su experiencia en el campo de la programación le permitió adaptarse al entorno web adquiriendo conocmientos del mismo rapidamente. Cuenta con un nivel intermedio-alto de HTML, CSS y Javascript asi como conocmientos solidos en el Framework para desarrollo web Vue. Asimismo, su versatilidad de trabajar dos campos por aparte de forma excepcional (el diseño y la programación) le permitieron integrar todo su potencial al diseño visual del desarrollo web. Nivel de Ingles: C1 certificado.</li>
                  </ul>
                </li>
              </ul>
            </li>

            <li class="MemberItem">
              <ul class="InternMemberList">
                <li class="InternMemberItem">
                  <img :src="IconJohan" alt="IconJohan" id="ICjohan" class="ninjaicon">
                </li>
                <li class="InternMemberItemText" id="textjohan">
                  <ul class="MemberInfoList">
                    <li class="Tittle">
                      <span class="blutitol">Desarrollador Backend:</span> Johan Sebastian Valbuena
                    </li>
                    <div class="whiteline"></div>
                    <li
                      class="dainfo"
                    >Estudiante de Septímo Semestre de Ingeniería en Multimedia. Segundo promedio mas alto de su semestre. Virtuoso del desarrollo mas pesado de software con conocimientos técnicos en la utilización de lenguajes como MATLAB y Arduino para programación de Hardware y procesamiento de señales. Su expreiencia en el campo del Backend le permitió adaptarse rapidamente al mundo detrás de la web logrando administrar y programar bases de datos locales y externas que permitiesen el almacenamiento y la reactividad óptima de aplicaciones web. Cuenta con un nivel intermedio alto en HTML, CSS y Javascript asi como conocimientos solidos en el Framework para desarrollo web Vue asi como habilidades en el software para desarrollo y gestión de bases de datos Firebase. Nivel de Ingles: B2 certificado.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="dalitolfooter">
          <ul class="futerlist">
            <li class="futeritem">
              <img :src="TresNinjas" alt="los3ninjas" class="ninjas33">
            </li>
            <li class="futeritem">
              Cualquier inquietud o solicitud de servivcios
              <span class="ColTittle">no dudes en contactarnos ;)</span>
            </li>
            <li class="futeritem">
              <a href="#">
                <img
                  :src="SimulLogoBlanco"
                  alt="simul logo blanco"
                  class="simulwait animated heartBeat infinite"
                >
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>






export default {



  data() {
    return {
      LogoMult: require("../assets/logomulti.png"),
      LogoUni: require("../assets/logouni.png"),
      LogoColombiaVScorrupcion: require("../assets/Logo.jpg"),
      LogoSimulmedios: require("../assets/SimulmediosLogo.png"),
      IconAndres: require("../assets/logoandres.png"),
      IconAlejandro: require("../assets/logoalejandro.png"),
      IconJohan: require("../assets/logojohan.png"),
      TresNinjas: require("../assets/ninjas3.png"),
      SimulLogoBlanco: require("../assets/simulwhite.png"),
      Endava: require("../assets/endava.png"),
      chkbx: require("../assets/chkbx.png")
    };
  },

  components: {},

  computed: {},

  mounted() {

$("#CorruptionIcon").hover(function () {
    $("#CorruptionIcon").toggleClass(" animated rubberBand");
  });

  $("#CorruptionIcon").click(function () {
    $("#FirstMenu").slideToggle();
  });


  $("#ICandres").hover(function () {
    $("#ICandres").toggleClass(" animated tada");
  });
    $("#ICalejandro").hover(function () {
    $("#ICalejandro").toggleClass(" animated tada");
  });
    $("#ICjohan").hover(function () {
    $("#ICjohan").toggleClass(" animated tada");
  });

   $("#ICandres").click(function () {
    $("#textandres").slideToggle();
  });
    $("#ICalejandro").click(function () {
    $("#textalejandro").slideToggle();
  });
    $("#ICjohan").click(function () {
    $("#textjohan").slideToggle();
  });

  },

  methods: {}
};
</script>


<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

ul {
  list-style-type: none;
}

.GContainer {
  padding-top: 20px;
  background-image: url("../assets/Dip1.jpg");
  background-size: cover;
}

/* FirstPart */

.FirstList {
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #11c8ff;
}

.dabg {
  background: #11c7ffbe;
}

.littlelogo {
  width: 150px;
}

.TextItem1 {
  padding: 50px;
}

.Item1 {
  margin-top: 20px;
  width: 80%;
}

.Intro {
  color: white;
  font-size: 150%;
  font-weight: 400;
  letter-spacing: 1px;
}

.Intro2 {
  margin-top: 10px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;

  text-align: justify;
}

.checkbox {
  width: 40px;
}

.ColTittle {
  color: rgb(27, 27, 27);
  font-weight: bold;
  font-size: 120%;
}
.ielow2 {
  color: #ffd885;
  font-weight: bold;
}
.itemsdalist {
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.interlitoltext {
  width: 600px;
  line-height: 15px;
  margin-top: 20px;
  margin-left: 30px;
  color: rgb(27, 27, 27);
  font-weight: 300;
  text-align: justify;
  font-size: 110%;
}

.InterMinilis {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.finalinfo {
  color: white;
  font-size: 150%;
  font-weight: 400;
  letter-spacing: 1px;
  margin-top: 50px;
  text-align: justify;
}

/* SecondPart */

.secondItem {
}

.Tatol {
  color: white;
  font-weight: 300;
  font-size: 300%;
  margin-bottom: 20px;
}

.ielow {
  color: #ff951b;
  font-weight: bold;
}
.blu {
  color: #1c7eff;
  font-weight: bold;
}
.ret {
  color: #ff0000;
  font-weight: bold;
}

.IngMult {
  color: #11c8ff;
  font-weight: bold;
}

.secondList {
  margin-top: 20px;
  background: rgb(27, 27, 27);
  padding: 50px;
  color: white;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.Item2 {
  width: 650px;
  font-size: 150%;
  text-align: justify;
  font-weight: 400;
}
.InternListDef {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
}
.InternItem3 {
}
.LogosList {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 90%;
}
.InternFooterList {
  margin-left: 50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.multlogopart {
  text-align: center;
}

.logolittle {
  width: 80px;
}

.logomed {
  width: 80%;
  margin-top: 50px;
  margin-left: 30px;
}

.bold {
  font-weight: bold;
}

.Namesss {
  font-size: 80%;
}
.ImgItemFooter {
}

/* ThirdPart */

.MembersPart {
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.MembersList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.MemberItem {
  margin-top: 30px;
  padding: 50px;
}
.InternMemberList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.TeamTittle {
  color: white;
  text-align: center;
  padding: 10px;

  letter-spacing: 2px;
  font-size: 350%;
  font-weight: 400;
  margin-bottom: 8px;
}
.InternMemberItem {
}
.InternMemberItemText {
  margin-left: 30px;
  background: rgba(27, 27, 27, 0.9);
  border-radius: 80px;
  padding: 50px;
  width: 60%;
  color: white;
}
.MemberInfoList {
}
.Tittle {
  font-size: 160%;
  font-weight: bold;
  margin-bottom: 5px;
}

.blutitol {
  color: #11c8ff;
  font-weight: bold;
}

.whiteline2 {
  width: 80%;
  height: 5px;
  background: white;
  margin-bottom: 50px;
}

.blueline {
  width: 100%;
  height: 3px;
  background: #11c8ff;
  margin-bottom: 20px;
}

.whiteline {
  width: 100%;
  height: 2px;
  background: white;
  margin-bottom: 20px;
}
.dainfo {
}

/* fourth part*/

.dalitolfooter {
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 100px;
}
.futerlist {
  color: white;
  font-size: 150%;
  font-weight: 400;
}
.futeritem {
  margin-bottom: 20px;
}
.ninjas33 {
}
.simulwait {
}

@media (max-width: 990px) {
  .iconcorr {
    width: 300px;
  }

  .interlitoltext {
    width: 250px;
  }

  .checkbox {
    width: 30px;
  }

  .Item1 {
    width: 100%;
  }

  .Item2 {
    text-align: center;
  }

  .LogosList {
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-left: 0px;
  }

  .InternFooterList {
    margin-top: 20px;
    margin-left: 0px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .TeamTittle {
    font-size: 250%;
  }

  .InternMemberItemText {
    margin-left: 0px;
    width: 90%;
    text-align: center;
  }

  .ninjas33 {
    width: 60%;
  }

  .ninjaicon {
  }
}
</style>
