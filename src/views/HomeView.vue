<template>
  <div class="home-page">
    <div></div>
    <button @click="navigateToSearch">Go to Search</button>
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
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
</style>