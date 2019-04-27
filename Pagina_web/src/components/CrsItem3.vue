<template>
  <div class="GContainer">
    <ul class="List1">
        <li class="Item1">
        <router-link to="/dip2" class="carousel-control-prev">
          <img class="ctrlHeight" :src="getArrowLeft" alt="GoBack">
        </router-link>
      </li>
      <li class="Item1">
        <ul class="List2">
          <li class="Item2">
            <ul class="List3">
              <li class="Item3">
                <img class="SmalImg animated rubberBand infinite" :src="StatIcon" alt="Statistics Icon">
              </li>
              <li class="Item3 animated fadeInLeft">
                <h3>Algunas estadísticas...</h3>
              </li>
            </ul>
          </li>
          <li v-for="(item, index) in InfoEstadistica" :key="index" class="SpecialItem">
            <ul class="InternList">
              <li class="InternItem  animated zoomIn">
                                 
               
                         <img v-if="index ===0" class="MedImg"                      
                       :src="Image1"
                        alt="ImageOfItem1"   >
                        <img v-else-if="index ===1" class="MedImg"                      
                       :src="Image2"
                        alt="ImageOfItem2"   >
                         <img v-else-if="index ===2" class="MedImg"                      
                       :src="Image3"
                        alt="ImageOfItem3"   >
              </li>
               <li :class="{heartBeat: !item.open, infinite: !item.open}" class="Item4 animated">
                    <button>
                      <img class="OpenArrow"
                        v-show="!item.open"
                        :class="{Openend: item.open }"
                        @click="item.open=!item.open"
                        :src="ArrowWhite"
                        alt="Arrow"
                      >
                    </button>

                    <button>
                      <img class="OpenYellowArrow"
                        v-show="item.open"
                        :class="{Openend: item.open }"
                        @click="item.open=!item.open"
                        :src="ArrowYellow"
                        alt="Arrow"
                      >
                    </button>
                  </li>
              <li v-show="item.open" :class="item.color" class=" InternItem InternItemText animated zoomIn">
                <p   >
                 <span class="highlighted"> {{item.HighlightedInfo}}</span> <span class="normal"> {{item.NormalInfo}}</span>
                </p>
                
                 <p class="biblio" >
                     {{item.Bibliography}}
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      
       <li class="Item1">
        <router-link to="/dip4" class="carousel-control-next">
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
      ClickItem: false,
      StatIcon: require("../assets/StatsIcon.png"),
       ArrowWhite: require("../assets/ArrowWhite.png"),    
      ArrowYellow: require("../assets/ArrowYellow.png"),
       Image1: require("../assets/ImageStatItem1.png"),
        Image2: require("../assets/ImageStatItem2.png"),
         Image3: require("../assets/ImageStatItem3.png"),
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

     ItemsInInfoEstadistica() {
      return this.$store.state.InfoEstadística;
    },
     ...mapGetters(["ItemEstadistica", "InfoEstadistica"]),
  },

   created() {
    this.$store.dispatch("LoadItemsSlide3");   
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

.List2{
   display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  
}

.List3{
   display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;  
}

.Item3{
  color: white;  
  margin-right: 10px;
  margin-top: 30px;
}

h3{
  font-size: 280%;
  font-weight: 500;

  padding:  10px;
}

.SmalImg{
  width: 100px;
}
.MedImg{
 width: 250px;
}
.InternList{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;  
 
}

.InternItem{
  margin-bottom: 30px;
  margin-top: 50px;
}

.InternItemText{
  width: 800px;
  
border-radius: 100px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serifl;
padding: 40px;
color: white;
font-size: 120%;
}

.highlighted{
  color: rgb(46, 12, 12);
  font-size: 160%;
  font-weight: bold;
}

.biblio{
  font-size: 70%;
  color:  rgb(223, 223, 223);
  font-style: italic;
  
}

.Color1{
  background: #e68b67;
}

.Color2{
  background: #ec584a;
}

.Color3{
  background: #a77d84;
}

@media (max-width: 990px) {
  * {
    margin: 0px;
    padding: 0px;
  }

  .Item3{
    text-align: center;
  }

  .GContainer {
    background-image: url("../assets/Dip1Mobile.jpg");
    background-size: cover;
  }

  .ctrlHeight {
    height: 50px;
  }

  .OpenArrow{
  transform: rotate(90deg);
  width:50px;
}

.OpenYellowArrow{
  transform: rotate(90deg);
}

.Openend {
  width: 50px;
 
  
}

.MedImg{
  width: 200px;
}

.InternList{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  text-align: center;
  margin-bottom: 30px;
}


.InternItem{
width: 80%;
}

.InternItemText{
text-align: center;
}
}
</style>
