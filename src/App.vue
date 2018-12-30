<template>
  <div id="app">
    <div style="display: flex">
      <md-app md-waterfall md-mode="fixed" style="height: 100vh;width: 100%">
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

            <md-list-item @click="scrollTo('.md-app-scroller', '#buttons', 500)">
              <md-icon :class="activeSectionId === 'buttons' ? 's1-U__text-color--primary-force' : ''">view_agenda</md-icon>
              <span class="md-list-item-text" :class="activeSectionId === 'buttons' ? 's1-U__text-color--primary' : ''">Buttons</span>
            </md-list-item>

            <md-list-item @click="scrollTo('.md-app-scroller', '#datepickers', 500)">
              <md-icon :class="activeSectionId === 'datepickers' ? 's1-U__text-color--primary-force' : ''">event</md-icon>
              <span class="md-list-item-text" :class="activeSectionId === 'datepickers' ? 's1-U__text-color--primary' : ''">Datepicker</span>
            </md-list-item>

            <md-list-item @click="scrollTo('.md-app-scroller', '#cards', 500)">
              <md-icon :class="activeSectionId === 'cards' ? 's1-U__text-color--primary-force' : ''">video_label</md-icon>
              <span class="md-list-item-text" :class="activeSectionId === 'cards' ? 's1-U__text-color--primary' : ''">Cards</span>
            </md-list-item>

          </md-list>
        </md-app-drawer>

        <md-app-content class="s1-container" style="border: 0 none;">
          <MdButtonDoc/>
          <MdDatepickerDoc/>
          <MdCardDoc/>
          <MdBadgeDoc/>
          <MdAvatarDoc/>
          <MdFieldDoc/>
        </md-app-content>
      </md-app>
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
    menuVisible2: true,
    activeSectionId: null
  }),
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    toggleMenu2() {
      this.menuVisible2 = !this.menuVisible2;
    },
    scrollBodyTo(to, duration) {

      Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      let bodyRect = document.body.getBoundingClientRect(),
        elemRect = document.querySelector(to).getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top;

      let start = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        change = offset - start,
        currentTime = 0,
        increment = 10;

      let animateScroll = function () {
        currentTime += increment;
        let val = Math.easeInOutQuad(currentTime, start, change, duration);
        window.pageYOffset = document.documentElement.scrollTop = document.body.scrollTop = val;
        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };
      animateScroll();
    },
    scrollTo(scrolledElement, to, duration) {

      Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      let bodyTop = document.querySelector(scrolledElement).getBoundingClientRect().top,
        elemTop = document.querySelector(to).getBoundingClientRect().top,
        offset = elemTop - bodyTop;

      let start = document.querySelector(scrolledElement).scrollTop,
        change = offset,
        currentTime = 0,
        increment = 10;

      let animateScroll = function () {
        currentTime += increment;
        let val = Math.easeInOutQuad(currentTime, start, change, duration);
        document.querySelector(scrolledElement).scrollTop = val;
        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };
      animateScroll();
    },
    activeSection(sections) {
      for(let i = 0; i < sections.length; i++ ) {
        const n = sections[i].getBoundingClientRect().top + sections[i].getBoundingClientRect().height;
        if (n > 0) {
          this.activeSectionId = sections[i].id;
          break
        }
      }
    },
  },
  mounted() {
    const element = document.querySelector('.md-app-scroller');
    const sections = document.querySelectorAll('.section');
    element.onscroll = () => {
      this.activeSection(sections);
    };
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

