<script setup>
import ApiConfigCard from '@/components/ApiConfigCard.vue';
</script>

<template>
  <div class="home-page">
    <div><ApiConfigCard></ApiConfigCard></div>
    <v-container>
      <v-col cols="6" offset="3">
        <div>
          <b>Welcome to FlightBooking App</b>
          <br /><br />
          <b>About</b>
          <br /><br />
          FlightBooking is a web application composed of a .NET 6.0 REST API and a user interface built with Vue.js 3.
          <br /><br />
          What It Does The REST API uses the Bogus library to generate fake data, which is then stored in a Redis server. When requests
          are made, the API retrieves data from the Redis server and returns it.
          <br /><br />
          <b>Technologies Used</b>
          <br /><br />
          - .NET 6.0 for the REST API <br />
          - Vue.js 3 for the user interface <br />
          - Vuetify for UI components <br />
          - Axios for making HTTP requests <br />
          - Vuex for state management <br />
          - Vue Router for navigation <br />
          <br />
          <b>Search Functionality</b>
          <br /><br />
          The application allows you to search for data using state management, providing a seamless user experience.

        </div>

        <div>
          <b>.NET Rest API :</b>
          <a href="https://github.com/baranaytass/FlightBookingAPI">Github Link</a>
        </div>
        <div>
          <b>Vue.Js UI App :</b>
          <a href="https://github.com/baranaytass/flight-booking-vue-app">Github Link</a>
        </div>
        <div>
          <v-btn @click="navigateToSearch">Go to Search</v-btn>
        </div>
      </v-col>
    </v-container>
    <div></div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToSearch() {
      this.$router.push('/search');
    },
  },
};
</script>

<style>
.home-page {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  min-height: 640px;
  align-items: center;
}

.v-col>div {
  text-align: center;
  margin-bottom: 14px;
}

a {
  text-decoration: none;
  margin-left: 12px;
}
</style>