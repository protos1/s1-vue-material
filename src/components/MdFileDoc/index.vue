<template>
  <div class="section s1-U__pd--bt40" id="file">
    <h1 class="md-display-3 s1-U__mg--bt16">File</h1>

    <div class="s1-U__mg--bt16">
      <a class="s1-U__text-ellipsis s1-U__full-width" target="_blank" href="https://vuematerial.io/components/file">vuematerial.io/file</a>
    </div>

    <div>
      <p class="s1-U__mg--bt32">Apenas algumas alterações no layout, sem qualquer alteração na implementação</p>
      <div>
        <md-field>
          <label>Single</label>
          <md-file v-model="single" />
        </md-field>

        <md-field>
          <label>Upload files</label>
          <md-file v-model="placeholder" placeholder="A nice input placeholder" />
        </md-field>

        <md-field>
          <label>Disabled</label>
          <md-file v-model="disabled" disabled/>
        </md-field>
      </div>
      <div class="s1-Doc-code-wrapper">
        <code>
&#x3C;md-field&#x3E;
  &#x3C;label&#x3E;Single&#x3C;/label&#x3E;
  &#x3C;md-file v-model=&#x22;single&#x22; /&#x3E;
&#x3C;/md-field&#x3E;

&#x3C;md-field&#x3E;
  &#x3C;label&#x3E;Upload files&#x3C;/label&#x3E;
  &#x3C;md-file v-model=&#x22;placeholder&#x22; placeholder=&#x22;A nice input placeholder&#x22; /&#x3E;
&#x3C;/md-field&#x3E;

&#x3C;md-field&#x3E;
  &#x3C;label&#x3E;Disabled&#x3C;/label&#x3E;
  &#x3C;md-file v-model=&#x22;disabled&#x22; disabled/&#x3E;
&#x3C;/md-field&#x3E;
        </code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MdFileDoc",
  data: () => ({
    initial: 'vue-material-is-awesome.jpg',
    single: null,
    placeholder: null,
    disabled: null,
    multiple: null
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