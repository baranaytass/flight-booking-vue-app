<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { fetchApiConfig } from '@/services/flight.api.js';

export default {
  name: 'App',
  beforeCreate() {
    fetchApiConfig();
  },
  methods: {
    ...mapActions(['fetchApiConfig']), 
  },
  async created() {
    try {
      await this.$store.dispatch('fetchApiConfig'); 
      
      const config = this.$store.state.apiConfig;

      console.log('API ayarları:', config);
    } catch (error) {
      console.error('API ayarlarını getirme hatası:', error);
    }
  },
};
</script>

<style>
body {
  background-color: rgb(174 211 155 / 34%);
}
</style>