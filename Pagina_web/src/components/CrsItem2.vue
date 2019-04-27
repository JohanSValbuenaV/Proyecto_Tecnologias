<template>
  <div class="GContainer">
    <ul class="List1">
     <li class="Item1">
        <router-link to="/dip1" class="carousel-control-prev">
          <img class="ctrlHeight" :src="getArrowLeft" alt="GoBack">
        </router-link>
      </li>
      <li class="Item1">
        <ul class="List2">
          <li class="Item2 RedBgBorder">
            <ul class="List3">
              <li class="Item3">
                <ul class="List4">
                  <li class="Item4">
                    <h3 class="ColVsMundo animated rubberBand">
                      <span class="BlackTittle">Colombia</span> vs el mundo
                    </h3>
                    <div class="WhiteLine animated rubberBand"></div>
                  </li>
                  <li class="Item4 animated bounceInUp">
                    <img :src="ColombiaMap" alt="colombiavectorwhitemap">
                  </li>
                  <li class="Item4 animated bounceInUp">
                    <img class="MedLittleImg" :src="CorruptionIcon" alt="corrupcionVector">
                  </li>
                </ul>
              </li>
              <li class="Item3">
                <p class="Info">
                  Según la organización
                  <span class="YellowTXT">Transparency International</span> en
                  <span class="YellowTXT">{{JustYear}} Colombia logro entrar al top {{JustTop}}</span> de los paises menos corruptos del mundo ocupando
                  <span
                    class="DarkRedTXT SemiBigTXT"
                  >el puesto {{ ColombiaCurrentRanking}} de 180 en el ranking mundial.</span> Recibiendo una puntuación de
                  <span class="YellowTXT">{{ColombiaCurrentPoints}} puntos.</span> Siendo 0 máxima corrupción y 100 mínima corrupción.
                </p>
              </li>
            </ul>
          </li>

          <li class="Item2 WhiteBg">
            <div class="crs shadow p-3 mb-1 RedBg"></div>
            <ul class="List5">
              <li class="Item5">
                <ul class="List6">
                  <li class="Item6">
                    <h2 class="SmallTittle">Índice de Percepción de Corrupción {{getCurrentYear}}</h2>
                  </li>
                  <li class="Item6">
                    <ul class="List7">
                      <li
                        v-for="(item, index) in IndiceCorrupcionPaises2018"
                        :key="index"
                        class="Item7"
                      >
                        <ul class="IntenrList">
                          <li
                            v-if="item.Dark"
                            class="InternItem animated fadeInLeft"
                          >{{item.Puesto}}</li>
                          <li
                            v-else-if="!item.Dark"
                            class="InternItem NoDark animated fadeInRight"
                          >{{item.Puesto}}</li>

                          <li v-if="item.Dark" class="InternItem animated fadeInLeft">{{item.Pais}}</li>
                          <li
                            v-else-if="!item.Dark"
                            class="InternItem NoDark animated fadeInRight"
                          >{{item.Pais}}</li>

                          <li
                            v-if="item.Dark"
                            class="InternItem animated fadeInLeft"
                          >{{item.Puntaje}}</li>
                          <li
                            v-else-if="!item.Dark"
                            class="InternItem NoDark animated fadeInRight"
                          >{{item.Puntaje}}</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="Item6">
                    <p
                      class="LittleInfo"
                    >*Info obtenida de la página Transparencia Internacional {{getCurrentYear}}</p>
                  </li>
                </ul>
              </li>
              <li class="Item5">
                <img class="SmlMap" :src="Map2018" alt="MapaCorrupcion 2018">

                <!-- <div class="cpi-node" data-embed="map"></div><script src="https://www.transparency.org/assets/scripts/cpi2018/embed.js"></script> -->
              </li>
            </ul>
          </li>
        </ul>
      </li>

       <li class="Item1">
        <router-link to="/dip3" class="carousel-control-next">
          <img class="ctrlHeight" :src="getArrowRight" alt="GoForward">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      ColombiaMap: require("../assets/ColombiaVector.png"),
      CorruptionIcon: require("../assets/CorruptionVector.jpg"),
      Map2018: require("../assets/Map2018.jpg")
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

    getColombiaCurrentRanking() {
      return this.$store.state.ColombiaCurrentRanking;
    },

    getColombiaCurrentPoints() {
      return this.$store.state.ColombiaCurrentPoints;
    },

    getCurrentYear() {
      return this.$store.state.JustYear;
    },

    getCurrentTop() {
      return this.$store.state.JustTop;
    },

    ItemsInIndiceCorrupcion() {
      return this.$store.state.IndiceCorrupcionPaises2018;
    },

    ...mapGetters(["ItemCorrupcion", "IndiceCorrupcionPaises2018"]),
    ...mapGetters(["ColombiaCurrentRanking", "ColombiaCurrentRanking"]),
    ...mapGetters(["ColombiaCurrentPoints", "ColombiaCurrentPoints"]),
    ...mapGetters(["JustTop", "JustTop"]),
    ...mapGetters(["JustYears", "JustYears"])
  },

  created() {
    this.$store.dispatch("LoadItemsSlide2");
    this.$store.dispatch("LoadColombiaCurrentRanking");
    this.$store.dispatch("LoadColombiaCurrentPoints");
    this.$store.dispatch("LoadJustTop");
    this.$store.dispatch("LoadJustYears");
  }
};
</script>


<style scoped>
ul {
  list-style-type: none;
}

.GContainer {
  background-image: url("../assets/Dip1.jpg");
  background-size: cover;
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
  margin-right: 300px;
  margin-left: 320px;

  margin-top: 30px;
  margin-bottom: 30px;
}

.Item2 {
  margin: 0px;
  padding: 0px;
  width: 90%;
}
.List2 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.List3 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.List4 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 800px;
}

.ColVsMundo {
  color: white;
  font-weight: 400;
}

.BlackTittle {
  color: black;
  font-size: 170%;
  font-weight: bold;
}

.WhiteLine {
  height: 8px;
  width: 100%;
  background: white;
}

.Item4 {
  margin-right: 50px;
  width: 150px;
  margin-top: 20px;
}

.MedLittleImg {
  width: 280px;
}

.Info {
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: 200px;
  margin-left: 10px;
  text-align: justify;
  color: white;
  font-size: 150%;
  font-weight: 500;
  width: 90%;
}

.YellowTXT {
  color: gold;
}
.DarkRedTXT {
  color: rgb(46, 12, 12);
  font-weight: bolder;
}
.SemiBigTXT {
  font-size: 120%;
}

/*-Second part--*/

.RedBgBorder {
  background: rgb(224, 61, 42);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}

.RedBg {
  background: rgb(224, 61, 42);
}

.WhiteBg {
  background: white;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

.List5 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;

  margin-right: 20px;
  margin-left: 20px;
}

.SmlMap {
  width: 580px;
}
.SmallTittle {
  font-size: 120%;
  font-weight: bold;
  text-align: center;
}

.List6 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.Item6 {
  text-align: left;
  margin-right: 10px;

  margin-top: 10px;
  width: 290px;
}

.List7 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
}
.Item7 {
}

.IntenrList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;

  padding: 0px;
}

.InternItem {
  text-align: left;
  background: #eeeeee;
  width: 85px;
  padding-top: 2px;
  margin-right: 3px;
  padding-left: 5px;
  font-weight: bold;
  color: #5d5c5c;
}

.NoDark {
  background: white;
}

.LittleInfo {
  font-size: 80%;
  font-weight: bold;
}

@media (max-width: 990px) {
  * {
    margin: 0px;
    padding: 0px;
  }

  .Item2 {
    margin: 0px;
    padding: 0px;
    width: 80%;
  }

  .Item7 {
    margin-left: 15px;
  }

  .List6 {
  }

  .Item6 {
    align-content: center;

    text-align: center;
    width: 250px;
  }

  .InternItem {
    width: 75px;
  }
  .GContainer {
    background-image: url("../assets/Dip1Mobile.jpg");
    background-size: cover;
  }

  .ctrlHeight {
    height: 50px;
  }

  .List4 {
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
    width: 300px;
  }

  .Info {
    text-align: center;
  }

  .Info {
    width: 60%;
    margin-left: 18%;
  }

  .Item1 {
    margin-right: 0px;
    margin-left: 0px;

    margin-top: 30px;
    margin-bottom: 30px;
  }

  .SmlMap {
    width: 100%;
  }

  .MedLittleImg {
    width: 130%;
  }
}
</style>
