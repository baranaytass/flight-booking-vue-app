<template>
    <div class="config-card" v-if="this.config != null">
        <h2 style="color: #5d5e9e;">API Config</h2>
        <ul>
            <li>Airport Count: {{ config.airportCount }}</li>
            <li>Flight Count Per Airport: {{ config.flightCountPerAirport }}</li>
            <li>Date Scope: {{ config.dateScope }}</li>
        </ul>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            config: this.$store.state.apiConfig,
        };
    },
    watch: {
        '$store.state.apiConfig'(newConfig) {
            this.config = newConfig;
        },
    },
    methods: {
        hasConfig() {
            return Object.keys(this.config).length > 0;
        },
    }
};
</script>
  
  
<style>
.config-card {
    border: 1px solid #366999;
    position: absolute;
    padding: 16px;
    left: 16px;
    top: 8px;
    box-shadow: blue 2px 3px 1px;
}

ul {
    list-style: none;
}
</style>