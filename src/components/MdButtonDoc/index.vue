<template>
  <div class="section" id="buttons">
    <h1 class="md-display-3 s1-U__mg--bt16">Buttons</h1>

    <div class="s1-U__mg--bt16">
      <a class="s1-U__text-ellipsis s1-U__full-width" target="_blank" href="https://vuematerial.io/components/button">vuematerial.io/button</a>
    </div>

    <div>
      <h2 class="md-display-1 s1-U__mg--bt8">1. Simple buttons</h2>
      <p class="s1-U__mg--bt16">Removemos o <b>margin</b> de todos os botões (por acreditarmos que o espaçamento deve estar nas mãos do desenvolvedor) e adicionamos um novo tipo de botão, <code>.s1-md-bordered</code>. Para encapsular os botões (como um button-group), veja os <span class="s1-U__text-color--accent">utilirários de alinhamento</span>.</p>

      <ButtonDoc title="Flat"></ButtonDoc>
      <ButtonDoc classes="md-raised" title="Raised"></ButtonDoc>
      <ButtonDoc classes="s1-md-bordered" title="Bordered" s1></ButtonDoc>
    </div>

    <div>
      <h2 class="md-display-1 s1-U__mg--bt8 s1-U__mg--tp8">2. Icon buttons</h2>
      <p class="s1-U__mg--bt16">Adicionamos <code>.md-icon-button.s1-md-bordered</code></p>

      <IconButtonDoc title="Flat"></IconButtonDoc>
      <IconButtonDoc classes="md-raised" title="Raised"></IconButtonDoc>
      <IconButtonDoc classes="s1-md-bordered" title="Bordered" s1></IconButtonDoc>
      <IconButtonDoc classes="squared md-raised" title="Squared icon button" s1></IconButtonDoc>
      <IconButtonDoc classes="squared s1-md-bordered" title="Squared bordered button" s1></IconButtonDoc>
    </div>

    <div>
      <h2 class="md-display-1 s1-U__mg--bt8 s1-U__mg--tp8">3. Buttons variations</h2>
      <ButtonDoc classes="md-dense md-raised" title="Dense button"></ButtonDoc>
    </div>
  </div>
</template>

<script>
import ButtonDoc from "./ButtonDoc.vue";
import IconButtonDoc from "./IconButtonDoc.vue";

export default {
  name: "MdButtonDoc",
  components: {
    ButtonDoc,
    IconButtonDoc
  }
};
</script>

