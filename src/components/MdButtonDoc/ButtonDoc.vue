<template>
  <div>
    <h3>{{title}}</h3>
    <div>
      <div>
        <md-button :class="classes">Default</md-button>
        <md-button :md-ripple="false" :class="classes">Ripple Off</md-button>
        <md-button class="md-primary" :class="classes">Primary</md-button>
        <md-button class="md-accent" :class="classes">Accent</md-button>
      </div>
      <div>
        <md-button :class="classes" disabled>Default</md-button>
        <md-button :md-ripple="false" :class="classes" disabled>Ripple Off</md-button>
        <md-button class="md-primary" :class="classes" disabled>Primary</md-button>
        <md-button class="md-accent" :class="classes" disabled>Accent</md-button>
      </div>
    </div>
    <div class="example-code">
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
    title: String
  }
};
</script>

