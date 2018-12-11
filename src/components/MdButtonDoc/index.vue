<template>
  <div>
    <h1 class="md-display-3">Buttons</h1>

    <div>
      <h2 class="display-2">1. Simple buttons</h2>
      <p>
        <b>S1CSS</b> remove margin from any button (because we believe that all spacing control need to be on dev's hands) and add
        <code>.md-bordered</code>
      </p>

      <ButtonDoc title="Flat"></ButtonDoc>
      <ButtonDoc classes="md-raised" title="Raised"></ButtonDoc>
      <ButtonDoc classes="md-bordered" title="Bordered"></ButtonDoc>
    </div>

    <div>
      <h2 class="display-2">2. Icon buttons</h2>
      <p>
        <b>S1CSS</b> add
        <code>.md-icon-button.md-bordered</code>
      </p>

      <IconButtonDoc title="Flat"></IconButtonDoc>
      <IconButtonDoc classes="md-raised" title="Raised"></IconButtonDoc>
      <IconButtonDoc classes="md-bordered" title="Bordered"></IconButtonDoc>
    </div>

    <div>
      <h2 class="display-2">3. Buttons variations</h2>
      <p>
        <b>S1CSS</b> add
        <code>.md-icon-button.squared</code>
      </p>

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

