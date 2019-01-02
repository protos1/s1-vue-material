<template>
  <div id="app">
    <md-app class="s1-md-app">
      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
        <div class="s1-logo__wrapper">
          <img
            class="s1-logo__img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/2000px-SVG_Logo.svg.png"
            alt="svg image"
          >
        </div>

        <md-list class="md-dense">
          <md-list-item @click="toggleMenu">
            <md-icon v-if="!menuVisible">menu</md-icon>
            <md-icon v-if="menuVisible">keyboard_arrow_left</md-icon>
            <span class="md-list-item-text">Esconder menu</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">Expandir menu</md-tooltip>
          </md-list-item>

          <md-list-item @click="scrollTo('.md-app-container', '#intro', 500)">
            <md-icon :class="activeSectionId === 'intro' ? 's1-U__text-color--accent-force' : ''">arrow_upward</md-icon>
            <span class="md-list-item-text" :class="activeSectionId === 'intro' ? 's1-U__text-color--accent' : ''">Introdução</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">Introdução</md-tooltip>
          </md-list-item>

          <md-list-item @click="scrollTo('.md-app-container', '#app-doc', 500)">
            <md-icon :class="activeSectionId === 'app-doc' ? 's1-U__text-color--accent-force' : ''">desktop_windows</md-icon>
            <span class="md-list-item-text" :class="activeSectionId === 'app-doc' ? 's1-U__text-color--accent' : ''">Estrutura Geral</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">Estrutura geral</md-tooltip>
          </md-list-item>

          <md-list-item @click="scrollTo('.md-app-container', '#buttons', 500)">
            <md-icon :class="activeSectionId === 'buttons' ? 's1-U__text-color--accent-force' : ''">view_agenda</md-icon>
            <span class="md-list-item-text" :class="activeSectionId === 'buttons' ? 's1-U__text-color--accent' : ''">Buttons</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">Buttons</md-tooltip>
          </md-list-item>

          <md-list-item @click="scrollTo('.md-app-container', '#datepickers', 500)">
            <md-icon :class="activeSectionId === 'datepickers' ? 's1-U__text-color--accent-force' : ''">event</md-icon>
            <span class="md-list-item-text" :class="activeSectionId === 'datepickers' ? 's1-U__text-color--accent' : ''">Datepicker</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">Datepicker</md-tooltip>
          </md-list-item>

          <md-list-item @click="scrollTo('.md-app-container', '#checkboxes', 500)">
            <md-icon :class="activeSectionId === 'checkboxes' ? 's1-U__text-color--accent-force' : ''">check_box</md-icon>
            <span class="md-list-item-text" :class="activeSectionId === 'checkboxes' ? 's1-U__text-color--accent' : ''">Checkbox</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">Checkbox</md-tooltip>
          </md-list-item>

          <md-list-item @click="scrollTo('.md-app-container', '#file', 500)">
            <md-icon :class="activeSectionId === 'file' ? 's1-U__text-color--accent-force' : ''">attach_file</md-icon>
            <span class="md-list-item-text" :class="activeSectionId === 'file' ? 's1-U__text-color--accent' : ''">File</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">File</md-tooltip>
          </md-list-item>

          <md-list-item @click="scrollTo('.md-app-container', '#input-textarea', 500)">
            <md-icon :class="activeSectionId === 'input-textarea' ? 's1-U__text-color--accent-force' : ''">text_format</md-icon>
            <span class="md-list-item-text" :class="activeSectionId === 'input-textarea' ? 's1-U__text-color--accent' : ''">Input & textarea</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">Input & textarea</md-tooltip>
          </md-list-item>
          
          <md-list-item @click="scrollTo('.md-app-container', '#radio', 500)">
            <md-icon :class="activeSectionId === 'radio' ? 's1-U__text-color--accent-force' : ''">radio_button_checked</md-icon>
            <span class="md-list-item-text" :class="activeSectionId === 'radio' ? 's1-U__text-color--accent' : ''">Radio</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">Radio</md-tooltip>
          </md-list-item>

        </md-list>
      </md-app-drawer>

      <md-app-content>
        <MdAppDoc/>
        <!-- <MdAvatarDoc/> -->
        <!-- <MdBadgeDoc/> -->
        <!-- <MdBottomBar/> -->
        <MdButtonDoc/>
        <!-- <MdCardDoc/> -->
        <!-- <MdContentDoc/> -->
        <MdDatepickerDoc/>
        <!-- <MdDialogDoc/> -->
        <!-- <MdDividerDoc/> -->
        <!-- <MdDrawerDoc/> -->
        <!-- <MdEmptyStateDoc/> -->
        <!-- <MdFormsDoc/> -->
        <!-- <MdAutocompleteDoc/> -->
        <MdCheckboxDoc/>
        <!-- <MdChipsDoc/> -->
        <MdFileDoc/>
        <MdInputTextareaDoc/>
        <MdRadioDoc/>
        <MdSelectDoc/>
        <MdSwitchDoc/>
        <!-- <MdIconDoc/> -->
        <!-- <MdListDoc/> -->
        <!-- <MdMenuDoc/> -->
        <!-- <MdProgressDoc/> -->
        <!-- <MdBarDoc/> -->
        <!-- <MdSpinnerDoc/> -->
        <!-- <MdSnackbarDoc/> -->
        <!-- <MdSpeedDialDoc/> -->
        <!-- <MdSteppersDoc/> -->
        <!-- <MdSubheaderDoc/> -->
        <MdTableDoc/>
        <MdTabsDoc/>
        <!-- <MdToolbarDoc/> -->
        <MdTooltipDoc/>

        <!-- <MdFieldDoc/> -->
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import MdAppDoc from "./components/MdAppDoc/index.vue";
// import MdAvatarDoc from "./components/MdAvatarDoc/index.vue";
// import MdBadgeDoc from "./components/MdBadgeDoc/index.vue";
// import MdBottomBar from "./components/MdBottomBar/index.vue";
import MdButtonDoc from "./components/MdButtonDoc/index.vue";
// import MdCardDoc from "./components/MdCardDoc/index.vue";
// import MdContentDoc from "./components/MdContentDoc/index.vue";
import MdDatepickerDoc from "./components/MdDatepickerDoc/index.vue";
// import MdDialogDoc from "./components/MdDialogDoc/index.vue";
// import MdDividerDoc from "./components/MdDividerDoc/index.vue";
// import MdDrawerDoc from "./components/MdDrawerDoc/index.vue";
// import MdEmptyStateDoc from "./components/MdEmptyStateDoc/index.vue";
// import MdFormsDoc from "./components/MdFormsDoc/index.vue";
// import MdAutocompleteDoc from "./components/MdAutocompleteDoc/index.vue";
import MdCheckboxDoc from "./components/MdCheckboxDoc/index.vue";
import MdChipsDoc from "./components/MdChipsDoc/index.vue";
import MdFileDoc from "./components/MdFileDoc/index.vue";
import MdInputTextareaDoc from "./components/MdInputTextareaDoc/index.vue";
import MdRadioDoc from "./components/MdRadioDoc/index.vue";
import MdSelectDoc from "./components/MdSelectDoc/index.vue";
import MdSwitchDoc from "./components/MdSwitchDoc/index.vue";
// import MdIconDoc from "./components/MdIconDoc/index.vue";
// import MdListDoc from "./components/MdListDoc/index.vue";
// import MdMenuDoc from "./components/MdMenuDoc/index.vue";
// import MdProgressDoc from "./components/MdProgressDoc/index.vue";
// import MdBarDoc from "./components/MdBarDoc/index.vue";
// import MdSpinnerDoc from "./components/MdSpinnerDoc/index.vue";
// import MdSnackbarDoc from "./components/MdSnackbarDoc/index.vue";
// import MdSpeedDialDoc from "./components/MdSpeedDialDoc/index.vue";
// import MdSteppersDoc from "./components/MdSteppersDoc/index.vue";
// import MdSubheaderDoc from "./components/MdSubheaderDoc/index.vue";
import MdTableDoc from "./components/MdTableDoc/index.vue";
import MdTabsDoc from "./components/MdTabsDoc/index.vue";
// import MdToolbarDoc from "./components/MdToolbarDoc/index.vue";
import MdTooltipDoc from "./components/MdTooltipDoc/index.vue";

export default {
  name: "app",
  components: {
    MdAppDoc,
    // MdAvatarDoc,
    // MdBadgeDoc,
    // MdBottomBar,
    MdButtonDoc,
    // MdCardDoc,
    // MdContentDoc,
    MdDatepickerDoc,
    // MdDialogDoc,
    // MdDividerDoc,
    // MdDrawerDoc,
    // MdEmptyStateDoc,
    // MdFormsDoc,
    // MdAutocompleteDoc,
    MdCheckboxDoc,
    MdChipsDoc,
    MdFileDoc,
    MdInputTextareaDoc,
    MdRadioDoc,
    MdSelectDoc,
    MdSwitchDoc,
    // MdIconDoc,
    // MdListDoc,
    // MdMenuDoc,
    // MdProgressDoc,
    // MdBarDoc,
    // MdSpinnerDoc,
    // MdSnackbarDoc,
    // MdSpeedDialDoc,
    // MdSteppersDoc,
    // MdSubheaderDoc,
    MdTableDoc,
    MdTabsDoc,
    // MdToolbarDoc,
    MdTooltipDoc,
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
        const n = sections[i].getBoundingClientRect().top + sections[i].getBoundingClientRect().height - 200;
        if (n > 0) {
          this.activeSectionId = sections[i].id;
          break
        }
      }
    },
  },
  mounted() {
    const element = document.querySelector('.md-app-container');
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

.s1-Doc__mini-tag {
  height: 20px !important;
  line-height: 20px !important;
  font-size: 10px !important;
}
.s1-Doc-code-wrapper {
  overflow: auto;
  background-color: rgba(0,0,0,0.05);
  padding: 0 16px;
  margin-top: 8px;
  border: 1px solid rgba(0,0,0,0.05);
  border-radius: 2px;
}

</style>

