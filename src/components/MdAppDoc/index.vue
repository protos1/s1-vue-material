<template>
  <div id="app-doc" class="section s1-U__mg--bt64">

    <h1 class="md-display-3 s1-U__mg--bt16">Estrutura geral</h1>

    <div class="s1-U__mg--bt16">
      <a class="s1-U__text-ellipsis s1-U__full-width" href="https://vuematerial.io/components/app">https://vuematerial.io/components/app</a>
    </div>

    <p class="s1-U__mg--bt8">Utilizamos para essa estrutura um menu fixo à esquerda dando ênfase à uma logo quadrada. Quando o menu está fechado, ele exibe pelo menos os ícones de cada item, sendo possível ver uma label no mouseOver.</p>

    <div class="s1-U__mg--bt16">
      <div class="s1-Doc-code-wrapper">
        <code>
&#x3C;md-app class=&#x22;s1-md-app&#x22;&#x3E;
  &#x3C;md-app-drawer :md-active.sync=&#x22;menuVisible&#x22; md-persistent=&#x22;mini&#x22;&#x3E;
    &#x3C;div class=&#x22;s1-logo__wrapper&#x22;&#x3E;
      &#x3C;img class=&#x22;s1-logo__img&#x22; src=&#x22;&#x22; alt=&#x22;&#x22; /&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;md-list&#x3E;
      &#x3C;md-list-item @click=&#x22;toggleMenu&#x22;&#x3E;
        &#x3C;md-icon v-if=&#x22;!menuVisible&#x22;&#x3E;menu&#x3C;/md-icon&#x3E;
        &#x3C;md-icon v-if=&#x22;menuVisible&#x22;&#x3E;keyboard_arrow_left&#x3C;/md-icon&#x3E;
        &#x3C;span class=&#x22;md-list-item-text&#x22;&#x3E;Esconder&#x3C;/span&#x3E;
        &#x3C;md-tooltip md-direction=&#x22;right&#x22; v-show=&#x22;!menuVisible&#x22;&#x3E;Expandir menu&#x3C;/md-tooltip&#x3E;
      &#x3C;/md-list-item&#x3E;

      &#x3C;md-list-item&#x3E;
        &#x3C;md-icon&#x3E;&#x3C;/md-icon&#x3E;
        &#x3C;span class=&#x22;md-list-item-text&#x22;&#x3E;Buttons&#x3C;/span&#x3E;
        &#x3C;md-tooltip md-direction=&#x22;right&#x22; v-show=&#x22;!menuVisible&#x22;&#x3E;Buttons&#x3C;/md-tooltip&#x3E;
      &#x3C;/md-list-item&#x3E;

    &#x3C;/md-list&#x3E;
  &#x3C;/md-app-drawer&#x3E;

  &#x3C;md-app-content&#x3E;
    &#x3C;!-- APP PAGE CONTENT --&#x3E;
  &#x3C;/md-app-content&#x3E;
&#x3C;/md-app&#x3E;
        </code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MdAppDoc"
};
</script>