<template>
  <div>
    <h3>{{title}}</h3>
    <div>
      <div>
        <md-button class="md-icon-button" :class="classes">
          <md-icon>home</md-icon>
        </md-button>
        <md-button class="md-icon-button" :md-ripple="false" :class="classes">
          <md-icon>pool</md-icon>
        </md-button>
        <md-button class="md-icon-button md-primary" :class="classes">
          <md-icon>attach_money</md-icon>
        </md-button>
        <md-button class="md-icon-button md-accent" :class="classes">
          <md-icon>add</md-icon>
        </md-button>
      </div>
      <div>
        <md-button class="md-icon-button" :class="classes" disabled>
          <md-icon>home</md-icon>
        </md-button>
        <md-button class="md-icon-button" :md-ripple="false" :class="classes" disabled>
          <md-icon>pool</md-icon>
        </md-button>
        <md-button class="md-icon-button md-primary" :class="classes" disabled>
          <md-icon>attach_money</md-icon>
        </md-button>
        <md-button class="md-icon-button md-accent" :class="classes" disabled>
          <md-icon>add</md-icon>
        </md-button>
      </div>
    </div>
    <div class="example-code">
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
    title: String
  }
};
</script>

