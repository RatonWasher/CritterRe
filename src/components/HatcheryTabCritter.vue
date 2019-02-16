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
          <td>{{critter.sex}}</td>
          <td>{{critter.score}}</td>
          <td>{{critter.vitality}}</td>
          <td>{{critter.strength}}</td>
          <td>{{critter.agility}}</td>
          <td>{{critter.bite}}</td>
          <td>{{critter.sting}}</td>
          </tr>
      </table>
  </div>  

</template>

<script>
import Criterra from '../lib/Criterra.js'
  export default {
      props: {
        critter: Criterra
      },       
  };
</script>

<style scoped>
</style>