<template>
  <div class="GContainer">
    <ul class="List1">
      <li class="Item1">
        <router-link to="/dip3" class="carousel-control-prev">
          <img class="ctrlHeight" :src="getArrowLeft" alt="GoBack">
        </router-link>
      </li>
      <li class="Item1">
        <ul class="List2 animated zoomIn">
          <li class="Item2">
            <ul class="List3">
              <li class="Item3 TittleP">
                <img class="DefImage" :src="CorruptionIcon" alt="Definition">
              </li>
            </ul>
          </li>
          <li class="Item2">
            <ul class="List5">
              <li class="Item5">
                <ul class="List4 animated zoomIn">
                  <li class="Item4 animated">
                    <h3 class="DaTittle">Lo primero es identificarla</h3>
                  </li>
                  <li :class="{heartBeat: !ShowPink, infinite: !ShowPink}" class="Item4 animated">
                    <button>
                      <img
                        class="OpenArrow"
                        v-show="!ShowPink"
                        :class="{Openend: ShowPink }"
                        @click="ShowPink=!ShowPink"
                        :src="ArrowWhite"
                        alt="Arrow"
                      >
                    </button>

                    <button>
                      <img
                        class="OpenYellowArrow"
                        v-show="ShowPink"
                        :class="{Openend: ShowPink }"
                        @click="ShowPink=!ShowPink"
                        :src="ArrowYellow"
                        alt="Arrow"
                      >
                    </button>
                  </li>
                </ul>
              </li>
              <li class="Item5">
                <div v-show="ShowPink" class="PinkBG animated rubberBand">
                  <p
                    class="LittleDef"
                  >Cualquiera de estas acciones son generadoras de corrupción. Si las identificas DENUNCIALAS</p>
                  <p
                    v-for="(item, index) in ItemsDeCorrupcion"
                    :key="index"
                    class="Definition animated zoomIn delay-1s"
                  >{{item.Definition}}</p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="Item1">
        <ul class="RightPartList">
          <div class="textItems">
            <h2 class="DaTittleCorruption">
              ¿Cómo puedes ayudar a combatir
              la
              <span class="yellowTXT">corrupción</span>?
            </h2>
            <p>
              Por sobre todas las cosas lo importante es denunciar
              cualquier acto de corrupción que tu evidencies en tu
              comunidad. recuerda que este virus NO es algo propio
              de la política sino que puede presentarse donde sea.
            </p>

            <p class="linksPart">
              Puedes denunciar tu caso directamente
              <a class="YellowLink" href="#">aquí</a> comentandolo
              a la comunidad o dirigirte a la página de la
              <a
                class="YellowLink"
                href="#"
              >Función Pública</a>
              donde puedes denunciar casos de mayor medida
            </p>
          </div>

          <ul class="IconsList">
            <a href="#" class="IconItem animated zoomIn faster">
              <img class="smlImg" :src="LogoPage" alt="Colombia contra la corrupcion">
            </a>
            <a href="#" class="IconItem animated zoomIn">
              <img class="smlImg" :src="LogoAlcaldia" alt="Alcaldia Bogota Logo">
            </a>
            <a href="#" class="IconItem animated zoomIn slow  ">
              <img class="smlImg" :src="LogoFuncionPublica" alt="Funcion Pública Logo">
            </a>
          </ul>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      ShowPink: false,
      ClickItem: false,
      CorruptionIcon: require("../assets/CorruptionIcon.png"),
      ArrowWhite: require("../assets/ArrowWhite.png"),
      ArrowYellow: require("../assets/ArrowYellow.png"),

      LogoPage: require("../assets/LogoBlue.jpg"),
      LogoAlcaldia: require("../assets/AlcaldiaLogoBlue.jpg"),
      LogoFuncionPublica: require("../assets/FuncionPublicaLogoBlue.jpg")
    };
  },

  methods: {
    PreviousSlide: function() {
      this.$store.dispatch("ReduceSlide");
    },
    NextSlide: function() {
      this.$store.dispatch("IncreaseSlide");
    }
  },

  computed: {
    getArrowLeft() {
      return this.$store.state.ArrowGrayHoverBackwards;
    },

    getArrowRight() {
      return this.$store.state.ArrowGrayHover;
    },

    getItemsDeCorrupcion() {
      return this.$store.state.ItemsDeCorrupcion;
    },

    ...mapGetters(["ItemSoloDeCorrupcion", "ItemsDeCorrupcion"]),
  },

   created() {
    this.$store.dispatch("LoadItemsSlide4");   
  }
};
</script>


<style scoped>
* {
  margin: 0px;
  padding: 0px;
}


.GContainer {
  background-image: url("../assets/Dip2.jpg");
  background-size: cover;
}

.yellowTXT {
  color: gold;
}

.YellowLink:hover {
  color: gold;
  font-weight: bold;
}

.YellowLink {
  color: yellow;
}
.DaTittleCorruption {
  color: white;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  font-size: 180%;
}

.linksPart {
  margin-top: 20px;
}


.Openend {
  width: 40px;
}

.textItems {
  margin-top: 30px;
  width: 500px;
  text-align: justify;
  color: white;
  font-size: 140%;
  font-weight: 400;
}

.List1 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style-type: none;
}

.Item1 {
  margin-right: 20px;
  margin-top: 30px;
  margin-bottom: 160px;
  padding-right: 50px;
}

.List2 {
  list-style-type: none;
}

.List3 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style-type: none;
}

.List4 {
  background: #bc3728;
  height: 50px;
  border-radius: 20px;
  width: 500px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  list-style-type: none;
}

.List5 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-content: center;
  list-style-type: none;
}

.PinkBG {
  background: #f9bd4b;
  margin-left: 50px;
  padding: 15px;
  width: 400px;
  height: 100%;
  color: black;
  font-weight: bold;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

.RightPartList{
 display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
}

.IconsList {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  width: 800px;
 
}

.IconItem {
  padding-right: 20px;
}

.smlImg {
  width: 190px;
}

.DaTittle {
  color: white;
  margin-top: 15px;
  font-weight: 400;
}

.OpenArrow {
  transform: rotate(90deg);
}

.OpenYellowArrow {
  transform: rotate(90deg);
}

.Definition {
  text-align: left;
  background: rgb(224, 61, 42);
  margin: 5px;
  padding: 5px;
  border-radius: 20px;
  color: white;
  font-weight: 400;
}

.Item5 {
}

/* Second part */

@media (max-width: 990px) {
  * {
    margin: 0px;
    padding: 0px;
  }
  .GContainer {
    background-image: url("../assets/Dip1Mobile.jpg");
    background-size: cover;
  }
  .Openend {
    width: 40px;
  }

  .DefImage {
    width: 230px;
    margin-left: 15%;
  }

  .OpenArrow {
    width: 50px;
  }

  .List1 {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style-type: none;
  }

  .Item1 {
    margin-right: 20px;
    margin-top: 30px;
    margin-bottom: 160px;
  }

  .List2 {
    list-style-type: none;
  }

  .List3 {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style-type: none;
  }

  .List4 {
    background: #bc3728;
    height: 50px;
    border-radius: 20px;
    width: 100%;
    margin-left: 15%;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    list-style-type: none;
  }

  .Item4 {
    padding: 10px;
  }

  .List5 {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-content: center;
    list-style-type: none;
  }

  .PinkBG {
    margin-left: 25%;
    background: #f9bd4b;
    
    padding: 15px;
    width: 80%;
    height: 100%;
    color: black;
    font-weight: bold;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }

  .DaTittle {
    color: white;
    margin-top: 15px;
    font-weight: bold;
    font-size: 100%;
    
  }

  .OpenArrow {
    transform: rotate(90deg);
  }

  .OpenYellowArrow {
    transform: rotate(90deg);
  }

  .Definition {
    text-align: center;

    background: rgb(224, 61, 42);
    margin: 5px;
    padding: 5px;
    border-radius: 20px;
    color: white;
    font-weight: 400;
  }

  .Item5 {
  }
  .textItems {
    width: 250px;
    margin-left: 80px;
    text-align: center;
  }

  .IconsList {
    flex-direction: column;
    width: 100px;
     margin-top: 60px;;

  }

  .IconItem{
    margin-bottom: 30px;
  }

  .ctrlHeight {
    height: 50px;
  }
}
</style>
