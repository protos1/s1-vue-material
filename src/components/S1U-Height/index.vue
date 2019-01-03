<template>
  <div class="section" id="height">
    <h1 class="md-display-3 s1-U__mg--bt16">Height</h1>

    <div>
      <md-table>
        <md-table-row>
          <md-table-head>Classe</md-table-head>
          <md-table-head>Efeito</md-table-head>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__full-height</md-table-cell>
          <md-table-cell>height: 100%</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__height-auto</md-table-cell>
          <md-table-cell>height: auto</md-table-cell>
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
  name: "S1UHeight",
};
</script>