<template>
  <div>
    <h1 class="md-display-3">Card</h1>
    <a href="https://vuematerial.io/components/input">https://vuematerial.io/components/input</a>

    <div class="s1-U__align-children--top">
      <md-card class="s1-U__mg--bt20 s1-U__width--300px">
        <md-card-header>
          <div class="md-title">Card without hover</div>
        </md-card-header>

        <md-card-content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.</md-card-content>

        <md-card-actions class="s1-U__pd16">
          <md-button class="md-bordered">Action</md-button>
          <md-button class="md-primary md-raised">Action</md-button>
        </md-card-actions>
      </md-card>

      <md-card class="s1-U__mg--bt20 s1-U__mg--lt20 s1-U__width--300px" md-with-hover>
        <md-ripple>
          <md-card-header>
            <div class="md-title">Card with hover effect</div>
            <div class="md-subhead">It also have a ripple</div>
          </md-card-header>

          <md-card-content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.</md-card-content>

          <md-card-actions class="s1-U__pd16">
            <md-button class="md-bordered">Action</md-button>
            <md-button class="md-primary md-bordered">Action</md-button>
          </md-card-actions>
        </md-ripple>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "MdCardDoc"
};
</script>