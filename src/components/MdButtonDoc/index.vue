<template>
  <div class="section" id="buttons">
    <h1 class="md-display-3 s1-U__mg--bt16">Buttons</h1>

    <div>
      <h2 class="md-display-1 s1-U__mg--bt8">1. Simple buttons</h2>
      <p class="s1-U__mg--bt16">Removemos o <b>margin</b> de todos os botões (por acreditarmos que o espaçamento deve estar nas mãos do desenvolvedor) e adicionamos um novo tipo de botão, <code>.md-bordered</code></p>

      <ButtonDoc title="Flat"></ButtonDoc>
      <ButtonDoc classes="md-raised" title="Raised"></ButtonDoc>
      <ButtonDoc classes="md-bordered" title="Bordered"></ButtonDoc>
    </div>

    <div>
      <h2 class="md-display-1 s1-U__mg--bt8 s1-U__mg--tp8">2. Icon buttons</h2>
      <p class="s1-U__mg--bt16">Adicionamos <code>.md-icon-button.md-bordered</code></p>

      <IconButtonDoc title="Flat"></IconButtonDoc>
      <IconButtonDoc classes="md-raised" title="Raised"></IconButtonDoc>
      <IconButtonDoc classes="md-bordered" title="Bordered"></IconButtonDoc>
    </div>

    <div>
      <h2 class="md-display-1 s1-U__mg--bt8">3. Buttons variations</h2>
      <p class="s1-U__mg--bt16">Adicionamos <code>.md-icon-button.squared</code></p>

      <IconButtonDoc classes="squared md-raised" title="Squared icon button"></IconButtonDoc>
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

