<template>
  <div class="detalhes-veiculo">
    <p>Detalhes</p>
    <div v-if="getVeiculoSelecionadoInfo" class="container-detalhes container">
      <div class="row">
        <p class="modelo col-12">{{ getVeiculoSelecionadoInfo.modelo }}</p>
      </div>
      <div class="row">
        <div class="col-6">
          <label>Marca</label>
          <p class="marca">{{ getVeiculoSelecionadoInfo.marca }}</p>
        </div>
        <div class="col-6">
          <label>Ano</label>
          <p class="ano_modelo">{{ getVeiculoSelecionadoInfo.ano_modelo }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <label>Combustível</label>
          <p class="combustivel">{{ getVeiculoSelecionadoInfo.combustivel }}</p>
        </div>
        <div class="col-6">
          <label>Cor</label>
          <p class="cor">{{ getVeiculoSelecionadoInfo.cor }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <label for="descricao">Descrição</label>
          <p id="descricao">{{ getVeiculoSelecionadoInfo.descricao }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <label>Vendido</label>
          <p v-if="getVeiculoSelecionadoInfo.vendido" class="vendido">Sim</p>
          <p v-else class="vendido">Não</p>
        </div>
      </div>
    </div>
    <div v-else class="alert alert-primary">Selecione um veículo.</div>
    <!-- <code>{{ getVeiculoSelecionadoInfo }}</code> -->
  </div>
</template>

<style lang='less'>
@import "~assets/main.less";

.detalhes-veiculo {
    // height: 100%;
    // border-bottom: 1px solid @gray-md;
    .container-detalhes {
        padding: 1em;
        p {
            color: @blue-md-alt;

            &.modelo {
                font-size: @ftSizeNormal;
            }

            &:not(.modelo) {
                font-size: @ftSizeSmall;
            }
        }
    }
}

</style>


<script>
export default {
    data() {
        return {
        };
    },
    computed: {
        getVeiculoSelecionadoInfo() {
            return this.$nuxt.$store.state.veiculoSelecionado ? this.$nuxt.$store.state.veiculoSelecionado : null;
        }
    }
};
</script>
