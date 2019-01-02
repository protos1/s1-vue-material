<template>
  <div class="section" id="select">
    <h1 class="md-display-3 s1-U__mg--bt16">Select</h1>

    <div class="s1-U__mg--bt16">
      <a class="s1-U__text-ellipsis s1-U__full-width" href="https://vuematerial.io/components/datepicker">https://vuematerial.io/components/datepicker</a>
    </div>

    <div>
      <p class="s1-U__mg--bt32">Apenas algumas alterações no layout, sem qualquer alteração na implementação</p>
      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--240px">
          <md-field>
            <label for="movie">Movie</label>
            <md-select v-model="movie" name="movie" id="movie">
              <md-option value="fight-club">Fight Club</md-option>
              <md-option value="godfather">Godfather</md-option>
              <md-option value="godfather-ii">Godfather II</md-option>
              <md-option value="godfather-iii">Godfather III</md-option>
              <md-option value="godfellas">Godfellas</md-option>
              <md-option value="pulp-fiction">Pulp Fiction</md-option>
              <md-option value="scarface">Scarface</md-option>
            </md-select>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field&#x3E;
  &#x3C;label for=&#x22;movie&#x22;&#x3E;Movie&#x3C;/label&#x3E;
  &#x3C;md-select v-model=&#x22;movie&#x22; name=&#x22;movie&#x22; id=&#x22;movie&#x22;&#x3E;
    &#x3C;md-option value=&#x22;fight-club&#x22;&#x3E;Fight Club&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;godfather&#x22;&#x3E;Godfather&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;godfather-ii&#x22;&#x3E;Godfather II&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;godfather-iii&#x22;&#x3E;Godfather III&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;godfellas&#x22;&#x3E;Godfellas&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;pulp-fiction&#x22;&#x3E;Pulp Fiction&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;scarface&#x22;&#x3E;Scarface&#x3C;/md-option&#x3E;
  &#x3C;/md-select&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--240px">
          <md-field>
            <md-select v-model="country" name="country" id="country" placeholder="Country">
              <md-option value="australia">Australia</md-option>
              <md-option value="brazil">Brazil</md-option>
              <md-option value="japan">Japan</md-option>
              <md-option value="united-states">United States</md-option>
            </md-select>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field&#x3E;
  &#x3C;md-select v-model=&#x22;country&#x22; name=&#x22;country&#x22; id=&#x22;country&#x22; placeholder=&#x22;Country&#x22;&#x3E;
    &#x3C;md-option value=&#x22;australia&#x22;&#x3E;Australia&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;brazil&#x22;&#x3E;Brazil&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;japan&#x22;&#x3E;Japan&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;united-states&#x22;&#x3E;United States&#x3C;/md-option&#x3E;
  &#x3C;/md-select&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--240px">
          <md-field>
            <label for="font">Font</label>
            <md-select v-model="font" name="font" id="font">
              <md-option value="arial">Arial</md-option>
              <md-option value="calibri">Calibri</md-option>
              <md-option value="cambria">Cambria</md-option>
              <md-option value="comic-sans">Comic Sans</md-option>
              <md-option value="consolas">Consolas</md-option>
              <md-option value="courier">Courier</md-option>
              <md-option value="droid-sans">Droid Sans</md-option>
              <md-option value="georgia">Georgia</md-option>
              <md-option value="helvetica">Helvetica</md-option>
              <md-option value="impact">Impact</md-option>
              <md-option value="roboto">Roboto</md-option>
              <md-option value="segoe-ui">Segoe UI</md-option>
              <md-option value="times-new-roman">Times New Roman</md-option>
              <md-option value="ubuntu">Ubuntu</md-option>
              <md-option value="verdana">Verdana</md-option>
            </md-select>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field&#x3E;
  &#x3C;label for=&#x22;font&#x22;&#x3E;Font&#x3C;/label&#x3E;
  &#x3C;md-select v-model=&#x22;font&#x22; name=&#x22;font&#x22; id=&#x22;font&#x22;&#x3E;
    &#x3C;md-option value=&#x22;arial&#x22;&#x3E;Arial&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;calibri&#x22;&#x3E;Calibri&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;cambria&#x22;&#x3E;Cambria&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;comic-sans&#x22;&#x3E;Comic Sans&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;consolas&#x22;&#x3E;Consolas&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;courier&#x22;&#x3E;Courier&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;droid-sans&#x22;&#x3E;Droid Sans&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;georgia&#x22;&#x3E;Georgia&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;helvetica&#x22;&#x3E;Helvetica&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;impact&#x22;&#x3E;Impact&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;roboto&#x22;&#x3E;Roboto&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;segoe-ui&#x22;&#x3E;Segoe UI&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;times-new-roman&#x22;&#x3E;Times New Roman&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;ubuntu&#x22;&#x3E;Ubuntu&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;verdana&#x22;&#x3E;Verdana&#x3C;/md-option&#x3E;
  &#x3C;/md-select&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>
      
      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--240px">
          <md-field>
            <label for="movies">Movies</label>
            <md-select v-model="selectedMovies" name="movies" id="movies" multiple>
              <md-option value="fight-club">Fight Club</md-option>
              <md-option value="godfather">Godfather</md-option>
              <md-option value="godfather-ii">Godfather II</md-option>
              <md-option value="godfather-iii">Godfather III</md-option>
              <md-option value="godfellas">Godfellas</md-option>
              <md-option value="pulp-fiction">Pulp Fiction</md-option>
              <md-option value="scarface">Scarface</md-option>
            </md-select>
          </md-field>

          <div>
            <strong>Selected movies:</strong>
            {{ selectedMovies }}
          </div>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field&#x3E;
  &#x3C;label for=&#x22;movies&#x22;&#x3E;Movies&#x3C;/label&#x3E;
  &#x3C;md-select v-model=&#x22;selectedMovies&#x22; name=&#x22;movies&#x22; id=&#x22;movies&#x22; multiple&#x3E;
    &#x3C;md-option value=&#x22;fight-club&#x22;&#x3E;Fight Club&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;godfather&#x22;&#x3E;Godfather&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;godfather-ii&#x22;&#x3E;Godfather II&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;godfather-iii&#x22;&#x3E;Godfather III&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;godfellas&#x22;&#x3E;Godfellas&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;pulp-fiction&#x22;&#x3E;Pulp Fiction&#x3C;/md-option&#x3E;
    &#x3C;md-option value=&#x22;scarface&#x22;&#x3E;Scarface&#x3C;/md-option&#x3E;
  &#x3C;/md-select&#x3E;
&#x3C;/md-field&#x3E;

&#x3C;div&#x3E;
  &#x3C;strong&#x3E;Selected movies:&#x3C;/strong&#x3E;
  {{ selectedMovies }}
&#x3C;/div&#x3E;
          </code>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "MdSelectDoc",
  data: () => ({
    movie: 'godfather',
    country: null,
    font: null,
    selectedMovies: [],
  })
};
</script>