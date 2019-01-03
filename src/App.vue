<template>
  <div id="app">
    <md-app class="s1-md-app">
      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
        <div class="s1-logo__wrapper">
          <img class="s1-logo__img" src="logo.svg" alt="svg image">
        </div>

        <md-list class="md-dense" :md-expand-single="true">
          <md-list-item @click="toggleMenu">
            <md-icon v-if="!menuVisible">menu</md-icon>
            <md-icon v-if="menuVisible">keyboard_arrow_left</md-icon>
            <span class="md-list-item-text">Esconder menu</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">Expandir menu</md-tooltip>
          </md-list-item>

          <md-list-item @click="scrollTo('.md-app-container', '#app-doc', 500)">
            <md-icon
              :class="activeSectionId === 'app-doc' ? 's1-U__text-color--accent-force' : ''"
            >desktop_windows</md-icon>
            <span
              class="md-list-item-text"
              :class="activeSectionId === 'app-doc' ? 's1-U__text-color--accent' : ''"
            >Estrutura Geral</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">Estrutura geral</md-tooltip>
          </md-list-item>

          <md-list-item @click="scrollTo('.md-app-container', '#buttons', 500)">
            <md-icon
              :class="activeSectionId === 'buttons' ? 's1-U__text-color--accent-force' : ''"
            >view_agenda</md-icon>
            <span
              class="md-list-item-text"
              :class="activeSectionId === 'buttons' ? 's1-U__text-color--accent' : ''"
            >Buttons</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">Buttons</md-tooltip>
          </md-list-item>

          <md-list-item @click="scrollTo('.md-app-container', '#datepickers', 500)">
            <md-icon
              :class="activeSectionId === 'datepickers' ? 's1-U__text-color--accent-force' : ''"
            >event</md-icon>
            <span
              class="md-list-item-text"
              :class="activeSectionId === 'datepickers' ? 's1-U__text-color--accent' : ''"
            >Datepicker</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">Datepicker</md-tooltip>
          </md-list-item>

          <md-list-item @click="scrollTo('.md-app-container', '#checkboxes', 500)">
            <md-icon
              :class="activeSectionId === 'checkboxes' ? 's1-U__text-color--accent-force' : ''"
            >check_box</md-icon>
            <span
              class="md-list-item-text"
              :class="activeSectionId === 'checkboxes' ? 's1-U__text-color--accent' : ''"
            >Checkbox</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">Checkbox</md-tooltip>
          </md-list-item>

          <md-list-item @click="scrollTo('.md-app-container', '#file', 500)">
            <md-icon
              :class="activeSectionId === 'file' ? 's1-U__text-color--accent-force' : ''"
            >attach_file</md-icon>
            <span
              class="md-list-item-text"
              :class="activeSectionId === 'file' ? 's1-U__text-color--accent' : ''"
            >File</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">File</md-tooltip>
          </md-list-item>

          <md-list-item @click="scrollTo('.md-app-container', '#input-textarea', 500)">
            <md-icon
              :class="activeSectionId === 'input-textarea' ? 's1-U__text-color--accent-force' : ''"
            >text_format</md-icon>
            <span
              class="md-list-item-text"
              :class="activeSectionId === 'input-textarea' ? 's1-U__text-color--accent' : ''"
            >Input & textarea</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">Input & textarea</md-tooltip>
          </md-list-item>

          <md-list-item @click="scrollTo('.md-app-container', '#radio', 500)">
            <md-icon
              :class="activeSectionId === 'radio' ? 's1-U__text-color--accent-force' : ''"
            >radio_button_checked</md-icon>
            <span
              class="md-list-item-text"
              :class="activeSectionId === 'radio' ? 's1-U__text-color--accent' : ''"
            >Radio</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">Radio</md-tooltip>
          </md-list-item>

          <md-list-item @click="scrollTo('.md-app-container', '#select', 500)">
            <md-icon
              :class="activeSectionId === 'select' ? 's1-U__text-color--accent-force' : ''"
            >tab_unselected</md-icon>
            <span
              class="md-list-item-text"
              :class="activeSectionId === 'select' ? 's1-U__text-color--accent' : ''"
            >Select</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">Select</md-tooltip>
          </md-list-item>

          <md-list-item md-expand>
            <md-icon>code</md-icon>
            <span class="md-list-item-text">S1 Components</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">S1 Components</md-tooltip>

            <md-list slot="md-expand">
              <md-list-item @click="scrollTo('.md-app-container', '#app-toolbar', 500)">
                <md-icon
                  :class="activeSectionId === 'app-toolbar' ? 's1-U__text-color--accent-force' : ''"
                >label</md-icon>
                <span
                  class="md-list-item-text"
                  :class="activeSectionId === 'app-toolbar' ? 's1-U__text-color--accent' : ''"
                >App toolbar</span>
                <md-tooltip md-direction="right" v-show="!menuVisible">App toolbar</md-tooltip>
              </md-list-item>

              <md-list-item @click="scrollTo('.md-app-container', '#card-flag', 500)">
                <md-icon
                  :class="activeSectionId === 'card-flag' ? 's1-U__text-color--accent-force' : ''"
                >label</md-icon>
                <span
                  class="md-list-item-text"
                  :class="activeSectionId === 'card-flag' ? 's1-U__text-color--accent' : ''"
                >Card flag</span>
                <md-tooltip md-direction="right" v-show="!menuVisible">Card flag</md-tooltip>
              </md-list-item>

              <md-list-item @click="scrollTo('.md-app-container', '#chip-wrapper', 500)">
                <md-icon
                  :class="activeSectionId === 'chip-wrapper' ? 's1-U__text-color--accent-force' : ''"
                >label</md-icon>
                <span
                  class="md-list-item-text"
                  :class="activeSectionId === 'chip-wrapper' ? 's1-U__text-color--accent' : ''"
                >Chip wrapper</span>
                <md-tooltip md-direction="right" v-show="!menuVisible">Chip wrapper</md-tooltip>
              </md-list-item>

              <md-list-item @click="scrollTo('.md-app-container', '#mezzanine', 500)">
                <md-icon
                  :class="activeSectionId === 'mezzanine' ? 's1-U__text-color--accent-force' : ''"
                >label</md-icon>
                <span
                  class="md-list-item-text"
                  :class="activeSectionId === 'mezzanine' ? 's1-U__text-color--accent' : ''"
                >Mezzanine</span>
                <md-tooltip md-direction="right" v-show="!menuVisible">Mezzanine</md-tooltip>
              </md-list-item>

              <md-list-item @click="scrollTo('.md-app-container', '#sort-icons', 500)">
                <md-icon
                  :class="activeSectionId === 'sort-icons' ? 's1-U__text-color--accent-force' : ''"
                >label</md-icon>
                <span
                  class="md-list-item-text"
                  :class="activeSectionId === 'sort-icons' ? 's1-U__text-color--accent' : ''"
                >Sort icons</span>
                <md-tooltip md-direction="right" v-show="!menuVisible">Sort icons</md-tooltip>
              </md-list-item>

              <md-list-item @click="scrollTo('.md-app-container', '#tags', 500)">
                <md-icon
                  :class="activeSectionId === 'tags' ? 's1-U__text-color--accent-force' : ''"
                >label</md-icon>
                <span
                  class="md-list-item-text"
                  :class="activeSectionId === 'tags' ? 's1-U__text-color--accent' : ''"
                >Sort icons</span>
                <md-tooltip md-direction="right" v-show="!menuVisible">Sort icons</md-tooltip>
              </md-list-item>

              <md-list-item @click="scrollTo('.md-app-container', '#transition-toggle', 500)">
                <md-icon
                  :class="activeSectionId === 'transition-toggle' ? 's1-U__text-color--accent-force' : ''"
                >label</md-icon>
                <span
                  class="md-list-item-text"
                  :class="activeSectionId === 'transition-toggle' ? 's1-U__text-color--accent' : ''"
                >Transition toggle</span>
                <md-tooltip md-direction="right" v-show="!menuVisible">Transition toggle</md-tooltip>
              </md-list-item>

              <md-list-item @click="scrollTo('.md-app-container', '#upload', 500)">
                <md-icon
                  :class="activeSectionId === 'upload' ? 's1-U__text-color--accent-force' : ''"
                >label</md-icon>
                <span
                  class="md-list-item-text"
                  :class="activeSectionId === 'upload' ? 's1-U__text-color--accent' : ''"
                >Upload</span>
                <md-tooltip md-direction="right" v-show="!menuVisible">Upload</md-tooltip>
              </md-list-item>

              <md-list-item @click="scrollTo('.md-app-container', '#vertical-divider', 500)">
                <md-icon
                  :class="activeSectionId === 'vertical-divider' ? 's1-U__text-color--accent-force' : ''"
                >label</md-icon>
                <span
                  class="md-list-item-text"
                  :class="activeSectionId === 'vertical-divider' ? 's1-U__text-color--accent' : ''"
                >Vertical divider</span>
                <md-tooltip md-direction="right" v-show="!menuVisible">Vertical divider</md-tooltip>
              </md-list-item>
            </md-list>
          </md-list-item>

          <md-list-item md-expand>
            <md-icon>build</md-icon>
            <span class="md-list-item-text">S1 Utilities</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">S1 Utilities</md-tooltip>

            <md-list slot="md-expand">
              <md-list-item @click="scrollTo('.md-app-container', '#align-items', 500)">
                <md-icon
                  :class="activeSectionId === 'align-items' ? 's1-U__text-color--accent-force' : ''"
                >vertical_align_center</md-icon>
                <span
                  class="md-list-item-text"
                  :class="activeSectionId === 'align-items' ? 's1-U__text-color--accent' : ''"
                >Align children</span>
                <md-tooltip md-direction="right" v-show="!menuVisible">Align children</md-tooltip>
              </md-list-item>

              <md-list-item @click="scrollTo('.md-app-container', '#bg-color', 500)">
                <md-icon
                  :class="activeSectionId === 'bg-color' ? 's1-U__text-color--accent-force' : ''"
                >format_paint</md-icon>
                <span
                  class="md-list-item-text"
                  :class="activeSectionId === 'bg-color' ? 's1-U__text-color--accent' : ''"
                >BG Color</span>
                <md-tooltip md-direction="right" v-show="!menuVisible">BG Color</md-tooltip>
              </md-list-item>

              <md-list-item @click="scrollTo('.md-app-container', '#border', 500)">
                <md-icon
                  :class="activeSectionId === 'border' ? 's1-U__text-color--accent-force' : ''"
                >border_outer</md-icon>
                <span
                  class="md-list-item-text"
                  :class="activeSectionId === 'border' ? 's1-U__text-color--accent' : ''"
                >Border</span>
                <md-tooltip md-direction="right" v-show="!menuVisible">Border</md-tooltip>
              </md-list-item>

              <md-list-item @click="scrollTo('.md-app-container', '#flex-settings', 500)">
                <md-icon
                  :class="activeSectionId === 'flex-settings' ? 's1-U__text-color--accent-force' : ''"
                >label</md-icon>
                <span
                  class="md-list-item-text"
                  :class="activeSectionId === 'flex-settings' ? 's1-U__text-color--accent' : ''"
                >Flex settings</span>
                <md-tooltip md-direction="right" v-show="!menuVisible">Flex settings</md-tooltip>
              </md-list-item>

              <md-list-item @click="scrollTo('.md-app-container', '#height', 500)">
                <md-icon
                  :class="activeSectionId === 'height' ? 's1-U__text-color--accent-force' : ''"
                >panorama_vertical</md-icon>
                <span
                  class="md-list-item-text"
                  :class="activeSectionId === 'height' ? 's1-U__text-color--accent' : ''"
                >Height</span>
                <md-tooltip md-direction="right" v-show="!menuVisible">Height</md-tooltip>
              </md-list-item>

              <md-list-item @click="scrollTo('.md-app-container', '#margins', 500)">
                <md-icon
                  :class="activeSectionId === 'margins' ? 's1-U__text-color--accent-force' : ''"
                >label</md-icon>
                <span
                  class="md-list-item-text"
                  :class="activeSectionId === 'margins' ? 's1-U__text-color--accent' : ''"
                >Margins</span>
                <md-tooltip md-direction="right" v-show="!menuVisible">Margins</md-tooltip>
              </md-list-item>

              <md-list-item @click="scrollTo('.md-app-container', '#paddings', 500)">
                <md-icon
                  :class="activeSectionId === 'paddings' ? 's1-U__text-color--accent-force' : ''"
                >label</md-icon>
                <span
                  class="md-list-item-text"
                  :class="activeSectionId === 'paddings' ? 's1-U__text-color--accent' : ''"
                >Paddings</span>
                <md-tooltip md-direction="right" v-show="!menuVisible">Paddings</md-tooltip>
              </md-list-item>

              <md-list-item @click="scrollTo('.md-app-container', '#text-color', 500)">
                <md-icon
                  :class="activeSectionId === 'text-color' ? 's1-U__text-color--accent-force' : ''"
                >format_color_text</md-icon>
                <span
                  class="md-list-item-text"
                  :class="activeSectionId === 'text-color' ? 's1-U__text-color--accent' : ''"
                >Text color</span>
                <md-tooltip md-direction="right" v-show="!menuVisible">Text color</md-tooltip>
              </md-list-item>

              <md-list-item @click="scrollTo('.md-app-container', '#text-settings', 500)">
                <md-icon
                  :class="activeSectionId === 'text-settings' ? 's1-U__text-color--accent-force' : ''"
                >format_italic</md-icon>
                <span
                  class="md-list-item-text"
                  :class="activeSectionId === 'text-settings' ? 's1-U__text-color--accent' : ''"
                >Text settings</span>
                <md-tooltip md-direction="right" v-show="!menuVisible">Text settings</md-tooltip>
              </md-list-item>

              <md-list-item @click="scrollTo('.md-app-container', '#visibility', 500)">
                <md-icon
                  :class="activeSectionId === 'visibility' ? 's1-U__text-color--accent-force' : ''"
                >visibility_off</md-icon>
                <span
                  class="md-list-item-text"
                  :class="activeSectionId === 'visibility' ? 's1-U__text-color--accent' : ''"
                >Visibility</span>
                <md-tooltip md-direction="right" v-show="!menuVisible">Visibility</md-tooltip>
              </md-list-item>

              <md-list-item @click="scrollTo('.md-app-container', '#width', 500)">
                <md-icon
                  :class="activeSectionId === 'width' ? 's1-U__text-color--accent-force' : ''"
                >panorama_horizontal</md-icon>
                <span
                  class="md-list-item-text"
                  :class="activeSectionId === 'width' ? 's1-U__text-color--accent' : ''"
                >Width</span>
                <md-tooltip md-direction="right" v-show="!menuVisible">Width</md-tooltip>
              </md-list-item>
            </md-list>
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
        <!-- <MdSwitchDoc/> -->
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
        <!-- <MdTableDoc/> -->
        <!-- <MdTabsDoc/> -->
        <!-- <MdToolbarDoc/> -->
        <!-- <MdTooltipDoc/> -->
        <S1UAlignItems/>
        <S1UBgColor/>
        <S1UBorder/>
        <S1UFlexSettings/>
        <S1UHeight/>
        <S1UMargins/>
        <S1UPaddings/>
        <S1UTextColor/>
        <S1UTextSettings/>
        <S1UVisibility/>
        <S1UWidth/>
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
// import MdChipsDoc from "./components/MdChipsDoc/index.vue";
import MdFileDoc from "./components/MdFileDoc/index.vue";
import MdInputTextareaDoc from "./components/MdInputTextareaDoc/index.vue";
import MdRadioDoc from "./components/MdRadioDoc/index.vue";
import MdSelectDoc from "./components/MdSelectDoc/index.vue";
// import MdSwitchDoc from "./components/MdSwitchDoc/index.vue";
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
// import MdTableDoc from "./components/MdTableDoc/index.vue";
// import MdTabsDoc from "./components/MdTabsDoc/index.vue";
// import MdToolbarDoc from "./components/MdToolbarDoc/index.vue";
// import MdTooltipDoc from "./components/MdTooltipDoc/index.vue";

import S1UAlignItems from "./components/S1U-AlignItems/index.vue";
import S1UBgColor from "./components/S1U-BgColor/index.vue";
import S1UBorder from "./components/S1U-Border/index.vue";
import S1UFlexSettings from "./components/S1U-FlexSettings/index.vue";
import S1UHeight from "./components/S1U-Height/index.vue";
import S1UMargins from "./components/S1U-Margins/index.vue";
import S1UPaddings from "./components/S1U-Paddings/index.vue";
import S1UTextColor from "./components/S1U-TextColor/index.vue";
import S1UTextSettings from "./components/S1U-TextSettings/index.vue";
import S1UVisibility from "./components/S1U-Visibility/index.vue";
import S1UWidth from "./components/S1U-Width/index.vue";

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
    // MdChipsDoc,
    MdFileDoc,
    MdInputTextareaDoc,
    MdRadioDoc,
    MdSelectDoc,
    // MdSwitchDoc,
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
    // MdTableDoc,
    // MdTabsDoc,
    // MdToolbarDoc,
    // MdTooltipDoc,
    S1UAlignItems,
    S1UBgColor,
    S1UBorder,
    S1UFlexSettings,
    S1UHeight,
    S1UMargins,
    S1UPaddings,
    S1UTextColor,
    S1UTextSettings,
    S1UVisibility,
    S1UWidth,
  },
  data: () => ({
    menuVisible: true,
    expandItems: false,
    activeSectionId: null
  }),
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    scrollTo(scrolledElement, to, duration) {
      Math.easeInOutQuad = function(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      let bodyTop = document
          .querySelector(scrolledElement)
          .getBoundingClientRect().top,
        elemTop = document.querySelector(to).getBoundingClientRect().top,
        offset = elemTop - bodyTop;

      let start = document.querySelector(scrolledElement).scrollTop,
        change = offset,
        currentTime = 0,
        increment = 10;

      let animateScroll = function() {
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
      for (let i = 0; i < sections.length; i++) {
        const n =
          sections[i].getBoundingClientRect().top +
          sections[i].getBoundingClientRect().height -
          200;
        if (n > 0) {
          this.activeSectionId = sections[i].id;
          break;
        }
      }
    }
  },
  mounted() {
    const element = document.querySelector(".md-app-container");
    const sections = document.querySelectorAll(".section");
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

p code {
  background-color: rgba(0, 0, 0, 0.1);
}

.s1-Doc__mini-tag {
  height: 20px !important;
  line-height: 20px !important;
  font-size: 10px !important;
}
.s1-Doc-code-wrapper {
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0 16px;
  margin-top: 8px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 2px;
}
</style>

