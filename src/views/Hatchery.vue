<template>
  <div id="hatchery">
      <p>Hatchery</p>

      <table>
        <tr>
          <td>Queen</td>
          <td>King</td>
        </tr>
        <tr>
          
          <td><hatchery-tab v-bind:critter="geneHatch.King"></hatchery-tab></td>
          <!--<td><hatchery-tab></hatchery-tab></td>-->
        </tr>

        <tr>
          <td>Hatchery</td>
          <td>Hatchery</td>
        </tr>

        <tr>
<!--
          <td><hatchery-tab></hatchery-tab></td>
          <td><hatchery-tab></hatchery-tab></td>-->
        </tr>



      </table>
  </div>  

</template>

<script>
  import HatcheryTabCritter from '../components/HatcheryTabCritter.vue'
  import Hatchery from '../lib/Hatchery.js'
  import Critter from '../lib/Critter.js'

  export default {
      components: {
       'hatchery-tab' : HatcheryTabCritter, 
    },

    computed: {
      geneHatch() {        
        return new Hatchery();
      }
    }
  };
  
</script>

<style scoped>
</style>