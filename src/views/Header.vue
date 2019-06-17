<template lang="html">

  <section class="header">
    <b-navbar toggleable="lg" type="dark" variant="info">

        <router-link :to="{
                                   name: 'Home',
                                      }">
            <b-navbar-brand>Spółdzielnia mieszkaniowa</b-navbar-brand>
        </router-link>


      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>


        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">


          <b-nav-item-dropdown right style="text-align: center">
            <!-- Using 'button-content' slot -->
            <template slot="button-content"><em>Zaloguj się</em></template>
              <router-link :to="{
                                   name: 'Client Login',
                                      }">
                  <p style="margin-left: 15px; color: black">Jako lokator</p>
              </router-link>

              <router-link :to="{
                                   name: 'Admin Login',
                                      }">
                  <p style="margin-left: 15px; color: black">Jako administrator</p>
              </router-link>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'header',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .header {

  }
</style>
