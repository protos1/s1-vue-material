<template>
  <div class="section s1-U__pd--bt40" id="img-logo">
    <h1 class="md-display-3 s1-U__mg--bt16">Img logo</h1>
    <p class="s1-U__mg--bt16">Garante que a imagem seja sempre quadrada</p>

    <div>
      <div class="s1-U__border-solid--1" style="width: 300px; resize: horizontal; max-width: 100%; overflow: auto; padding: 20px">
        <div class="s1-logo__wrapper">
          <img  class="s1-logo__img" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" alt="">
        </div>
      </div>

      <div class="s1-Doc-code-wrapper">
        <code>
&#x3C;div class=&#x22;s1-logo__wrapper&#x22;&#x3E;
  &#x3C;img  class=&#x22;s1-logo__img&#x22; src=&#x22;...&#x22; alt=&#x22;...&#x22;&#x3E;
&#x3C;/div&#x3E;
        </code>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "S1ImgLogo",
};
</script>