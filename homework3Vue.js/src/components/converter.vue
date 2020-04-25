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
      <div class="currency" 
      v-for="currency in currencies" :key="currency.currencyId">
        <input :placeholder="currency.name" v-model="currency.value"
        @keyup="calcCurrenciesValue(currency)" />
        <p>{{ currency.currencyId}}</p>
      </div>
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
      if(isNaN(currency.value) || (currency.value == 0) ) {
        this.currencies.map(currency => {
          currency.value = '';
            return currency;
        })
      } else {
        const currentFrancValue = currency.value / currency.rate;
        const currentId = currency.currencyId;
        this.currencies.map(currency => {
          if(currency.currencyId !== currentId) {
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

.currency {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  font-size: 18px;
}

.currency input {
  font-size: 18px;
  padding: 10px 18px;
  width: 80%;
  margin-bottom: 16px;
}

.currency p {
  text-transform: uppercase;
  font-weight: 500
}
</style>

