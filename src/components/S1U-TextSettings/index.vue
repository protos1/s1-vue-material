<template>
  <div class="section s1-U__pd--bt32" id="text-settings">
    <h1 class="md-display-3 s1-U__mg--bt16">Text settings</h1>

    <div>
      <md-table>
        <md-table-row>
          <md-table-head>Classe</md-table-head>
          <md-table-head>Efeito</md-table-head>
          <md-table-head>Exemplo</md-table-head>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__text-align--right</md-table-cell>
          <md-table-cell>text-align: right</md-table-cell>
          <md-table-cell>
            <div class="s1-U__text-align--right">direita</div>
          </md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__text-align--center</md-table-cell>
          <md-table-cell>text-align: center</md-table-cell>
          <md-table-cell>
            <div class="s1-U__text-align--center">centro</div>
          </md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__text-nowrap </md-table-cell>
          <md-table-cell>white-space: nowrap</md-table-cell>
          <md-table-cell>...</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__text-lowercase </md-table-cell>
          <md-table-cell>text-transform: lowercase</md-table-cell>
          <md-table-cell>
            <span class="s1-U__text-lowercase">ALO ALO</span>
          </md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__text-uppercase </md-table-cell>
          <md-table-cell>text-transform: uppercase</md-table-cell>
          <md-table-cell>
            <span class="s1-U__text-uppercase">alo alo</span>
          </md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>
            <p>.s1-U__text-ellipsis </p>
            <p>* Precisa de limite ou largura definida</p>
          </md-table-cell>
          <md-table-cell>...</md-table-cell>
          <md-table-cell>
            <p class="s1-U__text-ellipsis" style="width: 70px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident at saepe harum ipsam.</p>
          </md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>.s1-U__fw--300 </md-table-cell>
          <md-table-cell>font-weight: 300</md-table-cell>
          <md-table-cell>
            <span class="s1-U__fw--300" style="font-size: 30px">AB</span>
            <span style="font-size: 30px"><b>AB</b></span>
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
  name: "S1UTextSettings",
};
</script>