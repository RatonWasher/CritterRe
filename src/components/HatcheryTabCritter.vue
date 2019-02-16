<template>
  <div id="hatcheryTabCritter">
      <table class="table table-bordered">
          <tr>
          <th>Sexe</th>
          <th>Score</th>
          <th>Vitalité</th>
          <th>Force</th>
          <th>Agilité</th>
          <th>Bite</th>
          <th>Piqure</th>
          <tr>

          <!--TODO Afficher plusieurs critters -->
          <tr>
          <td>{{critter.gender}}</td>
          <td>{{critter.score}}</td>
          <td>{{critter.caracteristics[0].value}}</td>
          <td>{{critter.caracteristics[1].value}}</td>
          <td>{{critter.caracteristics[2].value}}</td>
          <td>{{critter.caracteristics[3].value}}</td>
          <td>{{critter.caracteristics[4].value}}</td>
          </tr>
      </table>
  </div>  

</template>

<script>
  import Critter from '../lib/Critter.js'

  export default {
      props: {
        critter: Critter
      },       
  };
</script>

<style scoped>
</style>