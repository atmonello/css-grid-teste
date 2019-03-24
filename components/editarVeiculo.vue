<template>
  <div class="editar-veiculo container">
    <div class="row">
      <div class="col-10 col-lg-11">
        <button class="button-editar" :disabled="!getInfoVeiculo" @click="showEditModal(getInfoVeiculo)"><span class="editar-icone"></span><span>Editar</span></button>
      </div>
      <div class="col-2 col-lg-1">
        <div class="vendido"></div>
      </div>
    </div>
  </div>
</template>

<style lang='less'>
@import "~assets/main.less";

.editar-veiculo {
    padding-top: 1em;
    border-top: 1px solid @gray-md;
    .button-editar {
        background-color: @edit-vehicle;
        border: none;
        border-radius: 8px;
        box-shadow: @shadow;
        color: @gray-dk;
        padding: 10px 10px 5px;
        transition: filter 0.15s;

        span {
            vertical-align: text-top;
        }

        .editar-icone {
            background-color: @gray-dk;
            display: inline-block;
            height: 20px;
            mask-image: url("../assets/img/edit.svg");
            width: 20px;
            margin-right: 10px;
        }
    }
    .vendido {
        background-color: @blue-md;
        display: inline-block;
        width: 30px;
        height: 30px;
        mask-image: url("../assets/img/tag.svg");
        mask-repeat: no-repeat;
        mask-size: contain;
    }
}
</style>


<script>
export default {
    computed: {
        getInfoVeiculo() {
            return this.$nuxt.$store.state.veiculoSelecionado;
        }
    },
    methods: {
        showEditModal(info) {
            this.$nuxt.$store.commit("toggleModalStatus", true);
            setTimeout(() => {
                this.$nuxt.$emit("exibirModalEditarVeiculo", info);
            }, 10);
        },
    }
};
</script>
