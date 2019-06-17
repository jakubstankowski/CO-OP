<template lang="html">

    <div class="admin-dashboard">
        <h4>Witaj w panelu zarządzania administratora!</h4>
        <div style="margin-top: 30px" class="row">
            <div class="col">

            </div>
            <div class="col" style="text-align: center">

                <b-card
                        title="Dodaj nowego lokatora"
                        style="margin-top: 15px; margin-bottom: 15px"
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
                                        v-model="user.firstName"
                                        type="text"
                                        required
                                        placeholder="Imię"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group
                                    id="input-group-2"
                            >
                                <b-form-input
                                        id="input-2"
                                        v-model="user.lastName"
                                        type="text"
                                        required
                                        placeholder="Nazwisko"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group
                                    id="input-group-3"
                            >
                                <b-form-input
                                        id="input-3"
                                        v-model="user.adress"
                                        type="text"
                                        required
                                        placeholder="Adres Zamieszkania"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                id="input-group-4"
                        >
                            <b-form-input
                                    id="input-4"
                                    v-model="user.mail"
                                    type="email"
                                    required
                                    placeholder="E-Mail"
                            ></b-form-input>
                        </b-form-group>

                            <b-form-group
                                    id="input-group-5"
                            >
                                <b-form-input
                                        id="input-5"
                                        v-model="user.password"
                                        type="password"
                                        required
                                        placeholder="Hasło"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                    id="input-group-6"
                            >
                                <b-form-input
                                        id="input-6"
                                        v-model="user.phone"
                                        type="number"
                                        required
                                        placeholder="Numer kontaktowy"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-select v-model="user.userType" :options="options"></b-form-select>


                            <b-button type="submit" variant="primary" style="margin: 15px">Dodaj</b-button>
                            <b-button type="reset" variant="danger">Resetuj</b-button>

                        </b-form>

                    </b-card-text>
                </b-card>


            </div>
            <div class="col">


            </div>
        </div>-->
        <div style="margin-top: 30px" class="row">
            <div class="col">


                <b-card
                        title="Piękny dom w spokojnej ulicy"
                        img-src="http://www.ikardomy.pl/images/portfolio-img53.jpg"
                        img-alt="Image"
                        img-top
                        tag="article"

                        class="mb-2"
                >
                    <b-card-text>
                        <p style="color: #17a2b8 !important">
                            Wynajem
                        </p>
                        <p>
                            Cena: 2200 zł / miesiąc
                        </p> <br>


                    </b-card-text>

                    <router-link :to="{
                                   name: 'Offer',
                                      params: { offerId:1 }
                                      }">
                        <b-button variant="danger">
                            Usuń oferte
                        </b-button>
                    </router-link>

                </b-card>
            </div>
            <div class="col">


                <b-card
                        title="Piękny dom w spokojnej ulicy"
                        img-src="http://www.ikardomy.pl/images/portfolio-img53.jpg"
                        img-alt="Image"
                        img-top
                        tag="article"

                        class="mb-2"
                >
                    <b-card-text>
                        <p style="color: #17a2b8 !important">
                            Wynajem
                        </p>
                        <p>
                            Cena: 2200 zł / miesiąc
                        </p> <br>


                    </b-card-text>

                    <router-link :to="{
                                   name: 'Offer',
                                      params: { offerId:1 }
                                      }">
                        <b-button variant="danger">
                            Usuń oferte
                        </b-button>
                    </router-link>

                </b-card>
            </div>
            <div class="col">
                <b-card
                        title="Piękny dom w spokojnej ulicy"
                        img-src="http://www.ikardomy.pl/images/portfolio-img53.jpg"
                        img-alt="Image"
                        img-top
                        tag="article"

                        class="mb-2"
                >
                    <b-card-text>
                        <p style="color: #17a2b8 !important">
                            Wynajem
                        </p>
                        <p>
                            Cena: 2200 zł / miesiąc
                        </p> <br>


                    </b-card-text>

                    <router-link :to="{
                                   name: 'Offer',
                                      params: { offerId:1 }
                                      }">
                        <b-button variant="danger">
                            Usuń oferte
                        </b-button>
                    </router-link>

                </b-card>
            </div>

        </div>
    </div>


</template>

<script lang="js">

    import axios from 'axios';
    export default {
        name: 'admin-dashboard',
        props: [],
        mounted() {
            axios.get("http://localhost:8000/users")
                .then((e)=>{
                    console.log('response:', e)
                })
                .catch((e)=>{
                    console.log('error:', e)
                })
        },
        data() {
            return {
                options: [
                    { value: 'OWNER', text: 'Opcja wynajmu' },
                ],
                user: {
                    adress: '',
                    firstName: '',
                    lastName: '',
                    mail: '',
                    password: '',
                    phone: '',
                    userType: 'OWNER'
                },
                offer:{
                    title:'',
                    price:'',
                    description:'',
                    status:'rent'
                }
            }
        },
        methods: {
            onSubmit() {
                /*evt.preventDefault();*/
                console.log('this. form', this.user)
                this.addUser(this.user);
            },
           onReset(evt) {

                // Reset our form values


                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            },

            addUser(user){

                console.log('user', user)
                axios.post("http://localhost:8000/users",  user,{
                    headers: { authorizationHeader: "basic bWFyZWtAd3AucGw6bWFyZWsx" }
                })
                    .then((r)=>{
                        console.log('r:', r)
                    })
                    .catch((e)=>{
                        console.log('e', e)
                    })

            }
        },
        computed: {}
    }
</script>

<style scoped lang="scss">
    .admin-dashboard {
        padding: 15px;
    }

</style>
