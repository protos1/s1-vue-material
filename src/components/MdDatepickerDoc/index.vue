<template>
  <div class="section s1-U__pd--bt32" id="datepickers">
    <h1 class="md-display-3 s1-U__mg--bt16">Datepicker</h1>

    <div class="s1-U__mg--bt16">
      <a class="s1-U__text-ellipsis s1-U__full-width" href="https://vuematerial.io/components/datepicker">https://vuematerial.io/components/datepicker</a>
    </div>

    <div>
      <p class="s1-U__mg--bt32">Apenas algumas alterações no layout, sem qualquer alteração na implementação</p>
      <div>
        <md-datepicker v-model="selectedDate">
          <label>Início do contrato</label>
        </md-datepicker>
      </div>
      <div class="s1-Doc-code-wrapper">
        <code>
&#x3C;md-datepicker v-model=&#x22;selectedDate&#x22;&#x3E;
  &#x3C;label&#x3E;In&#xED;cio do contrato&#x3C;/label&#x3E;
&#x3C;/md-datepicker&#x3E;
        </code>
      </div>
    </div>

    <div class="s1-U__align-children--center s1-U__mg--tp32">
      <md-icon class="md-accent s1-U__mg--rt8">error</md-icon>
      <p class="md-caption"><b>ATENÇÃO:</b> O componente do VM possui um problema quando limitamos o tamanho do input.</p>
    </div>

    <div class="s1-U__width--210px">
      <md-datepicker v-model="selectedDate">
        <label>Início do contrato</label>
      </md-datepicker>
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