<template>
  <div class="order">
    <div>
      <h1>Замовлення</h1>
      <p>Введіть суму замовлення, отримайте знижку</p>
    </div>
    <div class="input-block">
      <input placeholder="Сума замовлення" v-model="orderAmount"
        @keyup="isCorrectInput"/>
      <p>Cума з урахуванням знижки: {{ discount }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "order",
  data: function() {
    return {
      orderAmount: '',
      
    };
  },

  methods: {
    isCorrectInput() {
      if(isNaN(this.orderAmount)) {
        this.orderAmount = '';
      }
    },
  },

  computed: {
    discount() {
      if(this.orderAmount > 1000) {
        return `${this.orderAmount - this.orderAmount * 0.1} грн + сертифікат на 200 грн`;
      } else if(this.orderAmount > 500) {
        return `${this.orderAmount - this.orderAmount * 0.05} грн`;
      }
      return `${this.orderAmount - this.orderAmount * 0.01} грн`;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-block {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
}

.input-block input {
  font-size: 18px;
  padding: 10px 18px;
  width: 100%;
  margin-bottom: 16px;
}

.input-block p {
  font-weight: 500;
}
</style>
