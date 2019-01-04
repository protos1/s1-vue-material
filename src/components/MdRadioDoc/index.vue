<template>
  <div class="section" id="radio">
    <h1 class="md-display-3 s1-U__mg--bt16">Radio</h1>

    <div class="s1-U__mg--bt16">
      <a class="s1-U__text-ellipsis s1-U__full-width" target="_blank" href="https://vuematerial.io/components/radio">vuematerial.io/radio</a>
    </div>

    <div>
      <h2 class="md-display-1 s1-U__mg--bt8">1. Uso recomendado</h2>
      <p>Evite usar radio buttons inline. Caso <b>seja necessário</b>, certifique-se de que o espaçamento agrupe de forma satisfatória label + botão e separe de forma igualmente satisfatória duas opções diferentes.</p>
      <div class="s1-U__mg--tp32">
        <p class="s1-U__mg--bt16">Deseja receber em casa?</p>
        <div>
          <md-radio class="s1-U__mg0" v-model="radio" value="sim">Sim</md-radio>
        </div>
        <div>
          <md-radio class="s1-U__mg0 s1-U__mg--tp8" v-model="radio" value="não">Não</md-radio>
        </div>
        <div>
          <md-radio class="s1-U__mg0 s1-U__mg--tp8" v-model="radio" value="adiar">Adiar</md-radio>
        </div>
      </div>
      <div class="s1-Doc-code-wrapper">
        <code>
&#x3C;p class=&#x22;s1-U__mg--bt16&#x22;&#x3E;Deseja receber em casa?&#x3C;/p&#x3E;
&#x3C;div&#x3E;
  &#x3C;md-radio class=&#x22;s1-U__mg0&#x22; v-model=&#x22;radio&#x22; value=&#x22;sim&#x22;&#x3E;Sim&#x3C;/md-radio&#x3E;
&#x3C;/div&#x3E;
&#x3C;div&#x3E;
  &#x3C;md-radio class=&#x22;s1-U__mg0 s1-U__mg--tp8&#x22; v-model=&#x22;radio&#x22; value=&#x22;n&#xE3;o&#x22;&#x3E;N&#xE3;o&#x3C;/md-radio&#x3E;
&#x3C;/div&#x3E;
&#x3C;div&#x3E;
  &#x3C;md-radio class=&#x22;s1-U__mg0 s1-U__mg--tp8&#x22; v-model=&#x22;radio&#x22; value=&#x22;adiar&#x22;&#x3E;Adiar&#x3C;/md-radio&#x3E;
&#x3C;/div&#x3E;
        </code>
      </div>
      <div class="s1-U__mg--tp32">
        <p class="s1-U__mg--bt16">Deseja receber em casa?</p>
        <md-radio class="s1-U__mg0 s1-U__mg--rt32" v-model="radio" value="não">Sim</md-radio>
        <md-radio class="s1-U__mg0" v-model="radio" value="sim">Não</md-radio>
      </div>
      <div class="s1-Doc-code-wrapper">
        <code>
&#x3C;div class=&#x22;s1-U__mg--tp32&#x22;&#x3E;
  &#x3C;p class=&#x22;s1-U__mg--bt16&#x22;&#x3E;Deseja receber em casa?&#x3C;/p&#x3E;
  &#x3C;md-radio class=&#x22;s1-U__mg0 s1-U__mg--rt32&#x22; v-model=&#x22;radio&#x22; value=&#x22;n&#xE3;o&#x22;&#x3E;Sim&#x3C;/md-radio&#x3E;
  &#x3C;md-radio class=&#x22;s1-U__mg0&#x22; v-model=&#x22;radio&#x22; value=&#x22;sim&#x22;&#x3E;N&#xE3;o&#x3C;/md-radio&#x3E;
&#x3C;/div&#x3E;
        </code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MdRadioDoc",
  data: () => ({
    selectedDate: null,
    radio: "sim"
  }),
  computed: {
    firstDayOfAWeek: {
      get() {
        return this.$material.locale.firstDayOfAWeek;
      },
      set(val) {
        this.$material.locale.firstDayOfAWeek = val;
      }
    }
  }
};
</script>