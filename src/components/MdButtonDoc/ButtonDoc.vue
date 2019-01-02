<template>
  <div class="s1-U__pd--bt16">
    <h3 class="s1-U__mg--bt8 s1-U__align-children--center">
      <span>{{title}}</span>
      <md-chip class="md-primary s1-U__mg--lt8 s1-Doc__mini-tag" v-if="s1">S1 CSS</md-chip>
    </h3>
    <div>
      <div style="margin-bottom: 6px;">
        <md-button :class="classes" style="margin-right: 6px;">Default</md-button>
        <md-button :md-ripple="false" :class="classes" style="margin-right: 6px;">Ripple Off</md-button>
        <md-button class="md-primary" :class="classes" style="margin-right: 6px;">Primary</md-button>
        <md-button class="md-accent" :class="classes" style="margin-right: 6px;">Accent</md-button>
      </div>
      <div>
        <md-button :class="classes" disabled style="margin-right: 6px;">Default</md-button>
        <md-button :md-ripple="false" :class="classes" disabled style="margin-right: 6px;">Ripple Off</md-button>
        <md-button class="md-primary" :class="classes" disabled style="margin-right: 6px;">Primary</md-button>
        <md-button class="md-accent" :class="classes" disabled style="margin-right: 6px;">Accent</md-button>
      </div>
    </div>
    <div class="s1-Doc-code-wrapper">
      <code>
&#x3C;md-button{{classes && ` class="${classes}"`}}&#x3E;Default&#x3C;/md-button&#x3E;
&#x3C;md-button :md-ripple=&#x22;false&#x22;{{classes && ` class="${classes}"`}}&#x3E;Ripple Off&#x3C;/md-button&#x3E;
&#x3C;md-button class=&#x22;md-primary{{classes && ` ${classes}`}}&#x22;&#x3E;Primary&#x3C;/md-button&#x3E;
&#x3C;md-button class=&#x22;md-accent{{classes && ` ${classes}`}}&#x22;&#x3E;Accent&#x3C;/md-button&#x3E;
      </code>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonDoc",
  props: {
    classes: String,
    title: String,
    s1: Boolean
  }
};
</script>

