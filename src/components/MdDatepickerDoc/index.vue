<template>
  <div>
    <h1 class="md-display-3">Datepicker</h1>
    <a
      href="https://vuematerial.io/components/datepicker"
    >https://vuematerial.io/components/datepicker</a>

    <div>
      <h2 class="display-2">1. Basic Example</h2>
      <div>
        <md-datepicker v-model="selectedDate"/>
        <md-field class="md-field-helper-text">
          <label for="movie">First day of a week</label>
          <md-select v-model="firstDayOfAWeek">
            <md-option value="0">Sunday</md-option>
            <md-option value="1">Monday</md-option>
          </md-select>
          <span class="md-helper-text">This config is global.</span>
        </md-field>
      </div>
    </div>

    <div>
      <h2 class="display-2">2. Labeled Example</h2>
      <div>
        <md-datepicker v-model="selectedDate">
          <label>Select date</label>
        </md-datepicker>
      </div>
    </div>

    <div>
      <h2 class="display-2">3. Cancel open on focus</h2>
      <md-datepicker v-model="selectedDate" :md-open-on-focus="false"/>
    </div>

    <div>
      <h2 class="display-2">4. Close dialog on select</h2>
      <md-datepicker v-model="selectedDate" md-immediately/>
    </div>
  </div>
</template>

<script>
export default {
  name: "MdDatepickerDoc",
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