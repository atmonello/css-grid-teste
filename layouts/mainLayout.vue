<template>
  <div id="main-layout" class="layout">
    <div v-if="isLoading" class="loading">
      <img src="~assets/img/loading.gif" alt="Carregando...">
    </div>

    <div v-else class="page">
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
      <section v-if="getModalStatus" id="modal">
        <div class="modalSlot">
          <slot name="modal"></slot>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="less">
@import "~assets/main.less";
#main-layout {
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

  }

  .page {
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
      padding: 3em;
      display: grid;
      grid-template-areas:
        "adicionar adicionar adicionar adicionar"
        "lista lista detalhes detalhes"
        "lista lista editar editar";
      grid-template-rows: 100px minmax(200px, 540px) 100px;
      grid-template-columns: repeat(2, minmax(100px, 1fr)) repeat(2, minmax(200px, 1fr));
      grid-row-gap: 8px;
      grid-column-gap: 16px;

      .adicionar {
        grid-area: adicionar;
        padding: 16px;
      }

      .lista {
        grid-area: lista;
        overflow-y: auto;
      }

      .detalhes {
        grid-area: detalhes;
        // max-height: 400px;
      }

      .editar {
        grid-area: editar;
      }

    }

    #modal {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(255,255,255,0.5);
      display: grid;
      grid-template-rows: 5em 1fr 6em;
      grid-template-columns: 8em 1fr 8em;

      .modalSlot {
        grid-column: 2;
        grid-row: 2;
      }
    }
  }

}
</style>

<script>
export default {
    props: {
        isLoading: {
            required: true,
            type: Boolean,
        }
    },
    computed: {
        getModalStatus() {
            return this.$nuxt.$store.state.toggleModal;
        }
    },
};
</script>
