<template>
  <layout-main :is-loading="loading">
    <header-logo slot="logo"></header-logo>
    <buscar-veiculo slot="search"></buscar-veiculo>
    <adicionar-veiculo slot="adicionar"></adicionar-veiculo>
    <container-lista slot="lista" :lista-veiculos="lista"></container-lista>
    <detalhes-veiculo slot="detalhes"></detalhes-veiculo>
    <editar-veiculo slot="editar"></editar-veiculo>
    <container-modal v-if="getModalStatus" slot="modal"></container-modal>
  </layout-main>
</template>

<script>
import axios from "axios";
import layoutMain from "../layouts/mainLayout.vue";
import headerLogo from "../components/headerLogo.vue";
import adicionarVeiculo from "../components/adicionarVeiculo.vue";
import containerLista from "../components/containerLista.vue";
import detalhesVeiculo from "../components/detalhesVeiculo.vue";
import editarVeiculo from "../components/editarVeiculo.vue";
import containerModal from "../components/containerModal.vue";
import buscarVeiculo from "../components/buscarVeiculo.vue";

export default {
    components: {
        layoutMain,
        containerLista,
        headerLogo,
        adicionarVeiculo,
        detalhesVeiculo,
        editarVeiculo,
        containerModal,
        buscarVeiculo,
    },
    data() {
        return {
            loading: true,
            lista: [],
        };
    },
    computed: {
        getModalStatus() {
            return this.$nuxt.$store.state.toggleModal;
        },

        getVehiclesFromStore() {
            return this.$nuxt.$store.state.listaVeiculos;
        }
    },
    watch: {
        getVehiclesFromStore(val) {
            this.lista = val;
        }
    },
    mounted() {
        const self = this;

        axios({
            url: "https://api.nimble.com.br/veiculoQL/v1/gql",
            method: "post",
            data: {
                query: `
                  query ListarTodosVeiculos {
                    buscaVeiculo(page: 1, limit: 6) {
                      total
                      edges {
                        node {
                          _id
                          marca
                          modelo
                          ano_fabricacao
                          ano_modelo
                          combustivel
                          cor
                          usado
                        }
                      }
                    }
                  }
                `
            }
        }).then((result) => {
            self.$nuxt.$store.commit("updateListaVeiculos", result.data.data.buscaVeiculo.edges);
            self.loading = false;
        });
    }
};
</script>
