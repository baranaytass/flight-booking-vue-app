<template>
    <v-form v-model="valid">
        <v-container :fluid="true" class="w-50">
            <v-row>
                <v-col cols="12" md="4">
                    <v-select v-model="departureAirport" :items="airportOptions" label="Select Airport" required></v-select>
                </v-col>
                <v-col cols="12" md="4">
                    <v-select v-model="arrivalAirport" :items="airportOptions" label="Arrival Airport" required></v-select>
                </v-col>
                <v-col cols="12" md="4">
                    <v-select v-model="passengerCount" :items="passengerOptions" label="Passenger Count"
                        required></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field type="date" v-model="departureDate" label="Departure Date" required></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field type="date" v-model="returnDate" label="Return Date" required
                        :disabled="flightType === 0"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-btn @click="searchFlights" :disabled="isSearchLoading" color="primary" align-self="end" block>Search Flights</v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4" offset="8">
                    <v-radio-group v-model="flightType" inline>
                        <v-radio v-for="type in searchType" :key="type.value" :label="type.label" :value="type.value"
                            color="blue"></v-radio>
                    </v-radio-group>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>
  
<script>
import { fetchAirports } from '@/services/flight.api.js';
import { mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
        valid: false,
        departureAirport: null,
        arrivalAirport: null,
        departureDate: null,
        returnDate: null,
        passengerCount: null,
        flightType: 0,
        passengerOptions: [1, 2, 3, 4, 5],
        searchType: [
            {
                label: 'One Way',
                value: 0,
            },
            {
                label: 'Round Trip',
                value: 1,
            },
        ],
        airportOptions: [],
    }),
    async beforeCreate() {
        const result = await fetchAirports();

        this.airportOptions = result.airports.map(airport => ({
            title: airport.name,
            value: airport.code
        }));
    },
    computed: {
        ...mapGetters(['isSearchLoading']),
    },
    methods: {
        ...mapActions(['searchForFlights']),
        async searchFlights() {
            try {
                const flightSearchOptions = {
                    FromAirportCode: this.departureAirport,
                    ToAirportCode: this.arrivalAirport,
                    DepartureDate: this.departureDate,
                    ReturnDate: this.returnDate,
                    PassengerCount: this.passengerCount,
                    FlightType: this.flightType,
                };

                this.searchForFlights(flightSearchOptions);

            } catch (error) {
                console.error('Arama hatası:', error);
            }
        }
    }
};
</script>

<style>
.v-input {
    height: 42px;
}

.v-btn {
    margin-top: 20px;
}

.v-input__details {
    display: none;
}
</style>