<template>
  <div class="section s1-U__pd--bt32" id="checkboxes">
    <h1 class="md-display-3 s1-U__mg--bt16">Checkbox</h1>

    <div class="s1-U__mg--bt16">
      <a class="s1-U__text-ellipsis s1-U__full-width" href="https://vuematerial.io/components/checkbox">https://vuematerial.io/components/checkbox</a>
    </div>

    <div>
      <p class="s1-U__mg--bt32">Apenas algumas alterações no layout, sem qualquer alteração na implementação</p>
      <div class="s1-U__mg--bt16">
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100 md-medium-size-50">
            <md-card>
              <md-card-header>
                <div class="md-title s1-U__text-color--dark-4">Lorem</div>
              </md-card-header>

              <md-card-content>
                <span class="s1-U__text-color--dark-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus optio alias pariatur obcaecati architecto repudiandae adipisci, eaque culpa odio!
                </span>
              </md-card-content>

              <div class="s1-U__pd--lt20 s1-U__pd--rt20">
                <md-checkbox v-model="check1" value="1">Aceito</md-checkbox>
              </div>
            </md-card>
          </div>
          <div class="md-layout-item md-small-size-100 md-medium-size-50">
            <md-card>
              <md-card-header>
                <div class="md-title s1-U__text-color--dark-4">Lorem</div>
              </md-card-header>

              <md-card-content>
                <span class="s1-U__text-color--dark-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus optio alias pariatur obcaecati architecto repudiandae adipisci, eaque culpa odio!
                </span>
              </md-card-content>

              <div class="s1-U__pd--lt20 s1-U__pd--rt20">
                <div class="s1-U__pd--bt16">
                  <p>Selecione este checkbox</p>
                  <md-checkbox class="s1-U__mg0 s1-U__mg--tp4 s1-U__mg--bt8" v-model="check2" value="1">Aceito</md-checkbox>
                  <p class="md-caption">Isso aqui poderia ser uma explicação</p>
                </div>
              </div>
            </md-card>
          </div>
        </div>
      </div>
      <div class="s1-Doc-code-wrapper">
        <code>
&#x3C;div class=&#x22;s1-U__pd--lt20 s1-U__pd--rt20&#x22;&#x3E;
  &#x3C;md-checkbox v-model=&#x22;check1&#x22; value=&#x22;1&#x22;&#x3E;Aceito&#x3C;/md-checkbox&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;s1-U__pd--lt20 s1-U__pd--rt20&#x22;&#x3E;
  &#x3C;div class=&#x22;s1-U__pd--bt16&#x22;&#x3E;
    &#x3C;p&#x3E;Selecione este checkbox&#x3C;/p&#x3E;
    &#x3C;md-checkbox class=&#x22;s1-U__mg0 s1-U__mg--tp4 s1-U__mg--bt8&#x22; v-model=&#x22;check2&#x22; value=&#x22;1&#x22;&#x3E;Aceito&#x3C;/md-checkbox&#x3E;
    &#x3C;p class=&#x22;md-caption&#x22;&#x3E;Isso aqui poderia ser uma explica&#xE7;&#xE3;o&#x3C;/p&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
        </code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MdCheckboxDoc",
  data: () => ({
    check1: false,
    check2: false,
  }),
};
</script>