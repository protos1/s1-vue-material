<template>
  <div id="app">
    <div style="display: flex">
      <md-app md-waterfall md-mode="fixed" style="min-height: 100vh;width: 100%">
        <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
          <!-- <md-toolbar class="md-transparent" md-elevation="0">

          </md-toolbar>-->
          <div style="position: relative; width: 100%; padding-bottom: 100%;">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/2000px-SVG_Logo.svg.png"
              alt="svg image"
              style="position: absolute; top: 50%; left: 50%; transform: translateY(-50%) translateX(-50%); padding: 10%"
            >
          </div>

          <md-list>
            <md-list-item @click="toggleMenu">
              <md-icon v-if="!menuVisible">menu</md-icon>
              <md-icon v-if="menuVisible">keyboard_arrow_left</md-icon>
              <span class="md-list-item-text">Esconder</span>
            </md-list-item>

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

        <md-app-content class="s1-container" style="border: 0 none;">
          <MdDatepickerDoc/>
          <MdCardDoc/>
          <MdBadgeDoc/>
          <MdAvatarDoc/>
          <MdButtonDoc/>
          <MdFieldDoc/>
        </md-app-content>
      </md-app>
      <md-drawer
        class="md-right s1-U__flex-shrink-0"
        :md-active.sync="menuVisible2"
        md-persistent="mini"
      >
        <div class="s1-U__pd16">
          <md-button class="s1-U__full-width md-button-content--full-width">
            <div class="s1-U__align-children--center s1-U__full-width">
              <span
                class="s1-U__full-width s1-U__text-ellipsis s1-U__text-lowercase"
              >renan.zozimo.ferreira@gmail.com</span>
              <md-icon class="s1-U__flex-shrink-0 s1-U__mg--lt8">account_circle</md-icon>
            </div>
          </md-button>
        </div>
      </md-drawer>
    </div>
  </div>
</template>

<script>
import MdButtonDoc from "./components/MdButtonDoc/index.vue";
import MdFieldDoc from "./components/MdFieldDoc/index.vue";
import MdAvatarDoc from "./components/MdAvatarDoc/index.vue";
import MdBadgeDoc from "./components/MdBadgeDoc/index.vue";
import MdCardDoc from "./components/MdCardDoc/index.vue";
import MdDatepickerDoc from "./components/MdDatepickerDoc/index.vue";

export default {
  name: "app",
  components: {
    MdButtonDoc,
    MdFieldDoc,
    MdAvatarDoc,
    MdBadgeDoc,
    MdCardDoc,
    MdDatepickerDoc
  },
  data: () => ({
    menuVisible: true,
    menuVisible2: true
  }),
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    toggleMenu2() {
      this.menuVisible2 = !this.menuVisible2;
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

