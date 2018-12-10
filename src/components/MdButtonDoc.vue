<template>
  <div>
    <h1 class="md-display-3 s1-U__fw--300">Buttons</h1>

    <div>
      <h2 class="display-2">1. Simple buttons</h2>
      <p>
        <b>S1CSS</b> remove margin from any button (because we believe that all spacing control need to be on dev's hands) and add new buttons (
        <code>.md-bordered</code> and
        <code>.md-buton-icon.squared</code>)
      </p>

      <div>
        <h3>Flat</h3>
        <div class="md-layout">
          <div class="md-layout-item md-medium-size-50 md-small-size-100" id="flat">
            <div>
              <md-button>Default</md-button>
              <md-button :md-ripple="false">Ripple Off</md-button>
              <md-button class="md-primary">Primary</md-button>
              <md-button class="md-accent">Accent</md-button>
            </div>
            <div>
              <md-button disabled>Default</md-button>
              <md-button :md-ripple="false" disabled>Ripple Off</md-button>
              <md-button class="md-primary" disabled>Primary</md-button>
              <md-button class="md-accent" disabled>Accent</md-button>
            </div>
          </div>
          <div class="md-layout-item md-medium-size-50 md-small-size-100">
            <div class="example-code">
              <code>
                &#x3C;md-button&#x3E;Default&#x3C;/md-button&#x3E;
                &#x3C;md-button :md-ripple=&#x22;false&#x22;&#x3E;Ripple Off&#x3C;/md-button&#x3E;
                &#x3C;md-button class=&#x22;md-primary&#x22;&#x3E;Primary&#x3C;/md-button&#x3E;
                &#x3C;md-button class=&#x22;md-accent&#x22;&#x3E;Accent&#x3C;/md-button&#x3E;
              </code>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3>Raised</h3>
        <div class="md-layout">
          <div class="md-layout-item md-medium-size-50 md-small-size-100" id="raised">
            <div>
              <md-button class="md-raised">Default</md-button>
              <md-button class="md-raised" :md-ripple="false">Ripple Off</md-button>
              <md-button class="md-raised md-primary">Primary</md-button>
              <md-button class="md-raised md-accent">Accent</md-button>
            </div>
            <div>
              <md-button class="md-raised" disabled>Default</md-button>
              <md-button class="md-raised" :md-ripple="false" disabled>Ripple Off</md-button>
              <md-button class="md-raised md-primary" disabled>Primary</md-button>
              <md-button class="md-raised md-accent" disabled>Accent</md-button>
            </div>
          </div>
          <div class="md-layout-item md-medium-size-50 md-small-size-100">
            <div class="example-code">
              <code>
                &#x3C;md-button class=&#x22;md-raised&#x22;&#x3E;Default&#x3C;/md-button&#x3E;
                &#x3C;md-button class=&#x22;md-raised&#x22; :md-ripple=&#x22;false&#x22;&#x3E;Ripple Off&#x3C;/md-button&#x3E;
                &#x3C;md-button class=&#x22;md-raised md-primary&#x22;&#x3E;Primary&#x3C;/md-button&#x3E;
                &#x3C;md-button class=&#x22;md-raised md-accent&#x22;&#x3E;Accent&#x3C;/md-button&#x3E;
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3>Flat</h3>
      <md-button>Default</md-button>
      <md-button :md-ripple="false">Ripple Off</md-button>
      <md-button class="md-primary">Primary</md-button>
      <md-button class="md-accent">Accent</md-button>
      <md-button disabled>Disabled</md-button>
    </div>

    <div>
      <h3>Raised</h3>
      <md-button class="md-raised">Default</md-button>
      <md-button class="md-raised" :md-ripple="false">Ripple Off</md-button>
      <md-button class="md-raised md-primary">Primary</md-button>
      <md-button class="md-raised md-accent">Accent</md-button>
      <md-button class="md-raised" disabled>Disabled</md-button>
    </div>

    <div>
      <h3>Bordered</h3>
      <md-button class="md-bordered">Default</md-button>
      <md-button class="md-bordered" :md-ripple="false">Ripple Off</md-button>
      <md-button class="md-bordered md-primary">Primary</md-button>
      <md-button class="md-bordered md-accent">Accent</md-button>
      <md-button class="md-bordered" disabled>Disabled</md-button>
    </div>

    <div>
      <h3>Dense</h3>
      <md-button class="md-dense md-primary">Flat</md-button>
      <md-button class="md-dense md-raised md-primary">Raised</md-button>
    </div>

    <div>
      <h3>Flat</h3>
      <md-button class="md-icon-button">
        <md-icon>home</md-icon>
      </md-button>

      <md-button class="md-icon-button md-primary">
        <md-icon>menu</md-icon>
      </md-button>

      <md-button class="md-icon-button md-accent">
        <md-icon>thumb_up</md-icon>
      </md-button>

      <md-button class="md-icon-button" disabled>
        <md-icon>add</md-icon>
      </md-button>
    </div>

    <div>
      <h3>Raised</h3>
      <md-button class="md-icon-button md-raised">
        <md-icon>home</md-icon>
      </md-button>

      <md-button class="md-icon-button md-raised md-primary">
        <md-icon>menu</md-icon>
      </md-button>

      <md-button class="md-icon-button md-raised md-accent">
        <md-icon>thumb_up</md-icon>
      </md-button>

      <md-button class="md-icon-button md-raised" disabled>
        <md-icon>add</md-icon>
      </md-button>
    </div>

    <div>
      <h3>Bordered</h3>
      <md-button class="md-icon-button md-bordered">
        <md-icon>home</md-icon>
      </md-button>

      <md-button class="md-icon-button md-bordered md-primary">
        <md-icon>menu</md-icon>
      </md-button>

      <md-button class="md-icon-button md-bordered md-accent">
        <md-icon>thumb_up</md-icon>
      </md-button>

      <md-button class="md-icon-button md-bordered" disabled>
        <md-icon>add</md-icon>
      </md-button>
    </div>

    <div>
      <h3>Dense</h3>
      <md-button class="md-icon-button md-dense md-primary">
        <md-icon>person</md-icon>
      </md-button>

      <md-button class="md-icon-button md-dense md-raised md-primary">
        <md-icon>cached</md-icon>
      </md-button>
    </div>

    <div>
      <h3>Flat</h3>
      <md-button class="md-icon-button squared">
        <md-icon>home</md-icon>
      </md-button>

      <md-button class="md-icon-button squared md-primary">
        <md-icon>menu</md-icon>
      </md-button>

      <md-button class="md-icon-button squared md-accent">
        <md-icon>thumb_up</md-icon>
      </md-button>

      <md-button class="md-icon-button squared" disabled>
        <md-icon>add</md-icon>
      </md-button>
    </div>

    <div>
      <h3>Raised</h3>
      <md-button class="md-icon-button squared md-raised">
        <md-icon>home</md-icon>
      </md-button>

      <md-button class="md-icon-button squared md-raised md-primary">
        <md-icon>menu</md-icon>
      </md-button>

      <md-button class="md-icon-button squared md-raised md-accent">
        <md-icon>thumb_up</md-icon>
      </md-button>

      <md-button class="md-icon-button squared md-raised" disabled>
        <md-icon>add</md-icon>
      </md-button>
    </div>

    <div>
      <h3>Bordered</h3>
      <md-button class="md-icon-button squared md-bordered">
        <md-icon>home</md-icon>
      </md-button>

      <md-button class="md-icon-button squared md-bordered md-primary">
        <md-icon>menu</md-icon>
      </md-button>

      <md-button class="md-icon-button squared md-bordered md-accent">
        <md-icon>thumb_up</md-icon>
      </md-button>

      <md-button class="md-icon-button squared md-bordered" disabled>
        <md-icon>add</md-icon>
      </md-button>
    </div>

    <div>
      <h3>Dense</h3>
      <md-button class="md-icon-button squared md-dense md-primary">
        <md-icon>person</md-icon>
      </md-button>

      <md-button class="md-icon-button squared md-dense md-raised md-primary">
        <md-icon>cached</md-icon>
      </md-button>
    </div>

    <div>
      <h3>Buttons</h3>
      <md-button>Default</md-button>
      <md-button class="md-primary">Primary</md-button>
      <md-button class="md-accent">Accent</md-button>
      <md-button disabled>Disabled</md-button>
    </div>

    <div>
      <h3>Links</h3>
      <md-button :href="pageUrl">Default</md-button>
      <md-button :href="pageUrl" class="md-primary">Primary</md-button>
      <md-button :href="pageUrl" class="md-accent">Accent</md-button>
      <md-button :href="pageUrl" disabled>Disabled</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MdButtonDoc",
  props: {
    msg: String
  }
};
</script>

<style>
code {
  padding: 0;
  border-radius: 0;
  white-space: pre;
}
.example-code {
  background-color: #fff;
}

p code {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>

