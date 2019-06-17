<template>
    <div class="home">
        <b-jumbotron header="Mieszkania na wynajem" lead="Lista aktualnych mieszkań dostępnych na wynajem od zaraz">
        </b-jumbotron>
        <div class="row">
            <div v-for="flat in flatForLease" class="col">
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
                            Cena: {{flat.sellPrice}} zł / miesiąc
                        </p>
                        <p>
                            Adres: {{flat.address}}
                        </p>


                    </b-card-text>

                    <router-link :to="{
                                   name: 'Flat For Lease',
                                      params: { flatId: flat.id }
                                      }">
                        <b-button variant="primary">
                            Przejdź do oferty

                        </b-button>
                    </router-link>

                </b-card>
            </div>
        </div>

        <b-jumbotron header="Mieszkania na sprzedaż" lead="Lista mieszkań dostępnych na sprzedaż">
        </b-jumbotron>
        <div class="row">
            <div v-for="flat in flatForSale" class="col">
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
                            Sprzedaż
                        </p>
                        <p>
                            Cena: {{flat.monthPrice}} zł netto
                        </p>
                        <p>
                            Adres: {{flat.address}}
                        </p>


                    </b-card-text>
                    <router-link :to="{
                                   name: 'Flat For Sale',
                                      params: { flatId: flat.id }
                                      }">
                        <b-button variant="primary">
                            Przejdź do oferty

                        </b-button>
                    </router-link>

                </b-card>
            </div>
        </div>


    </div>
</template>

<script>
    import axios from 'axios';
    // @ is an alias to /src


    export default {
        name: 'home',
        components: {},
        data() {
            return {
                flatForLease: [],
                flatForSale: []
            }
        },
        mounted() {
            axios.get("http://localhost:8000/api/flatForLease")
                .then((r) => {

                    console.log('r',r )
                    r.data.map((val) => {
                        this.flatForLease.push(val);
                    })
                })
                .catch((error) => {
                    console.log('error:', error)
                })

            axios.get("http://localhost:8000/api/flatForSale")
                .then((r) => {
                    console.log('r:', r)
                    r.data.map((val) => {
                        this.flatForSale.push(val);
                    })
                })
                .catch((error) => {
                    console.log('error:', error)
                })
        }
    }
</script>

<style scoped>
    /*.row {
        text-align: center;
        padding: 15px;
    }*/


    .col .mb-2 {
        width: 100% !important;
    }

    .home {
        padding: 30px;
    }
</style>
