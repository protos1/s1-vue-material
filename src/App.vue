<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MdButtonDoc msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import MdButtonDoc from "./components/MdButtonDoc.vue";

export default {
  name: "app",
  components: {
    MdButtonDoc
  }
};
</script>

