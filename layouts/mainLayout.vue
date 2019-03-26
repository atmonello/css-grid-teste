<template>
  <div id="main-layout">
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
      <section id="content" class="container">
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
  background-color: @gray-lt;
  overflow-x: hidden;
  overflow-y: auto;

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .page {
    display: grid;
    grid-template-rows: 1fr minmax(auto, calc(100vh - 50px));
    grid-gap: 1em;
    grid-template-columns: 100vw;
    padding-bottom: 1em;

    #header {
      background-color: lightblue;
      display: grid;
      grid-template-columns: 30% 70%;
      grid-template-rows: 50px;
      grid-auto-flow: row;

      @media (min-width: @screen-sm-min) {
        grid-column: span 8;
        grid-template-columns: 50% 50%;
      }

      .logo {
        background-color: @white;
      }

      .search {
        background-color: @blue-lt;
        padding: 16px 8px;

        @media (min-width: @screen-sm-min) {
          padding: 12px 24px;
        }
      }
    }

    #content {
      display: grid;
      grid-template-areas: "adicionar" "lista" "detalhes" "editar";
      grid-template-rows: 1fr 2fr 3fr 1fr;
        // grid-template-columns: repeat(2, minmax(100px, 1fr)) repeat(2, minmax(200px, 1fr));

      @media (min-width: @screen-sm-min) {
        // padding: 3em;
        grid-column: span 8;
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas:
          "adicionar adicionar adicionar adicionar"
          "lista lista detalhes detalhes"
          "lista lista editar editar";
        grid-row-gap: 8px;
        grid-column-gap: 16px;
      }

      @media (min-width: @screen-md-min) {
        grid-template-rows: 1fr 10fr 1fr 1fr;
      }

      .adicionar {
        grid-area: adicionar;

        @media (min-width: @screen-sm-min) {
          padding: 16px;
        }
      }

      .lista {
        grid-area: lista;
        overflow-y: auto;
        padding-bottom: 1em;
      }

      .detalhes {
        grid-area: detalhes;
        overflow-y: scroll;
        overflow-x: hidden;
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
      grid-template-rows: 1fr minmax(auto, 2fr) 1fr;
      grid-template-columns: 2em 1fr 2em;

      @media (min-width: @screen-md-min) {
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: 1fr 4fr 1fr;

      }
      .modalSlot {
        grid-column: 2;
        grid-row: 2;
      }
    }

    @media (min-width: @screen-sm-min) {
      grid-template-columns: 50px repeat(6, minmax(auto, calc(100vw / 6))) 50px;
    }

    @media (min-width: @screen-md-min) {
      grid-template-columns: repeat(8, minmax(auto, calc(100vw / 8)));
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
