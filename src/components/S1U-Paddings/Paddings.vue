<template>
  <md-table-row>
    <md-table-cell>.s1-U__pd--{{dir}}{{number}}</md-table-cell>
    <md-table-cell>padding-{{direction}}: {{number}}px;</md-table-cell>
  </md-table-row>
</template>

<script>
export default {
  name: "PaddingDoc",
  props: {
    direction: String,
    dir: String,
    number: Number
  }
};
</script>

