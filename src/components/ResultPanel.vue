<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-if="!this.$store.getters.departureFlights && !this.$store.getters.returnFlights">
      No flights found.
    </div>
    <div v-else>
      <div v-if="!this.$store.getters.returnFlights" class="result-container">
        <FlightCard v-for="flight in departureFlights" :key="flight.id" :flight="flight" />
      </div>
      <div v-else>
        <v-row>
          <v-col md="6">
            <div class="result-container">
              <h3>Departure Flights</h3>
              <v-list>
                <FlightCard v-for="flight in departureFlights" :key="flight.id" :flight="flight" />
              </v-list>
            </div>
          </v-col>

          <v-col md="6">
            <div class="result-container">
              <h3>Return Flights</h3>
              <v-list>
                <FlightCard v-for="flight in returnFlights" :key="flight.id" :flight="flight" />
              </v-list>
            </div>
          </v-col>
        </v-row>

      </div>
    </div>
  </div>
</template>

<script>
import FlightCard from '@/components/FlightCard.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    FlightCard,
  },
  computed: {
    ...mapGetters(['isSearchLoading', 'departureFlights', 'returnFlights']),
    isLoading() {
      return this.$store.getters.isSearchLoading;
    },
  }
};
</script>

<style scoped>
.result-container {
  min-height: 680px;
  padding: 8px 12px;
  border-radius: 12px;
  border: 1px solid #adc5ce;
  box-shadow: #ffffffa3 1px 1px 20px 3px;
}

.result-container>h3 {
  text-align: center;
  color: #4b5570e6;
}

.v-list {
  background-color: transparent;
}
</style>
