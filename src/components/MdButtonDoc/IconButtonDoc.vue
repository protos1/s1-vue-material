<template>
  <div class="s1-U__pd--bt16">
    <h3 class="s1-U__mg--bt8 s1-U__align-children--center">
      <span>{{title}}</span>
      <md-chip class="md-primary s1-U__mg--lt8 s1-Doc__mini-tag" v-if="s1">S1 CSS</md-chip>
    </h3>
    <div>
      <div style="margin-bottom: 6px;">
        <md-button class="md-icon-button" :class="classes" style="margin-right: 6px;">
          <md-icon>home</md-icon>
        </md-button>
        <md-button class="md-icon-button" :md-ripple="false" :class="classes" style="margin-right: 6px;">
          <md-icon>pool</md-icon>
        </md-button>
        <md-button class="md-icon-button md-primary" :class="classes" style="margin-right: 6px;">
          <md-icon>attach_money</md-icon>
        </md-button>
        <md-button class="md-icon-button md-accent" :class="classes" style="margin-right: 6px;">
          <md-icon>add</md-icon>
        </md-button>
      </div>
      <div>
        <md-button class="md-icon-button" :class="classes" disabled style="margin-right: 6px;">
          <md-icon>home</md-icon>
        </md-button>
        <md-button class="md-icon-button" :md-ripple="false" :class="classes" disabled style="margin-right: 6px;">
          <md-icon>pool</md-icon>
        </md-button>
        <md-button class="md-icon-button md-primary" :class="classes" disabled style="margin-right: 6px;">
          <md-icon>attach_money</md-icon>
        </md-button>
        <md-button class="md-icon-button md-accent" :class="classes" disabled style="margin-right: 6px;">
          <md-icon>add</md-icon>
        </md-button>
      </div>
    </div>
    <div class="s1-Doc-code-wrapper">
      <code>
&#x3C;md-button class=&#x22;md-icon-button{{classes && ` ${classes}`}}&#x22;&#x3E;
  &#x3C;md-icon&#x3E;home&#x3C;/md-icon&#x3E;
&#x3C;/md-button&#x3E;
&#x3C;md-button class=&#x22;md-icon-button{{classes && ` ${classes}`}}&#x22; :md-ripple=&#x22;false&#x22;&#x3E;
  &#x3C;md-icon&#x3E;pool&#x3C;/md-icon&#x3E;
&#x3C;/md-button&#x3E;
&#x3C;md-button class=&#x22;md-icon-button md-primary{{classes && ` ${classes}`}}&#x22;&#x3E;
  &#x3C;md-icon&#x3E;attach_money&#x3C;/md-icon&#x3E;
&#x3C;/md-button&#x3E;
&#x3C;md-button class=&#x22;md-icon-button md-accent{{classes && ` ${classes}`}}&#x22;&#x3E;
  &#x3C;md-icon&#x3E;add&#x3C;/md-icon&#x3E;
&#x3C;/md-button&#x3E;
      </code>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconButtonDoc",
  props: {
    classes: String,
    title: String,
    s1: Boolean
  }
};
</script>

