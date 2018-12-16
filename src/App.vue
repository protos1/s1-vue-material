<template>
  <div id="app">
    <md-app md-waterfall md-mode="fixed" style="height: 100vh">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">My Title</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <MdButtonDoc/>
        <MdFieldDoc/>
      </md-app-content>
    </md-app>
    <md-drawer
      class="md-right"
      style="top: 0; position: fixed"
      :md-active.sync="menuVisible"
      md-persistent="mini"
    >
      <md-toolbar class="md-transparent" md-elevation="0">
        <span>Navigation</span>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button md-dense" @click="toggleMenu">
            <md-icon>keyboard_arrow_left</md-icon>
          </md-button>
        </div>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item>
      </md-list>
    </md-drawer>
  </div>
</template>

<script>
import MdButtonDoc from "./components/MdButtonDoc/index.vue";
import MdFieldDoc from "./components/MdFieldDoc/index.vue";

export default {
  name: "app",
  components: {
    MdButtonDoc,
    MdFieldDoc
  },
  data: () => ({
    menuVisible: true
  }),
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    }
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

