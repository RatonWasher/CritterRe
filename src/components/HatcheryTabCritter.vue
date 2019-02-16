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
          <td>{{sexe}}</td>
          <td>{{score}}</td>
          <td>{{vitalite}}</td>
          <td>{{force}}</td>
          <td>{{agilite}}</td>
          <td>{{bite}}</td>
          <td>{{piqure}}</td>
          </tr>

      </table>
  </div>  

</template>

<script>
  export default {
      props: {
          //Remplacer par liste de critter avec un petit v-let dans le template
          sexe: String,
          score: Number,
          vitalite: Number,
          force: Number,
          agilite: Number,
          bite: Number,
          piqure: Number
      }
  };
</script>

<style scoped>
</style>