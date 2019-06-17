<template lang="html">

  <section class="customer-dashboard">
    <h4>Witaj w panelu zarządzania lokatora</h4>
    <div class="row">
      <div class="col">

      </div>
      <div class="col" style="text-align: center">

        <b-card
                title="Dodaj mieszkanie na sprzedaż lub wynajem"
                style="margin-top: 15px"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2"
        >
          <b-card-text>
            <b-form v-on:submit.prevent="onSubmit" @reset="onReset">
              <b-form-group
                      style="margin-top: 30px"
                      id="input-group-1"
              >
                <b-form-input
                        id="input-1"
                        v-model="offer.title"
                        type="text"
                        required
                        placeholder="Podaj tytul oferty"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label-for="input-2">

                <b-form-textarea
                        id="textarea"
                        v-model="offer.description"
                        required
                        placeholder="Podaj opis oferty"
                        rows="3"
                        max-rows="6"
                ></b-form-textarea>
              </b-form-group>
              <b-form-group id="input-group-2" label-for="input-2">
                <b-form-input
                        id="textarea"
                        v-model="offer.price"
                        required
                        type="number"
                        placeholder="Podaj cene oferty"
                ></b-form-input>
              </b-form-group>
              <b-form-select v-model="offer.status" :options="options"></b-form-select>

              <b-button type="submit" variant="primary" style="margin: 15px">Dodaj oferte</b-button>
              <b-button type="reset" variant="danger">Resetuj</b-button>

            </b-form>

          </b-card-text>
        </b-card>


      </div>
      <div class="col">


      </div>
    </div>
  </section>

</template>

<script lang="js">


  export default  {
    name: 'customer-dashboard',
    props: [],
    mounted() {

    },
    data() {
      return {
        options: [
          { value: 'rent', text: 'Opcja wynajmu' },
          { value: 'sell', text: 'Opcja sprzedaży' },
        ],
        offer:{
          title:'',
          price:'',
          description:'',
          status:'rent'
        }
      }
    },
    methods: {
      onSubmit(evt) {
        //evt.preventDefault()

        console.log('this. form', this.offer)
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.login = ''
        this.form.password = ''

        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .customer-dashboard {
    padding: 15px;
  }
</style>
