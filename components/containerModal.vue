<template>
  <div class="container-modal">
    <modal-editar-veiculo v-if="controls.modalType == 'editar'" :info-veiculo="controls.modalContent"></modal-editar-veiculo>
    <modal-adicionar-veiculo v-else></modal-adicionar-veiculo>
  </div>
</template>

<style lang='less'>
</style>


<script>
import modalEditarVeiculo from "../templates/modal-editar-veiculo.vue";
import modalAdicionarVeiculo from "../templates/modal-adicionar-veiculo.vue";

export default {
    components: {
        modalEditarVeiculo,
        modalAdicionarVeiculo
    },
    data() {
        return {
            controls: {
                modalType: null,
            },
            content: {
                modalContent: null,
            }
        };
    },
    created() {
        const self = this;

        self.$nuxt.$on("exibirModalEditarVeiculo", (data) => {
            self.controls.modalType = "editar";
            self.controls.modalContent = data;
        });
    }
};
</script>
