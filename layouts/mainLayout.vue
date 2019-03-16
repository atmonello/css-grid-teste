<template>
  <div id="main-layout" class="layout">
    <section id="header">
      <div class="logo">
        <slot name="logo"></slot>
      </div>
      <div class="search">
        <slot name="search"></slot>
      </div>
    </section>
    <section id="content">
      <div class="adicionar">
        <slot name="adicionar"></slot>
      </div>
      <div class="lista">
        <slot name="lista"></slot>
      </div>
      <div class="detalhes">
        <slot name="detalhes"></slot>
      </div>
      <div class="editar">
        <slot name="editar"></slot>
      </div>
    </section>
  </div>
</template>

<style lang="less">
@import "~assets/main.less";
#main-layout {
  height: 100vh;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: repeat(8, 10fr);
  grid-gap: 0 1em;

  #header {
    background-color: lightblue;
    grid-column: span 8;
    display: grid;
    grid-template-columns: repeat(auto-fill, 50%);
    grid-template-rows: 100%;
    grid-auto-flow: column;

    .logo {
      background-color: @white;
    }

    .search {
      background-color: @blue-lt;
    }
  }

  #content {
    background-color: @gray-lt;
    grid-column: span 8;
    color: @black;
    padding: 1em;
    display: grid;
    grid-template-areas:
      "adicionar adicionar adicionar adicionar"
      "lista lista detalhes detalhes"
      "lista lista editar editar";
    grid-template-rows: 100px 1fr 100px;
    grid-template-columns: repeat(2, minmax(100px, 1fr)) repeat(2, minmax(200px, 1fr));
    grid-row-gap: 8px;
    grid-column-gap: 16px;

    .adicionar, .lista, .detalhes, .editar {
      // background-color: @white;
      border-radius: 16px;
      // box-shadow: @shadow;
    }

    .adicionar {
      grid-area: adicionar;
      padding: 16px;
    }

    .lista {
      grid-area: lista;
    }

    .detalhes {
      grid-area: detalhes;
    }

    .editar {
      grid-area: editar;
    }

  }
}
</style>
