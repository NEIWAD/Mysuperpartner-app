<template>
  <div class="landingPage">
    <div class="landingLeft">
      <div>
        <h1>My Super</h1>
        <h1>Partner</h1>
        <p>{{ subMessage }}</p>
        <div class="d-flex">
          <v-text-field
            solo
            dense
            hide-details
            rounded
            placeholder="Votre adresse email"
            class="mr-4"
          ></v-text-field>
          <v-btn rounded color="primary">Rester connecté !</v-btn>
        </div>
      </div>
    </div>
    <div class="landingRight"></div>
  </div>
</template>
<script>
export default {
  layout: 'default_noNav',
  data() {
    return {
      subMessage:
        'Mysuperpartner.io est la première plateforme Française de partenariats entre associations étudiantes et entreprises ! L’objectif est d’apporter de la visibilités aux associations étudiantes et de permettre aux entreprises de cibler au mieux les associations correspondants à leurs valeurs. La plateforme est actuellement en refonte et revient très bientôt, nous vous tiendrons informés.'
    }
  }
}
</script>
<style lang="scss">
.landingPage {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  font-family: 'Nunito', sans-serif;
  div {
    flex: 1;
  }
  .landingLeft {
    display: flex;
    align-items: center;
    padding: 40px;
    h1 {
      font-size: 100px;
      color: #368bff;
    }
  }
  .landingRight {
    display: block;
    background-color: #face13;
  }
}
</style>
