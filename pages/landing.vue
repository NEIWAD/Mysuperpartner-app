<template>
  <v-container fill-height fluid>
    <v-row>
      <v-col class="text-center">
        <h1>{{ mainMessage }}</h1>
        <h2>{{ releaseDate }}</h2>
        <v-btn id="letsgoButton" class="mt-5" dark>Let's go</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  layout: 'default_noNav',
  data() {
    return {
      mainMessage: 'My super partner revient vite !',
      releaseDate: '01 / 01 / 2020'
    }
  }
}
</script>
