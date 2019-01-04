<template>
  <div class="section s1-U__pd--bt40" id="visibility">
    <h1 class="md-display-3 s1-U__mg--bt16">Visibility</h1>

    <div>
      <md-table>
        <md-table-row>
          <md-table-head>Classe</md-table-head>
          <md-table-head>Efeito</md-table-head>
          <md-table-head>Exemplo</md-table-head>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__invisible</md-table-cell>
          <md-table-cell>opacity: 0</md-table-cell>
          <md-table-cell>
            <div class="s1-U__bg-color--accent s1-U__invisible" style="height: 20px"></div>
          </md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__opacity--30</md-table-cell>
          <md-table-cell>opacity: .3</md-table-cell>
          <md-table-cell>
            <div class="s1-U__bg-color--accent s1-U__opacity--30" style="height: 20px"></div>
          </md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__opacity--40</md-table-cell>
          <md-table-cell>opacity: .4</md-table-cell>
          <md-table-cell>
            <div class="s1-U__bg-color--accent s1-U__opacity--40" style="height: 20px"></div>
          </md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__opacity--54</md-table-cell>
          <md-table-cell>opacity: .54</md-table-cell>
          <md-table-cell>
            <div class="s1-U__bg-color--accent s1-U__opacity--54" style="height: 20px"></div>
          </md-table-cell>
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
  name: "S1UVisibility",
};
</script>