<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <v-card @click="show = !show">
    <v-list-item :subtitle="formatDateToTurkish(new Date(flight.departureDate))"
      :title="flight.fromAirportCode + '  >  ' + flight.toAirportCode">
      <v-list-item-content class="float-right position-absolute" style="right: 24px;top: 22px;">
        <p class="flight-price">{{ flight.price }} €</p>
      </v-list-item-content>
    </v-list-item>

    <v-expand-transition>
      <div>
        <v-divider></v-divider>
        <div v-show="show" class="pb-6">
          <v-card-subtitle>
            PNR: {{ flight.flightNumber }}
          </v-card-subtitle>

          <v-card-subtitle>
            Estimated Arrival Time: {{ formatDateToTurkish(new Date(flight.arrivalTime)) }}
          </v-card-subtitle>
        </div>
      </div>

    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    flight: Object,
  },
  created() {
    console.log(this.flight);
  },
  methods: {
    formatDateToTurkish(dateTime) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
      };

      return dateTime.toLocaleString('tr-TR', options);
    }
  }
};
</script>

<style scoped>
.flight-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>

<style scoped>
.v-list-item {
  border: 1px solid #666dab40;
  box-shadow: #7d9a9a66 1px 1px 2px 1px;
  border-radius: 4px;
  margin-bottom: 12px;
  padding: 12px 18px;
}

.flight-price {
  font-weight: 600;
  color: #a152a29c;
}
</style>