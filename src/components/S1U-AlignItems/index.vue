<template>
  <div class="section" id="align-items">
    <h1 class="md-display-3 s1-U__mg--bt16">Align items</h1>

    <div>
      <p class="s1-U__mg--bt32">Use as classes <code>s1-U__align-children--</code> para alinhar os filhos do elemento ao topo (<code>top</code>), ao centro (<code>center</code>) ou à base ((<code>bottom</code>))</p>
      <p class="md-body-2 s1-U__mg--bt8">
        s1-U__align-children--top
      </p>
      <div class="s1-U__mg--bt32">
        <div class="s1-U__align-children--top s1-U__mg--bt8">
          <div style="background-color: red; width: 20%; height: 50px;"></div>
          <div style="background-color: orange; width: 20%; height: 40px;"></div>
          <div style="background-color: yellow; width: 20%; height: 30px;"></div>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;div class=&#x22;s1-U__align-children--top&#x22;&#x3E;
  &#x3C;div style=&#x22;background-color: red; width: 20%; height: 50px;&#x22;&#x3E;&#x3C;/div&#x3E;
  &#x3C;div style=&#x22;background-color: orange; width: 20%; height: 40px;&#x22;&#x3E;&#x3C;/div&#x3E;
  &#x3C;div style=&#x22;background-color: yellow; width: 20%; height: 30px;&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
          </code>
        </div>
      </div>
      <p class="md-body-2 s1-U__mg--bt8">
        s1-U__align-children--center
      </p>
      <div class="s1-U__mg--bt32">
        <div class="s1-U__align-children--center s1-U__mg--bt8">
          <div style="background-color: red; width: 20%; height: 50px;"></div>
          <div style="background-color: orange; width: 20%; height: 40px;"></div>
          <div style="background-color: yellow; width: 20%; height: 30px;"></div>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;div class=&#x22;s1-U__align-children--center&#x22;&#x3E;
  &#x3C;div style=&#x22;background-color: red; width: 20%; height: 50px;&#x22;&#x3E;&#x3C;/div&#x3E;
  &#x3C;div style=&#x22;background-color: orange; width: 20%; height: 40px;&#x22;&#x3E;&#x3C;/div&#x3E;
  &#x3C;div style=&#x22;background-color: yellow; width: 20%; height: 30px;&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
          </code>
        </div>
      </div>
      <p class="md-body-2 s1-U__mg--bt8">
        s1-U__align-children--bottom
      </p>
      <div class="s1-U__mg--bt32">
        <div class="s1-U__align-children--bottom s1-U__mg--bt8">
          <div style="background-color: red; width: 20%; height: 50px;"></div>
          <div style="background-color: orange; width: 20%; height: 40px;"></div>
          <div style="background-color: yellow; width: 20%; height: 30px;"></div>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;div class=&#x22;s1-U__align-children--bottom&#x22;&#x3E;
  &#x3C;div style=&#x22;background-color: red; width: 20%; height: 50px;&#x22;&#x3E;&#x3C;/div&#x3E;
  &#x3C;div style=&#x22;background-color: orange; width: 20%; height: 40px;&#x22;&#x3E;&#x3C;/div&#x3E;
  &#x3C;div style=&#x22;background-color: yellow; width: 20%; height: 30px;&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
          </code>
        </div>
      </div>
      <p class="md-body-2 s1-U__mg--bt8">
        s1-U__align-children--stretch (default para filhos de display:flex)
      </p>
      <div class="s1-U__mg--bt32">
        <div class="s1-U__align-children--stretch s1-U__mg--bt8">
          <div style="background-color: red; width: 20%; height: 40px;"></div>
          <div style="background-color: orange; width: 20%; "></div>
          <div style="background-color: yellow; width: 20%; "></div>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;div class=&#x22;s1-U__align-children--stretch&#x22;&#x3E;
  &#x3C;div style=&#x22;background-color: red; width: 20%; height: 50px;&#x22;&#x3E;&#x3C;/div&#x3E;
  &#x3C;div style=&#x22;background-color: orange; width: 20%;&#x22;&#x3E;&#x3C;/div&#x3E;
  &#x3C;div style=&#x22;background-color: yellow; width: 20%;&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
          </code>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "S1UAlignItems",
};
</script>