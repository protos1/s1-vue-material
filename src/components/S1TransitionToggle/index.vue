<template>
  <div class="section s1-U__pd--bt40" id="transition-toggle">
    <h1 class="md-display-3 s1-U__mg--bt16">Transition toggle</h1>

    <md-button class="s1-md-bordered md-primary" @click="toggleActive">
      <div class="s1-U__toogle-transition">
        <div class="s1-U__align-children--center s1-U__pd--rt8" :class="{'active': active}">
          <md-icon class="s1-U__mg--rt8">close</md-icon>
          <span>fechar</span>
        </div>
        <div class="s1-U__align-children--center s1-U__pd--rt8" :class="{'active': !active}">
          <md-icon class="s1-U__mg--rt8">add</md-icon>
          <span>Abrir</span>
        </div>
      </div>
    </md-button>

<div class="s1-Doc-code-wrapper">
  <code>
&#x3C;md-button class=&#x22;md-bordered md-primary&#x22; @click=&#x22;toggleActive&#x22;&#x3E;
  &#x3C;div class=&#x22;s1-U__toogle-transition&#x22;&#x3E;
    &#x3C;div :class=&#x22;{&#x27;active&#x27;: active}&#x22;&#x3E;
      &#x3C;md-icon class=&#x22;s1-U__mg--rt8&#x22;&#x3E;close&#x3C;/md-icon&#x3E;
      &#x3C;span&#x3E;fechar&#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div :class=&#x22;{&#x27;active&#x27;: !active}&#x22;&#x3E;
      &#x3C;md-icon class=&#x22;s1-U__mg--rt8&#x22;&#x3E;add&#x3C;/md-icon&#x3E;
      &#x3C;span&#x3E;Abrir&#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/md-button&#x3E;
  </code>
</div>

  </div>
</template>

<script>
export default {
  name: "S1TransitionToggle",
    data: () => ({
    active: false
  }),
  methods: {
    toggleActive() {
      this.active = !this.active;
    }
  }
};
</script>