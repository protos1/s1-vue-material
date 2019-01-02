<template>
  <div class="section" id="table">
    <h1 class="md-display-3 s1-U__mg--bt16">Table</h1>

    <div class="s1-U__mg--bt16">
      <a class="s1-U__text-ellipsis s1-U__full-width" href="https://vuematerial.io/components/datepicker">https://vuematerial.io/components/datepicker</a>
    </div>

    <div>
      <h2 class="md-display-1 s1-U__mg--bt8">1. Uso recomendado</h2>
      <div>
        <md-datepicker v-model="selectedDate">
          <label>Início do contrato</label>
        </md-datepicker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MdTableDoc",
  data: () => ({
    selectedDate: null
  }),
  computed: {
    firstDayOfAWeek: {
      get() {
        return this.$material.locale.firstDayOfAWeek;
      },
      set(val) {
        this.$material.locale.firstDayOfAWeek = val;
      }
    }
  }
};
</script>