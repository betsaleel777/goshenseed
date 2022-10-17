<template>
  <v-container class="fixed-width">
    <div class="root">
      <img
        v-for="(logo, index) in logos"
        :key="index"
        :src="logo"
        :alt="'logo' + index"
      >
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import './logo-style.scss';
</style>

<script>
export default {
  data() {
    return {
      logos: [
        '/images/logos/asap.png',
        '/images/logos/coqivoire.png',
        '/images/logos/ivograin.png',
        '/images/logos/sipra.png',
        '/images/logos/poussin.png',
        '/images/logos/shyne.png'
      ]
    }
  }
}
</script>
