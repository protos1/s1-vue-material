<template>
  <div class="section" id="flex-settings">
    <h1 class="md-display-3 s1-U__mg--bt16">Flex settings</h1>

    <div>
      <p class="s1-U__mg--bt32">Para saber mais sobre flexbox: <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">https://css-tricks.com/snippets/css/a-guide-to-flexbox/</a> </p>
      <md-table style="max-width: 600px;">
        <md-table-row>
          <md-table-head>Classe</md-table-head>
          <md-table-head>Efeito</md-table-head>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__flex-shrink-0</md-table-cell>
          <md-table-cell>flex-shrink: 0</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__unset-flex</md-table-cell>
          <md-table-cell>flex: unset</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__no-flex</md-table-cell>
          <md-table-cell>flex: 0</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__flex-nowrap</md-table-cell>
          <md-table-cell>flex-wrap: nowrap;</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__flex-wrap</md-table-cell>
          <md-table-cell>flex-wrap: wrap;</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__flex-column</md-table-cell>
          <md-table-cell>flex-direction: column;</md-table-cell>
        </md-table-row>
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
export default {
  name: "S1UFlexSettings",
};
</script>