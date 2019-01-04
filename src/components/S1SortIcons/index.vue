<template>
  <div class="section s1-U__pd--bt40" id="sort-icons">
    <h1 class="md-display-3 s1-U__mg--bt16">Sort icons</h1>

    <md-button class="s1-md-bordered md-icon-button squared s1-U__mg--bt16" @click="toggleActive('a')">
      <md-icon class="s1-sort-icons s1-U__mg0 s1-sort-icons__icon--up" :class="{'md-primary' : active == 'a1'}">arrow_drop_up</md-icon>
      <md-icon class="s1-sort-icons s1-U__mg0 s1-sort-icons__icon--down" :class="{'md-primary' : active == 'a2'}">arrow_drop_down</md-icon>
    </md-button>
    <md-button class="s1-md-bordered md-icon-button squared s1-U__mg--bt16" @click="toggleActive('b')">
      <md-icon class="s1-sort-icons s1-U__mg0 s1-sort-icons__icon--up" :class="{'md-primary' : active == 'b1'}">arrow_drop_up</md-icon>
      <md-icon class="s1-sort-icons s1-U__mg0 s1-sort-icons__icon--down" :class="{'md-primary' : active == 'b2'}">arrow_drop_down</md-icon>
    </md-button>
    <md-button class="s1-md-bordered md-icon-button squared s1-U__mg--bt16" @click="toggleActive('c')">
      <md-icon class="s1-sort-icons s1-U__mg0 s1-sort-icons__icon--up" :class="{'md-primary' : active == 'c1'}">arrow_drop_up</md-icon>
      <md-icon class="s1-sort-icons s1-U__mg0 s1-sort-icons__icon--down" :class="{'md-primary' : active == 'c2'}">arrow_drop_down</md-icon>
    </md-button>

<div class="s1-Doc-code-wrapper">
  <code>
&#x3C;md-button class=&#x22;s1-md-bordered md-icon-button squared s1-U__mg--bt16&#x22; @click=&#x22;toggleActive(&#x27;a&#x27;)&#x22;&#x3E;
  &#x3C;md-icon class=&#x22;s1-sort-icons s1-sort-icons__icon--up&#x22; :class=&#x22;{&#x27;md-primary&#x27; : active == &#x27;a1&#x27;}&#x22;&#x3E;arrow_drop_up&#x3C;/md-icon&#x3E;
  &#x3C;md-icon class=&#x22;s1-sort-icons s1-sort-icons__icon--down&#x22; :class=&#x22;{&#x27;md-primary&#x27; : active == &#x27;a2&#x27;}&#x22;&#x3E;arrow_drop_down&#x3C;/md-icon&#x3E;
&#x3C;/md-button&#x3E;
&#x3C;md-button class=&#x22;s1-md-bordered md-icon-button squared s1-U__mg--bt16&#x22; @click=&#x22;toggleActive(&#x27;b&#x27;)&#x22;&#x3E;
  &#x3C;md-icon class=&#x22;s1-sort-icons s1-sort-icons__icon--up&#x22; :class=&#x22;{&#x27;md-primary&#x27; : active == &#x27;b1&#x27;}&#x22;&#x3E;arrow_drop_up&#x3C;/md-icon&#x3E;
  &#x3C;md-icon class=&#x22;s1-sort-icons s1-sort-icons__icon--down&#x22; :class=&#x22;{&#x27;md-primary&#x27; : active == &#x27;b2&#x27;}&#x22;&#x3E;arrow_drop_down&#x3C;/md-icon&#x3E;
&#x3C;/md-button&#x3E;
&#x3C;md-button class=&#x22;s1-md-bordered md-icon-button squared s1-U__mg--bt16&#x22; @click=&#x22;toggleActive(&#x27;c&#x27;)&#x22;&#x3E;
  &#x3C;md-icon class=&#x22;s1-sort-icons s1-sort-icons__icon--up&#x22; :class=&#x22;{&#x27;md-primary&#x27; : active == &#x27;c1&#x27;}&#x22;&#x3E;arrow_drop_up&#x3C;/md-icon&#x3E;
  &#x3C;md-icon class=&#x22;s1-sort-icons s1-sort-icons__icon--down&#x22; :class=&#x22;{&#x27;md-primary&#x27; : active == &#x27;c2&#x27;}&#x22;&#x3E;arrow_drop_down&#x3C;/md-icon&#x3E;
&#x3C;/md-button&#x3E;
  </code>
</div>

  </div>
</template>

<script>
export default {
  name: "S1SortIcons",
  data: () => ({
    active: 'a1'
  }),
  methods: {
    toggleActive(n) {
      const active = this.active;
      const a = active.charAt(0);
      const b = active.charAt(1);
      if (a != n) {
        this.active = `${n}1`
      } else {
        if (b === '1') {
          this.active = `${n}2`
        } else {
          this.active = `${n}1`
        }
      }
    }
  }
};
</script>