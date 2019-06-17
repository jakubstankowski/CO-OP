<template lang="html">

  <div class="row">
    <div class="col">

    </div>
    <div class="col" style="text-align: center">

      <b-card
              title="Logowanie lokatora"
              style="margin-top: 15px"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
      >
        <b-card-text>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
                    style="margin-top: 30px"
                    id="input-group-1"
            >
              <b-form-input
                      id="input-1"
                      v-model="form.login"
                      type="text"
                      required
                      placeholder="Podaj login"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input
                      id="input-2"
                      v-model="form.password"
                      required
                      type="password"
                      placeholder="Podaj hasło "
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary" style="margin: 15px">Zaloguj</b-button>
            <b-button type="reset" variant="danger">Resetuj</b-button>
            <span style="color: red">
                                {{errorMessage}}
                            </span>
          </b-form>

        </b-card-text>
      </b-card>


    </div>
    <div class="col">


    </div>
  </div>

</template>

<script lang="js">
  export default  {
    name: 'client-login',
    props: [],
    mounted() {

    },
    data() {
      return {
        errorMessage: '',
        form: {
          login: '',
          password: '',
        },
        foods: [{text: 'Select One', value: null}, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()

        const loginFromForm = JSON.stringify(this.form.login);
        const passwordFromForm = JSON.stringify(this.form.password);

        setTimeout(()=>{
          this.$router.push({name:"Customer Dashboard"})
        }, 100)


        //HARD CODE!@#
        /* if(login === loginFromForm && password === passwordFromForm){
             alert('zalogowano!')

         } else if(login !== loginFromForm && password !== passwordFromForm) {
             console.log('nie zalogowano!')
         }*/
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
  .client-login {

  }
</style>
