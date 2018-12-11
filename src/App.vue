<template>
  <div id="app">
    <MdButtonDoc/>
    <MdFieldDoc/>
  </div>
</template>

<script>
import MdButtonDoc from "./components/MdButtonDoc/index.vue";
import MdFieldDoc from "./components/MdFieldDoc/index.vue";

export default {
  name: "app",
  components: {
    MdButtonDoc,
    MdFieldDoc,
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

