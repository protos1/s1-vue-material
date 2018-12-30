<template>
  <div id="avatars" class="section s1-U__mg--bt64">
    <h1 class="md-display-3 s1-U__mg--bt16">Avatar</h1>
    <p class="s1-U__mg--bt8">
      <span>Primariamente criado para mostrar uma foto (de avatar) ou texto, tendo sempre</span>
      <b> um ou dois </b>
      <span>caracteres dentro do círculo.</span>
    </p>

    <div class="s1-U__mg--bt16">
      <div>
        <md-avatar class="md-avatar-icon" style="margin-right: 4px;">
          <md-ripple>
            <img src="./img/avatar.png" alt="People">
          </md-ripple>
        </md-avatar>
        <md-avatar class="md-avatar-icon" style="margin-right: 4px;">R</md-avatar>
        <md-avatar class="md-avatar-icon md-primary" style="margin-right: 4px;">RZ</md-avatar>
        <md-avatar class="md-avatar-icon md-accent" style="margin-right: 4px;">12</md-avatar>
      </div>
      <div class="s1-U__bg-color--body-bg s1-U__pd--lt16 s1-U__pd--rt16 s1-U__mg--tp8">
        <code>
&#x3C;md-avatar class=&#x22;md-avatar-icon&#x22;&#x3E;
  &#x3C;md-ripple&#x3E;
    &#x3C;img src=&#x22;./img/avatar.png&#x22; alt=&#x22;People&#x22;&#x3E;
  &#x3C;/md-ripple&#x3E;
&#x3C;/md-avatar&#x3E;
&#x3C;md-avatar class=&#x22;md-avatar-icon&#x22;&#x3E;R&#x3C;/md-avatar&#x3E;
&#x3C;md-avatar class=&#x22;md-avatar-icon md-primary&#x22;&#x3E;RZ&#x3C;/md-avatar&#x3E;
&#x3C;md-avatar class=&#x22;md-avatar-icon md-accent&#x22;&#x3E;12&#x3C;/md-avatar&#x3E;
        </code>
      </div>
    </div>

    <p>
      <span>Existem também em outros tamanhos, <code>.md-small</code> e <code>.md-large</code> como pode ser visto na</span>
      <a
        class="s1-U__mg--lt8"
        href="https://vuematerial.io/components/input"
      >documentação do vuematerial</a> <!-- TODO: ADJUST URL -->
    </p>
  </div>
</template>

<script>
export default {
  name: "MdAvatarDoc"
};
</script>