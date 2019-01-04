<template>
  <div class="section s1-U__pd--bt40" id="margins">
    <h1 class="md-display-3 s1-U__mg--bt16">Margins</h1>

    <div>
      <p class="s1-U__mg--bt16">Use as classes <code>s1-U__mg</code> para controlar o espaçamento externo dos elementos (<code>margin: x</code>). As possibilidades horizontais e verticais são definidas nas variáves $vertical e $horizontal</p>
      <div class="s1-Doc-code-wrapper s1-U__mg--bt32">
        <code>
$vertical: 0, 4, 8, 16, 20, 32, 40, 64;
$horizontal: 0, 8, 16, 20, 24, 32;
        </code>
      </div>
      <md-table style="max-width: 600px;">
        <md-table-row>
          <md-table-head>Classe</md-table-head>
          <md-table-head>Efeito</md-table-head>
        </md-table-row>

        <md-table-row>
          <md-table-cell>
            <h4>margin</h4>
          </md-table-cell>
          <md-table-cell></md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__mg0</md-table-cell>
          <md-table-cell>margin: 0px;</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__mg4</md-table-cell>
          <md-table-cell>margin: 4px;</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__mg8</md-table-cell>
          <md-table-cell>margin: 8px;</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>
            <h4>margin-top</h4>
          </md-table-cell>
          <md-table-cell></md-table-cell>
        </md-table-row>

        <template v-for="v in vertical">
          <MarginDoc direction="top" dir="tp" :number="v" v-bind:key="`tp-${v}`"/>
        </template>

        <md-table-row>
          <md-table-cell>
            <h4>margin-right</h4>
          </md-table-cell>
          <md-table-cell></md-table-cell>
        </md-table-row>

        <template v-for="v in horizontal">
          <MarginDoc direction="right" dir="rt" :number="v" v-bind:key="`rt-${v}`"/>
        </template>

        <md-table-row>
          <md-table-cell>
            <h4>margin-bottom</h4>
          </md-table-cell>
          <md-table-cell></md-table-cell>
        </md-table-row>

        <template v-for="v in vertical">
          <MarginDoc direction="bottom" dir="bt" :number="v" v-bind:key="`bt-${v}`"/>
        </template>

        <md-table-row>
          <md-table-cell>
            <h4>margin-left</h4>
          </md-table-cell>
          <md-table-cell></md-table-cell>
        </md-table-row>

        <template v-for="v in horizontal">
          <MarginDoc direction="left" dir="lt" :number="v" v-bind:key="`lt-${v}`"/>
        </template>

      </md-table>
    </div>
  </div>
</template>

<style scoped>
  .md-table.md-content {
    padding: 0;
  }
</style>

<script>

import MarginDoc from "./Margins.vue";

export default {
  name: "S1UMargins",
  data: () => ({ 
    vertical: [0, 4, 8, 16, 20, 32, 40, 64],
    horizontal: [0, 8, 16, 20, 24, 32],
  }),
  components: {
    MarginDoc,
  }
};
</script>