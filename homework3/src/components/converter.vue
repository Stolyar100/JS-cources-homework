<template>
  <div class="converter">
    <div>
      <h1>Конвертер валют</h1>
      <p>
        Конвертує валюту у долар, євро,
        нафту(brent), золото
      </p>
    </div>
    <div class="input-block">
      <input v-for="currency in currencies" :key="currency.currencyId"
      :placeholder="currency.name" v-model="currency.value"
      @keyup="calcCurrenciesValue(currency)" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'converter',

  data: function() {
    return {
      selectedCurrencyId: 'UAH',
      currencies: [
        {
          name: 'Гривня',
          currencyId: 'UAH',
          rate: 27.85,
          value: '',
        },
        {
          name: 'Долар',
          currencyId: 'USD',
          rate: 1.03,
          value: '',
        },
        {
          name: 'Євро',
          currencyId: 'EUR',
          rate: 0.95,
          value: '',
        },
        {
          name: 'Нафта',
          currencyId: 'BBL',
          rate: 21.21,
          value: '',
        },
        {
          name: 'Золото',
          currencyId: 'XAU',
          rate: 0.0006,
          value: '',
        },
      ],
    }
  },
  methods: {
    calcCurrenciesValue(currency) {
      if(isNaN(currency.value)) {
        this.currencies.map(currency => {
          currency.value = '';
            return currency;
        })
      } else {
        const currentFrancValue = currency.value / currency.rate;
        const currentId = currency.currencyId;
        this.currencies.map(currency => {
          if(currency.currencyId != currentId) {
            currency.value = currentFrancValue * currency.rate;
            return currency;
          }
        })

      }
    },
  },
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.converter {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
}

.input-block {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
}

.input-block input {
  display: flex;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;
}
</style>
