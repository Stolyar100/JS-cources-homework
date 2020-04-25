<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="select">
      <select v-model="selected">
        <option disabled value="">Виберіть завдання</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
      </select>
    </div>
    <span>Вибрано завдання: {{ selected }}</span>
    <div class="container">
      <converter v-if="selected == 2" />
      <order v-if="selected == 3" />
      <quiz v-if="selected == 4" />
      <numberCheck v-if="selected == 5" />
      <keyShift v-if="selected == 6" />
    </div>
    </div>
</template>

<script>
import converter from './components/converter.vue'
import order from './components/order.vue'
import quiz from './components/quiz.vue'
import numberCheck from './components/numberCheck.vue'
import keyShift from './components/keyShift.vue'

export default {
  name: 'App',
  components: {
    converter,
    order,
    quiz,
    numberCheck,
    keyShift,
  },

  data: function() {
    return {
      selected: '',
      
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

}
</style>
