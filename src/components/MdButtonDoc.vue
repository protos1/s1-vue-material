<template>
  <div>
    <div>
      <small>Flat</small>
      <md-button>Default</md-button>
      <md-button :md-ripple="false">Ripple Off</md-button>
      <md-button class="md-primary">Primary</md-button>
      <md-button class="md-accent">Accent</md-button>
      <md-button disabled>Disabled</md-button>
    </div>

    <div>
      <small>Raised</small>
      <md-button class="md-raised">Default</md-button>
      <md-button class="md-raised" :md-ripple="false">Ripple Off</md-button>
      <md-button class="md-raised md-primary">Primary</md-button>
      <md-button class="md-raised md-accent">Accent</md-button>
      <md-button class="md-raised" disabled>Disabled</md-button>
    </div>

    <div>
      <small>Bordered</small>
      <md-button class="md-bordered">Default</md-button>
      <md-button class="md-bordered" :md-ripple="false">Ripple Off</md-button>
      <md-button class="md-bordered md-primary">Primary</md-button>
      <md-button class="md-bordered md-accent">Accent</md-button>
      <md-button class="md-bordered" disabled>Disabled</md-button>
    </div>

    <div>
      <small>Dense</small>
      <md-button class="md-dense md-primary">Flat</md-button>
      <md-button class="md-dense md-raised md-primary">Raised</md-button>
    </div>
    <div>
      <small>Flat</small>
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
      <small>Raised</small>
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
      <small>Bordered</small>
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
      <small>Dense</small>
      <md-button class="md-icon-button md-dense md-primary">
        <md-icon>person</md-icon>
      </md-button>

      <md-button class="md-icon-button md-dense md-raised md-primary">
        <md-icon>cached</md-icon>
      </md-button>
    </div>

    <div>
      <small>Flat</small>
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
      <small>Raised</small>
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
      <small>Bordered</small>
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
      <small>Dense</small>
      <md-button class="md-icon-button squared md-dense md-primary">
        <md-icon>person</md-icon>
      </md-button>

      <md-button class="md-icon-button squared md-dense md-raised md-primary">
        <md-icon>cached</md-icon>
      </md-button>
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
