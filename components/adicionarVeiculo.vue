<template>
  <div class="adicionar-veiculo container-fluid">
    <div class="row">
      <div class="col-10 col-sm-11">
        <input id="veiculo" v-model="modelo" type="text" placeholder="Adicionar um veículo...">
      </div>
      <div class="col-2 col-sm-1">
        <div class="add-icone" @click="showAddModal(modelo)"></div>
      </div>
    </div>
  </div>
</template>

<style lang='less'>
@import "~assets/main.less";

.adicionar-veiculo {
    border-bottom: 1px solid @gray-md;
    margin: 16px 0;
    // height: 100%;

    input {
      background-color: transparent;
      border: none;
      font-size: @ftSizeExtraLarge;
      width: 100%;

      &::placeholder {
        color: @gray-md;
      }
    }

    .add-icone {
      background-color: @add-vehicle;
      height: 40px;
      mask-image: url("../assets/img/add.svg");
      width: 40px;
      cursor: pointer;

      &:hover {
        filter: brightness(1.05);
      }
    }

}
</style>


<script>
export default {
    data() {
        return {
            modelo: null,
        };
    },
    methods: {
        showAddModal(modelo) {
            this.$nuxt.$store.commit("toggleModalStatus", true);
            setTimeout(() => {
                this.$nuxt.$emit("exibirModalAdicionarVeiculo", modelo);
            }, 10);
        },
    }
};
</script>
