<template>
  <div v-on-clickaway="closeModal" class="container-modal container">
    <modal-editar-veiculo v-if="modalType == 'editar'" :info-veiculo="modalContent"></modal-editar-veiculo>
    <modal-adicionar-veiculo v-else-if="modalType == 'adicionar'" :modelo="modalContent"></modal-adicionar-veiculo>
  </div>
</template>

<style lang='less'>
@import "~assets/main.less";

.container-modal {
    height: 100%;
    background: @gray-lt;
    box-shadow: 0px 0px 15px -5px @black;
    padding: 32px 24px;
}
</style>


<script>
import { directive as onClickaway } from "vue-clickaway";
import modalEditarVeiculo from "../templates/modal-editar-veiculo.vue";
import modalAdicionarVeiculo from "../templates/modal-adicionar-veiculo.vue";

export default {
    components: {
        modalEditarVeiculo,
        modalAdicionarVeiculo
    },
    directives: {
        onClickaway,
    },
    data() {
        return {
            modalType: null,
            modalContent: null,
        };
    },
    created() {
        const self = this;

        self.$nuxt.$on("exibirModalEditarVeiculo", (data) => {
            self.modalType = "editar";
            self.modalContent = data;
        });

        self.$nuxt.$on("exibirModalAdicionarVeiculo", (data) => {
            self.modalType = "adicionar";
            self.modalContent = data;
        });
    },
    methods: {
        closeModal() {
            this.modalType = null;
            this.modalContent = null;

            this.$nuxt.$store.commit("toggleModalStatus", false);

            console.log(this.$nuxt.$refs);
        },
    }
};
</script>
