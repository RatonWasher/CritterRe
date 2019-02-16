<template>
  <div id="app">
    <div id="topbar"></div>
    <b-tabs>
      <b-tab title="Hatchery" active>
        <hatchery></hatchery>
      </b-tab>
      <b-tab title="Laboratory" v-if="Math.random() > 0.5">
        <laboratory></laboratory>
      </b-tab>
      <b-tab title="Labour">
        <labour></labour>
      </b-tab>
      <b-tab title="War">
        <war></war>
      </b-tab>
      <b-tab title="Achievements">
        <achievements></achievements>
      </b-tab>
      <b-tab title="How to play">
        <how-to-play></how-to-play>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Hatchery from './views/Hatchery.vue'
import Laboratory from './views/Laboratory.vue'
import Labour from './views/Labour.vue'
import War from './views/War.vue'
import Achievements from './views/Achievements.vue'
import HowToPlay from './views/HowToPlay.vue'

export default {
  name: 'App',
  components: {
    'hatchery' : Hatchery,
    'laboratory' : Laboratory,
    'labour' : Labour,
    'war' : War,
    'achievements' : Achievements,
    'how-to-play' : HowToPlay
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
