<template>
  <div id="hatchery">
      <p>Hatchery</p>

      <table>
        <tr>
          <td>Queen</td>
          <td>King</td>
        </tr>
        <tr>
          <td><hatchery-tab v-bind:score="32"></hatchery-tab></td>
          <td><hatchery-tab></hatchery-tab></td>
        </tr>

        <tr>
          <td>Hatchery</td>
          <td>Hatchery</td>
        </tr>

        <tr>
          <td><hatchery-tab></hatchery-tab></td>
          <td><hatchery-tab></hatchery-tab></td>
        </tr>



      </table>
  </div>  

</template>

<script>
  import HatcheryTabCritter from '../components/HatcheryTabCritter.vue'

  export default {
      components: {
       'hatchery-tab' : HatcheryTabCritter, 
    }
  };
  
</script>

<style scoped>
</style>