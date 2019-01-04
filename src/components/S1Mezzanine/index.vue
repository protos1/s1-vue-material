<template>
  <div class="section s1-U__pd--bt40" id="mezzanine">
    <h1 class="md-display-3 s1-U__mg--bt16">Mezzanine</h1>

    <md-button class="md-raised md-primary s1-U__mg--bt16" @click="toggleActive">{{active ? 'desativar' : 'ativar'}} mezzanine</md-button>

    <div class="s1-U__border-solid--1" :class="active && 'mezzanine-is-active'" style="height: 100vh; position: relative; overflow: hidden">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ex nostrum enim consectetur possimus odit beatae esse hic minima, inventore quo quia corrupti dolore modi reprehenderit, illo, explicabo maxime repellat? Non, quidem blanditiis quis, numquam a animi eos facere earum aut dicta totam suscipit dolorum? Nihil iure perspiciatis reiciendis expedita cumque doloremque dolor repellat voluptates voluptas omnis at placeat quidem aliquam dolores, vero nemo consectetur quisquam illo maxime id vel itaque vitae? Pariatur voluptatem deserunt fugiat eum, rem eos iure repudiandae, exercitationem voluptates rerum, aspernatur in dolorem quasi eius veniam iusto! Reiciendis vitae debitis placeat eaque ipsum odio iste accusantium aut enim mollitia inventore ipsam delectus, laborum voluptate consequuntur veritatis, ex minima aliquid, quis at laboriosam ad quas expedita dignissimos. Aliquid, fugiat vitae ducimus deserunt assumenda voluptates nobis nemo numquam esse cumque consequatur alias, earum recusandae ratione. Debitis amet fugit dolore. Deleniti vitae voluptates voluptas impedit vero delectus voluptate dolores quasi, optio molestias autem tempora dolor deserunt sapiente cum quas. Odit eius vero, quos eaque delectus nam minus iure, aliquam explicabo cupiditate, nihil non eum! Quisquam commodi sequi consectetur harum praesentium quos accusantium eveniet repellat nemo quasi. Molestias tempore quidem velit dolorem quae optio sed consequatur corporis officiis nam? Laboriosam, doloremque molestias. Delectus ducimus accusamus quam placeat, quia ipsam consequatur! Omnis est dolorem corporis quisquam? Mollitia laborum voluptate voluptates, molestias porro vitae delectus harum omnis similique esse veritatis fugiat dolorum quae ut praesentium labore saepe nisi quos accusamus. Dicta illo provident iusto impedit incidunt neque excepturi doloremque error quisquam libero, quos tempore natus autem id quidem suscipit et at iure enim quibusdam laborum sed necessitatibus! Possimus asperiores architecto aut dolorem blanditiis sapiente? Repellat nemo nobis et dolores, vitae adipisci esse nisi id eligendi porro error! Id quasi eius consequuntur vel deleniti, ut repudiandae exercitationem aperiam recusandae tempore, reprehenderit voluptas beatae veritatis laudantium? Aut fugiat quidem pariatur cupiditate vitae totam natus nisi nesciunt iure voluptatum consequatur labore, nemo quam laudantium itaque ipsam fugit aliquam dolore! Tenetur blanditiis odio quia. Praesentium, quod vel, eaque fugit corporis ea, porro accusantium aperiam sunt tempore optio voluptate qui? Nisi dicta eveniet velit nobis recusandae unde autem laudantium facilis ea? Aliquid voluptatibus cupiditate dolorum nobis doloremque accusantium possimus, veniam, repudiandae ullam magnam nemo cumque. Soluta doloribus numquam cum quasi culpa, voluptates explicabo error. Laudantium assumenda quisquam molestias eaque dolorem fuga nemo. Sunt expedita consectetur ipsam laboriosam saepe! Qui saepe blanditiis, expedita magni iusto ex aliquam quo ipsa voluptatibus voluptatum libero officia labore deleniti dolore assumenda eum obcaecati quidem, suscipit doloribus veritatis voluptas placeat voluptates in. Optio ad voluptatem accusantium ullam atque tempore. Harum in hic quisquam ratione ut tempore assumenda molestiae, libero et eum, consequuntur modi esse, cumque debitis pariatur temporibus repellat eveniet aperiam maxime iste nisi totam aut? Obcaecati quos delectus eaque voluptate accusantium voluptatum nulla molestiae, quae minima recusandae? Amet illum facilis neque alias voluptatem corporis repellendus laborum nihil impedit quod, voluptate odit fugit vitae blanditiis magnam numquam fugiat voluptas cupiditate molestiae ipsum accusantium qui laudantium error? Amet vero assumenda et, beatae temporibus exercitationem!</p>
      <div class="s1-mezzanine" style="position: absolute">
        <md-card>
          <md-card-header class="s1-U__border--bottom1">
            <md-card-header-text>
              <div class="md-title">Card without hover effect</div>
            </md-card-header-text>
            <md-button class="md-icon-button" @click="toggleActive">
              <md-icon>close</md-icon>
            </md-button>
          </md-card-header>
          <md-card-content>
            <md-content class="md-scrollbar">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
            </md-content>
          </md-card-content>
          <md-card-actions class="s1-U__border--top1">
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </md-card-actions>
        </md-card>
      </div>
    </div>

<div class="s1-Doc-code-wrapper">
  <code>
&#x3C;div :class=&#x22;active &#x26;&#x26; &#x27;mezzanine-is-active&#x27;&#x22;&#x3E;
  &#x3C;p&#x3E;...&#x3C;/p&#x3E;
  &#x3C;div class=&#x22;s1-mezzanine&#x22;&#x3E;
    &#x3C;md-card&#x3E;
      &#x3C;md-card-header class=&#x22;s1-U__border--bottom1&#x22;&#x3E;
        &#x3C;md-card-header-text&#x3E;
          &#x3C;div class=&#x22;md-title&#x22;&#x3E;Card without hover effect&#x3C;/div&#x3E;
        &#x3C;/md-card-header-text&#x3E;
        &#x3C;md-button class=&#x22;md-icon-button&#x22; @click=&#x22;toggleActive&#x22;&#x3E;
          &#x3C;md-icon&#x3E;close&#x3C;/md-icon&#x3E;
        &#x3C;/md-button&#x3E;
      &#x3C;/md-card-header&#x3E;
      &#x3C;md-card-content&#x3E;
        &#x3C;md-content class=&#x22;md-scrollbar&#x22;&#x3E;
          ...
        &#x3C;/md-content&#x3E;
      &#x3C;/md-card-content&#x3E;
      &#x3C;md-card-actions class=&#x22;s1-U__border--top1&#x22;&#x3E;
        &#x3C;md-button&#x3E;Action&#x3C;/md-button&#x3E;
        &#x3C;md-button&#x3E;Action&#x3C;/md-button&#x3E;
      &#x3C;/md-card-actions&#x3E;
    &#x3C;/md-card&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
  </code>
</div>

  </div>
</template>

<script>
export default {
  name: "S1Mezzanine",
  data: () => ({
    active: false
  }),
  methods: {
    toggleActive() {
      this.active = !this.active;
    }
  }
};
</script>