<template>
  <md-table-row>
    <md-table-cell>.s1-U__mg--{{dir}}{{number}}</md-table-cell>
    <md-table-cell>margin-{{direction}}: {{number}}px;</md-table-cell>
  </md-table-row>
</template>

<script>
export default {
  name: "MarginDoc",
  props: {
    direction: String,
    dir: String,
    number: Number
  }
};
</script>

