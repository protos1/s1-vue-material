<template>
  <div>
    <h1 class="md-display-3">Avatar</h1>
    <a href="https://vuematerial.io/components/input">https://vuematerial.io/components/input</a>

    <div>
      <h2 class="display-2">1. Normal</h2>
      <div>
        <md-avatar class="md-avatar-icon">
          <md-ripple>
            <img src="./img/avatar.png" alt="People">
          </md-ripple>
        </md-avatar>
        <md-avatar class="md-avatar-icon">A</md-avatar>
        <md-avatar class="md-avatar-icon md-primary">A</md-avatar>
        <md-avatar class="md-avatar-icon md-accent">A</md-avatar>
      </div>
    </div>

    <div>
      <h2 class="display-2">2. Small</h2>
      <div>
        <md-avatar class="md-avatar-icon md-small">
          <md-ripple>
            <img src="./img/avatar.png" alt="People">
          </md-ripple>
        </md-avatar>
        <md-avatar class="md-avatar-icon md-small">B</md-avatar>
        <md-avatar class="md-avatar-icon md-small md-primary">B</md-avatar>
        <md-avatar class="md-avatar-icon md-small md-accent">B</md-avatar>
      </div>
    </div>

    <div>
      <h2 class="display-2">3. Large</h2>
      <div>
        <md-avatar class="md-large">
          <md-ripple>
            <img src="./img/avatar.png" alt="People">
          </md-ripple>
        </md-avatar>

        <md-avatar class="md-avatar-icon md-large">
          <md-ripple>MM</md-ripple>
        </md-avatar>

        <md-avatar class="md-avatar-icon md-large md-primary">
          <md-ripple>MM</md-ripple>
        </md-avatar>

        <md-avatar class="md-avatar-icon md-large md-accent">
          <md-ripple>MM</md-ripple>
        </md-avatar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MdAvatarDoc"
};
</script>