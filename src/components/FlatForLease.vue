<template lang="html">

  <section class="flat-for-lease">
    <b-card
            title="Piękny dom  na wynajem w spokojnej ulicy"
            img-src="http://www.ikardomy.pl/images/portfolio-img53.jpg"
            img-alt="Image"
            img-top
            tag="article"

            class="mb-2"
    >
      <b-card-text>
        <p>
          Cena: {{flatForLease.sellPrice}} zł / miesiąc
        </p> <br>
        <p>

          Dom 180 m2 w pełni wyposażony i umeblowany na zamkniętym osiedlu w centrum. Osiedle w przy ul. Zwoleńskiej.
          Dom posiada trzy piętra:<br>
          Parter:<br>
          - garaż wyposażony na trzech ścianach w zabudowę szaf oraz biurka warsztatowego<br>
          - hol z szafa, siedzisko ze ściana tapicerowana oraz komoda na buty<br>
          - łazienka z prysznicem i zabudowa meblowa<br>
          - salon letni z kompletem wypoczynkowym, stolikiem kawowy i szafkę RTV oraz TV 46 cali<br>
          - z salonu wyjście na ogród z tarasem (zestaw mebli ogrodowych) oraz na trawniku domkiem dla dzieci<br>
          Piętro:<br>
          - kuchnia w pełni wyposażona<br>
          - jadalnia z wielkim stołem z krzesłami na 10 osób<br>
          - salon z dwoma kanapami ze stolikiem kawowym i szafka RTV, piękna witryna, pianino, TV 55 cali<br>
          - na pietrze jest WC<br>

          Dom gotowy do zamieszkania od zaraz<br>
        </p>


      </b-card-text>

      <router-link :to="{
                                   name: 'Home'
                                      }">
        <b-button  variant="primary">
          Wróć do listy ofert

        </b-button>
      </router-link>

    </b-card>
  </section>

</template>

<script lang="js">

  import axios from  'axios';
  export default  {
    name: 'flat-for-lease',
    props: [],
    mounted() {

    },
    data() {
      return {
        flatForLease:[]
      }
    },

    beforeCreate(){
      const flatId = this.$route.params.flatId;

      axios.get(`http://localhost:8000/api/flatForLease/${flatId}`)
              .then((response) => {
                this.flatForLease = response.data;
              })
              .catch((e) => {
                console.log('eeeeerrrorr', e);
              });
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .flat-for-lease {

  }
</style>
