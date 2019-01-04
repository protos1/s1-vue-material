<template>
  <div class="section s1-U__pd--bt40" id="paddings">
    <h1 class="md-display-3 s1-U__mg--bt16">Paddings</h1>

    <div>
      <p class="s1-U__mg--bt16">Use as classes <code>s1-U__pd</code> para controlar o espaçamento interno dos elementos (<code>padding: x</code>). As possibilidades horizontais e verticais são definidas nas variáves $vertical e $horizontal</p>
      <div class="s1-Doc-code-wrapper s1-U__mg--bt32">
        <code>
$vertical: 0, 4, 8, 16, 20, 32, 40;
$horizontal: 0, 4, 8, 12, 16, 20, 24, 32, 40;
        </code>
      </div>
      <md-table style="max-width: 600px;">
        <md-table-row>
          <md-table-head>Classe</md-table-head>
          <md-table-head>Efeito</md-table-head>
        </md-table-row>

        <md-table-row>
          <md-table-cell>
            <h4>padding</h4>
          </md-table-cell>
          <md-table-cell></md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__pd0</md-table-cell>
          <md-table-cell>padding: 0px;</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__pd8</md-table-cell>
          <md-table-cell>padding: 8px;</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__pd16</md-table-cell>
          <md-table-cell>padding: 16px;</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__pd20</md-table-cell>
          <md-table-cell>padding: 20px;</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__pd24</md-table-cell>
          <md-table-cell>padding: 24px;</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>
            <h4>padding-top</h4>
          </md-table-cell>
          <md-table-cell></md-table-cell>
        </md-table-row>

        <template v-for="v in vertical">
          <PaddingDoc direction="top" dir="tp" :number="v" v-bind:key="`tp-${v}`"/>
        </template>

        <md-table-row>
          <md-table-cell>
            <h4>padding-right</h4>
          </md-table-cell>
          <md-table-cell></md-table-cell>
        </md-table-row>

        <template v-for="v in horizontal">
          <PaddingDoc direction="right" dir="rt" :number="v" v-bind:key="`rt-${v}`"/>
        </template>

        <md-table-row>
          <md-table-cell>
            <h4>padding-bottom</h4>
          </md-table-cell>
          <md-table-cell></md-table-cell>
        </md-table-row>

        <template v-for="v in vertical">
          <PaddingDoc direction="bottom" dir="bt" :number="v" v-bind:key="`bt-${v}`"/>
        </template>

        <md-table-row>
          <md-table-cell>
            <h4>padding-left</h4>
          </md-table-cell>
          <md-table-cell></md-table-cell>
        </md-table-row>

        <template v-for="v in horizontal">
          <PaddingDoc direction="left" dir="lt" :number="v" v-bind:key="`lt-${v}`"/>
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

import PaddingDoc from "./Paddings.vue";

export default {
  name: "S1UPaddings",
  data: () => ({
    vertical: [0, 4, 8, 16, 20, 32, 40],
    horizontal: [0, 4, 8, 12, 16, 20, 24, 32, 40]
  }),
  components: {
    PaddingDoc,
  }
};
</script>